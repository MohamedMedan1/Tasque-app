import Image from "next/image";
import emptyImage from "@/public/Empty-amico.png";
import CreateTaskForm from "../_components/CreateTaskForm";
import Filter from "../_components/Filter";
import Message from "../_components/Message";
import Sort from "../_components/Sort";
import TasksTable from "../_components/TasksTable";
import { getAccountID } from "../_services/apiAccount";
import { getCurrentUser } from "../_services/apiAuth";
import { getTodayTasks } from "../_services/apiTasks";
import AnalaticsSection from "../_components/AnalaticsSection";
import { deleteAllTodayCompletedTasks, deleteAllTodayTasks } from "../_services/actions";

export const metadata = {
    title: "Dashboard",
    description: "View and manage your tasks in one place with your personalized dashboard. Built with Next.js for speed, clarity, and seamless productivity."
};

export default async function Page({searchParams}) {
    const user = await getCurrentUser();
    const { id: userId } = await getAccountID(user?.email);
    const { taskStatus, sortBy } = searchParams;
    const tasks = await getTodayTasks(userId, taskStatus, sortBy);
    const allTasks = await getTodayTasks(userId);
    const userFirstName = (user?.user_metadata?.fullName).split(" ").at(0) || "user";
        
    return (
        <div className="p-10 grid grid-rows-[1fr_auto] max-h-[100vh]">
            <h2 className="text-radial-color text-3xl font-semibold mt-5 text-center sm:text-start">Welcome, {userFirstName}</h2>
            <main className={`grid grid-cols-1 ${tasks.length > 0 ? "lg:grid-cols-[1fr_2fr]":"lg:grid-cols-[2fr_1fr]" } gap-7 xl:gap-10 mt-14 grid-rows-[1fr_auto]`}>
                <CreateTaskForm />
                {tasks.length > 0 ?
                <div className="flex flex-col gap-5 w-full mb-5 lg:mb-0">
                    <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between items-center">
                        <Filter />
                        <Sort />
                    </div>
                    <TasksTable tasks={tasks} deleteAllAction={deleteAllTodayTasks} deleteAllCompleted={deleteAllTodayCompletedTasks} taskStatus={taskStatus} />
                </div> :
                <Message>
                    <p className="text-3xl font-semibold text-table">There no tasks yet</p>
                        <Image src={emptyImage} alt="iEmpty-llustration-image" quality={90} width={300} height={300}/>   
                </Message>}
            </main>
            <AnalaticsSection tasks={allTasks}/>
        </div>
    );
}