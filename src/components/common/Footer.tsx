"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-12 bg-[#FAFAFA] px-8 md:px-16 lg:px-24 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
        <div className="space-y-4 w-full md:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full text-left overflow-hidden"
          >
            <h2 className="text-[10vw] italic leading-none font-black tracking-tighter uppercase pointer-events-none drop-shadow-sm font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8]">
              NEXSHIFT .
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium tracking-wide mt-4 uppercase">
              where idea meet market
            </p>
          </motion.div>
        </div>

        <div className="flex gap-16">
          <div className="space-y-4">
            <h5 className="text-[#154880] text-xs uppercase tracking-widest font-bold">Info</h5>
            <ul className="space-y-2 text-gray-600 text-sm font-medium">
              <li><Link href="/" className="hover:text-[#0D7A95] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0D7A95] transition">About</Link></li>
              <li><Link href="/services" className="hover:text-[#0D7A95] transition">Services</Link></li>
              <li><Link href="/works" className="hover:text-[#0D7A95] transition">Works</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#154880] text-xs uppercase tracking-widest font-bold">Contact</h5>
            <ul className="space-y-2 text-gray-600 text-sm font-medium">
              <li>Kathmandu, Nepal</li>
              <li>info@nexshift.com</li>
              <li>+977 1 2345678</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
