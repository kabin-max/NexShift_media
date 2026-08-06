
"use client";

import { useEffect, useRef, useState } from "react";
import ExpandableCards from "@/components/ui/expandable-cards";
import Image from "next/image";
import { useInView, animate, useMotionValue, motion } from "framer-motion";

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
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans block drop-shadow-md">
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
        <Image
          src="/demo/Cafe 02 1.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          alt="Cafe O2 Demo"
        />
      ),
    },
    {
      id: 2,
      content: (
        <Image
          src="/demo/queens palace.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          alt="Queens Palace Demo"
        />
      ),
    },
    {
      id: 3,
      content: (
        <Image
          src="/demo/Ritz College(1).jpg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          alt="Ritz College Demo"
        />
      ),
    },
    {
      id: 4,
      content: (
        <Image
          src="/demo/Milestone school(1).jpg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          alt="Milestone School Demo"
        />
      ),
    },
    {
      id: 5,
      content: (
        <Image
          src="/demo/Cafe O2 2.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          alt="Cafe O2 Demo 2"
        />
      ),
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-transparent text-[#171717] flex flex-col justify-center py-[5%] overflow-hidden"
    >
      {/* Ambient globs — top-right cyan, bottom-left navy */}
      <div className="absolute -top-[5%] -right-[5%] w-[45%] h-[55%] bg-[#00a3d0]/10 blur-[140px] rounded-full pointer-events-none z-0 transform-gpu" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] bg-[#00a3d0]/40 blur-[160px] rounded-full pointer-events-none z-0 transform-gpu" />
      {/* Large centered radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00a3d0]/8 blur-[180px] rounded-full pointer-events-none z-0 transform-gpu" />

      {/* Decorative Floating Circles */}
      <div className="absolute top-[15%] left-[8%] w-32 h-32 md:w-56 md:h-56 border border-[#00a3d0]/10 rounded-full pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[4%] w-20 h-20 md:w-32 md:h-32 border-2 border-[#e5e7eb]/20 rounded-full pointer-events-none z-0" />

      <div className="absolute bottom-[20%] right-[6%] w-24 h-24 md:w-40 md:h-40 bg-[#e5e7eb]/10 rounded-full blur-[2px] pointer-events-none z-0 transform-gpu" />
      <div className="absolute bottom-[10%] right-[10%] w-12 h-12 md:w-20 md:h-20 bg-[#00a3d0]/10 rounded-full pointer-events-none z-0" />


      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Side: Expandable Cards and Stats */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8 select-none">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
            <ExpandableCards cards={cards} defaultExpanded={3} autoPlay interval={1500} />
          </div>

          {/* Stats Grid wrapped with the Leaf Shape Banner */}
          <div className="relative w-full mt-10 bg-[#03b364] text-white overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-[0_10px_30px_rgba(3,179,100,0.3)]">

            {/* Decorative corner dots */}
            <span className="absolute top-3 left-4 w-1.5 h-1.5 rounded-full bg-white/30 z-10" />
            <span className="absolute top-3 right-4 w-1.5 h-1.5 rounded-full bg-white/30 z-10" />

            {/* Grid Content */}
            <div className="relative grid grid-cols-3 w-full text-center z-10 py-10 px-6">
              <div className="flex flex-col items-center">
                <AnimatedNumber value={35} suffix="+" />
                <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 block">Projects Completed</span>
              </div>

              {/* Dividers */}
              <div className="flex flex-col items-center border-x border-white/20 px-2">
                <AnimatedNumber value={25} suffix="+" />
                <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 block">Happy Clients</span>
              </div>

              <div className="flex flex-col items-center">
                <AnimatedNumber value={10} suffix="M+" />
                <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 block">Audience Reached</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:space-y-8">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-sans font-bold text-[#154880] text-4xl md:text-5xl lg:text-6xl tracking-tight w-max mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
              About Us
              <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mt-2 rounded-full pointer-events-none" />
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
            drives execution, and execution drives measurable results. We don't
            chase trends - we set them.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap lg:flex-nowrap gap-3 pt-4 justify-center lg:justify-start">

            <div className="group flex items-center gap-3 rounded-full bg-[#e5e7eb] border border-[#4C1D95]/30 backdrop-blur-sm px-5 py-2.5 transition duration-300 hover:scale-105 active:scale-95 hover:bg-[#e5e7eb]/80 hover:border-[#4C1D95] hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] cursor-default">
              <span className="text-[#171717] text-sm font-medium tracking-wide whitespace-nowrap">
                Strategy First
              </span>
            </div>

            <div className="group flex items-center gap-3 rounded-full bg-[#e5e7eb] border border-[#4C1D95]/30 backdrop-blur-sm px-5 py-2.5 transition duration-300 hover:scale-105 active:scale-95 hover:bg-[#e5e7eb]/80 hover:border-[#4C1D95] hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] cursor-default">
              <span className="text-[#171717] text-sm font-medium tracking-wide whitespace-nowrap">
                Creative Excellence
              </span>
            </div>

            <div className="group flex items-center gap-3 rounded-full bg-[#e5e7eb] border border-[#4C1D95]/30 backdrop-blur-sm px-5 py-2.5 transition duration-300 hover:scale-105 active:scale-95 hover:bg-[#e5e7eb]/80 hover:border-[#4C1D95] hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] cursor-default">
              <span className="text-[#171717] text-sm font-medium tracking-wide whitespace-nowrap">
                Measurable Results
              </span>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}