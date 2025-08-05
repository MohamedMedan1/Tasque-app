"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCurrentUser,removeUserAccount,signUpAuth, updateUserPassword } from "./apiAuth";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import getTask, { editTask, generateTask, getTodayTasks,removeAllTodayCompletedTasks,removeAllTodayTasks, removeTask,deleteAllUserTasks, deleteAllUserCompletedTasks } from "./apiTasks";
import {deleteUserAccount, getAccountID, getAccountPassword, updateAccountPassword } from "./apiAccount";
import { createServerSupabaseClient } from "../_Utils/supabaseServer";

const passRegex = /^[a-zA-Z0-9]{6,12}$/;
const emailRegex = /^[a-zA-Z]{2,}[0-9]{0,8}@gmail.com$/i;
const nameRegex =/^[a-zA-Z][^0-9]{4,}$/

async function checkUserAuth() {
    const user = await getCurrentUser();
    if (!user?.email) throw new Error("You should be login first!");
    return user?.email;
}
async function getUserUID() {
    const user = await getCurrentUser();
    if (!user?.email) throw new Error("You should be login first!");
    return user?.identities[0].user_id;
}

export async function generateAccount(dataForm) {
    const fullName = dataForm.get("fullName");
    const email = dataForm.get("email")?.trim();
    const password = dataForm.get("password")?.trim();
    const repeatedPassword = dataForm.get("confirm-password")?.trim();
    const isDifferent = password !== repeatedPassword; 
    
    if (!nameRegex.test(fullName)) throw new Error("Your fullName should be only chars not numbers!");
    if (!passRegex.test(password)) throw new Error("Your password should be more than or equal 6 characters and less than or equal 12 characters");

    if (!emailRegex.test(email)) throw new Error("Your email type is invalid please,enter an email like these example24@gmail.com");
    if (isDifferent) throw new Error("Your repeated-password is wrong, try again!");

    const accountData = { fullName, email, password };

    await signUpAuth(accountData);
    redirect("/login");
}

export async function login(dataForm) {
    const email = dataForm.get("email")?.trim();
    const password = dataForm.get("password")?.trim();
    if (!email || !password) throw new Error("Email and password required");
    
    if (!passRegex.test(password)) throw new Error("please enter a valid password between 6 and 12 chars");
    
    if (!emailRegex.test(email)) throw new Error("please enter a valid email");

    const supabase = createServerActionClient({cookies});
    const loginData = { email, password };

    const { error } = await supabase.auth.signInWithPassword(loginData);

    if (error) throw new Error("Password or Email is incorrect");

    redirect("/dashboard");
}

export async function logout() {
    const supabase = createServerSupabaseClient({cookies});
    await checkUserAuth();
    
    let { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message);

    redirect("/");
}

export async function createTask(dataForm) {
    const email  =  await checkUserAuth();
    const {id:userId} = await getAccountID(email);

    if(!userId) throw new Error("You should be login first!")
    
    const task = dataForm.get("task");
    const notes = dataForm.get("notes");
    
    if (!task) throw new Error("You should enter a task name");
        
    const taskData = {
        task,
        notes:notes?.split(" ").slice(0,100).join(" ") ?? "",
        userId:Number(userId)
    }

    await generateTask(taskData);
    revalidatePath("/dashboard");
}

export async function deleteTask(taskId) {
    if (!taskId) throw new Error("Task Not Found!");

    const email = await checkUserAuth();

    const {id:userId} = await getAccountID(email);

    const task = await getTask(taskId);
    
    if (Number(task.userId) !== Number(userId)) throw new Error("You can delete tour tasks only!");

    await removeTask(taskId);
    revalidatePath("/dashboard");
}

export async function completeTask(taskId) {
    if (!taskId) throw new Error("Task Not Found!");

    const email = await checkUserAuth();

    const {id:userId} = await getAccountID(email);

    const task = await getTask(taskId);

    if (Number(task.userId) !== Number(userId)) throw new Error("You can Update tour tasks only!");

    const updateData = {...task,isCompleted:true}

    await editTask(taskId,updateData);
    revalidatePath("/dashboard");
}

export async function updateTask(dataForm) {
    const email = await checkUserAuth();
    
    const taskId = Number(dataForm.get("taskId"));
    const taskTitle = dataForm.get("task")
    const notes = dataForm.get("notes")

    const updateData = { task:taskTitle, notes };

    const {userId} = await getTask(taskId);

    const {id} = await getAccountID(email);

    // check if userId field in this task row equal userId of session or not
    if (Number(userId) !== Number(id)) throw new Error("You can Update tour tasks only!");

    await editTask(taskId,updateData);
    revalidatePath(`/dashboard`);
    revalidatePath(`/dashboard/edit/${taskId}`);
    redirect("/dashboard");
}

export async function deleteAllTodayTasks() {
    const email = await checkUserAuth();

    const { id: userId } = await getAccountID(email);

    await removeAllTodayTasks(userId);
    revalidatePath("/dashboard")
}

export async function deleteAllTodayCompletedTasks() {
    const email  = await checkUserAuth()

    const { id: userId } = await getAccountID(email);

    await removeAllTodayCompletedTasks(userId);
    revalidatePath("/dashboard")
}

export async function updatePassword(dataForm) {
    const email = await checkUserAuth();
    
    const { id: userId } = await getAccountID(email);
    const {password:userPassword} = await getAccountPassword(userId);

    const oldPassword = dataForm.get("old-password")
    const newPassword = dataForm.get("new-password")
    const repeatedPassword = dataForm.get("confirm-password")

    if (!passRegex.test(oldPassword)) throw new Error("You might entered incorrect password due to we accept password that contains from 6 to 12 chars");
    
    if (!passRegex.test(newPassword)) throw new Error("please enter a valid password between 6 and 12 chars");

    if (newPassword !== repeatedPassword) throw new Error("Your repeated password does not match to new password");
    
    if (userPassword !== oldPassword) throw new Error("Your old password that you entered was wrong");
    
    const updatedPassword = { password: newPassword };

    await updateUserPassword(newPassword);
    await updateAccountPassword(userId, oldPassword, updatedPassword);
    revalidatePath("/dashboard/profile");
    redirect("/dashboard");
}

export async function deleteAccount(dataForm) {
    const email = await checkUserAuth();
    const UID = await getUserUID(); 

    const password = dataForm.get("password");

    const { id: userId } = await getAccountID(email);
    const {password:userPassword} = await getAccountPassword(userId);

    if (!passRegex.test(userPassword)) throw new Error("You might entered incorrect password due to we accept password that contains from 6 to 12 chars");
    
    if (userPassword !== password) throw new Error("Your old password that you entered was wrong");

    await deleteAllUserTasks(userId);
    await removeUserAccount(UID);
    await deleteUserAccount(userId);
    redirect("/");
}

export async function deleteAllTasks() {
    const email = await checkUserAuth();

    const { id: userId } = await getAccountID(email);

    await deleteAllUserTasks(userId);
    revalidatePath("/dashboard/tasks")
}

export async function deleteAllCompletedTasks() {
    const email  = await checkUserAuth()

    const { id: userId } = await getAccountID(email);

    await deleteAllUserCompletedTasks(userId);
    revalidatePath("/dashboard/tasks")
}
