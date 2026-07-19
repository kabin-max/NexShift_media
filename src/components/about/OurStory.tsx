"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OurStory() {
  const storyRef = useRef(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyY = useTransform(storyProgress, [0, 0.5], [60, 0]);

  return (
    <section id="story" ref={storyRef} className="relative w-full py-24 md:py-32 bg-black px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 items-center">

        <div className="w-full text-center">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Our Story
          </h3>
        </div>

        <div className="w-full max-w-4xl space-y-16">
          <motion.div
            style={{ y: storyY }}
            className="text-zinc-400 space-y-6 text-lg leading-relaxed font-light"
          >
            <p className="text-white text-xl font-medium leading-relaxed">
              Born from a passion for creativity and strategic excellence, NexShift was founded with a clear vision: to bridge the gap between powerful storytelling and measurable business results.
            </p>
            <p>
              What started as a small team with big ambitions has grown into one of Nepal&apos;s most trusted creative agencies. We&apos;ve successfully managed 150+ projects, partnered with 50+ organizations, and helped brands reach audiences of over 5 million people.
            </p>
            <p>
              Today, we proudly serve corporate enterprises, ambitious startups, banking institutions, educational organizations, NGOs, and government bodies—always maintaining the same commitment to quality, creativity, and measurable impact.
            </p>
          </motion.div>

          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-12 w-full text-center sm:text-left mt-12 border-t border-white/10">
            <div>
              <span className="text-6xl md:text-7xl font-bold tracking-tight text-white font-mono block">150+</span>
              <span className="text-zinc-500 text-xs uppercase tracking-widest mt-2 block">Projects Completed</span>
            </div>

            <div>
              <span className="text-6xl md:text-7xl font-bold tracking-tight text-white font-mono block">50+</span>
              <span className="text-zinc-500 text-xs uppercase tracking-widest mt-2 block">Happy Clients</span>
            </div>

            <div>
              <span className="text-6xl md:text-7xl font-bold tracking-tight text-white font-mono block">5M+</span>
              <span className="text-zinc-500 text-xs uppercase tracking-widest mt-2 block">Audience Reached</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
