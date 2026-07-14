"use client";

import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import OurSteps from "../../components/about/OurSteps";
import TeamSection from "../../components/about/TeamSection";
import FaqSection from "../../components/about/FaqSection";
import BannerCta from "../../components/about/BannerCta";
import Footer from "../../components/common/Footer";

export default function About() {
  return (
    <main className="relative flex flex-col w-full text-white font-sans bg-black overflow-x-hidden">

      <Background />

      <Header />
      <SocialIcons />

      {/* ── Page Content ────────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col">
        <AboutHero />
        <OurStory />
        <OurSteps />
        <TeamSection />
        <FaqSection />
        <BannerCta />
        <Footer />
      </div>
    </main>
  );
}
