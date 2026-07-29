"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    num: "01",
    title: "Digital Marketing",
    tags: ["SEO & Ads", "Social Media", "Growth & ROI"],
    description: "Social media, SEO, paid ads, content strategy, and performance marketing that drives real growth and ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
  },
  {
    id: 2,
    num: "02",
    title: "Event Management",
    tags: ["Corporate Events", "Product Launches", "Conferences"],
    description: "Corporate events, product launches, conferences, and full-scale productions — flawlessly planned and executed.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600",
  },
  {
    id: 3,
    num: "03",
    title: "Photography & Videography",
    tags: ["Brand Films", "Storytelling"],
    description: "Corporate shoots, brand films, reels, and cinematic content that tells your story.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600",
  }
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-transparent py-[5%] overflow-hidden flex flex-col gap-12 border-t border-gray-200">
      {/* Ambient globs — top-right cyan, bottom-left navy */}
      <div className="absolute -top-[5%] -right-[5%] w-[45%] h-[55%] bg-[#00a3d0]/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] bg-[#00a3d0]/40 blur-[160px] rounded-full pointer-events-none z-0" />
      {/* Large centered radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00a3d0]/8 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Decorative Floating Circles */}
      <div className="absolute top-[15%] left-[8%] w-32 h-32 md:w-56 md:h-56 border border-[#00a3d0]/10 rounded-full pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[4%] w-20 h-20 md:w-32 md:h-32 border-2 border-[#e5e7eb]/20 rounded-full pointer-events-none z-0" />
      
      <div className="absolute bottom-[20%] right-[6%] w-24 h-24 md:w-40 md:h-40 bg-[#e5e7eb]/10 rounded-full blur-[2px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-12 h-12 md:w-20 md:h-20 bg-[#00a3d0]/10 rounded-full pointer-events-none z-0" />
      
      {/* Massive Vivid Green Diagonal Strip crossing the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[30vh] md:h-[40vh] bg-gradient-to-r from-transparent via-[#03b364] to-transparent -rotate-[15deg] md:-rotate-[25deg] pointer-events-none opacity-90" />

      <motion.div 
        className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-bold text-[#154880] text-center text-3xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-sm mb-10 md:mb-16"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        >
          Our Services
          <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full pointer-events-none" />
        </motion.h2>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            return (
              <Link key={service.id} href={`/services?category=${encodeURIComponent(service.title)}`} className="block w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-4 p-5 md:p-8 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-[#0D7A95]/10 hover:-translate-y-1.5 transition-all duration-500 items-start md:items-center relative overflow-hidden cursor-pointer"
                >
                  {/* Hover background slide */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0D7A95]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Left Edge Glowing Strip */}
                  <div className="absolute left-0 top-0 w-2 h-full bg-[#03b364] shadow-[0_0_20px_rgba(3,179,100,0.5)] pointer-events-none" />

                  {/* Mobile: Top row with number + title + arrow */}
                  <div className="flex items-center justify-between w-full md:hidden gap-3 pl-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-500 border border-gray-300 px-2 py-1 rounded-md group-hover:text-[#0D7A95] group-hover:border-[#0D7A95] transition-all duration-350 flex-shrink-0">
                        {service.num}
                      </span>
                      <h3
                        className="text-xl font-bold text-[#154880] tracking-tight font-sans transition-transform duration-350 group-hover:translate-x-1"
                        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full border border-gray-300 text-gray-500 group-hover:text-[#0D7A95] group-hover:border-[#0D7A95] transition-all duration-350 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Mobile: Tags */}
                  <div className="flex flex-wrap gap-1.5 md:hidden pl-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] uppercase font-sans"
                        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Mobile: Description + Image row */}
                  <div className="flex items-start gap-3 w-full md:hidden pl-2">
                    <p
                      className="text-gray-700 font-medium text-sm leading-relaxed font-sans flex-1"
                      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                    >
                      {service.description}
                    </p>
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3] w-[90px] border border-gray-300 shadow-md flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Desktop layout - all columns */}
                  {/* 1. Index number */}
                  <div className="col-span-1 hidden md:flex justify-start items-center">
                    <span
                      className="text-sm font-mono text-gray-500 border border-gray-300 px-2.5 py-1 rounded-md group-hover:text-[#0D7A95] group-hover:border-[#0D7A95] transition-all duration-350"
                    >
                      {service.num}
                    </span>
                  </div>

                  {/* 2. Title */}
                  <div className="col-span-3 hidden md:flex justify-start items-center">
                    <h3
                      className="text-3xl lg:text-4xl font-bold text-[#154880] tracking-tight font-sans transition-transform duration-350 group-hover:translate-x-2"
                      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* 3. Sub-elements / Tags */}
                  <div className="col-span-2 hidden md:flex flex-col items-start gap-1">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] uppercase font-sans"
                        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 4. Description */}
                  <div className="col-span-3 hidden md:flex items-center">
                    <p
                      className="text-gray-700 font-medium text-base leading-relaxed transition-colors duration-350 font-sans"
                      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* 5. Image preview & Link button */}
                  <div className="col-span-3 hidden md:flex w-full justify-end items-center gap-4">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-[162px] border border-gray-300 shadow-md flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <div className="p-2 rounded-full border border-gray-300 text-gray-500 group-hover:text-[#0D7A95] group-hover:border-[#0D7A95] transition-all duration-350 flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
