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
            src="/demo/Cafe 02 1.jpg"
            alt="Cafe O2 Demo"
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
            src="/demo/queens palace.jpg"
            alt="Queens Palace Demo"
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
            src="/demo/Ritz College(1).jpg"
            alt="Ritz College Demo"
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
            src="/demo/Milestone school(1).jpg"
            alt="Milestone School Demo"
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
            src="/demo/Cafe O2 2.jpg"
            alt="Cafe O2 Demo 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-transparent flex flex-col justify-start pt-40 pb-20 overflow-hidden px-[5%]">
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
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-2 z-10 relative">
        
        {/* Title */}
        <h1 
          className="text-5xl md:text-6xl lg:text-8xl font-bold font-sans tracking-tight text-[#154880] drop-shadow-sm" 
        >
          ABOUT US
        </h1>

        {/* Image Effect */}
        <div className="w-full flex items-center justify-center mt-4">
          <FlipStack cards={cards} />
        </div>

        {/* Bottom Side: Text */}
        <div className="w-full flex flex-col items-center space-y-6 mt-16">
          <p className="text-gray-700 font-medium text-lg md:text-xl leading-relaxed max-w-2xl font-sans">
            We are a creative collective of visual storytellers, directors, and photographers. We build cinematic campaigns that stand out, ensuring your brand&apos;s narrative is captured authentically.
          </p>
        </div>

      </div>
    </section>
  );
}
