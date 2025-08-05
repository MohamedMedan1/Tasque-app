
export default function MainTitle({children,additionalStyles}) {
    return (
        <p className={`relative main-title text-2xl sm:text-3xl uppercase font-semibold
            border px-3 py-5 sm:px-5 sm:py-5 text-center max-w-[250px] sm:max-w-[350px] mx-auto mb-14 sm:mb-28 rounded-md ${additionalStyles}`}>
            {children}
        </p>
    );
} 