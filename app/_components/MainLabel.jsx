export default function MainLabel({children,additionalStyle}) {
    return (
        <span className={`font-semibold bg-gray-300 inline-block mx-2 text-sky-500 rounded-sm px-2 ${additionalStyle}`}>{children}</span>
    );
}