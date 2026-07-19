"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate, useMotionValue } from "framer-motion";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");
  const count = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(Math.floor(latest).toString());
        }
      });
      return () => controls.stop();
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-bold tracking-tight text-white font-mono block">
      {display}{suffix}
    </span>
  );
}

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            Our Story
          </h2>
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
              <AnimatedNumber value={150} suffix="+" />
              <span className="text-zinc-500 text-xs uppercase tracking-widest mt-2 block">Projects Completed</span>
            </div>

            <div>
              <AnimatedNumber value={50} suffix="+" />
              <span className="text-zinc-500 text-xs uppercase tracking-widest mt-2 block">Happy Clients</span>
            </div>

            <div>
              <AnimatedNumber value={5} suffix="M+" />
              <span className="text-zinc-500 text-xs uppercase tracking-widest mt-2 block">Audience Reached</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
