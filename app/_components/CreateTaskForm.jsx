import { createTask } from "../_services/actions";
import TaskForm from "./TaskForm";

export default function CreateTaskForm() {
    return <TaskForm action={createTask}/>
}