import Link from "next/link";
import { completeTask} from "../_services/actions";
import DoneIndicator from "./DoneIndicator";
import TaskOperation from "./TaskOperation";
import { HiOutlineTrash,HiOutlinePencil,HiMiniCheckCircle } from "react-icons/hi2";
import DeleteTaskOperation from "./DeleteTaskOperation";
import DateBox from "./DateBox";


export default function Task({ task,onDelete,rowNum,additionalStyles }) {
    const { id, task: taskTitle, notes, isCompleted, created_at } = task;
    
    const hasNotes = notes.trim().length > 0;
    const endOfSlice = hasNotes ? Math.round(notes.length / 3) + 1 :0; 
    const subOfNotes = hasNotes ? `${notes.trim().split(" ").slice(0, endOfSlice)?.join(" ")}...` : "-";

    return (
        <tr className={`text-main-text grid ${additionalStyles ?
            "grid-cols-5 sm:grid-cols-[1.5fr_2fr_1.5fr_1.5fr_1.5fr]": "grid-cols-[1.5fr_2fr_1fr_1fr]"} items-center text-sm font-semibold
            justify-between sm:justify-center py-3 text-center ${rowNum % 2 == 0 ? "bg-background" : "bg-table"}`}>
            <td>{taskTitle}</td>
            <td>{subOfNotes}</td>
            {additionalStyles ? <td> <DateBox date={created_at}/></td> : null}
            <td><DoneIndicator isCompleted={isCompleted} /></td>
            <td className={`flex items-center justify-center gap-3`}>
                {!isCompleted?<TaskOperation handleAction={completeTask} taskId={id}>
                    <HiMiniCheckCircle/>
                </TaskOperation>: null}
                <TaskOperation>
                    <Link href={`/dashboard/edit/${id}`}><HiOutlinePencil /></Link>
                </TaskOperation>
                <DeleteTaskOperation onDelete={() => onDelete(id)}>
                    <HiOutlineTrash />
                </DeleteTaskOperation>
            </td>
        </tr>
    );
} 