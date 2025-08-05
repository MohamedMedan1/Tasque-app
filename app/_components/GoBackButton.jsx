"use client"
import { useRouter } from "next/navigation";
import { HiMiniArrowLongLeft  } from "react-icons/hi2";

export default function GoBackButton() {
    const router = useRouter();
    return (
        <p
            onClick={() => router.back()}
            className="cursor-pointer underline absolute top-5 left-5 text-accent font-bold hover:scale-110 transition-all">
            <HiMiniArrowLongLeft size={30} />
        </p>
    );
}