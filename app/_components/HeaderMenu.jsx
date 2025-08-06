import Link from "next/link";

export default function HeaderMenu() {
    return (
        <ul className="absolute left-[50%] translate-x-[-50%] top-20 w-full h-[200px] bg-background text-main-text p-5 border-table rounded-md">
            <li className="border-b my-5 pb-5 hover:ml-5 transition-all font-semibold hover:text-primary">
                <Link href="/createAccount">Create Account</Link>
            </li>
            <li className="border-b my-5 pb-5 hover:ml-5 transition-all font-semibold hover:text-primary">
                <Link href="/login">Login</Link>
            </li>
        </ul>
    );
}