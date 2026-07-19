"use client";

import { motion, Variants } from "framer-motion";

export default function ServicesHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-16 text-center flex flex-col items-center">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center space-y-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl"
        >
          Services
        </motion.h1>

        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-4xl font-semibold text-zinc-200 leading-snug max-w-4xl"
        >
          Everything You Need to <br className="hidden md:block" /> Dominate Your Market.
        </motion.h3>

        <motion.div variants={itemVariants} className="w-16 h-1 bg-white/20 rounded-full my-4" />

        <motion.p
          variants={itemVariants}
          className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed"
        >
          From digital campaigns to large-scale events and cinematic productions — we deliver end-to-end solutions that drive real results.
        </motion.p>
      </motion.div>
    </div>
  );
}
