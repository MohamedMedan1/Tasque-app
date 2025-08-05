"use client"
import { HiLockClosed } from "react-icons/hi2";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import { deleteAccount } from "../_services/actions";
import { useCallback } from "react";
import toast from "react-hot-toast";

export default function DeleteAccountSection() {
    
    const handleDeleteAccount = useCallback(async (dataForm) => {
        await deleteAccount(dataForm);
        toast.success("Account deleted successfully");
    }, []);

    return (
        <form action={handleDeleteAccount} className="flex flex-col gap-6 " >
            <div className="flex flex-col gap-3">
                <label
                htmlFor="user-password"
                className="text-lg text-main-text font-semibold">Password
                </label>
                <PasswordInput id="user-password" inputName="password">
                    <HiLockClosed size={18} className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"/>
                </PasswordInput>
            </div>
            <SubmitButton additionalStyles="w-[250px] !ml-auto hover:bg-input hover:!text-primary text-main-text
                transition-all disabled:bg-input disabled:!text-primary bg-red-900">
                Delete Account
            </SubmitButton>
        </form>
    );
}