"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What digital marketing services do you offer in Nepal?",
      a: "We provide social media marketing, SEO, Google Ads, Meta Ads, branding, content creation, video production, website development, performance marketing, email marketing, and complete digital growth strategies tailored to your business."
    },
    {
      q: "How much does digital marketing cost in Nepal?",
      a: "Pricing depends on your business goals, campaign scope, advertising budget, and required services. We offer flexible packages suitable for startups, SMEs, and large enterprises."
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Paid advertising campaigns can generate results within days, while SEO and organic growth typically take 3–6 months. We provide transparent reporting throughout the process."
    },
    {
      q: "Do you work with businesses outside Kathmandu?",
      a: "Yes. We work with clients across Nepal and internationally through remote collaboration while also providing on-site support whenever required."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-transparent px-6 md:px-12 lg:px-24 border-t border-gray-200 overflow-hidden">
      {/* Ambient globs — top-right cyan, bottom-left navy */}
      <div className="absolute -top-[5%] -right-[5%] w-[45%] h-[55%] bg-[#00a3d0]/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] bg-[#00a3d0]/40 blur-[160px] rounded-full pointer-events-none z-0" />
      {/* Large centered radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00a3d0]/8 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Decorative Floating Circles */}
      <div className="absolute top-[15%] left-[8%] w-32 h-32 md:w-56 md:h-56 border border-[#00a3d0]/10 rounded-full pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[4%] w-20 h-20 md:w-32 md:h-32 border-2 border-[#e5e7eb]/20 rounded-full pointer-events-none z-0" />
      
      <div className="absolute bottom-[20%] right-[6%] w-24 h-24 md:w-40 md:h-40 bg-[#e5e7eb]/10 rounded-full blur-[2px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-12 h-12 md:w-20 md:h-20 bg-[#00a3d0]/10 rounded-full pointer-events-none z-0" />
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#154880] drop-shadow-sm mb-12 text-center flex flex-col items-center">
          Frequently Asked Questions
          <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-4 rounded-full" />
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white/80 backdrop-blur-md shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#0D7A95]/5 transition cursor-pointer"
                >
                  <span className="font-semibold text-sm md:text-base text-gray-800 font-sans">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0D7A95]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100 font-medium font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
