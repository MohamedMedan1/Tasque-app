"use client"
import Link from "next/link";
import SubmitButton from "./SubmitButton";
import GoBackButton from "./GoBackButton";
import { login } from "../_services/actions";
import toast from "react-hot-toast";
import CredentialsFields from "./CredentialsFields";
import { useCallback } from "react";

export default function LoginForm() {

  const handleLogin = useCallback( async (dataForm) => {
    try {
      await login(dataForm);
      toast.success("You Login Successfully")
    }
    catch (error){
      toast.error(error.message);
    }
  },[])

  return (
    <div className="login-form bg-background/20 backdrop-saturate-150 backdrop-blur-md p-10 rounded-lg sm:rounded-l-none h-full">
      <h3 className="text-4xl uppercase font-black text-main-text text-center mb-10">
        Login
      </h3>
      <GoBackButton />
      <p className="text-3xl font-bold text-radial-color t-shadow">
        Welcome back !
      </p>
      <form action={handleLogin} className="mt-10">
        <CredentialsFields/>
        <SubmitButton additionalStyles="w-full bg-primary mx-auto border-none shadow-lg text-sm hover:bg-main-text
          hover:!text-primary mb-10 disabled:text-primary disabled:bg-gray-400">
          Login
        </SubmitButton>
        <p className="text-center text-main-text text-sm">
          Don&apos;t have account ?
          <Link
            href="createAccount"
            className="underline text-primary font-semibold hover:text-secondary transition-colors"
          >
            {" "}
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
