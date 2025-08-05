import { HiArchiveBox, HiHome, HiOutlineCog6Tooth, HiUser } from "react-icons/hi2";
import NavItem from "./NavItem";
import LogoutButton from "./LogoutButton";

export default function CollpasedSideNav({pathName}) {
    return (
        <nav className="mt-10">
            <ul className="flex flex-col gap-6 h-full">
                <NavItem isCollapsed={true} href="/dashboard" isActive={"/dashboard" === pathName}><HiHome size={18} /></NavItem>
                <NavItem isCollapsed={true} href="/dashboard/tasks" isActive={"/dashboard/tasks" === pathName}><HiArchiveBox size={18} /></NavItem>
                <NavItem isCollapsed={true} href="/dashboard/profile" isActive={"/dashboard/profile" === pathName}><HiUser size={18} /></NavItem>
                <NavItem isCollapsed={true} href="/dashboard/settings" isActive={"/dashboard/settings" === pathName}><HiOutlineCog6Tooth size={18} /></NavItem>
                <LogoutButton isCollapsed={true} />
            </ul>
        </nav>
    );
}