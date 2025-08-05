import ClearButton from "./ClearButton";
import TasksList from "./TasksList";

export default function TasksTable({ tasks, taskStatus,additionalStyles,deleteAllAction,deleteAllCompleted }) {
    const showDeleteCompletedTask = taskStatus !== "Not-Completed";
    const anyCompletedTasks = tasks?.some(task => task.isCompleted) || false;
    
    return (
        <div className={`sm:w-full ${additionalStyles} overflow-x-auto min-w-[200px]`}>
            <table className="shadow-sm rounded-xl bg-table w-full min-w-[700px]">
                <thead className="w-full">
                    <tr className={`grid items-center justify-center main-radial-bg py-3 rounded-t-md 
                        ${additionalStyles ? "grid-cols-5 sm:grid-cols-[1.5fr_2fr_1.5fr_1.5fr_1.5fr]" : "grid-cols-[1.5fr_2fr_1fr_1fr]"}`}>
                        <th>Task</th>
                        <th>Note</th>
                        {additionalStyles ? <th>Date</th>:null}
                        <th>isCompleted</th>
                        <th>operations</th>
                    </tr>
                </thead>
                <tbody className={`block max-h-[300px] w-full overflow-y-auto`}>
                    <TasksList tasks={tasks} additionalStyles={additionalStyles} />
                </tbody>
                {tasks.length > 0 ? <tfoot>
                    <tr className="main-radial-bg px-3 py-2 rounded-b-md flex items-center gap-5">
                        {taskStatus !== "Completed"?<td><ClearButton actionHandler={deleteAllAction}>Clear All</ClearButton></td>:null}
                        {anyCompletedTasks && showDeleteCompletedTask ?
                            <td><ClearButton actionHandler={deleteAllCompleted}>Clear All Completed Tasks</ClearButton></td> : null}
                    </tr>
                </tfoot>:null}
            </table>
        </div>
    );
}