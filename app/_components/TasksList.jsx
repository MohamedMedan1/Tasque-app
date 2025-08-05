"use client"
import { useCallback, useOptimistic } from "react";
import Task from "./Task";
import { deleteTask } from "../_services/actions";

export default function TasksList({ tasks,additionalStyles }) {
    const [optimisticTasks, optimisticDelete] = useOptimistic(tasks, (curTask, taskId) => {
        return curTask.filter((task) => task.id !== taskId)
    })

    const handleDeleteAction = useCallback(async (taskId) => {
        optimisticDelete(taskId);
        await deleteTask(taskId);
    }, [optimisticDelete]);

    return (
        <>
            {optimisticTasks?.map((task, i) => <Task key={task.id} task={task} additionalStyles={additionalStyles} onDelete={handleDeleteAction} rowNum={i + 1} />)}
        </>
    );
}