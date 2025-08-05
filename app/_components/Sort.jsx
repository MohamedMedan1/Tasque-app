"use client"
import {usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Sort() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleSelect = useCallback((selectOption) => {
        const params = new URLSearchParams(searchParams);
        params.set("sortBy", selectOption);
        
        router.replace(`${pathName}?${params.toString()}`, { scroll: false })
    }, [router, searchParams,pathName]);

    return (
        <select className="bg-table text-main-text px-2 h-[35px] w-fit text-xs outline-primary flex items-center gap-2 rounded-md shadow-lg"
            onChange ={(e) => handleSelect(e.target.value)}>
            <option value="startDate-desc" className="text-xs ">Sort by date (recent first)</option>
            <option value="startDate-asc" className="text-xs ">Sort by date (earlier first)</option>
        </select>
    );
}