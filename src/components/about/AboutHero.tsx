"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AnimatedPhotoStack from "./AnimatedPhotoStack";

export default function AboutHero() {
  const [fanned, setFanned] = useState(false);
  const { scrollY } = useScroll();
  const heroFade = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen pt-32 pb-16 px-6">
      <motion.div
        style={{ opacity: heroFade }}
        className="w-full max-w-6xl flex flex-col items-center"
      >
        <div className="w-full mb-12 flex justify-center overflow-visible">
          <AnimatedPhotoStack onAnimationComplete={() => setFanned(true)} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={fanned ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl"
        >
          <span className="text-amber-500 font-semibold tracking-widest text-xs uppercase mb-4">
            About Us
          </span>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="#story" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition shadow-lg flex items-center gap-2 group text-sm">
              Explore Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/" className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition text-sm">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.footer
        className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 text-xs font-medium tracking-wider opacity-60 text-zinc-400"
        style={{ opacity: heroFade }}
      >
        <span>27.7172° N, 85.3240° E</span>
        <span className="hidden sm:block">Shifting perspectives from Kathmandu, Nepal</span>
      </motion.footer>
    </section>
  );
}
