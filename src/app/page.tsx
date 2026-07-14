"use client";

import Background from "../components/Background";
import Header from "../components/Header";
import SocialIcons from "../components/SocialIcons";
import AnimatedLogo from "../components/AnimatedLogo";
import HeroSection from "../components/HeroSection";
import AboutSection1 from "../components/AboutSection1";
import AboutSection2 from "../components/AboutSection2";
import TrustedPartners from "../components/TrustedPartners";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";

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
