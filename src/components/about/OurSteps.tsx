"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { Lightbulb, Map, Zap, LineChart } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Concept",
    desc: "We start by understanding your brand, your goals, and who you're trying to reach.",
    tags: ["Brand Strategy", "Audience Persona", "Market Fit"],
    metric: "100% Alignment",
    icon: <Lightbulb className="w-6 h-6 text-amber-500 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
  },
  {
    num: "02",
    title: "Planning",
    desc: "We build a strategic roadmap, mapping out timelines, budgets, and key performance indicators.",
    tags: ["Resource Allocation", "Agile Roadmap", "KPI Setting"],
    metric: "On-Time Delivery",
    icon: <Map className="w-6 h-6 text-amber-500 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
  },
  {
    num: "03",
    title: "Execution",
    desc: "We bring the plan to life with precise implementation and real-time coordination.",
    tags: ["Agile Sprints", "Quality Assurance", "Live Tracking"],
    metric: "Zero Bottlenecks",
    icon: <Zap className="w-6 h-6 text-amber-500 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
  },
  {
    num: "04",
    title: "Coverage",
    desc: "We wrap up with full documentation, detailed reporting, and ongoing optimization.",
    tags: ["Data Analytics", "Performance Tuning", "Client Handoff"],
    metric: "Maximized ROI",
    icon: <LineChart className="w-6 h-6 text-amber-500 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]" />
  }
];

// Calculate dynamic path based on actual container pixels to avoid SVG scaling issues
const getPath = (w: number, h: number) => {
  if (w === 0 || h === 0) return "";
  const pX = (pct: number) => (pct / 100) * w;
  const pY = (pct: number) => (pct / 100) * h;
  return `M ${pX(10)} ${pY(25)} 
          C ${pX(20)} ${pY(25)}, ${pX(20)} ${pY(45)}, ${pX(30)} ${pY(45)} 
          C ${pX(40)} ${pY(45)}, ${pX(40)} ${pY(65)}, ${pX(55)} ${pY(65)} 
          C ${pX(70)} ${pY(65)}, ${pX(70)} ${pY(75)}, ${pX(90)} ${pY(75)}`;
};

const getPoints = (w: number, h: number) => {
  if (w === 0 || h === 0) return [];
  const pX = (pct: number) => (pct / 100) * w;
  const pY = (pct: number) => (pct / 100) * h;
  return [
    { cx: pX(10), cy: pY(25) },
    { cx: pX(30), cy: pY(45) },
    { cx: pX(55), cy: pY(65) },
    { cx: pX(90), cy: pY(75) },
  ];
};

const activeZones = [
  [0, 0.10, 0.20, 0.30],
  [0.20, 0.30, 0.45, 0.55],
  [0.45, 0.55, 0.70, 0.80],
  [0.70, 0.80, 0.95, 1.00],
];

function StepDot({ point, index, progress }: { point: { cx: number, cy: number }, index: number, progress: MotionValue<number> }) {
  const zone = activeZones[index];

  const scale = useTransform(progress, zone, [0.8, 1.3, 1.3, 0.8]);
  const opacity = useTransform(progress, zone, [0.5, 1, 1, 0.5]);
  const strokeWidth = useTransform(progress, zone, [2, 4, 4, 2]);

  return (
    <motion.circle
      cx={point.cx}
      cy={point.cy}
      r={10}
      style={{ scale, opacity, strokeWidth, transformOrigin: `${point.cx}px ${point.cy}px` }}
      fill="rgba(245, 158, 11, 1)"
      stroke="rgba(255,255,255,0.8)"
    />
  );
}

