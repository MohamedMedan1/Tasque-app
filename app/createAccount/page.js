import Link from "next/link";
import Image from "next/image";
import workImage from "@/public/Work time-amico.png"
import CreateAccountForm from "../_components/CreateAccountForm";

export const metadata = {
    title: "Create Account",
    description: "Create your account to get started with our modern task management app. Enjoy a clean interface, responsive design, and seamless productivity."
};


export default function Page() {
    return (
        <div className="secondary-bg flex items-center justify-center">
            <div className=" w-[350px] lg:w-[1200px] sm:w-[800px] shadow-xl rounded-md sm:grid sm:grid-cols-[1.5fr_2fr] bg-background">
                <div className="rounded-md rounded-r-none main-radial-bg hidden flex-col p-12 sm:flex">
                    <h3 className="text-5xl uppercase font-semibold mb-3 t-shadow">Tasque</h3>
                    <Image src={workImage}
                        alt="security-Man-illustration"
                        className="m-auto"
                        quality={100} width={450} height={450} />
                    <Link href="/login" className="underline text-sm text-secondary text-center
                        mt-auto hover:text-primary hover:scale-110 transition-all">Login</Link>
                </div>
                <CreateAccountForm/>
            </div>
        </div>
    );
}