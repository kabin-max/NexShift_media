"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, animate, MotionValue, useSpring } from "framer-motion";
import Image from "next/image";

interface CardData {
  src: string;
  alt: string;
}

interface AnimatedPhotoStackProps {
  cards?: CardData[];
  onAnimationComplete?: () => void;
}

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

interface PhotoCardProps {
  card: CardData;
  index: number;
  scrollYProgress: MotionValue<number>;
  isLast: boolean;
  onAnimationComplete?: () => void;
}

function PhotoCard({ card, index, scrollYProgress, isLast, onAnimationComplete }: PhotoCardProps) {
  const entryVal = useMotionValue(0);
  const hoverScale = useSpring(1, { stiffness: 300, damping: 18 });
  const hoverY = useSpring(0, { stiffness: 300, damping: 18 });
  const hoverShadow = useMotionValue("0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.2)");

  useEffect(() => {
    const delay = 0.8 + index * 0.16;
    const timeout = setTimeout(() => {
      animate(entryVal, 1, {
        type: "spring",
        stiffness: 65,
        damping: 15,
        mass: 1,
        onComplete: isLast ? onAnimationComplete : undefined,
      });
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [entryVal, index, isLast, onAnimationComplete]);

  // Horizontal separation driven by scroll progress
  const x = useTransform(
    [entryVal, scrollYProgress],
    ([latestEntry, latestScroll]) => {
      const entry = latestEntry as number;
      const scroll = latestScroll as number;
      if (typeof window === "undefined") return 0;
      const isMobile = window.innerWidth < 768;
      const baseX = getFanX(index, isMobile);
      const scrollExtraX = (index - 2) * (isMobile ? 35 : 120) * scroll;
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
      const baseY = getFanY(index, isMobile);
      const scrollExtraY = scroll * (isMobile ? -45 : -140) - (index * (isMobile ? 2 : 8));
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
      const baseRotate = getFanRotate(index, isMobile);
      const scrollExtraRotate = (index - 2) * (isMobile ? 2 : 4) * scroll;
      return baseRotate * entry + scrollExtraRotate * entry;
    }
  );

  return (
    <motion.div
      style={{
        x,
        y: hoverY,
        rotate,
        scale: hoverScale,
        zIndex: 10 + index,
        boxShadow: hoverShadow,
      }}
      onHoverStart={() => {
        hoverScale.set(1.06);
        hoverY.set(-25);
        hoverShadow.set("0 25px 30px -5px rgba(0, 0, 0, 0.45), 0 12px 12px -5px rgba(0, 0, 0, 0.35)");
      }}
      onHoverEnd={() => {
        hoverScale.set(1);
        hoverY.set(0);
        hoverShadow.set("0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.2)");
      }}
      className="absolute w-[140px] h-[190px] md:w-[225px] md:h-[310px] bg-white p-2 md:p-3 rounded-2xl shadow-xl flex-shrink-0 cursor-pointer origin-bottom"
    >
      <div className="relative w-full h-[85%] bg-zinc-100 overflow-hidden rounded-xl">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 140px, 225px"
          className="object-cover object-center pointer-events-none"
        />
      </div>
      <div className="h-[15%] w-full flex items-center justify-center">
        <span className="text-[7px] md:text-[9px] uppercase tracking-wider text-zinc-400 font-mono">
          NexShift Collection
        </span>
      </div>
    </motion.div>
  );
}

export default function AnimatedPhotoStack({ cards, onAnimationComplete }: AnimatedPhotoStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultCards: CardData[] = [
    { src: "/bg-image.png", alt: "Workspace Creative Session" },
    { src: "/bg-image.png", alt: "Corporate Presentation" },
    { src: "/bg-image.png", alt: "Strategic Planning" },
    { src: "/bg-image.png", alt: "Event Production" },
    { src: "/bg-image.png", alt: "Branding Design" },
  ];

  const displayCards = cards || defaultCards;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] md:h-[480px] flex items-center justify-center select-none z-10 overflow-visible"
    >
      {displayCards.map((card, i) => (
        <PhotoCard
          key={i}
          card={card}
          index={i}
          scrollYProgress={scrollYProgress}
          isLast={i === displayCards.length - 1}
          onAnimationComplete={onAnimationComplete}
        />
      ))}
    </div>
  );
}
