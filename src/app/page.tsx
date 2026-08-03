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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "NexShift",
    "url": "https://nexshift.com.np",
    "logo": "https://nexshift.com.np/nst-logo.png",
    "description": "NexShift is a premier event management company and digital marketing agency based in Kathmandu, Nepal.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61571556053359",
      "https://www.instagram.com/nex_shift/",
      "https://www.linkedin.com/company/nexshiftnepal/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@nexshift.com.np"
    }
  };

  return (
    <main className="relative flex flex-col w-full text-white font-sans bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
