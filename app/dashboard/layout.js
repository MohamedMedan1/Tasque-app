import BurgerIcon from "../_components/BurgerIcon";
import CustomizedLayout from "../_components/CustomizedLayout";
import DashboardHeader from "../_components/DashboardHeader";
import SideNav from "../_components/SideNav";
import { ExpandNavProvider } from "@/app/_contexts/ExpandNavContext";

export default function Layout({children}) {
    return (
        <ExpandNavProvider>
            <CustomizedLayout>            
                <SideNav />
                <div className="flex items-center justify-between main-radial-bg px-10 rounded-b-lg sm:hidden">
                    <h3 className="text-3xl uppercase font-semibold">Tasque</h3>
                    <BurgerIcon>
                        <DashboardHeader/>        
                    </BurgerIcon>
                </div>
                <div className="max-w-[400px] mx-auto sm:max-w-full sm:mx-0">
                    {children}
                </div>
            </CustomizedLayout>
        </ExpandNavProvider>
    );
}