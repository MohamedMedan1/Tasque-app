"use client"
import { useCallback, useTransition } from "react";

export default function ClearButton({ children, actionHandler }) {
    const [isPending, startTransition] = useTransition();
    
    const handleActionHandler = useCallback(() => startTransition(actionHandler),[actionHandler]);
    
    return (
        <button onClick={handleActionHandler}
            disabled={isPending}
            className="text-xs bg-background text-primary rounded-full px-5 py-1 font-semibold min-w-[100px] disabled:bg-gray-300
                hover:text-table hover:bg-primary transition-all">
            {isPending? "loading...":children}
        </button>
    );
}