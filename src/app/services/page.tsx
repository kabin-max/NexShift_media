import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
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
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest text-center mb-4" style={{ fontFamily: "var(--font-permanent-marker), cursive" }}>
            SERVICES
          </h1>
        </div>
        <ServiceGallery />
      </div>
    </main>
  );
}
