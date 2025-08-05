import Link from "next/link";
import { HiArchiveBox, HiHome, HiOutlineCog6Tooth, HiUser} from "react-icons/hi2";


export default function DashboardHeader(){
    return (
        <ul className="absolute top-24 left-[50%] translate-x-[-50%] flex flex-col gap-10 w-full py-10 px-5 sm:hidden bg-background rounded-b-md z-20 shadow-lg">
            <li>
                <Link href="/dashboard" className="text-main-text flex items-center gap-2 border-b pb-5 hover:ml-5 hover:text-primary transition-all font-semibold">
                    <HiHome/>
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/tasks" className="text-main-text flex items-center gap-2 border-b pb-5 hover:ml-5 hover:text-primary transition-all font-semibold">
                    <HiArchiveBox/>
                    <span>Tasks</span>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/profile" className="text-main-text flex items-center gap-2 border-b pb-5 hover:ml-5 hover:text-primary transition-all font-semibold">
                    <HiUser/>
                    <span>Profile</span>
                </Link>
            </li>
            <li>
                <Link href="/dashboard/settings" className="text-main-text flex items-center gap-2 border-b pb-5 hover:ml-5 hover:text-primary transition-all font-semibold">
                    <HiOutlineCog6Tooth/>
                    <span>Settings</span>
                </Link>
            </li>
        </ul>
    );
}