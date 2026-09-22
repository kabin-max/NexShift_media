"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroOverlay() {
  // null = unknown (SSR safe), true = show, false = skip
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [visibleCount, setVisibleCount] = useState(0);
  const text = "NexShift";

  // This component only mounts on a full document load (first visit, typed URL,
  // external link, or a browser reload). Next.js client-side route changes do
  // not reload the document, so they never remount this overlay. That means we
  // can simply always play the intro on mount — which gives us "replay on every
  // hard refresh" without any fragile navigation-type detection.
  useEffect(() => {
    setShouldShow(true);
  }, []);

  useEffect(() => {
    if (!shouldShow) return;
    let timer: NodeJS.Timeout;
    if (visibleCount < text.length) {
      // Add initial delay for the first letter
      const delay = visibleCount === 0 ? 600 : 250;
      timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [visibleCount, shouldShow]);

  useEffect(() => {
    if (!shouldShow) return;
    // Lock scroll when the overlay is visible
    document.body.style.overflow = "hidden";

    // Start fade-out at 4s
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [shouldShow]);

  // Don't render anything until we know whether to show (avoids SSR mismatch)
  // and skip entirely for non-load navigations (e.g. bfcache restore).
  if (shouldShow === false || shouldShow === null) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
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

            <div className="flex flex-row items-center justify-center gap-1 sm:gap-4 mb-6 w-full max-w-full px-4 sm:px-8 overflow-hidden">
              <div className="relative w-28 h-28 xs:w-40 xs:h-40 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 -ml-2 md:ml-0">
                <Image
                  src="/nst-logo.png"
                  alt="NexShift Logo"
                  fill
                  sizes="300px"
                  className="object-contain"
                  priority
                  loading="eager"
                />
              </div>
              <div className="flex flex-col min-w-0 -ml-2 xs:-ml-4 md:ml-0">
                <div role="heading" aria-level={2} className="relative text-[2.75rem] xs:text-[3.3rem] md:text-[5.5rem] lg:text-[7.7rem] xl:text-[8.8rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] leading-none text-left pr-[0.15em]">
                  {/* The actual text with gradient - some visible, some hidden to keep width */}
                  {text.split("").map((char, index) => (
                    <span key={index} style={{ visibility: index < visibleCount ? "visible" : "hidden" }}>
                      {char}
                    </span>
                  ))}

                  {/* The Cursor Overlay */}
                  <span className="absolute top-0 left-0 h-full flex items-center w-full">
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
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
                  className="mt-2 md:mt-4 text-xl xs:text-[1.65rem] md:text-[2.5rem] lg:text-[3.3rem] xl:text-[4.4rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] leading-none text-left"
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
