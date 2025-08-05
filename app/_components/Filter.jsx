"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Filter() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const activeFilter = searchParams.get("taskStatus") || "all";

    const handleFilter = useCallback((filterValue) => {
        const params = new URLSearchParams(searchParams);
        params.set("taskStatus",filterValue)
        
        router.replace(`${pathName}?${params.toString()}`,{ scroll: false })
    },[pathName,router,searchParams])

    return (
        <ul className="bg-table px-1 h-[35px] flex items-center gap-2 w-fit rounded-md shadow-lg">
            <li onClick={()=> handleFilter("all")} 
                className={`p-1.5 rounded-md text-xs hover:bg-primary hover:text-main-text cursor-pointer transition-all
                    ${activeFilter === "all" ? "bg-primary" : "text-main-text"}`}>All</li>
            <li onClick={()=> handleFilter("Completed")}
                    className={`p-1.5 rounded-md text-xs hover:bg-primary hover:text-main-text cursor-pointer transition-all
                    ${activeFilter === "Completed" ? "bg-primary" : "text-main-text"}`}>Completed</li>
            <li onClick={()=> handleFilter("Not-Completed")}
                    className={`p-1.5 rounded-md text-xs hover:bg-primary hover:text-main-text cursor-pointer transition-all
                    ${activeFilter === "Not-Completed" ? "bg-primary" : "text-main-text"}`}>Not Completed</li>
        </ul>
    );

}