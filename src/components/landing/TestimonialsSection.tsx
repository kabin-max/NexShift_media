"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonialsData = [
  {
    title: "Outstanding Results",
    description:
      "NexShift completely transformed our digital presence. The strategy they crafted was razor-sharp and the execution was flawless.",
    logo: "/partners/cafe-o2.png",
    name: "Aman Shrestha",
    handle: "Co-Founder at",
    company: "Cafe O2",
    rating: 5,
    source: "Google",
  },
  {
    title: "Flawless Event Execution",
    description:
      "Their event management team handled our product launch with incredible attention to detail. Couldn't have asked for a better partner.",
    logo: "/partners/ritz.png",
    name: "Dr. Ram Prasad Neupane",
    handle: "Academic Director at",
    company: "Ritz College",
    rating: 5,
    source: "Google",
  },
  {
    title: "Cinematic Brand Film",
    description:
      "The brand film NexShift produced for us was cinematic, emotional, and exactly on-brand. Highly recommend their videography team.",
    logo: "/partners/zeno.png",
    name: "Deepraj Karki",
    handle: "Co-Founder at",
    company: "ZENO",
    rating: 5,
    source: "Google",
  },
  {
    title: "Brought Our Brand to Life",
    description:
      "Working with NexShift felt like magic — they just got our brand and brought it to life across every channel beautifully.",
    logo: "/partners/smile-dental.png",
    name: "Dr. Kareen Karki",
    handle: "Founder & Lead Dentist at",
    company: "Smile by Dr.Kareen",
    rating: 5,
    source: "Google",
  },
  {
    title: "Real ROI, Fast",
    description:
      "NexShift's performance marketing campaigns delivered measurable ROI from week one. They don't just promise results — they deliver them.",
    logo: "/partners/queens.png",
    name: "Pratiksha Adhikari",
    handle: "Event Manager at",
    company: "Queens Palace",
    rating: 5,
    source: "Google",
  },
  {
    title: "Highly Recommended",
    description:
      "I recommend NexShift to any business looking for a creative agency that thinks strategically and executes beautifully.",
    logo: "/partners/nisarga-batika.svg",
    name: "Kabita Rajbhandari",
    handle: "Administrative Head at",
    company: "Nisarga Batika",
    rating: 5,
    source: "Google",
  },
];

// Distribute cards across 3 columns
const col1 = [testimonialsData[0], testimonialsData[3], testimonialsData[4]];
const col2 = [testimonialsData[1], testimonialsData[4], testimonialsData[0]];
const col3 = [testimonialsData[2], testimonialsData[5], testimonialsData[1]];

function SourceBadge({ source }: { source: string }) {
  if (source === "Twitter") {
    return (
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black shrink-0">
        <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.74-8.852L1.254 2.25H8.08l4.261 5.634 5.903-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200 shrink-0">
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonialsData[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col gap-3 mb-4 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between">
        <StarRating rating={t.rating} />
        <SourceBadge source={t.source} />
      </div>
      <h3 className="text-[#154880] font-bold text-[15px] leading-snug font-sans">{t.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium font-sans">{t.description}</p>
      <div className="h-px bg-gray-100 w-full" />
      <div className="flex items-center gap-2.5">
        {/* Company logo as avatar */}
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200 bg-white shrink-0">
          <Image src={t.logo} alt={t.company} fill sizes="36px" className="object-contain p-0.5" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[#154880] font-bold text-xs leading-tight truncate font-sans">{t.name}</span>
          <span className="text-gray-400 text-[11px] leading-tight font-sans truncate">
            {t.handle}{" "}
            <span className="font-semibold text-[#0D7A95]">{t.company}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function ScrollColumn({
  cards,
  direction,
  duration,
}: {
  cards: typeof testimonialsData;
  direction: "up" | "down";
  duration: number;
}) {
  // Triple the cards to ensure seamless looping
  const repeated = [...cards, ...cards, ...cards];

  return (
    <div className="relative overflow-hidden h-full">
      <div
        className="flex flex-col"
        style={{
          animation: `testimonial-scroll-${direction} ${duration}s linear infinite`,
        }}
      >
        {repeated.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-transparent overflow-hidden border-t border-gray-200">
      <style>{`
        @keyframes testimonial-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
        @keyframes testimonial-scroll-down {
          0% { transform: translateY(-33.333%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Ambient glows */}
      <div className="absolute -top-[10%] right-[5%] w-[40%] h-[60%] bg-[#00a3d0]/6 blur-[180px] rounded-full pointer-events-none z-0 transform-gpu" />
      <div className="absolute bottom-0 left-[5%] w-[35%] h-[50%] bg-[#4C1D95]/4 blur-[150px] rounded-full pointer-events-none z-0 transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-sm text-[#154880] mb-4">
            Our Clients,{" "}
            <br className="block sm:hidden" />
            In Their Words
            <div className="h-1.5 w-20 md:w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-3 rounded-full pointer-events-none" />
          </h2>
        </motion.div>

        {/* Scrolling columns container */}
        <div className="relative">
          {/* Top & bottom fade masks */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

          {/* Mobile: single column scrolling down */}
          <div className="sm:hidden h-[560px] overflow-hidden">
            <ScrollColumn cards={[...testimonialsData]} direction="down" duration={22} />
          </div>

          {/* Desktop: 3-column alternating scroll */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4 h-[640px] overflow-hidden">
            <ScrollColumn cards={col1} direction="up" duration={20} />
            <ScrollColumn cards={col2} direction="down" duration={24} />
            <ScrollColumn cards={col3} direction="up" duration={18} />
          </div>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            testimonialsData.map((testimonial) => ({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Organization",
                "name": "NexShift Media & Events",
                "@id": "https://nexshift.com.np/#organization",
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name,
              },
              "reviewBody": testimonial.description,
            }))
          ),
        }}
      />
    </section>
  );
}