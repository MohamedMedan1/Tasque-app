import EditTaskForm from "@/app/_components/EditTaskForm";
import GoBackButton from "@/app/_components/GoBackButton";
import getTask from "@/app/_services/apiTasks";

export const metadata = {
    title: "Edit Task",
    description: "Update your task details, including the title, description, and deadline. Keep your productivity on track with quick edits and seamless task management."
};

export const runtime = 'nodejs';

export default async function Page({ params }) {
    const { taskId } = params;
    const task = await getTask(taskId);

    return (
        <div className="relative px-10 py-20">
            <p className="text-3xl font-semibold text-radial-color">Edit Task Number #{taskId}</p>
            <div className="absolute top-3 left-3">
                <GoBackButton/>
            </div>
            <div className="mt-20">
                <EditTaskForm task={task}/>
            </div>
        </div>
    );
}