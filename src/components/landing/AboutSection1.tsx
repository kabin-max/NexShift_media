"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection1() {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const aboutImageScale = useTransform(aboutProgress, [0, 1], [1.1, 1]);
  const aboutImageY = useTransform(aboutProgress, [0, 1], [-40, 40]);
  const badgeScale = useTransform(aboutProgress, [0, 0.5, 1], [0.6, 1, 1]);
  const badgeOpacity = useTransform(aboutProgress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <section ref={aboutRef} className="relative w-full h-screen bg-black overflow-hidden">
      <motion.img
        src="/bg-image.png"
        alt="About XYX"
        className="w-full h-full object-cover object-center opacity-80"
        style={{ scale: aboutImageScale, y: aboutImageY }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

      <motion.div
        className="absolute bottom-14 right-12 md:bottom-20 md:right-24 w-32 h-32 md:w-40 md:h-40 bg-black rounded-full flex items-center justify-center shadow-2xl"
        style={{ scale: badgeScale, opacity: badgeOpacity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_14s_linear_infinite]">
          <path id="circlePath" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
          <text fill="white" fontSize="9" letterSpacing="3">
            <textPath href="#circlePath" startOffset="0%">CREATIVE AGENCY • XYX • CREATIVE AGENCY •</textPath>
          </text>
        </svg>
      </motion.div>
    </section>
  );
}
