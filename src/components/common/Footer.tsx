"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-12 bg-black px-8 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
        <div className="space-y-4 w-full md:w-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full text-left overflow-hidden"
          >
            <h2 
              className="text-[10vw] italic leading-none font-black tracking-tighter uppercase pointer-events-none drop-shadow-[0_-5px_15px_rgba(255,255,255,0.15)]"
              style={{
                fontFamily: "var(--font-sans)",
                background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              NEXSHIFT .
            </h2>
          </motion.div>
        </div>

        <div className="flex gap-16">
          <div className="space-y-4">
            <h5 className="text-white text-xs uppercase tracking-widest font-semibold">Info</h5>
            <ul className="space-y-2 text-zinc-500 text-sm font-light">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/works" className="hover:text-white transition">Works</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-white text-xs uppercase tracking-widest font-semibold">Contact</h5>
            <ul className="space-y-2 text-zinc-500 text-sm font-light">
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
