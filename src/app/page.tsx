"use client";

import { useState, useEffect, useCallback } from "react";
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

// Critical images to prefetch while the intro overlay is playing
const CRITICAL_IMAGES = [
  "https://andyhardy.co/assets/img/landscape_mountain_small.png",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600",
];

// Silently fetch images into browser cache without rendering anything
function useImagePreloader(urls: string[]) {
  useEffect(() => {
    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [urls]);
}

export default function Home() {
  const [mountContent, setMountContent] = useState(false);

  // Preload critical images immediately (while overlay is visible)
  useImagePreloader(CRITICAL_IMAGES);

  // Memoize callback so IntroOverlay's useEffect dep doesn't re-fire
  const handleReady = useCallback(() => setMountContent(true), []);

  return (
    <main className="relative flex flex-col w-full text-white font-sans bg-black">
      <IntroOverlay onReady={handleReady} />

      {mountContent && (
        <>
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
        </>
      )}
    </main>
  );
}
