"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function AnimatedLogo() {
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 400], [0, 1]);
  const logoWrapperY = useMotionTemplate`calc(${progress} * (-50vh + 52px))`;
  const logoScale = useTransform(progress, [0, 1], [1, 0.115]);
  // Fade out near the end of the scroll animation.
  const scrollOpacity = useTransform(progress, [0.95, 1], [1, 0]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-[60] pb-[15vh] px-4 sm:px-8"
      style={{
        y: logoWrapperY,
        opacity: scrollOpacity,
        willChange: "transform, opacity",
      }}
    >
      {/* Fade the wordmark in only after the intro overlay has cleared, so it
          doesn't flash over the light background during a hard refresh. */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 0.6, ease: "easeOut" }}
        className="italic pr-[0.25em] text-[3.25rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] bg-fixed font-black tracking-tight whitespace-nowrap leading-none select-none"
        style={{
          scale: logoScale,
          transformOrigin: "center center",
          fontFamily: "var(--font-geist-sans)",
          willChange: "transform",
        }}
      >
        NexShift
      </motion.h1>
    </motion.div>
  );
}
