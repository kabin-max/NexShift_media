
"use client";

import { useEffect, useRef, useState } from "react";
import ExpandableCards from "@/components/ui/expandable-cards";
import Image from "next/image";
import { useInView, animate, useMotionValue } from "framer-motion";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(Math.floor(latest).toString());
        }
      });
      return () => controls.stop();
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold tracking-tight text-[#154880] font-sans block">
      {display}{suffix}
    </span>
  );
}

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
      className="relative w-full min-h-screen bg-transparent text-[#171717] flex flex-col justify-center py-24 overflow-hidden border-y border-gray-200"
    >
      {/* SaaS Style Ambient Glows */}
      <div className="absolute top-1/4 -left-[20%] w-[50%] h-[50%] bg-[#4C1D95]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[60%] h-[50%] bg-white/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20">

        {/* Left Side: Expandable Cards and Stats */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8 select-none">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
            <ExpandableCards cards={cards} defaultExpanded={3} autoPlay interval={1500} />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 w-full text-center border-t border-gray-200 pt-8 mt-4">
            <div>
              <AnimatedNumber value={150} suffix="+" />
              <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 block">Projects Completed</span>
            </div>

            <div>
              <AnimatedNumber value={50} suffix="+" />
              <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 block">Happy Clients</span>
            </div>

            <div>
              <AnimatedNumber value={5} suffix="M+" />
              <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 block">Audience Reached</span>
            </div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:space-y-8">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-sans font-bold text-[#154880] text-4xl md:text-5xl lg:text-6xl tracking-tight">
              About Us
            </h2>
            <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-medium tracking-wide drop-shadow-sm">
              A Creative & Strategic Agency Based in Nepal
            </h3>
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center lg:text-left font-medium">
            NexShift Media & Events is a full-service creative agency
            specializing in digital marketing, event management, and visual
            production. We work with corporate clients, SMEs, startups, banks,
            and institutions across Nepal.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center lg:text-left font-medium">
            Our approach is simple: strategy drives creativity, creativity
            drives execution, and execution drives measurable results. We don&apos;t
            chase trends - we set them.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap lg:flex-nowrap gap-3 pt-4 justify-center lg:justify-start">

            <div className="group flex items-center gap-3 rounded-full bg-[#e5e7eb] border border-[#4C1D95]/30 backdrop-blur-sm px-5 py-2.5 transition-all duration-300 hover:bg-[#e5e7eb]/80 hover:border-[#4C1D95] hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] cursor-default">
              <span className="text-[#171717] text-sm font-medium tracking-wide whitespace-nowrap">
                Strategy First
              </span>
            </div>

            <div className="group flex items-center gap-3 rounded-full bg-[#e5e7eb] border border-[#4C1D95]/30 backdrop-blur-sm px-5 py-2.5 transition-all duration-300 hover:bg-[#e5e7eb]/80 hover:border-[#4C1D95] hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] cursor-default">
              <span className="text-[#171717] text-sm font-medium tracking-wide whitespace-nowrap">
                Creative Excellence
              </span>
            </div>

            <div className="group flex items-center gap-3 rounded-full bg-[#e5e7eb] border border-[#4C1D95]/30 backdrop-blur-sm px-5 py-2.5 transition-all duration-300 hover:bg-[#e5e7eb]/80 hover:border-[#4C1D95] hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] cursor-default">
              <span className="text-[#171717] text-sm font-medium tracking-wide whitespace-nowrap">
                Measurable Results
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}