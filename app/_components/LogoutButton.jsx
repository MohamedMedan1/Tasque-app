"use client"
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { logout } from "../_services/actions";
import toast from "react-hot-toast";
import { useCallback, useTransition } from "react";
import MiniSpinner from "./MiniSpinner";

export default function LogoutButton({isCollapsed}) {
    const [isPending, startTransition] = useTransition();

    const handleLogout = useCallback(() => {
        startTransition(logout);
        toast.success("logout successfully");
    }, [])
    
    return (
        <form action={handleLogout} className="mt-auto">
            <button disabled={isPending} className={`flex items-center gap-4 rounded-lg ${isCollapsed?"px-3":"px-5"} py-3 mt-auto mx-auto hover:shadow-md transition-all hover:text-primary
                hover:bg-background hover:backdrop-blur-md hover:backdrop-saturate-150 disabled:bg-gray-300 disabled:text-primary`}>
                {isPending ? <MiniSpinner /> : isCollapsed ?<HiMiniArrowLeftStartOnRectangle size={24} /> 
                    :
                    <>
                    <HiMiniArrowLeftStartOnRectangle size={24} />
                        <span className="font-semibold uppercase">Logout</span>
                    </>}
            </button>
        </form>
    );
}