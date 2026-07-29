"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
// import NavOverlay from "./NavOverlay";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add blur after the NexShift text finishes its animation and reaches the top
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[70] flex items-center justify-between md:justify-end w-full px-4 py-3 md:px-12 md:py-4 transition-colors duration-300 ${isScrolled ? "bg-white/20 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
      >

        <Link
          href="/"
          className={`flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center justify-center gap-2 md:gap-3 transition-opacity duration-300 ${pathname === "/" && !isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
        >
          <Image src="/nst-logo.png?v=3" alt="NexShift Logo" width={56} height={56} className="object-contain w-12 h-12 md:w-14 md:h-14 drop-shadow-sm" unoptimized />
          <span
            className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-black italic tracking-tight drop-shadow-sm whitespace-nowrap leading-none select-none"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            NexShift .
          </span>
        </Link>

        {pathname === "/about" || pathname === "/services" ? (
          <Link href="/" className="px-4 py-2 md:px-6 md:py-3 bg-[#0D7A95] text-white hover:bg-[#14A9D6] text-xs md:text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer pointer-events-auto whitespace-nowrap">
            Go Back Home
          </Link>
        ) : (
          <Link href="/about" className="px-4 py-2 md:px-6 md:py-3 bg-[#0D7A95] text-white hover:bg-[#14A9D6] text-xs md:text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer pointer-events-auto whitespace-nowrap">
            About Us
          </Link>
        )}
      </motion.header>

    </>
  );
}
