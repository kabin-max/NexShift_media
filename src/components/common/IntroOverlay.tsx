"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll when the overlay is visible
    document.body.style.overflow = "hidden";

    // Lock scroll when the overlay is visible
    document.body.style.overflow = "hidden";

    // Start fade-out at 2.5s
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }, 2500);

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
          className="fixed inset-0 z-[100] w-screen h-screen bg-[#FAFAFA] flex items-center justify-center pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center select-none"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tight drop-shadow-sm italic text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] leading-none text-center px-4">
              NexShift .
            </h1>
            <h2 className="mt-4 text-sm xs:text-xl md:text-2xl lg:text-4xl font-black tracking-tight drop-shadow-sm italic text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] leading-none text-center px-4">
              Media & Events
            </h2>

            <p className="mt-4 text-xs md:text-xl text-gray-500 tracking-widest text-center uppercase font-medium px-4">
              Where Idea Meet Market
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 flex justify-center w-full"
            >
              <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-[#0D7A95]/50 animate-spin" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
