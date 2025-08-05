export default function DoneIndicator({isCompleted}) {
    return (
        <div className={`${isCompleted ? "bg-greenLabel text-greenText" : "bg-redLabel text-redText"} rounded-full p-1 w-[80px] mx-auto text-xs`}>
            {isCompleted ? "Done" : "Pending"}
        </div>
    );
}