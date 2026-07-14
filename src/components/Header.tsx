"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import NavOverlay from "./NavOverlay";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add blur after scrolling down a bit
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between w-full px-6 py-3 md:px-12 md:py-4 transition-all duration-300 ${
          isScrolled ? "bg-black/20 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full text-black hover:bg-gray-200 transition shadow-md cursor-pointer"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* The animated XYX! logo will move here on scroll, so this space is left empty initially */}
        <div className="w-12 pointer-events-none" />

        <button className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition shadow-md cursor-pointer">
          Get In Touch
        </button>
      </header>

      <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
