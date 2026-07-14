"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import Image from "next/image";

interface CardData {
  src: string;
  alt: string;
}

interface AnimatedPhotoStackProps {
  cards?: CardData[];
  onAnimationComplete?: () => void;
}

export default function AnimatedPhotoStack({ cards, onAnimationComplete }: AnimatedPhotoStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Default cards if none provided
  const defaultCards: CardData[] = [
    { src: "/bg-image.png", alt: "Workspace Creative Session" },
    { src: "/download.jpg", alt: "Corporate Presentation" },
    { src: "/bg-image.png", alt: "Strategic Planning" },
    { src: "/download.jpg", alt: "Event Production" },
    { src: "/bg-image.png", alt: "Branding Design" },
  ];

  const displayCards = cards || defaultCards;

  // ─── Scroll-Linked Progress ──────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  // Create entry motion values for each card to drive the load animation
  const entryProgressValues = displayCards.map(() => useMotionValue(0));

  useEffect(() => {
    // Trigger entry animations one by one after a short delay
    const animations = entryProgressValues.map((val, i) => {
      const delay = 0.8 + i * 0.16;
      return setTimeout(() => {
        animate(val, 1, {
          type: "spring",
          stiffness: 65,
          damping: 15,
          mass: 1,
          onComplete: i === displayCards.length - 1 ? onAnimationComplete : undefined,
        });
      }, delay * 1000);
    });

    return () => {
      animations.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  // Layout parameters
  const getFanX = (index: number, isMobile: boolean) => {
    const offsets = isMobile ? [-90, -45, 0, 45, 90] : [-265, -132, 0, 132, 265];
    return offsets[index] || 0;
  };

  const getFanY = (index: number, isMobile: boolean) => {
    const offsets = isMobile ? [12, 3, 0, 3, 12] : [24, 6, 0, 6, 24];
    return offsets[index] || 0;
  };

  const getFanRotate = (index: number, isMobile: boolean) => {
    const rotations = isMobile ? [-8, -4, 0, 4, 8] : [-12, -6, 0, 6, 12];
    return rotations[index] || 0;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[320px] md:h-[480px] flex items-center justify-center select-none z-10 overflow-visible"
    >
      {displayCards.map((card, i) => {
        const entryVal = entryProgressValues[i];

        // ─── Responsive & Scroll-linked Motion Transforms ───
        
        // Horizontal separation driven by scroll progress
        const x = useTransform(
          [entryVal, scrollYProgress],
          ([latestEntry, latestScroll]) => {
            const entry = latestEntry as number;
            const scroll = latestScroll as number;
            if (typeof window === "undefined") return 0;
            const isMobile = window.innerWidth < 768;
            const baseX = getFanX(i, isMobile);
            const scrollExtraX = (i - 2) * (isMobile ? 35 : 120) * scroll;
            return baseX * entry + scrollExtraX * entry;
          }
        );

        // Vertical curvature and parallax upward float driven by scroll progress
        const y = useTransform(
          [entryVal, scrollYProgress],
          ([latestEntry, latestScroll]) => {
            const entry = latestEntry as number;
            const scroll = latestScroll as number;
            if (typeof window === "undefined") return 0;
            const isMobile = window.innerWidth < 768;
            const baseY = getFanY(i, isMobile);
            const scrollExtraY = scroll * (isMobile ? -45 : -140) - (i * (isMobile ? 2 : 8));
            return baseY * entry + scrollExtraY * entry;
          }
        );

        // Rotation fanning and subtle scroll rotation adjustment
        const rotate = useTransform(
          [entryVal, scrollYProgress],
          ([latestEntry, latestScroll]) => {
            const entry = latestEntry as number;
            const scroll = latestScroll as number;
            if (typeof window === "undefined") return 0;
            const isMobile = window.innerWidth < 768;
            const baseRotate = getFanRotate(i, isMobile);
            const scrollExtraRotate = (i - 2) * (isMobile ? 2 : 4) * scroll;
            return baseRotate * entry + scrollExtraRotate * entry;
          }
        );

        return (
          <motion.div
            key={i}
            style={{
              x,
              y,
              rotate,
              zIndex: 10 + i,
            }}
            whileHover={{
              scale: 1.06,
              rotate: (typeof window !== "undefined" && window.innerWidth < 768 ? getFanRotate(i, true) : getFanRotate(i, false)) * 0.4,
              y: -25,
              zIndex: 100,
              boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.45), 0 12px 12px -5px rgba(0, 0, 0, 0.35)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 18
              }
            }}
            className="absolute w-[140px] h-[190px] md:w-[225px] md:h-[310px] bg-white p-2 md:p-3 border border-zinc-200/90 rounded shadow-xl flex-shrink-0 cursor-pointer origin-bottom transition-shadow duration-300"
          >
            <div className="relative w-full h-[85%] bg-zinc-100 overflow-hidden rounded-sm">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 140px, 225px"
                className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300 pointer-events-none"
              />
            </div>
            {/* Elegant spacing at bottom */}
            <div className="h-[15%] w-full flex items-center justify-center">
              <span className="text-[7px] md:text-[9px] uppercase tracking-wider text-zinc-400 font-mono">
                NexShift Collection
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
