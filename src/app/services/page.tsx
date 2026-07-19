import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import Footer from "../../components/common/Footer";
import ServiceGallery from "../../components/services/ServiceGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | NexShift",
  description: "Explore our portfolio of services including digital marketing, video editing, and cameragraphy.",
};

export default function ServicesPage() {
  return (
    <main className="relative flex flex-col min-h-screen w-full text-white font-sans bg-black">
      <Background />
      <Header />
      <SocialIcons />

      <div className="relative z-10 w-full flex flex-col flex-grow pt-32">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-permanent-marker), cursive" }}>
            OUR SERVICES
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Everything You Need to <br className="hidden md:block" /> Dominate Your Market.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            From digital campaigns to large-scale events and cinematic productions — we deliver end-to-end solutions that drive real results.
          </p>
        </div>
        <ServiceGallery />
      </div>
      
      <Footer />
    </main>
  );
}
