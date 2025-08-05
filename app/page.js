import HowItWorksSection from "@/app/_components/HowItWorksSection";
import { FooterSection } from "@/app/_components/FooterSection";
import Header from "@/app/_components/Header";
import LandingSection from "@/app/_components/LandingSection";
import FeaturesSection from "@/app/_components/FeaturesSection";

export default function Home() {
  return (
      <div className="main-radial-bg min-h-[100vh] text-text text-white max-w-screen overflow-hidden">
        <main className="md:max-w-7xl mx-auto px-6">
          <div>
            <Header />
            <section className="mt-20 mb-10 sm:my-14">
              <LandingSection />
            </section>
          </div>  
          <section className="sm:my-32 mb-14 mt-10">
            <FeaturesSection/>
          </section>
          <section className="my-20 sm:my-32 mb-14">
              <HowItWorksSection/>
            </section>
            <section className="my-10 mb-10 sm:my-32 sm:mb-0">
              <FooterSection/>
          </section>
        </main>
      </div>      
  );
}
