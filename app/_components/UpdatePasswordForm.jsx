"use client"
import toast from "react-hot-toast";
import { updatePassword } from "../_services/actions";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import {HiMiniCheck,HiMiniLockClosed,HiMiniKey} from "react-icons/hi2";
import { useCallback } from "react";

export default function UpdatePasswordForm() {
    
    const handleUpdatePassword = useCallback( async (dataForm) => {
        await updatePassword(dataForm);
        toast.success("Password updated successfully");
    },[])

    return (
        <form action={handleUpdatePassword} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <label htmlFor="oldPass" className="text-main-text text-sm font-semibold">Old password</label>
                <PasswordInput inputName="old-password" id ="oldPass">
                    <HiMiniKey  size={18}
                    className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"/>
                </PasswordInput>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="newPass" className="text-main-text text-sm font-semibold">New password</label>
                <PasswordInput inputName='new-password' id="newPass">
                    <HiMiniLockClosed  size={18}
                    className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"/>
                </PasswordInput>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="confirmPass"  className="text-main-text text-sm font-semibold">Confirm password</label>
                <PasswordInput inputName='confirm-password' id="confirmPass">
                    <HiMiniCheck size={18}
                    className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"/>
                </PasswordInput>
            </div>
            <SubmitButton additionalStyles="w-[300px] bg-primary ml-auto hover:bg-input hover:!text-primary transition-all disabled:bg-input disabled:!text-primary">
                Update Password
            </SubmitButton>
        </form>
    );
}