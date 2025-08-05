"use client"
import { FaUserCircle, FaCheck } from "react-icons/fa";
import Link from "next/link";
import GoBackButton from "./GoBackButton";
import { generateAccount } from "../_services/actions";
import SubmitButton from "./SubmitButton";
import PasswordInput from "./PasswordInput";
import toast from "react-hot-toast";
import CredentialsFields from "./CredentialsFields";
import { motion } from "framer-motion";
import { useCallback } from "react";

export default function CreateAccountForm() {
  
  const handleCreateAccount  =  useCallback(async (dataForm) => {
    try {
      await generateAccount(dataForm);
      toast.success("Account Created Successfully");
    }
    catch (error) {
      toast.error(error.message);
    }
  },[])

  return (
    <motion.div
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.5}}
      className="relative login-form bg-background/20 backdrop-saturate-150 backdrop-blur-md px-6 py-8 sm:p-12 rounded-md sm:rounded-l-none h-full">
      <h3 className="text-3xl w-[200px] leading-10 mx-auto sm:w-full sm:text-4xl uppercase font-black text-main-text text-center mb-5 sm:mb-10">
        Create Account
      </h3>
      <GoBackButton />
      <form action={handleCreateAccount} className="mb-6 sm:mt-12 ">
        <div className="flex flex-col gap-2 mb-5 sm:mb-6">
          <label htmlFor="user-name" className="text-main-text font-semibold">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="enter your name"
              required
              id="user-name"
              name="fullName"
              className="bg-input border-none outline-none px-9 py-2 rounded-md shadow-md
                text-main-text w-full placeholder:text-sm placeholder:font-medium backdrop-saturate-150 backdrop-blur"
            />
            <FaUserCircle
              size={18}
              className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"
            />
          </div>
        </div>
        <CredentialsFields/>
        <div className="flex flex-col gap-2 mb-6 sm:mb-12">
          <label
            htmlFor="confirm-password"
            className="text-main-text font-semibold"
          >
            Confirm Password
          </label>
          <PasswordInput id="confirm-password" inputName="confirm-password">
            <FaCheck
              size={18}
              className="absolute top-[50%] left-3 translate-y-[-50%] text-primary"
            />
          </PasswordInput>
        </div>
        <SubmitButton additionalStyles="w-full bg-primary mx-auto border-none shadow-lg text-sm
          hover:bg-main-text hover:!text-primary mb-5 sm:mb-10 disabled:text-primary disabled:bg-gray-400">
          Create account
        </SubmitButton>
        <p className="text-center text-main-text text-sm -mb-5">
          Already have an account ?
          <Link
            href="/login"
            className="underline text-primary font-semibold hover:text-secondary transition-colors"
          >
            {" "}
            Login
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
