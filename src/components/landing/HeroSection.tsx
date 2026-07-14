"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const heroFade = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen pt-28 pb-12 px-4">
      {/* Bottom bar removed as requested */}
    </section>
  );
}
