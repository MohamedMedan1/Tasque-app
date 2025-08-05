import { HiArchiveBox, HiHome, HiOutlineCog6Tooth, HiUser } from "react-icons/hi2";
import LogoutButton from "./LogoutButton";
import NavItem from "./NavItem";

export default function ExpandedSideNav({pathName}) {
    return (
        <nav className="mt-10">
            <ul className="flex flex-col gap-6 h-full">
                <NavItem href="/dashboard" isActive={"/dashboard" === pathName}><HiHome size={18} /><span className="font-semibold">Home</span></NavItem>
                <NavItem href="/dashboard/tasks" isActive={"/dashboard/tasks" === pathName}><HiArchiveBox size={18} /><span className="font-semibold">Tasks</span></NavItem>
                <NavItem href="/dashboard/profile" isActive={"/dashboard/profile" === pathName}><HiUser size={18} /><span className="font-semibold">Profile</span></NavItem>
                <NavItem href="/dashboard/settings" isActive={"/dashboard/settings" === pathName}><HiOutlineCog6Tooth size={18} /><span className="font-semibold">Settings</span></NavItem>
                <LogoutButton/>
            </ul>
        </nav>
    );
}