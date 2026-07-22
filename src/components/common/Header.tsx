"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavOverlay from "./NavOverlay";

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
      <header
        className={`fixed top-0 left-0 right-0 z-[70] flex items-center justify-between w-full px-6 py-3 md:px-12 md:py-4 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
      >
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full text-gray-600 hover:text-[#0D7A95] hover:bg-gray-50 border border-gray-200 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {pathname === "/" ? (
          <div className="w-12 pointer-events-none" />
        ) : (
          <Link href="/" className="pointer-events-auto cursor-pointer flex items-center justify-center">
            <span 
              className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-black italic tracking-tight drop-shadow-sm whitespace-nowrap leading-none select-none"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              NexShift
            </span>
          </Link>
        )}

        {pathname === "/about" || pathname === "/services" ? (
          <Link href="/" className="px-6 py-3 bg-[#0D7A95] text-white hover:bg-[#14A9D6] text-sm font-bold rounded-full transition-colors shadow-sm hover:shadow-md cursor-pointer pointer-events-auto">
            Go Back Home
          </Link>
        ) : (
          <Link href="/about" className="px-6 py-3 bg-[#0D7A95] text-white hover:bg-[#14A9D6] text-sm font-bold rounded-full transition-colors shadow-sm hover:shadow-md cursor-pointer pointer-events-auto">
            About Us
          </Link>
        )}
      </header>

      <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
