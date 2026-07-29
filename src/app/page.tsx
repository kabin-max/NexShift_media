"use client";

import Background from "../components/common/Background";
import Header from "../components/common/Header";
import SocialIcons from "../components/common/SocialIcons";
import AnimatedLogo from "../components/landing/AnimatedLogo";
import HeroSection from "../components/landing/HeroSection";
import AboutSection2 from "../components/landing/AboutSection2";
import ServicesSection from "../components/landing/ServicesSection";
import TrustedPartners from "../components/landing/TrustedPartners";
import ClientsSection from "../components/landing/ClientsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/common/Footer";
import IntroOverlay from "../components/common/IntroOverlay";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full text-white font-sans bg-black">
      <IntroOverlay />
      <Background />
      <Header />
      <SocialIcons />
      <AnimatedLogo />

      <div className="relative w-full flex flex-col">
        <HeroSection />
        <div className="w-full flex flex-col md:pl-[72px]">
          <AboutSection2 />
          <ServicesSection />
          <TrustedPartners />
          <ClientsSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
