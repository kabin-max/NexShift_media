"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BannerCta() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-zinc-900 overflow-hidden px-6">
      <Image
        src="/bg-image.png"
        alt="Find House Faster Banner"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30 select-none pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-[1.05]">
          Find your <br className="hidden md:inline" />
          <span className="italic font-light">Dream Experience</span> <br />
          Faster
        </h2>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center cursor-pointer shadow-2xl hover:bg-amber-400 transition duration-300"
        >
          <ArrowUpRight className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}
