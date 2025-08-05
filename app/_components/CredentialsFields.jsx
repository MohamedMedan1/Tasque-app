import { HiLockClosed, HiMiniUser } from "react-icons/hi2";
import PasswordInput from "./PasswordInput";

export default function CredentialsFields() {
    return (
        <>
            <div className="flex flex-col gap-3 mb-5">
                <label
                htmlFor="user-email"
                className="text-lg text-main-text font-semibold">Email
                </label>
                <div className="relative">
                    <input type="email" placeholder="enter your email"
                    required id="user-email" name="email"
                    className="bg-input border-none outline-none px-9 py-2 rounded-md shadow-md
                    text-main-text w-full placeholder:text-sm placeholder:font-medium backdrop-saturate-150 backdrop-blur"/>
                    <HiMiniUser size={18} className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"/>
                </div>
            </div>
            <div className="flex flex-col gap-3 mb-10">
                <label
                htmlFor="user-password"
                className="text-lg text-main-text font-semibold">Password
                </label>
                <PasswordInput id="user-password" inputName="password">
                    <HiLockClosed size={18} className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"/>
                </PasswordInput>
            </div>
        </>
    );
}