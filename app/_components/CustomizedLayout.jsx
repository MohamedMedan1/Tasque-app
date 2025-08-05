"use client"
import { useExpandedNav } from "@/app/_contexts/ExpandNavContext";

export default function CustomizedLayout({ children }) {
    const { isExpanded} = useExpandedNav();
    return (
        <div className={`grid grid-rows-[6rem_1fr] ${isExpanded ? "sm:grid-cols-[18rem_1fr]" : "sm:grid-cols-[5rem_1fr]"}
            sm:grid-rows-1 h-full sm:w-full relative z-10 overflow-x-hidden`}>
            {children}
        </div>
    );
}