"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll when the overlay is visible
    document.body.style.overflow = "hidden";
    
    // Hide the overlay after a short delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 2000);

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
          className="fixed inset-0 z-[100] w-screen h-screen bg-black flex items-center justify-center pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white text-5xl md:text-7xl lg:text-[8rem] tracking-tight drop-shadow-2xl select-none"
            style={{ fontFamily: "var(--font-permanent-marker), cursive" }}
          >
            NexShift
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
