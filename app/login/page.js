import Link from "next/link";
import Image from "next/image";
import securityImage from "@/public/Security-amico.png"
import LoginForm from "../_components/LoginForm";
import AnimatedLogin from "../_components/AnimatedLogin";

export const metadata = {
    title: "Login",
    description: "Login to access your tasks and manage your productivity efficiently through a modern, responsive interface."
};


export default function Page() {
    return (
        <div className="secondary-bg flex items-center justify-center">
            <AnimatedLogin>
                <div className="w-[350px] lg:w-[1000px] sm:w-[800px] h-[560px] shadow-xl rounded-lg grid grid-cols-1 sm:grid-cols-[1.5fr_2fr] bg-background">
                    <div className="rounded-lg rounded-r-none main-radial-bg flex-col p-10 hidden sm:flex">
                        <h3 className="text-5xl uppercase font-semibold mb-3 t-shadow">Tasque</h3>
                        <Image src={securityImage}
                            alt="security-Man-illustration"
                            className="m-auto"
                            quality={100} width={300} height={300} />
                        <Link href="/createAccount" className="underline text-sm text-secondary text-center
                            mt-auto hover:text-primary hover:scale-110 transition-all">Create Account</Link>
                    </div>
                    <LoginForm/>
                </div>
            </AnimatedLogin>
        </div>
    );
}