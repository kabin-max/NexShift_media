"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
// import { Outfit } from "next/font/google";

// const outfit = Outfit({
//   weight: "900",
//   subsets: ["latin"],
//   display: "swap",
// });

export default function AnimatedLogo() {
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 400], [0, 1]);
  const logoWrapperY = useMotionTemplate`calc(${progress} * (-50vh + 52px))`;
  const logoScale = useTransform(progress, [0, 1], [1, 0.115]);
  const dynamicZ = useTransform(scrollY, (y) => (y > 150 ? 80 : 50));
  const opacity = useTransform(progress, [0.95, 1], [1, 0]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{
        y: logoWrapperY,
        zIndex: dynamicZ,
        opacity,
      }}
    >
      <motion.h1
        className="text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[17rem] text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-black italic tracking-tight drop-shadow-2xl whitespace-nowrap leading-none select-none"
        style={{
          scale: logoScale,
          transformOrigin: "center center",
          fontFamily: 'var(--font-geist-sans)',
        }}
      >

        NexShift .
      </motion.h1>
    </motion.div>
  );
}
