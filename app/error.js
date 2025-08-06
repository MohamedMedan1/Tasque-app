"use client"
import Header from "./_components/Header";
import Button from "./_components/Button";

export const metadata = {
    title: "Dashboard - Error",
    description: "An unexpected error occurred in your dashboard. Please try again.",
};

export default function Error({error,reset}) {
    return (
        <>
        <div className="main-radial-bg rounded-b-md">
            <div className="px-7 sm:px-0 max-w-7xl mx-auto">
                <Header/>
            </div>
        </div>
            <div className="bg-background flex flex-col items-center justify-center gap-6 w-[335px] sm:w-[700px] mx-auto mt-20 border rounded-md p-6">
                <h1 className='text-4xl font-semibold'>Something went wrong!</h1>
                <p>{error.message}</p>
                <Button onClick={reset} additionalStyles="hover:!bg-table">Try Again</Button>
            </div>
        </>
    );
}