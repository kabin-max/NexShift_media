
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import Footer from "../../components/common/Footer";
import ServiceGallery from "../../components/services/ServiceGallery";
import ServicesHero from "../../components/services/ServicesHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | NexShift",
  description: "Explore our portfolio of services including digital marketing, video editing, and cameragraphy.",
};

export default function ServicesPage() {
  return (
    <main className="relative flex flex-col min-h-screen w-full text-white font-sans bg-black">

      <Header />
      <SocialIcons />

      <div className="relative z-10 w-full flex flex-col flex-grow pt-32">
        <ServicesHero />
        <ServiceGallery />
      </div>

      <Footer />
    </main>
  );
}
