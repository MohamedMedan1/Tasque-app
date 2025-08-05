import Image from "next/image";
import notFoundImage from "@/public/Page not Found.png";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";
import Header from "./_components/Header";


export default function NotFound() {
    return (
        <>
        <div className="main-radial-bg rounded-b-md">
            <div className="px-7 sm:px-0 max-w-7xl mx-auto">
                <Header/>
            </div>
        </div>
            <div className="bg-background flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-5 mt-20">
                <Image src={notFoundImage} alt="page-notFound-illustration" quality={90} width={400} height={400}/>
                <Link
                    className="bg-primary px-4 py-2 rounded-md flex items-center justify-center gap-3 text-xl text-main-text
                        text-center transition-all hover:bg-secondary"
                    href="/dashboard">
                    < HiArrowLongLeft/>
                    Go Back Home
                </Link>
            </div>
        </>
    );
}