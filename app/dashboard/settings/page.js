import DarkModeToggler from "@/app/_components/DarkModeToggler";
import SectionTitle from "@/app/_components/SectionTitle";
import Card from "@/app/_components/Card";
import ExpandToggler from "@/app/_components/ExpandToggler";

export const metadata = {
    title: "Settings",
    description: "Manage your display preferences, switch between dark and light modes, and control navigation settings for a better experience."
};

export default function Page() {
    return (
        <div className="w-[335px] mx-auto sm:w-full">
            <SectionTitle>Settings</SectionTitle>
            <Card additionalStyles="flex flex-col gap-5 shadow-md mb-5">
                <div className="flex items-center gap-5">
                    <p className="text-main-text font-semibold text-lg">Dark Mode</p>
                    <DarkModeToggler/>
                </div>
            </Card>
            <Card additionalStyles="flex flex-col gap-5 shadow-md">
                <div className="flex items-center gap-5">
                    <p className="text-main-text font-semibold text-lg">Nav Bar Expanded</p>
                    <ExpandToggler/>
                </div>
            </Card>
        </div>
    );
}