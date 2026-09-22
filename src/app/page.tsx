import Background from "../components/common/Background";
import Header from "../components/common/Header";
import SocialIcons from "../components/common/SocialIcons";
import AnimatedLogo from "../components/landing/AnimatedLogo";
import HeroSection from "../components/landing/HeroSection";
import BelowFoldSections from "../components/landing/BelowFoldSections";
import IntroOverlay from "../components/common/IntroOverlay";

export default function Home() {

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://nexshift.com.np/#organization",
      "name": "NexShift Media & Events",
      "alternateName": ["NexShift", "NexShift Nepal"],
      "url": "https://nexshift.com.np",
      "logo": "https://nexshift.com.np/nst-logo.png",
      "image": "https://nexshift.com.np/nst-logo.png",
      "description": "NexShift is Nepal's premier event management company and creative digital marketing agency based in Kathmandu. Specialized in corporate events, brand films, performance marketing, SEO, social media management, videography, and custom web development.",
      "telephone": "+977-9818633814",
      "email": "media.nexshift@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "New Baneshwor",
        "addressLocality": "Kathmandu",
        "addressRegion": "Bagmati",
        "postalCode": "44600",
        "addressCountry": "NP"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.6915",
        "longitude": "85.3420"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61577277295076",
        "https://www.instagram.com/nex_shift/",
        "https://www.linkedin.com/company/nexshiftnepal/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+977-9818633814",
        "email": "media.nexshift@gmail.com",
        "availableLanguage": ["English", "Nepali"]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "6"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://nexshift.com.np/#services",
      "name": "NexShift Core Services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Digital Marketing",
          "description": "SEO, Google Ads, Meta Ads, social media management, content strategy, and performance marketing in Nepal."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Event Management",
          "description": "Corporate events, product launches, brand activations, conferences, and full-scale productions in Kathmandu, Nepal."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Photography & Videography",
          "description": "Corporate shoots, brand films, promotional video production, reels, and cinematic commercial content."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Web Development",
          "description": "Custom high-performance websites, Next.js web applications, and digital platform development."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://nexshift.com.np/#webpage",
      "url": "https://nexshift.com.np",
      "name": "NexShift | Event Management & Digital Marketing Agency",
      "about": {
        "@id": "https://nexshift.com.np/#organization"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "h3", "p"]
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
          "item": "https://nexshift.com.np/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does NexShift offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NexShift specializes in corporate event management, digital marketing (including SEO, Google Ads, and Meta Ads), professional photography and videography, and custom web development in Nepal."
          }
        },
        {
          "@type": "Question",
          "name": "How to choose the best event management company in Kathmandu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When selecting an event planner, evaluate their portfolio, industry experience, and client testimonials. NexShift stands out by combining creative event production with digital marketing strategies to maximize your event's reach and impact."
          }
        },
        {
          "@type": "Question",
          "name": "Should I hire a digital marketing agency for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, hiring a specialized agency ensures data-driven results. NexShift uses targeted performance marketing, social media management, and SEO to connect your brand with the right audience and increase your ROI."
          }
        }
      ]
    }
  ];

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
            <BelowFoldSections />
          </div>
    </main>
  );
}
