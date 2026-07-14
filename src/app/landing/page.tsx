
"use client";

import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import AnimatedLogo from "../../components/landing/AnimatedLogo";
import HeroSection from "../../components/landing/HeroSection";
import AboutSection1 from "../../components/landing/AboutSection1";
import AboutSection2 from "../../components/landing/AboutSection2";
import TrustedPartners from "../../components/landing/TrustedPartners";
import ClientsSection from "../../components/landing/ClientsSection";
import ContactSection from "../../components/landing/ContactSection";

export default function Home() {
    return (
        <main className="relative flex flex-col w-full text-white font-sans bg-black">
            <Background />
            <Header />
            <SocialIcons />
            <AnimatedLogo />

            <div className="relative z-10 w-full flex flex-col">
                <HeroSection />
                <AboutSection1 />
                <AboutSection2 />
                <TrustedPartners />
                <ClientsSection />
                <ContactSection />
            </div>
        </main>
    );
}
