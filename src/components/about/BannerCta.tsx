"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BannerCta() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#154880] overflow-hidden px-6">
      <Image
        src="/bg-image.png"
        alt="Find House Faster Banner"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30 select-none pointer-events-none"
      />
      <div className="absolute inset-0 bg-[#154880]/80" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight drop-shadow-sm text-white leading-[1.05]">
          Find your <br className="hidden md:inline" />
          <span className="italic font-light">Dream Experience</span> <br />
          Faster
        </h2>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-24 h-24 bg-white text-[#154880] rounded-full flex items-center justify-center cursor-pointer shadow-xl hover:bg-gray-100 transition duration-300"
        >
          <ArrowUpRight className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}
