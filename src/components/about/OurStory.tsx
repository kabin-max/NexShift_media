"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate, useMotionValue } from "framer-motion";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
    <span ref={ref} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#154880] font-sans block">
      {display}{suffix}
    </span>
  );
}

export default function OurStory() {
  const storyRef = useRef(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyY = useTransform(storyProgress, [0, 0.5], [60, 0]);

  return (
    <section id="story" ref={storyRef} className="relative w-full pt-20 pb-24 md:pt-28 md:pb-32 bg-transparent px-[5%]">
      {/* Wavy Green Top Strip */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[200%] md:w-full h-[80px] md:h-[120px] left-1/2 -translate-x-1/2"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#03b364"
            className="opacity-90 drop-shadow-md"
          ></path>
        </svg>
      </div>

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
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16 z-10 relative">
        <div className="w-full text-center flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#154880] drop-shadow-sm mb-4">
              Our Story
              <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full" />
            </h2>
<h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-medium tracking-wide drop-shadow-sm">              A journey of creativity, strategy, and relentless pursuit of excellence.
            </h3>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          
          {/* Story Text Card */}
          <motion.div
            style={{ y: storyY }}
            className="relative overflow-hidden lg:col-span-8 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-12 transition-shadow duration-300 flex flex-col justify-center space-y-8"
          >
            {/* Green Edge Strip */}
            <div className="absolute left-0 top-0 w-2 h-full bg-[#03b364] shadow-[0_0_20px_rgba(3,179,100,0.5)] pointer-events-none" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#154880] leading-tight font-sans">Inspired to Create. Built to Grow.</h3>
              
              <p className="text-md md:text-lg lg:text-2xl font-bold">Born from a passion for creativity and strategic excellence, NexShift was founded with a clear vision: to bridge the gap between powerful storytelling and measurable business results.
            </p>
            
            <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-300 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 font-medium text-base md:text-lg leading-relaxed font-sans">
              <p className="font-bold">
                What started as a small team with big ambitions has grown into one of Nepal&apos;s most trusted creative agencies. We&apos;ve successfully managed 35+ projects, partnered with 20+ organizations, and helped brands reach audiences of over 10k people.
              </p>
              <p className="font-bold">
                Today, we proudly serve corporate enterprises, ambitious startups, banking institutions, educational organizations, NGOs, and government bodies-always maintaining the same commitment to quality, creativity, and measurable impact.
              </p>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:flex lg:flex-col gap-4 sm:gap-6">
            <div className="flex-1 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-4 sm:p-8 flex flex-col justify-center items-center text-center hover:shadow-lg hover:-translate-y-1 hover:border-[#14A9D6]/30 transition-all duration-300 group">
              <AnimatedNumber value={35} suffix="+" />
              <span className="text-gray-500 text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mt-2 sm:mt-3 group-hover:text-[#14A9D6] transition-colors">Projects Completed</span>
            </div>

            <div className="flex-1 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-4 sm:p-8 flex flex-col justify-center items-center text-center hover:shadow-lg hover:-translate-y-1 hover:border-[#14A9D6]/30 transition-all duration-300 group">
              <AnimatedNumber value={20} suffix="+" />
              <span className="text-gray-500 text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mt-2 sm:mt-3 group-hover:text-[#14A9D6] transition-colors">Happy Clients</span>
            </div>

            <div className="flex-1 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-4 sm:p-8 flex flex-col justify-center items-center text-center hover:shadow-lg hover:-translate-y-1 hover:border-[#14A9D6]/30 transition-all duration-300 group">
              <AnimatedNumber value={10} suffix="k" />
              <span className="text-gray-500 text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest mt-2 sm:mt-3 group-hover:text-[#14A9D6] transition-colors">Audience Reached</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
