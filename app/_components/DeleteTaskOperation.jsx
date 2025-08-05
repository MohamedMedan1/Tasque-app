"use client"
import toast from "react-hot-toast";

export default function DeleteTaskOperation({ children,onDelete}) {
    function handleDelete() {
        onDelete();
        toast.success("Task deleted successfully");
    }
    return (
        <button
            onClick={handleDelete}
            className="bg-primary p-1 rounded-md cursor-pointer text-background hover:scale-110 transition-all disabled:bg-gray-300">
            {children}
        </button>
    );
} 