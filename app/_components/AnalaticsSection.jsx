import Card from "@/app/_components/Card";
import { HiMiniXCircle,HiMiniCheckCircle,HiMiniChartBar } from "react-icons/hi2";

export default function AnalaticsSection({ tasks }) {
    const numOfCompletedTasks = tasks.filter(task => task.isCompleted );
    const numOfNonCompletedTasks = tasks.filter(task => !task.isCompleted);
    const productivity = numOfCompletedTasks.length ?Math.round((numOfCompletedTasks.length / tasks.length) * 100):0;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10 my-10 pb-10 sm:pb-0 sm:my-0">
            <Card additionalStyles="flex items-center gap-5 shadow-md">
                <HiMiniCheckCircle size={50} className="text-green-500"/>
                <div>
                    <p className="text-main-text text-3xl font-bold">
                        {numOfCompletedTasks.length} / 
                        <span className="text-xl"> {tasks?.length}</span>
                    </p>
                    <span className="text-sm uppercase text-main-text">Completed Tasks</span>
                </div>
            </Card>
            <Card additionalStyles="flex items-center gap-5 shadow-md">
                <HiMiniXCircle size={50} className="text-red-500"/>
                <div>
                    <p className="text-main-text text-3xl font-bold">
                        {numOfNonCompletedTasks.length} /
                        <span className="text-xl"> {tasks?.length}</span>
                    </p>
                    <span className="text-sm uppercase text-main-text">Non Completed Tasks</span>
                </div>
            </Card>
            <Card additionalStyles="flex items-center gap-5 shadow-md">
                <HiMiniChartBar size={50} className="text-primary"/>
                <div>
                    <p className="text-main-text text-3xl font-bold">{productivity}%</p>
                    <span className="text-sm uppercase text-main-text">Productivity</span>
                </div>
            </Card>
        </div>
    );
}