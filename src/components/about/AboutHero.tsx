"use client";

import FlipStack from "@/components/ui/flipstack";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  const cards = [
    {
      id: 1,
      content: (
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1000"
            alt="About 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000"
            alt="About 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000"
            alt="About 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1000"
            alt="About 4"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070"
            alt="About 5"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col justify-start pt-40 pb-20 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-2 z-10">
        
        {/* Title */}
        <h1 
          className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-widest text-white drop-shadow-xl" 
          style={{ fontFamily: "var(--font-permanent-marker), cursive" }}
        >
          ABOUT US
        </h1>

        {/* Image Effect */}
        <div className="w-full flex items-center justify-center mt-4">
          <FlipStack cards={cards} />
        </div>

        {/* Bottom Side: Text */}
        <div className="w-full flex flex-col items-center space-y-6 mt-16">
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            We are a creative collective of visual storytellers, directors, and photographers. We build cinematic campaigns that stand out, ensuring your brand&apos;s narrative is captured authentically.
          </p>
        </div>

      </div>
    </section>
  );
}
