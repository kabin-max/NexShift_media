"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function AnimatedLogo() {
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 400], [0, 1]);
  const logoWrapperY = useMotionTemplate`calc(${progress} * (-50vh + 52px))`;
  const logoScale = useTransform(progress, [0, 1], [1, 0.115]);
  const dynamicZ = useTransform(scrollY, (y) => (y > 150 ? 80 : 50));
  
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{
        y: logoWrapperY,
        zIndex: dynamicZ,
      }}
    >
      <motion.h1
        className="text-[7rem] sm:text-[10rem] md:text-[14rem] lg:text-[17rem] text-white tracking-tight drop-shadow-2xl whitespace-nowrap leading-none select-none"
        style={{
          fontFamily: "var(--font-permanent-marker), cursive",
          scale: logoScale,
          transformOrigin: "center center",
        }}
      >
        NexShift
      </motion.h1>
    </motion.div>
  );
}
