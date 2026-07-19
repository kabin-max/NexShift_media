"use client";

import { useRef } from "react";
import ExpandableCards from "@/components/ui/expandable-cards";
import Image from "next/image";

export default function AboutSection2() {
  const sectionRef = useRef(null);

  const cards = [
    {
      id: 1,
      content: (
        <img
          src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1000"
          className="w-full h-full object-cover"
          alt="About 1"
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000"
          className="w-full h-full object-cover"
          alt="About 2"
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000"
          className="w-full h-full object-cover"
          alt="About 3"
        />
      ),
    },
    {
      id: 4,
      content: (
        <img
          src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1000"
          className="w-full h-full object-cover"
          alt="About 4"
        />
      ),
    },
    {
      id: 5,
      content: (
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070"
          className="w-full h-full object-cover"
          alt="About 5"
        />
      ),
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-center py-24 overflow-hidden"
    >
      {/* Rotated Background Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <Image
          src="/bubble.jpg"
          alt="Bubble Background"
          fill
          sizes="100vw"
          className="max-w-none object-cover -rotate-[15deg] scale-150"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20">

        {/* Left Side: Expandable Cards */}
        <div className="w-full lg:w-1/2 flex items-center justify-center h-[300px] md:h-[400px] lg:h-[450px] select-none">
          <ExpandableCards cards={cards} defaultExpanded={3} autoPlay interval={3000} />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:space-y-8 text-zinc-300 text-base md:text-lg leading-relaxed">
          <h2 className="font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl mb-4 text-center lg:text-left">
            About Us
          </h2>
          <p>
            Company XYX is a commercial director, photographer and visual creator
            based just outside Melbourne, working across the East Coast of
            Australia.
          </p>
          <p>
            We&apos;ve built a practice that sits somewhere between creative director,
            DOP and production manager — often all at once. Specialising in
            cinematic commercial production and mini-documentary content, XYX makes
            lean productions look and feel far larger than their budgets suggest.
          </p>
          <p>
            We work alongside brands and agencies on everything from strategy and
            scripting through to full execution — developing campaign concepts,
            directing talent, managing small crews and delivering content built to
            reach specific audiences. We understand both the cultural engineering
            behind brand building and the practical realities of getting it done.
          </p>
          <p className="text-white text-sm font-normal pt-4">
            Founder of félan films &amp; emble studio.
          </p>
        </div>
      </div>
    </section>
  );
}
