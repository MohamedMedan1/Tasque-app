"use client"

import { useCallback, useTransition } from "react";
import MiniSpinner from "./MiniSpinner";

export default function TaskOperation({ children, handleAction=()=>{},taskId}) {
    const [isPending, startTransition] = useTransition();
    
    const reWriteHandleAction = useCallback(() => {
        startTransition(() => handleAction(taskId))
    }, [handleAction,taskId]);

    return (
        <button
            onClick={reWriteHandleAction}
            disabled={isPending}
            className="bg-primary p-1 rounded-md cursor-pointer text-background hover:scale-110 transition-all disabled:bg-gray-300">
            {isPending ? <MiniSpinner/> :children}
        </button>
    );
}