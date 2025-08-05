import Link from "next/link";

export default function NavItem({ children, isActive, additionalStyle, href, isCollapsed }) {
    return (
        <li className={` ${isCollapsed?"text-center mx-auto px-3":"px-4"} py-3 rounded-md ${isActive && "bg-background text-primary backdrop-saturate-150 backdrop-blur"}
                hover:shadow-md transition-all hover:text-primary hover:bg-background hover:backdrop-blur-md hover:backdrop-saturate-150 ${additionalStyle}`}>
            <Link href={`${href}`} className="flex items-center gap-4">{children}</Link>
        </li>
    );
}