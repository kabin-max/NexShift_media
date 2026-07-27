"use client";

import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import OurSteps from "../../components/about/OurSteps";
import FaqSection from "../../components/about/FaqSection";
import Footer from "../../components/common/Footer";

export default function About() {
    return (
        <main className="relative flex flex-col w-full text-gray-700 font-sans bg-[#FAFAFA] overflow-clip">

            <Background />

            <Header />
            <SocialIcons />

            {/* ── Page Content ────────────────────────────────── */}
            <div className="relative z-10 w-full flex flex-col">
                <AboutHero />
                <div className="w-full flex flex-col md:pl-[72px]">
                    <OurStory />
                    <OurSteps />
                    <FaqSection />
                    <Footer />
                </div>
            </div>
        </main>
    );
}