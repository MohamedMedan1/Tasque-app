export default function Message({children}) {
    return (
        <div className="main-radial-bg shadow-lg rounded-lg flex flex-col items-center justify-center py-4">
            {children}
        </div>
    );
}