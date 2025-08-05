import Button from "./Button";
import MainLabel from "./MainLabel";

export function FooterSection() {
    return (
        <footer className="border-t py-7">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-2xl font-semibold uppercase t-shadow">Tasque</h3>
                <MainLabel>Todo App</MainLabel>
            </div>
            <span className="inline-block text-gray-300 text-center sm:text-start">Tasque keeps your tasks tidy, your team synced, and your goals within reach effortlessly.</span>
            <p className="my-5 sm:my-3 opacity-70 text-sm text-center sm:text-start">&copy; {new Date().getFullYear()}
                <MainLabel additionalStyle="uppercase">Tasque</MainLabel>. All rights reserved.
            </p>
            <div className="flex items-center justify-center sm:justify-between">
                <p className="text-xs text-gray-400">
                    Made with <span className="text-red-500">♥</span> by <MainLabel>Med</MainLabel>
                </p>
                <Button additionalStyles='w-[250px] py-1 hidden sm:block'>Get Started</Button>
            </div>
        </footer>
    );
}