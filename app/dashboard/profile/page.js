import { getCurrentUser } from "@/app/_services/apiAuth";
import Image from "next/image";
import profileImage from "@/public/classroom.png"
import SectionTitle from "@/app/_components/SectionTitle";
import Card from "@/app/_components/Card";
import UpdatePasswordForm from "@/app/_components/UpdatePasswordForm";
import { HiOutlineEnvelope } from "react-icons/hi2";
import DeleteAccountSection from "@/app/_components/DeleteAccountSection";

export const metadata = {
    title: "Profile",
    description: "View and manage your profile information, including your name, email, and password settings."
};

export const runtime = 'nodejs';

export default async function Page() {
    const { user_metadata, email } = await getCurrentUser();
    const { fullName } = user_metadata;
    const userName = fullName.split(' ').length > 2 ? fullName.split(' ').slice(0,2) : fullName;
    
    return (
        <div className="max-w-[335px] sm:max-w-full mx-auto my-10 sm:mx-10 pb-5">
            <SectionTitle>Profile</SectionTitle>
            <Card additionalStyles="flex items-center gap-6 shadow-md">
                <Image src={profileImage} alt="profile-icon" quality={90} height={100} width={100} />
                <div>
                    <p className="text-primary font-bold text-2xl sm:text-3xl mb-2 sm:mb-1">{userName}</p>
                    <div className="flex items-center gap-1">
                        <HiOutlineEnvelope size={18} className="text-primary"/>
                        <span className="text-gray-400 text-xs sm:text-sm font-semibold">{email}</span>
                    </div>
                </div>
            </Card>
            <SectionTitle>Update Profile Password</SectionTitle>
            <Card additionalStyles="shadow-md">
                <UpdatePasswordForm/>
            </Card>
            <SectionTitle>Delete Account</SectionTitle>
            <Card additionalStyles="shadow-md">
                <DeleteAccountSection />
            </Card>
        </div>
    );
}