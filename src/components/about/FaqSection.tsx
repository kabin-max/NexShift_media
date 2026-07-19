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
    <section className="relative w-full py-24 bg-zinc-950 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition cursor-pointer"
                >
                  <span className="font-semibold text-sm md:text-base text-white">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-white/5">
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
