"use client"
import { useCallback, useRef } from "react";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import { HiClipboardDocumentList, HiPencilSquare } from "react-icons/hi2";


export default function TaskForm({task,action}) {
    const { id: taskId,task:taskName, notes } = {...task} || {};
    const formRef = useRef();
    
    const handleTaskFormAction = useCallback( async (dataForm) => {
        await action(dataForm);
        toast.success(task?"Task updated successfully":"Task created successfully");
        if (!task) formRef.current.reset();
    },[task,action])

    return (
        <form ref={formRef} action={handleTaskFormAction} className="main-radial-bg p-7 sm:p-10 rounded-lg shadow-xl flex flex-col gap-8 h-[444px]">
            <div className="flex flex-col gap-3">
                <label htmlFor="task" className="font-semibold text-lg">Task</label>
                <div className="relative w-[100%]">
                    <HiClipboardDocumentList className="absolute top-[50%] translate-y-[-50%] left-4 text-primary"/>
                    <input type="text" id="task" name="task" required defaultValue={taskName || ""}
                    placeholder="enter your task"
                    className="w-full py-3 px-10 border-none outline-none text-main-text text-sm font-semibold
                    rounded-md bg-background shadow-lg placeholder:text-sm placeholder:font-semibold" />
                </div>
            </div>
            {task? <input type="hidden" name="taskId" value={taskId}/>:null}
            <div className="flex flex-col gap-3">
                <label htmlFor="notes" className="font-semibold text-lg">Notes</label>
                <div className="relative w-[100%]">
                    <HiPencilSquare size={20} className="absolute top-4 left-4 text-primary"/>
                    <textarea name="notes" id="notes" placeholder="enter your notes..." defaultValue={notes || ""}
                    className="w-full border-none outline-none rounded-md bg-background shadow-lg py-4 px-10
                    h-[120px] text-main-text text-sm font-semibold placeholder:text-sm placeholder:font-semibold"/>
                </div>
            </div>
            <SubmitButton additionalStyles="min-w-[200px] ml-auto bg-primary border-none hover:bg-background hover:!text-primary disabled:text-primary disabled:bg-gray-400">
                {task?"Update":"Create"}
            </SubmitButton>
        </form>
        
    );
    
}