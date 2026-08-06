"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleCount, setVisibleCount] = useState(0);
  const text = "NexShift";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visibleCount < text.length) {
      // Add initial delay for the first letter
      const delay = visibleCount === 0 ? 600 : 250;
      timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [visibleCount]);

  useEffect(() => {
    // Lock scroll when the overlay is visible
    document.body.style.overflow = "hidden";

    // Start fade-out at 6s for a balanced experience
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 6000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] w-screen h-screen bg-black flex items-center justify-center pointer-events-auto overflow-hidden"
        >
          {/* Background Video looping at 12 seconds */}
          <video
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="/video-cut.mp4" type="video/mp4" />
          </video>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center select-none relative z-10"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            {/* Reliable white glowing shadow behind everything */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] bg-white/30 blur-[80px] rounded-full z-[-1] pointer-events-none" />
            
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mb-6">
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] shrink-0">
                <Image 
                  src="/nst-logo.png"
                  alt="NexShift Logo"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                  priority
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="relative text-5xl xs:text-6xl md:text-[6rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] leading-none text-left">
                  {/* The actual text with gradient - some visible, some hidden to keep width */}
                  {text.split("").map((char, index) => (
                    <span key={index} style={{ visibility: index < visibleCount ? "visible" : "hidden" }}>
                      {char}
                    </span>
                  ))}
                  
                  {/* The Cursor Overlay */}
                  <span className="absolute top-0 left-0 h-full flex items-center">
                    {/* Invisible spacer pushing the cursor exactly to the end of typed text */}
                    <span className="opacity-0">{text.slice(0, visibleCount)}</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block font-light text-[#14A9D6] -ml-1 md:-ml-2"
                      style={{ WebkitTextFillColor: '#14A9D6' }}
                    >
                      |
                    </motion.span>
                  </span>
                </h1>
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
                  className="mt-2 md:mt-4 text-2xl xs:text-3xl md:text-5xl lg:text-7xl xl:text-[6rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] leading-none text-left"
                >
                  Media & Events
                </motion.h2>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
