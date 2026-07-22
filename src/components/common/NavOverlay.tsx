"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcons from "./SocialIcons";

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const primaryLinks = ["Home", "About Us", "Services"];
const secondaryLinks = ["Gallery", "Clients", "Contact Us"];

export default function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const pathname = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#FAFAFA]/95 backdrop-blur-md flex flex-col font-sans"
        >
          {/* Ambient Glows for premium feel */}
          <div className="absolute top-1/4 -left-[10%] w-[50%] h-[50%] bg-[#4C1D95]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-[-10%] w-[60%] h-[50%] bg-[#00a3d0]/8 blur-[180px] rounded-full pointer-events-none" />

          {/* Mirrored Header Area */}
          <header className="flex items-center justify-between w-full px-6 py-3 md:px-12 md:py-4 z-10 relative">
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-[#0D7A95] hover:border-[#0D7A95] hover:shadow-md transition-all cursor-pointer"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </button>

            {/* Logo */}
            <div
              className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-black italic tracking-tight drop-shadow-sm select-none"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              NexShift.
            </div>

            {pathname === "/about" ? (
              <Link href="/" onClick={() => onClose()} className="px-6 py-3 bg-[#0D7A95] hover:bg-[#14A9D6] text-white text-sm font-bold rounded-full transition-colors shadow-sm hover:shadow-md cursor-pointer">
                Go Back Home
              </Link>
            ) : (
              <Link href="/about" onClick={() => onClose()} className="px-6 py-3 bg-[#0D7A95] hover:bg-[#14A9D6] text-white text-sm font-bold rounded-full transition-colors shadow-sm hover:shadow-md cursor-pointer">
                About Us
              </Link>
            )}
          </header>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col items-center justify-center relative w-full h-full px-8 md:px-16 z-10">

            {/* Social Icons on right edge (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex"
            >
              <SocialIcons className="flex flex-col gap-6 items-center" />
            </motion.div>

            {/* Primary Nav Links */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 md:mb-32">
              {primaryLinks.map((link, idx) => {
                const isActive = link === "Homepage" || link === "Home";
                const href = link === "Home" || link === "Homepage" ? "/" : link === "About Us" ? "/about" : link === "Services" ? "/services" : link === "Gallery" ? "/gallery" : "#";
                return (
                  <Link
                    key={link}
                    href={href}
                    onClick={() => onClose()}
                    className={`text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight transition-all duration-300 block ${isActive ? "text-[#154880]" : "text-gray-400 hover:text-[#0D7A95]"
                      }`}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                      className={`inline-block ${isActive ? "drop-shadow-sm" : ""}`}
                    >
                      {link}
                    </motion.span>
                  </Link>
                );
              })}
            </div>

            {/* Secondary Links */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {secondaryLinks.map((link, idx) => {
                const href = link === "Gallery" ? "/gallery" : link === "Clients" ? "/#clients" : link === "Contact Us" ? "/#contact" : "#";
                return (
                  <Link
                    key={link}
                    href={href}
                    onClick={() => onClose()}
                    className="group"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-gray-500 group-hover:text-[#0D7A95] transition-colors"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.span>
                  </Link>
                );
              })}
            </div>

            {/* Social Icons (Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex md:hidden mt-16"
            >
              <SocialIcons className="flex gap-8 items-center" />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
