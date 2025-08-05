export default function Spinner() {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <p className="spinner w-[100px] h-[100px] border-[12px] border-r-transparent rounded-full border-primary p-2"></p>
        </div>
    );
}
