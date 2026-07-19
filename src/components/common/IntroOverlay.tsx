"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
// import { Outfit } from "next/font/google";

// const outfit = Outfit({
//   weight: "900",
//   subsets: ["latin"],
//   display: "swap",
// });

let hasShownIntro = false;

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(!hasShownIntro);

  useEffect(() => {
    if (hasShownIntro) return;
    hasShownIntro = true;

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
            className="text-white text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tight drop-shadow-2xl select-none italic"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            NexShift
            <p className="text-md md:text-xl text-white tracking-tight align-center text-center whitespace-nowrap leading-none select-none italic" >Media & Event Management</p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 flex justify-center w-full"
            >
              <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-white/60 animate-spin" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