function DetailPanel({ step, index, zone, progress, side }: { step: any, index: number, zone: number[], progress: MotionValue<number>, side: "top-right" | "bottom-left" }) {
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  // Motion mappings for cinematic transitions
  const opacity = useTransform(progress, zone, [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);

  // Slide in vertically
  const yOffset = side === "top-right" ? -30 : 30;
  const y = useTransform(progress, zone, [isFirst ? 0 : yOffset, 0, 0, isLast ? 0 : -yOffset]);

  const blurRaw = useTransform(progress, zone, [isFirst ? 0 : 8, 0, 0, isLast ? 0 : 8]);
  const blur = useMotionTemplate`blur(${blurRaw}px)`;

  const positionClasses = side === "top-right"
    ? "top-16 right-6 md:top-24 md:right-12"
    : "bottom-6 left-6 md:bottom-16 md:left-12";

  return (
    <motion.div
      style={{ opacity, y, filter: blur }}
      className={`absolute ${positionClasses} z-40 hidden md:flex flex-col w-64 md:w-72 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-2xl pointer-events-none`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-amber-500 font-mono text-xs font-bold tracking-widest uppercase">
          Step {step.num}
        </span>
        <span className="flex items-center justify-center p-2 rounded-xl bg-gray-100 border border-gray-200">
          {step.icon}
        </span>
      </div>

      <div className="mb-5">
        <h5 className="text-[#154880] font-sans text-xl font-bold mb-1">{step.metric}</h5>
        <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">Target Metric</p>
      </div>

      <div className="space-y-3">
        {step.tags.map((tag: string, idx: number) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span className="text-gray-700 text-sm font-medium tracking-wide font-sans">{tag}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StepCard({ step, index, progress }: { step: any, index: number, progress: MotionValue<number> }) {
  const zone = activeZones[index];

  const isFirst = index === 0;
  const isLast = index === steps.length - 1;

  const opacity = useTransform(progress, zone, [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  const scale = useTransform(progress, zone, [isFirst ? 1 : 0.95, 1, 1, isLast ? 1 : 0.95]);
  const y = useTransform(progress, zone, [isFirst ? 0 : 40, 0, -10, isLast ? -10 : -50]);
  const x = useTransform(progress, zone, [isFirst ? 0 : 20, 0, -5, isLast ? -5 : -20]);

  const blurRaw = useTransform(progress, zone, [isFirst ? 0 : 8, 0, 0, isLast ? 0 : 8]);
  const blur = useMotionTemplate`blur(${blurRaw}px)`;

  const ghostOpacity = useTransform(
    progress,
    [zone[0] - 0.05, zone[1], zone[2], zone[3] + 0.05],
    [isFirst ? 0.15 : 0, 0.15, 0.15, isLast ? 0.15 : 0]
  );

  const shadowOpacity = useTransform(progress, zone, [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  const shadow = useMotionTemplate`0 0 20px rgba(245,158,11,${shadowOpacity})`;

  const positions = [
    "left-[5%] top-[10%] md:top-[15%]",
    "left-[15%] md:left-[25%] top-[30%] md:top-[35%]",
    "left-[25%] md:left-[50%] top-[50%] md:top-[55%]",
    "right-[5%] md:left-auto md:right-[5%] top-[60%] md:top-[65%]"
  ];

  return (
    <motion.div
      style={{ opacity, scale, y, x, filter: blur }}
      className={`absolute w-[80%] md:w-full max-w-sm ${positions[index]} z-20 origin-left pointer-events-none`}
    >
      <div className="relative p-6 md:p-8 mt-12 md:mt-20">
        <motion.span
          style={{ opacity: ghostOpacity }}
          className="absolute bottom-full translate-y-[45%] left-0 md:-left-4 text-[8rem] md:text-[14rem] font-bold font-mono text-[#14A9D6] select-none z-[-1] leading-none tracking-tighter pointer-events-none"
        >
          {step.num}
        </motion.span>

        <h4 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.15em] text-[#154880] mb-4 md:mb-6 pointer-events-auto font-sans">
          {step.title}
        </h4>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium max-w-[280px] pointer-events-auto font-sans">
          {step.desc}
        </p>

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
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  // Calculate actual dimensions to use exact pixels in SVG
  useEffect(() => {
    const updateSize = () => {
      if (svgContainerRef.current) {
        const { width, height } = svgContainerRef.current.getBoundingClientRect();
        setSvgSize({ w: width, h: height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const dynamicPath = getPath(svgSize.w, svgSize.h);

  return (
    <section ref={containerRef} style={{ height: "200vh" }} className="relative w-full bg-transparent border-t border-gray-200">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        <div className="absolute top-12 md:top-24 w-full text-center z-30 pointer-events-none">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#154880] drop-shadow-sm">
            Our Steps
          </h2>
        </div>

        <div ref={svgContainerRef} className="relative w-full max-w-7xl h-[80vh] mx-auto">

          {svgSize.w > 0 && (
            <svg
              viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
              className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
              <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>

              <path
                d={dynamicPath}
                fill="none"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="2"
                strokeDasharray="4 8"
                strokeLinecap="round"
              />

              {getPoints(svgSize.w, svgSize.h).map((pt, i) => (
                <StepDot key={`dot-${i}`} point={pt} index={i} progress={smoothProgress} />
              ))}

              <motion.path
                d={dynamicPath}
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#neon-glow)"
                style={{ pathLength: smoothProgress }}
              />
            </svg>
          )}

          {/* Step Cards */}
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} progress={smoothProgress} />
          ))}

          {/* Detail Panels: Top-Right (Steps 1 & 2) */}
          {[0, 1].map(i => (
            <DetailPanel key={`tr-${i}`} index={i} step={steps[i]} zone={activeZones[i]} progress={smoothProgress} side="top-right" />
          ))}

          {/* Detail Panels: Bottom-Left (Steps 3 & 4) */}
          {[2, 3].map(i => (
            <DetailPanel key={`bl-${i}`} index={i} step={steps[i]} zone={activeZones[i]} progress={smoothProgress} side="bottom-left" />
          ))}

        </div>
      </div>
    </section>
  );
}
