"use client";

import FlipStack from "@/components/ui/flipstack";
import CurvedGallery from "@/components/ui/curved-gallery";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function AboutHero() {
  const [galleryStyle, setGalleryStyle] = useState<"flip" | "curved">("curved");

  const galleryImages = [
    { id: 1, src: "/about/event-coverage.png", alt: "Event Coverage" },
    { id: 2, src: "/about/videography.png", alt: "Videography" },
    { id: 3, src: "/about/commercial-promo.png", alt: "Commercial Promo" },
    { id: 4, src: "/about/brand-promotion.png", alt: "Brand Promotion" },
    { id: 5, src: "/about/professional-photography.png", alt: "Photography" },
  ];
  const cards = [
    {
      id: 1,
      content: (
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src="/about/event-coverage.png"
            alt="Event Coverage - NexShift Media"
            fill
            sizes="(max-width: 768px) 400px, 320px"
            className="object-cover"
          />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src="/about/videography.png"
            alt="Videography and Editing - NexShift Media"
            fill
            sizes="(max-width: 768px) 400px, 320px"
            className="object-cover"
          />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src="/about/commercial-promo.png"
            alt="Commercial and Promotional Content - NexShift Media"
            fill
            sizes="(max-width: 768px) 400px, 320px"
            className="object-cover"
          />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src="/about/brand-promotion.png"
            alt="Brand Promotion - NexShift Media"
            fill
            sizes="(max-width: 768px) 400px, 320px"
            className="object-cover"
          />
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src="/about/professional-photography.png"
            alt="Professional Photography - NexShift Media"
            fill
            sizes="(max-width: 768px) 400px, 320px"
            className="object-cover"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full md:min-h-screen bg-transparent flex flex-col justify-start pt-8 md:pt-12 pb-10 md:pb-20 overflow-hidden px-[5%]">
      {/* Ambient globs — top-right cyan, bottom-left navy */}
      <div className="absolute -top-[5%] -right-[5%] w-[45%] h-[55%] bg-[#00a3d0]/10 blur-[140px] rounded-full pointer-events-none z-0 transform-gpu" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] bg-[#00a3d0]/40 blur-[160px] rounded-full pointer-events-none z-0 transform-gpu" />
      {/* Large centered radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00a3d0]/8 blur-[180px] rounded-full pointer-events-none z-0 transform-gpu" />

      {/* Decorative Floating Circles removed as requested */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center text-center gap-2 z-10 relative">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold font-sans tracking-tight text-[#154880] drop-shadow-sm pt-4 md:pt-8" 
        >
          ABOUT US
        </motion.h1>

        {/* Image Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full items-center justify-center -my-4 md:-my-8"
        >
          <CurvedGallery images={galleryImages} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="w-full flex flex-col items-center space-y-6 relative z-20"
        >
          <p className="text-gray-700 font-medium text-lg md:text-xl leading-relaxed max-w-3xl font-sans">
            <strong>NexShift</strong> is a premier digital marketing and event management agency based in Kathmandu, Nepal. We are a creative collective of visual storytellers, directors, and performance marketers specializing in corporate events, SEO, and cinematic brand campaigns that drive real growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
