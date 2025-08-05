"use client"
import { useDarkMode } from "../_contexts/DarkModeContext";

export default function DarkModeToggler() {
    const { isDarkMode, setIsDarkMode } = useDarkMode();

    return (
        <p className="w-[65px] h-[27px] rounded-full shadow-md bg-background relative ">
            <span onClick={()=> setIsDarkMode(cur => !cur)} className={`cursor-pointer absolute top-[50%] translate-y-[-50%] hover:bg-primary transition-all
                inline-block w-[23px] h-[23px] rounded-full ${isDarkMode?"right-0 bg-green-500":"left-0 bg-red-500"}`}></span>
        </p>
    );
}