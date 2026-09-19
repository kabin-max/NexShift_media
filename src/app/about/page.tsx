import type { Metadata } from "next";
import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import OurSteps from "../../components/about/OurSteps";
import FaqSection from "../../components/about/FaqSection";
import Footer from "../../components/common/Footer";
import SeoAboutHiddenContent from "../../components/about/SeoAboutHiddenContent";

export const metadata: Metadata = {
  title: "About Us | NexShift Media & Events Nepal",
  description: "Learn about NexShift, Nepal's premier event management and digital marketing agency in Kathmandu. We deliver expert corporate events, SEO, and creative media.",
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
      "@type": "Organization",
      "@id": "https://nexshift.com.np/#organization",
      "name": "NexShift Media & Events",
      "url": "https://nexshift.com.np",
      "logo": "https://nexshift.com.np/nst-logo.png",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61571556053359",
        "https://www.instagram.com/nex_shift/",
        "https://www.linkedin.com/company/nexshiftnepal/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": ["WebPage", "AboutPage"],
      "@id": "https://nexshift.com.np/about/#webpage",
      "url": "https://nexshift.com.np/about",
      "name": "About NexShift Media & Events",
      "description": "Learn about NexShift, Nepal's premier event management and digital marketing agency in Kathmandu. We deliver expert corporate events, SEO, and creative media.",
      "publisher": {
        "@id": "https://nexshift.com.np/#organization"
      },
      "about": {
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
            <SeoAboutHiddenContent />
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