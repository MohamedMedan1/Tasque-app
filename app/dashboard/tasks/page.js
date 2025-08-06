import Image from "next/image";
import emptyImage from "@/public/Empty-amico.png";
import Filter from "@/app/_components/Filter";
import Message from "@/app/_components/Message";
import SearchInput from "@/app/_components/SearchInput";
import Sort from "@/app/_components/Sort";
import TasksTable from "@/app/_components/TasksTable";
import { getAccountID } from "@/app/_services/apiAccount";
import { getCurrentUser } from "@/app/_services/apiAuth";
import { getTasks } from "@/app/_services/apiTasks";
import { deleteAllCompletedTasks, deleteAllTasks } from "@/app/_services/actions";

export const metadata = {
    title: "Tasks",
    description: "View, manage, and organize your tasks efficiently. Stay productive with a clean, responsive interface built using Next.js."
};

export const runtime = 'nodejs';

export default async function Page({ searchParams }) {
    const { taskStatus, sortBy,searchDate } = searchParams;
    const { email } = await getCurrentUser();
    const { id: userId } = await getAccountID(email);
    const tasks = await getTasks(userId, taskStatus, sortBy, searchDate);

    return (
        <div className="w-[335px] sm:w-full mx-auto my-10 sm:m-10">
            <h3 className="radial-bg text-3xl mb-10 font-semibold mt-5 text-center sm:text-start">All Account Tasks</h3>
            <SearchInput/>
            <div className="w-full my-10">
                <div className="flex flex-col gap-5 sm:flex-row items-center sm:gap-0 sm:justify-between mb-5">
                    <Filter/>
                    <Sort/>
                </div>
                {tasks.length > 0 
                    ? <TasksTable tasks={tasks} deleteAllAction={deleteAllTasks} deleteAllCompleted={deleteAllCompletedTasks}
                        taskStatus={taskStatus} additionalStyles="min-h-[385px] overflow-auto max-w-[334px] sm:max-w-full" />
                    : <Message>
                        <p className="text-3xl font-semibold text-table">There no tasks yet</p>
                        <Image src={emptyImage} alt="iEmpty-llustration-image" quality={90} width={300} height={300}/>       
                    </Message>}
            </div>
        </div>
        );
}