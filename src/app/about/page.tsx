import type { Metadata } from "next";
import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import OurSteps from "../../components/about/OurSteps";
import FaqSection from "../../components/about/FaqSection";
import Footer from "../../components/common/Footer";

export const metadata: Metadata = {
  title: "About Us | NexShift Media & Events Nepal",
  description: "Learn about NexShift - Nepal's premier event management company and creative media agency based in Kathmandu. 35+ projects, 20+ partner organizations, and 10M+ audience reached.",
  keywords: [
    "About NexShift",
    "NexShift Story",
    "Event Management Team Kathmandu",
    "Creative Agency Nepal",
    "Digital Marketing Experts Nepal",
  ],
  alternates: {
    canonical: "https://nexshift.com.np/about",
  },
};

export default function About() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://nexshift.com.np/about/#webpage",
      "url": "https://nexshift.com.np/about",
      "name": "About NexShift Media & Events",
      "description": "Learn about NexShift - Nepal's premier event management company and creative media agency based in Kathmandu.",
      "mainEntity": {
        "@id": "https://nexshift.com.np/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nexshift.com.np"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://nexshift.com.np/about"
        }
      ]
    }
  ];

  return (
    <main className="relative flex flex-col w-full text-gray-700 font-sans bg-[#FAFAFA] overflow-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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