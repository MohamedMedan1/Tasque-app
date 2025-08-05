import Link from "next/link";
import Button from "./Button";

export default function Nav() {
    return (
        <nav>
            <ul className="hidden sm:flex sm:items-center sm:gap-10">
                <li><Button additionalStyles="w-[200px]">
                    <Link href="createAccount">Create account</Link>    
                </Button></li>
                <li><Button additionalStyles="!bg-background hover:!bg-primary hover:!text-background text-primary w-[150px] ">
                    <Link href="login">Login</Link>
                </Button></li>
            </ul>
        </nav>
    )
}