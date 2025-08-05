import { updateTask } from "../_services/actions";
import TaskForm from "./TaskForm";

export default function EditTaskForm({ task }) {
    return <TaskForm task={task} action={updateTask}/>
}