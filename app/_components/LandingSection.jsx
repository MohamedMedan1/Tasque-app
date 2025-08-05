"use client"
import Button from "./Button";
import Image from "next/image"
import team_Image from "@/public/team checklist-pana.png"
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingSectionContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-5 sm:gap-0 sm:justify-between h-[100vh] sm:h-full">
            <div className=" flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5 sm:justify-start sm:flex-row">
                    <h3 className="sm:text-8xl text-6xl font-bold uppercase t-shadow">Tasque</h3>
                    <p className="text-xl font-semibold uppercase">Todo App</p>
                </div>
                <span className="block max-w-xl mx-auto text-center sm:text-start leading-8 mb-2 sm:mb-3">Simplify your life and stay on top of your tasks with a sleek, fast, and intuitive task manager</span>
                <Button additionalStyles="w-[250px] mx-auto sm:mx-0 sm:w-[300px]">
                    <Link href="/createAccount">Get Started</Link>
                </Button>
            </div>
            <div className="">
                <Image src={team_Image}
                    alt="Team_work_illustrations"
                    width={500}
                    height={500}
                    quality={100}/>
            </div>
        </motion.div>
    );
}