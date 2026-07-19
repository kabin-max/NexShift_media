"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useMotionTemplate, useMotionValueEvent } from "framer-motion";

const steps = [
  { num: "01", title: "Strategy", desc: "Deep market research, competitor analysis, and data-driven planning to define clear objectives and identify growth opportunities." },
  { num: "02", title: "Creativity", desc: "Innovative concepts, compelling storytelling, and impactful visual experiences that make brands unforgettable." },
  { num: "03", title: "Execution", desc: "Seamless implementation with attention to every detail—on time, within budget, and aligned with brand goals." },
  { num: "04", title: "Results", desc: "Performance tracking, transparent reporting, optimization, and continuous improvement for measurable success." }
];

const SVG_PATH = "M 10 25 C 20 25, 20 45, 30 45 C 40 45, 40 65, 55 65 C 70 65, 70 85, 90 85";

// Active windows for each step based on overall scroll progress
const activeZones = [
  [0, 0.15, 0.25, 0.35],    
  [0.2, 0.35, 0.5, 0.6], 
  [0.45, 0.6, 0.75, 0.85], 
  [0.7, 0.85, 0.95, 1],    
];

function StepCard({ step, index, progress }: { step: any, index: number, progress: MotionValue<number> }) {
  const zone = activeZones[index];
  
  // Motion mappings for cinematic transitions
  const opacity = useTransform(progress, zone, [0.2, 1, 1, 0.2]);
  const scale = useTransform(progress, zone, [0.9, 1, 1, 0.95]);
  const y = useTransform(progress, zone, [40, 0, 0, -40]);
  
  // Use foolproof motion templates for filters and complex strings
  const blurRaw = useTransform(progress, zone, [8, 0, 0, 8]);
  const blur = useMotionTemplate`blur(${blurRaw}px)`;
  
  const ghostOpacity = useTransform(progress, zone, [0.05, 0.25, 0.25, 0.05]);
  
  const shadowOpacity = useTransform(progress, zone, [0, 0.5, 0.5, 0]);
  const shadow = useMotionTemplate`0 0 15px rgba(245,158,11,${shadowOpacity})`;

  const positions = [
    "left-[5%] top-[10%] md:top-[15%]",
    "left-[15%] md:left-[25%] top-[30%] md:top-[35%]",
    "left-[25%] md:left-[50%] top-[50%] md:top-[55%]",
    "right-[5%] md:left-auto md:right-[5%] top-[70%] md:top-[75%]"
  ];

  return (
    <motion.div
      style={{ opacity, scale, y, filter: blur }}
      className={`absolute w-[80%] md:w-full max-w-sm ${positions[index]} z-20 origin-left pointer-events-none`}
    >
      <div className="relative p-6 md:p-8">
        <motion.span 
          style={{ opacity: ghostOpacity }}
          className="absolute -top-12 -left-4 md:-top-20 md:-left-12 text-[8rem] md:text-[14rem] font-bold font-mono text-white select-none z-[-1] leading-none tracking-tighter pointer-events-none"
        >
          {step.num}
        </motion.span>
        
        <h4 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.15em] text-white mb-4 md:mb-6 pointer-events-auto">
          {step.title}
        </h4>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-[280px] pointer-events-auto">
          {step.desc}
        </p>
        
        {/* Active glowing accent line */}
        <motion.div 
          style={{ opacity: shadowOpacity, boxShadow: shadow }}
          className="absolute left-0 top-0 w-1 h-full bg-amber-500 pointer-events-none"
        />
      </div>
    </motion.div>
  );
}

export default function OurSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // The scroll progress of this entire 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [debugP, setDebugP] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setDebugP(v));

  return (
    <section ref={containerRef} style={{ height: "400vh" }} className="relative w-full bg-zinc-950/80 border-t border-white/5">
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="absolute top-4 left-4 z-50 bg-black text-lime-400 p-2 font-mono text-xl border border-lime-400">
          DEBUG_PROGRESS: {debugP.toFixed(3)}
        </div>

        <div className="absolute top-12 md:top-24 w-full text-center z-30">
          <h3 className="text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase text-white/50">
            Our Steps
          </h3>
        </div>

        <div className="relative w-full max-w-7xl h-[80vh] mx-auto">
          
          {/* Animated Connecting SVG Line */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {/* Background track line */}
            <motion.path
              d={SVG_PATH}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            {/* Foreground glowing animated line */}
            <motion.path
              d={SVG_PATH}
              fill="none"
              stroke="#f59e0b" // amber-500
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: scrollYProgress }}
              className="drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
            />
          </svg>

          {/* Render the 4 Step Cards */}
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} progress={scrollYProgress} />
          ))}
          
        </div>
      </div>
    </section>
  );
}
