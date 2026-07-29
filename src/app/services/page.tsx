"use client";

import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import ServicesHero from "../../components/services/ServicesHero";
import ServiceGallery from "../../components/services/ServiceGallery";
import Footer from "../../components/common/Footer";

export default function Services() {
    return (
        <main className="relative flex flex-col w-full text-gray-700 font-sans bg-[#FAFAFA] overflow-clip">
            <Background />
            <Header />
            <SocialIcons />

            {/* ── Page Content ────────────────────────────────── */}
            <div className="relative z-10 w-full flex flex-col pt-32 md:pt-40">
                <ServicesHero />
                <div className="w-full flex flex-col md:pl-[72px]">
                    <ServiceGallery />
                    <Footer />
                </div>
            </div>
        </main>
    );
}
