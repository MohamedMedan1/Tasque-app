"use client"
import { HiMagnifyingGlass, HiCalendarDays } from "react-icons/hi2";
import Button from "./Button";
import { useCallback, useRef, useState } from "react";
import { useRouter,useSearchParams } from "next/navigation";


export default function SearchInput() {
    const inputRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const showDatePicker = useCallback(() => {
        if (isOpen) 
            inputRef.current.blur();
        else
            inputRef.current.showPicker();
        setIsOpen((cur) => !cur);
    },[isOpen])

    const selectDate = useCallback((date) => {
        const params = new URLSearchParams(searchParams);
        params.set("searchDate", date);
        
        router.replace(`/dashboard/tasks?${params.toString()}`, { scroll: false });
    },[router,searchParams])

    const removeSearchDateParam = useCallback(() => {
        const params = new URLSearchParams(searchParams);
        params.delete("searchDate");

        router.replace(`/dashboard/tasks?${params.toString()}`, { scroll: false });
    },[router,searchParams])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] items-center gap-5">
            <div className="relative">
                <input type="date" ref={inputRef} placeholder="search by date" required onChange={(e)=> selectDate(e.target.value)}    
                    className="text-main-text bg-table rounded-md shadow-lg px-10 py-3 w-full outline-none placeholder:text-sm placeholder:font-semibold" />
                
                <HiMagnifyingGlass size={20} className="text-primary absolute top-[50%] translate-y-[-50%] left-3" />
                
                <HiCalendarDays size={20} className="cursor-pointer text-primary absolute top-[50%] translate-y-[-50%] right-6 rounded-md"
                    onClick={showDatePicker} />
                </div>
                <Button additionalStyles="!py-3 rounded-lg hover:!bg-table" onRemove={removeSearchDateParam}>
                    All Tasks
                </Button>
        </div>
    );
}