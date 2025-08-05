export default function ProcessTracker({children,isDone}) {
    return (
        <div className={`rounded-full w-[35px] h-[35px] flex justify-center items-center font-bold text-lg
            ${isDone ? 'bg-primary text-gray-200':'bg-gray-200 text-primary'}`}>
            {children}
        </div>
    );
}