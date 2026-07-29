"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // ── Spring config for fluid parallax feel ──────────────────────────
  const springCfg = { damping: 30, stiffness: 80, mass: 0.6 };

  // Layer 1 – background drifts slowly downward and zooms in
  const rawBgY = useTransform(scrollY, [0, 1000], [0, 130]);
  const rawBgScale = useTransform(scrollY, [0, 1000], [1, 1.25]);
  const bgY = useSpring(rawBgY, springCfg);
  const bgScale = useSpring(rawBgScale, springCfg);

  // Layer 2 – image card glides gently upward
  const rawMidY = useTransform(scrollY, [0, 1000], [0, -90]);
  const midY = useSpring(rawMidY, springCfg);

  // Layer 3 – foreground rises fastest
  const rawFgY = useTransform(scrollY, [0, 1000], [0, -220]);
  const fgY = useSpring(rawFgY, springCfg);

  // Bottom info bar fades out smoothly
  const rawOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const contentOpacity = useSpring(rawOpacity, { damping: 20, stiffness: 80 });

  // ── Card top positioning ───────────────────────────────────────────
  // AnimatedLogo text sizes (leading-none, so height ≈ font-size):
  //   default 7rem  → half = 3.5rem  → 0.9× = 3.15rem ≈ 3rem
  //   sm      10rem → half = 5rem    → 0.9× = 4.5rem
  //   md      14rem → half = 7rem    → 0.9× = 6.3rem
  //   lg      17rem → half = 8.5rem  → 0.9× = 7.65rem
  // card top = 50vh + (text_half × 0.9) gives exactly 5% overlap.

  return (
    <section className="relative w-full h-screen bg-transparent overflow-hidden flex items-end pb-12 px-6 md:px-12 select-none">

      {/* ── Layer 1: Background sky / hills ──────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none origin-bottom"
        style={{ y: bgY, scale: bgScale }}
      >
        {/* Slightly oversized so parallax travel never reveals edges */}
        <div className="absolute -inset-[10%] w-[120%] h-[120%]">
          <Image
            src="https://andyhardy.co/assets/img/landscape_background_small.jpg"
            alt="Parallax Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-white/10" />
      </motion.div>

      {/* ── Layer 2: download.png card ────────────────────────────────
           z-[60] puts this ABOVE the fixed AnimatedLogo (z-50).
           Top is calculated per-breakpoint so card top = text_bottom − 5%,
           making the PNG cover the bottom 5% of the "NexShift" text.        */}
      <motion.div
        className="
          absolute left-1/2 -translate-x-1/2 z-[60] pointer-events-none
          top-[calc(50vh+3rem)]
          sm:top-[calc(50vh+4.5rem)]
          md:top-[calc(50vh+6.3rem)]
          lg:top-[calc(50vh+7.65rem)]
        "
        style={{ y: midY }}
      >
        {/* <div className="relative w-[260px] h-[370px] sm:w-[330px] sm:h-[450px] md:w-[400px] md:h-[530px] overflow-hidden rounded-lg shadow-[0_24px_64px_rgba(0,0,0,0.9)] border border-white/5">
          <Image
            src="/download.png"
            alt="Scrollable Middle Subject"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
        </div> */}
      </motion.div>

      {/* ── Layer 3: Foreground mountain silhouette ───────────────────── */}
      <motion.div
        className="absolute inset-0 z-[60] pointer-events-none"
      >

        <img
          src="https://andyhardy.co/assets/img/landscape_mountain_small.png"
          alt="Parallax Foreground"
          className="w-full h-full object-cover object-[center_70%] md:object-[center_50%] lg:object-[center_40%]"
        />
      </motion.div>


      {/* ── Info overlay (Andy Hardy style) ──────────────────────────── */}
      <motion.div
        className="relative z-30 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-gray-800 text-sm"
        style={{ opacity: contentOpacity }}
      >
      </motion.div>



      {/* ── Bottom fade into next section ────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent pointer-events-none z-30" />

      {/* Spinning Badge at the very end */}
      <motion.div
        className="absolute bottom-4 right-4 sm:right-12 md:bottom-5 md:right-24 w-[100px] h-[100px] md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl z-[60]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_14s_linear_infinite]">

          <path id="circlePath" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
          <text fill="#171717" fontSize="9" letterSpacing="3" fontWeight="bold">
            <textPath href="#circlePath" startOffset="0%">  NexShift - Event  & Media -</textPath>
          </text>
        </svg>
        {/* Logo in the center of the rotating text */}
        <img src="/nst-logo.png" alt="NST Logo" className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full object-contain z-10 bg-white shadow-inner p-1" />

      </motion.div>
    </section>
  );
}

