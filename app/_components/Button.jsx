export default function Button({children,additionalStyles,disabled,onRemove}) {
    return (
        <button className={`outline-none border-none px-4 py-3 font-bold bg-primary text-background
        hover:bg-background hover:text-primary transition-all shadow-md rounded-lg text-md ${additionalStyles}`} disabled={disabled} onClick={onRemove}>
            {children}
        </button>
    );
}