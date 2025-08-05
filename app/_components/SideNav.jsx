"use client"
import { usePathname } from "next/navigation";
import { useExpandedNav } from "@/app/_contexts/ExpandNavContext";
import CollpasedSideNav from "./CollpasedSideNav";
import ExpandedSideNav from "./ExpandedSideNav";

export default function SideNav() {
    const pathName = usePathname();
    const { isExpanded } = useExpandedNav();
    
    return (
        <div className={`hidden h-screen sm:min-h-[100dvh] main-radial-bg transition-all duration-300 ${isExpanded ? "px-8" : "px-4"}
            py-10 sm:grid grid-rows-[2.5rem_1fr] rounded-r-lg shadow-xl sticky top-0`}>
            <h3 className={`text-3xl uppercase font-bold t-shadow text-gray-100 ${isExpanded?"text-start":"text-center"}`}>{isExpanded? "Tasque" :"T"}</h3>
            {isExpanded ? <ExpandedSideNav pathName={pathName}/> : <CollpasedSideNav pathName={pathName}/>}
        </div>
    );
}
