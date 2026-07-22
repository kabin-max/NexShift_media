
"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Search } from "lucide-react";

interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className }: SocialIconsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar only after scrolling down past the hero section (~80vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${className || "fixed right-0 top-0 h-screen w-[72px] bg-transparent z-[60] hidden md:flex flex-col items-center justify-center py-8 transition-transform duration-500"} ${isVisible ? "translate-x-0" : "translate-x-full"}`}>
      {/* Middle: Social Icons */}
      <div className="flex flex-col gap-4 items-center">
        <a href="https://www.facebook.com/profile.php?id=61565586822619" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#00a3d0] hover:border-[#00a3d0] hover:shadow-md transition-all bg-white">
          <FaFacebookF className="w-4 h-4" />
        </a>
        <a href="https://www.instagram.com/nexshift.media.and.events/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#00a3d0] hover:border-[#00a3d0] hover:shadow-md transition-all bg-white">
          <FaInstagram className="w-4 h-4" />
        </a>
        <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#00a3d0] hover:border-[#00a3d0] hover:shadow-md transition-all bg-white">
          <FaLinkedinIn className="w-4 h-4" />
        </a>
        <button aria-label="Search" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#00a3d0] hover:border-[#00a3d0] hover:shadow-md transition-all bg-white">
          <Search className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}