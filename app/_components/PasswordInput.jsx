"use client"
import { useState } from "react";
import { HiMiniEye,HiMiniEyeSlash  } from "react-icons/hi2";

export default function PasswordInput({ children, inputName, id }) {
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const Icon = showPassword ? HiMiniEyeSlash : HiMiniEye;

    return (
        <div className="relative">
            <input
                onChange={(e)=>setInputValue(e.target.value)}
                type={showPassword? "text":"password"}
                placeholder={`enter your ${inputName=== "confirm-password" ? "password again":inputName}`}
                required
                id={id}
                name={inputName}
                className="bg-input border-none outline-none px-9 py-2 rounded-md shadow-md
                    text-main-text w-full placeholder:text-sm placeholder:font-medium backdrop-saturate-150 backdrop-blur"/>
            {children}
            {inputValue ? <Icon size={18} onClick={() => setShowPassword((curState) => !curState)}
                className="absolute top-[50%] right-3 translate-y-[-50%] text-primary cursor-pointer" />:null}
        </div>
        
    );
}