"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaVimeoV } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ─── Scroll-linked transforms ───────────────────────── */
  const { scrollY } = useScroll();

  // Animation progress from 0 to 1 as we scroll 400px
  const progress = useTransform(scrollY, [0, 400], [0, 1]);
  // Use pure CSS math to calculate the perfect translation dynamically.
  // -50vh moves the center to the top edge, +52px pushes it down to the nav center.
  // Multiplying by progress gives us a smooth transition.
  const logoWrapperY = useMotionTemplate`calc(${progress} * (-50vh + 52px))`;
  const logoScale    = useTransform(progress, [0, 1], [1, 0.115]);

  // Fade out the static "X Y X" text in the header as the logo arrives
  const headerLogoOpacity = useTransform(scrollY, [200, 380], [1, 0]);

  // Hero peripherals fade out
  const heroFade = useTransform(scrollY, [0, 300], [1, 0]);

  /* ── About section 1 parallax ────────────────────── */
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutImageScale = useTransform(aboutProgress, [0, 1], [1.1, 1]);
  const aboutImageY     = useTransform(aboutProgress, [0, 1], [-40, 40]);
  const badgeScale      = useTransform(aboutProgress, [0, 0.5, 1], [0.6, 1, 1]);
  const badgeOpacity    = useTransform(aboutProgress, [0, 0.4, 1], [0, 1, 1]);

  /* ── About section 2 (bio) ───────────────────────── */
  const bioRef = useRef(null);
  const { scrollYProgress: bioProgress } = useScroll({
    target: bioRef,
    offset: ["start end", "end start"],
  });
  const bioY       = useTransform(bioProgress, [0, 0.4], [80, 0]);
  const bioOpacity = useTransform(bioProgress, [0, 0.35], [0, 1]);

  const leftImgRotate  = useTransform(bioProgress, [0.2, 0.6], [-12, -6]);
  const rightImgRotate = useTransform(bioProgress, [0.25, 0.65], [12, 6]);
  const leftImgY       = useTransform(bioProgress, [0.2, 0.6], [80, 0]);
  const rightImgY      = useTransform(bioProgress, [0.25, 0.65], [100, 0]);
  const imgsFade       = useTransform(bioProgress, [0.2, 0.45], [0, 1]);

  return (
    <main className="relative flex flex-col w-full text-white font-sans bg-black">

      {/* ── Fixed background ────────────────────────────── */}
      <div className="fixed inset-0 z-0">
        <Image src="/bg-image.png" alt="Background" fill className="object-cover object-center opacity-60" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ── Fixed Header ────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between w-full px-8 py-6 md:px-12 md:py-8 pointer-events-none">
        <button 
          onClick={() => setMenuOpen(true)}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-100 transition shadow-md cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* The animated XYX! logo will move here on scroll, so this space is left empty initially */}
        <div className="w-12 pointer-events-none" />

        <Link 
          href="/about"
          className="pointer-events-auto px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition shadow-md"
        >
          About Us
        </Link>
      </header>

      {/* ── Navigation Menu Overlay ─────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 flex flex-col items-center justify-center bg-black/95 backdrop-blur-lg"
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 left-8 md:left-12 flex items-center justify-center w-12 h-12 bg-white/10 rounded-full text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)}
                className="text-4xl md:text-5xl font-bold tracking-tight text-amber-500 hover:text-amber-400 transition"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMenuOpen(false)}
                className="text-4xl md:text-5xl font-bold tracking-tight hover:text-amber-400 transition"
              >
                About Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fixed Social Icons ──────────────────────────── */}
      <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center z-50">
        <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><FaInstagram className="w-4 h-4 md:w-5 md:h-5" /></a>
        <a href="#" aria-label="Vimeo"     className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><FaVimeoV    className="w-4 h-4 md:w-5 md:h-5" /></a>
        <a href="#" aria-label="Facebook"  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><FaFacebookF className="w-4 h-4 md:w-5 md:h-5" /></a>
        <a href="#" aria-label="YouTube"   className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><FaYoutube   className="w-4 h-4 md:w-5 md:h-5" /></a>
      </div>

      {/* ── Animated XYX! Logo ──────────────────────────
          Wrapper: fixed full-screen, flexbox-centered (y=0 = center).
          On scroll: wrapper moves UP to bring text into navbar.
          Scale shrinks simultaneously on the inner h1.
      ────────────────────────────────────────────────── */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        style={{
          y: logoWrapperY,
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
          XYX!
        </motion.h1>
      </motion.div>

      {/* ── Page Sections ───────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col">

        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen pt-28 pb-12 px-4">

          {/* Bottom bar */}
          <motion.footer
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 text-xs font-medium tracking-wider opacity-80"
            style={{ opacity: heroFade }}
          >
            <span>37.8136° S, 144.9631° E</span>
            <span className="hidden sm:block">Creating amazing experiences in Melbourne / Australia</span>
          </motion.footer>
        </section>

        {/* ABOUT 1 — full-bleed */}
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

        {/* ─── ABOUT — Bio text section (matches about2.png) ─── */}
        <section ref={bioRef} className="relative w-full min-h-screen bg-black text-white flex flex-col justify-start px-8 md:px-24 lg:px-32 pt-20 pb-32 overflow-hidden">

          {/* Bio text — centered */}
          <motion.div
            className="max-w-3xl mx-auto text-center text-zinc-300 space-y-5 text-base md:text-lg leading-relaxed"
            style={{ y: bioY, opacity: bioOpacity }}
          >
            <p>
              Company XYX is a commercial director, photographer and visual creator based just outside Melbourne, working across the East Coast of Australia.
            </p>
            <p>
              We've built a practice that sits somewhere between creative director, DOP and production manager — often all at once. Specialising in cinematic commercial production and mini-documentary content, XYX makes lean productions look and feel far larger than their budgets suggest.
            </p>
            <p>
              We work alongside brands and agencies on everything from strategy and scripting through to full execution — developing campaign concepts, directing talent, managing small crews and delivering content built to reach specific audiences. We understand both the cultural engineering behind brand building and the practical realities of getting it done.
            </p>
            <p className="text-white text-sm font-normal">
              Founder of félan films &amp; emble studio.
            </p>
          </motion.div>

          {/* ── 4-photo scattered collage (matches about3.png) ── */}
          {/* Positioned in bottom half of section, overlapping slightly */}
          <div className="relative mt-16 w-full h-[520px] md:h-[640px] lg:h-[700px]">

            {/* Top-left photo — tilted left */}
            <motion.div
              className="absolute left-[10%] top-0 w-[28%] max-w-[280px] aspect-[3/4] overflow-hidden shadow-2xl z-20"
              style={{ rotate: leftImgRotate, y: leftImgY, opacity: imgsFade }}
            >
              <img src="/bg-image.png" alt="Visual 1" className="w-full h-full object-cover" />
            </motion.div>

            {/* Top-right photo — tilted right */}
            <motion.div
              className="absolute right-[5%] top-[2%] w-[32%] max-w-[320px] aspect-[4/3] overflow-hidden shadow-2xl z-10"
              style={{ rotate: rightImgRotate, y: rightImgY, opacity: imgsFade }}
            >
              <img src="/bg-image.png" alt="Visual 2" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom-left photo — slightly tilted left */}
            <motion.div
              className="absolute left-[2%] top-[38%] w-[30%] max-w-[300px] aspect-[4/3] overflow-hidden shadow-2xl z-10"
              style={{ rotate: useTransform(bioProgress, [0.2, 0.6], [-8, -4]), y: leftImgY, opacity: imgsFade }}
            >
              <img src="/bg-image.png" alt="Visual 3" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom-right photo — slightly tilted right */}
            <motion.div
              className="absolute right-[12%] top-[42%] w-[26%] max-w-[260px] aspect-[3/4] overflow-hidden shadow-2xl z-20"
              style={{ rotate: useTransform(bioProgress, [0.25, 0.65], [8, 4]), y: rightImgY, opacity: imgsFade }}
            >
              <img src="/bg-image.png" alt="Visual 4" className="w-full h-full object-cover" />
            </motion.div>

            {/* Ambient dust glow — left */}
            <div className="absolute left-0 top-1/3 w-64 h-64 opacity-15 rounded-full blur-3xl pointer-events-none bg-amber-700" />
            {/* Ambient dust glow — right */}
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10 rounded-full blur-3xl pointer-events-none bg-stone-500" />
          </div>

        </section>


      </div>
    </main>
  );
}
