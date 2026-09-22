"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../common/ScrollReveal";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is NexShift and what services do you provide in Nepal?",
      a: "NexShift is a premier event management company and creative digital marketing agency based in Kathmandu, Nepal. We specialize in corporate event management, brand film production, performance marketing (SEO, Google Ads, Meta Ads), social media strategy, commercial videography, and custom web development."
    },
    {
      q: "Why is NexShift considered a top event management company in Kathmandu?",
      a: "NexShift brings end-to-end event planning, full-scale staging, sound and lighting production, and seamless corporate event execution. Having successfully managed 35+ major projects for corporate, banking, and NGO clients across Nepal, we are trusted for zero-glitch execution."
    },
    {
      q: "What digital marketing services do you offer in Nepal?",
      a: "We provide social media marketing, SEO, Google Ads, Meta Ads, branding, content creation, video production, website development, performance marketing, email marketing, and complete digital growth strategies tailored to your business."
    },
    {
      q: "How much does digital marketing and event management cost in Nepal?",
      a: "Pricing depends on your business goals, campaign scope, advertising budget, and required services. We offer flexible packages suitable for startups, SMEs, corporate organizations, and large enterprises."
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Paid advertising campaigns can generate leads within days, while SEO and organic brand growth typically show substantial compounding results within 3 to 6 months. We provide transparent monthly reporting throughout."
    },
    {
      q: "Do you produce brand films and corporate videos in Nepal?",
      a: "Yes! Our in-house video production team creates cinematic brand films, corporate documentaries, promotional reels, product commercials, and event highlight videos across Kathmandu and all major cities in Nepal."
    },
    {
      q: "Where is NexShift located and how can I contact them?",
      a: "NexShift is located in New Baneshwor, Kathmandu, Nepal. You can contact us directly via phone at +977-9818633814, email us at media.nexshift@gmail.com, or visit our office."
    },
    {
      q: "Do you work with clients outside Kathmandu?",
      a: "Yes. We work with clients across Nepal and internationally through remote digital collaboration while providing on-site event and media production support whenever required."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="relative w-full py-24 bg-transparent px-[5%] border-t border-gray-200 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Ambient globs — top-right cyan, bottom-left navy */}
      <div className="absolute -top-[5%] -right-[5%] w-[45%] h-[55%] bg-[#00a3d0]/10 blur-[140px] rounded-full pointer-events-none z-0 transform-gpu" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] bg-[#00a3d0]/40 blur-[160px] rounded-full pointer-events-none z-0 transform-gpu" />
      {/* Large centered radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00a3d0]/8 blur-[180px] rounded-full pointer-events-none z-0 transform-gpu" />

      {/* Decorative Floating Circles removed as requested */ }
      <div className="max-w-4xl mx-auto z-10 relative">
        <ScrollReveal direction="up" duration={0.5}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#154880] drop-shadow-sm mb-12 text-center flex flex-col items-center">
            Frequently Asked Questions
            <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-4 rounded-full" />
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <ScrollReveal direction="up" delay={index * 0.1} key={index}>
                <div
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white/80 backdrop-blur-md shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#0D7A95]/5 transition cursor-pointer"
                  >
                    <span className="font-semibold text-sm md:text-base text-gray-800 font-sans">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[#0D7A95]" : "text-gray-400"}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100 font-medium font-sans">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
