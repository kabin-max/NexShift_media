"use client";

import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, EyeOff } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Show current local time in camera format
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex flex-col justify-center items-center w-full min-h-screen text-white bg-black overflow-hidden select-none font-sans">
      {/* Cinematic grid overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* Decorative colored glow dots */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Viewfinder Corners */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-zinc-700 pointer-events-none" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-zinc-700 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-zinc-700 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-zinc-700 pointer-events-none" />

      {/* Viewfinder Header details */}
      <div className="absolute top-10 left-16 right-16 flex justify-between items-center text-[10px] md:text-xs font-mono text-zinc-500 tracking-wider pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
          <span>REC [404]</span>
        </div>
        <div>TIME: {time}</div>
        <div>MODE: LOSS_OF_SIGNAL</div>
      </div>

      {/* Viewfinder Footer details */}
      <div className="absolute bottom-10 left-16 right-16 flex justify-between items-center text-[10px] md:text-xs font-mono text-zinc-500 tracking-wider pointer-events-none">
        <div>F_STOP: N/A</div>
        <div className="hidden sm:block">ISO 400</div>
        <div>SHUTTER: N/A</div>
      </div>

      {/* Main Content Card (Glassmorphic) */}
      <div className="z-10 max-w-lg mx-auto px-6 text-center flex flex-col items-center gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-md text-rose-500"
        >
          <EyeOff className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-7xl md:text-8xl lg:text-[7.5rem] font-black italic tracking-tighter leading-none select-none text-zinc-300"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase font-sans"
          >
            Out of Frame
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans max-w-sm mx-auto"
          >
            This scene seems to have slipped past our editor. It was either cut from the final release or moved to a different timeline.
          </motion.p>
        </div>

        {/* Call to action links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link
            href="/"
            className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Rewind to Home</span>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Connection</span>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
