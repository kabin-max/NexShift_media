"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection2() {
  const bioRef = useRef(null);
  const { scrollYProgress: bioProgress } = useScroll({
    target: bioRef,
    offset: ["start end", "end start"],
  });

  const bioY = useTransform(bioProgress, [0, 0.4], [80, 0]);
  const bioOpacity = useTransform(bioProgress, [0, 0.35], [0, 1]);

  // Staggered parallax per image for organic feel
  const img1Y = useTransform(bioProgress, [0.15, 0.55], [120, 0]);
  const img2Y = useTransform(bioProgress, [0.2, 0.6], [100, 0]);
  const img3Y = useTransform(bioProgress, [0.25, 0.65], [140, 0]);
  const img4Y = useTransform(bioProgress, [0.22, 0.62], [90, 0]);
  const img5Y = useTransform(bioProgress, [0.28, 0.68], [110, 0]);

  const img1Fade = useTransform(bioProgress, [0.15, 0.35], [0, 1]);
  const img2Fade = useTransform(bioProgress, [0.2, 0.4], [0, 1]);
  const img3Fade = useTransform(bioProgress, [0.25, 0.45], [0, 1]);
  const img4Fade = useTransform(bioProgress, [0.22, 0.42], [0, 1]);
  const img5Fade = useTransform(bioProgress, [0.28, 0.48], [0, 1]);

  // Subtle rotation settle per image
  const img1Rot = useTransform(bioProgress, [0.15, 0.55], [-12, -6]);
  const img2Rot = useTransform(bioProgress, [0.2, 0.6], [10, 5]);
  const img3Rot = useTransform(bioProgress, [0.25, 0.65], [-10, -4]);
  const img4Rot = useTransform(bioProgress, [0.22, 0.62], [7, 3]);
  const img5Rot = useTransform(bioProgress, [0.28, 0.68], [4, 2]);

  return (
    <section
      ref={bioRef}
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-start px-8 md:px-24 lg:px-32 pt-20 pb-12 md:pb-24 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="text-center px-6 mb-12">
        <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
          About Us
        </h2>
      </div>

      {/* Bio text — centered */}
      <motion.div
        className="max-w-3xl mx-auto text-center text-zinc-300 space-y-5 text-base md:text-lg leading-relaxed"
        style={{ y: bioY, opacity: bioOpacity }}
      >
        <p>
          Company XYX is a commercial director, photographer and visual creator
          based just outside Melbourne, working across the East Coast of
          Australia.
        </p>
        <p>
          We&apos;ve built a practice that sits somewhere between creative director,
          DOP and production manager — often all at once. Specialising in
          cinematic commercial production and mini-documentary content, XYX makes
          lean productions look and feel far larger than their budgets suggest.
        </p>
        <p>
          We work alongside brands and agencies on everything from strategy and
          scripting through to full execution — developing campaign concepts,
          directing talent, managing small crews and delivering content built to
          reach specific audiences. We understand both the cultural engineering
          behind brand building and the practical realities of getting it done.
        </p>
        <p className="text-white text-sm font-normal">
          Founder of félan films &amp; emble studio.
        </p>
      </motion.div>

      {/* ── 5-photo scattered collage ── */}
      {/* Tightly clustered with heavy overlap, matching reference design */}
      <div className="relative mt-16 w-full flex flex-col md:block items-center gap-12 md:gap-0 md:h-[680px] lg:h-[780px] pb-12 md:pb-0">

        {/* 1. Main Hero Image (Center-left) — portrait, largest, highest z */}
        <motion.div
          className="relative md:absolute w-[70%] md:w-[28%] max-w-[300px] aspect-[3/4] overflow-hidden shadow-2xl z-50 md:left-[22%] md:top-[3%] group"
          style={{ rotate: img1Rot, y: img1Y, opacity: img1Fade }}
        >
          <img
            src="/bg-image.png"
            alt="Visual 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* 2. Top-right photo (Forest aerial) — landscape, overlaps image 1 */}
        <motion.div
          className="relative md:absolute w-[75%] md:w-[32%] max-w-[360px] aspect-[4/3] overflow-hidden shadow-2xl z-40 md:left-[40%] md:top-[5%] group"
          style={{ rotate: img2Rot, y: img2Y, opacity: img2Fade }}
        >
          <img
            src="/bg-image.png"
            alt="Visual 2"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* 3. Bottom-left photo (Ice Cave) — landscape, tucked under image 1 */}
        <motion.div
          className="relative md:absolute w-[72%] md:w-[30%] max-w-[340px] aspect-[4/3] overflow-hidden shadow-2xl z-30 md:left-[10%] md:top-[42%] group"
          style={{ rotate: img3Rot, y: img3Y, opacity: img3Fade }}
        >
          <img
            src="/bg-image.png"
            alt="Visual 3"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* 4. Bottom-center-right (Person by waterfall) — overlaps 2 & 3 */}
        <motion.div
          className="relative md:absolute w-[68%] md:w-[28%] max-w-[310px] aspect-[4/3] overflow-hidden shadow-2xl z-35 md:left-[35%] md:top-[48%] group"
          style={{ rotate: img4Rot, y: img4Y, opacity: img4Fade }}
        >
          <img
            src="/bg-image.png"
            alt="Visual 4"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>



      </div>
    </section>
  );
}
