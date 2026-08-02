"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Layer 1 – background drifts slowly downward and zooms in
  const bgY = useTransform(scrollY, [0, 1000], [0, 130]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.25]);

  // Layer 2 – image card glides gently upward
  const midY = useTransform(scrollY, [0, 1000], [0, -90]);

  // Layer 3 – foreground rises fastest
  const fgY = useTransform(scrollY, [0, 1000], [0, -220]);

  // Bottom info bar fades out smoothly
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  // ── Card top positioning ───────────────────────────────────────────
  // AnimatedLogo text sizes (leading-none, so height ≈ font-size):
  //   default 7rem  → half = 3.5rem  → 0.9× = 3.15rem ≈ 3rem
  //   sm      10rem → half = 5rem    → 0.9× = 4.5rem
  //   md      14rem → half = 7rem    → 0.9× = 6.3rem
  //   lg      17rem → half = 8.5rem  → 0.9× = 7.65rem
  // card top = 50vh + (text_half × 0.9) gives exactly 5% overlap.

  return (
    <section className="relative w-full h-screen bg-transparent overflow-hidden flex items-end pb-12 px-6 md:px-12 select-none">
      <h1 className="sr-only">NexShift - Event Management Company & Digital Marketing Agency in Kathmandu, Nepal</h1>

      {/* ── Layer 1: Background sky / hills ──────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none origin-bottom"
        style={{ y: bgY, scale: bgScale, willChange: "transform" }}
      >
        {/* Slightly oversized so parallax travel never reveals edges */}
        <div className="absolute -inset-[10%] w-[120%] h-[120%]">
          <Image
            src="/images/hero-bg.jpg"
            alt="Parallax Background"
            fill
            sizes="100vw"
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-white/10" />
      </motion.div>

      {/* ── Layer 2: download.png card (Currently disabled) ──────────── */}
      <motion.div
        className="
          absolute left-1/2 -translate-x-1/2 z-[60] pointer-events-none
          top-[calc(50vh+3rem)]
          sm:top-[calc(50vh+4.5rem)]
          md:top-[calc(50vh+6.3rem)]
          lg:top-[calc(50vh+7.65rem)]
        "
        style={{ y: midY, willChange: "transform" }}
      >
      </motion.div>

      {/* ── Layer 3: Foreground mountain silhouette ───────────────────── */}
      <motion.div
        className="absolute -top-[20%] left-0 right-0 -bottom-[300px] z-[60] pointer-events-none"
        style={{ y: fgY, willChange: "transform" }}
      >

        <Image
          src="/images/hero-mountain.png"
          alt="Parallax Foreground"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] md:object-[center_35%] lg:object-[center_45%]"
        />
      </motion.div>


      {/* ── Info overlay (Andy Hardy style) ──────────────────────────── */}
      <motion.div
        className="relative z-30 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-gray-800 text-sm"
        style={{ opacity: contentOpacity }}
      >
      </motion.div>



      {/* ── Bottom fade into next section ────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/70 via-white/50 to-transparent pointer-events-none z-30" />

      {/* Spinning Badge at the very end */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 1.5 }}
        className="absolute bottom-4 right-4 sm:right-12 md:bottom-5 md:right-24 w-[75px] h-[75px] md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl z-[60]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_14s_linear_infinite]">

          <path id="circlePath" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
          <text fill="#171717" fontSize="9" letterSpacing="3" fontWeight="bold">
            <textPath href="#circlePath" startOffset="0%">  NexShift - Event  & Media -</textPath>
          </text>
        </svg>
        {/* Logo in the center of the rotating text */}
        <Image src="/nst-logo.png" alt="NexShift Logo" width={80} height={80} className="absolute z-10 object-contain w-14 h-14 md:w-20 md:h-20 drop-shadow-sm" />

      </motion.div>
    </section>
  );
}

