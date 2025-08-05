export default function Card({ children,additionalStyles}) {
    return <div className={`bg-table rounded-md p-5 lg:p-7 ${additionalStyles}`}>{children}</div>
}