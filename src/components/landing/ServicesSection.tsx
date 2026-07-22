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
    <section className="w-full bg-transparent py-24 md:py-32 overflow-hidden flex flex-col gap-12 border-t border-gray-200 relative">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4C1D95]/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Massive Vivid Green Diagonal Strip crossing the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[30vh] md:h-[40vh] bg-gradient-to-r from-transparent via-[#39FF14] to-transparent -rotate-[15deg] md:-rotate-[25deg] pointer-events-none opacity-90" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-bold text-[#154880] text-center text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-sm mb-16"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        >
          Our Services
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
                  className="group flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-4 p-6 md:p-8 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-[#0D7A95]/10 hover:-translate-y-1.5 transition-all duration-500 items-center relative overflow-hidden cursor-pointer"
                >
                  {/* Hover background slide */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0D7A95]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* 1. Index number */}
                  <div className="col-span-1 flex justify-start items-center">
                    <span
                      className="text-xs md:text-sm font-mono text-gray-500 border border-gray-300 px-2.5 py-1 rounded-md group-hover:text-[#0D7A95] group-hover:border-[#0D7A95] transition-all duration-350"
                    >
                      {service.num}
                    </span>
                  </div>

                  {/* 2. Title */}
                  <div className="col-span-3 flex justify-start items-center">
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#154880] tracking-tight font-sans transition-transform duration-350 group-hover:translate-x-2"
                      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* 3. Sub-elements / Tags */}
                  <div className="col-span-2 flex flex-col items-start gap-1">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] md:text-xs font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] uppercase font-sans"
                        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 4. Description */}
                  <div className="col-span-3 flex items-center">
                    <p
                      className="text-gray-700 font-medium text-sm md:text-base leading-relaxed transition-colors duration-350 font-sans"
                      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* 5. Image preview & Link button */}
                  <div className="col-span-3 w-full flex justify-between md:justify-end items-center gap-4">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-[118px] md:w-[162px] border border-gray-300 shadow-md flex-shrink-0">
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
      </div>
    </section>
  );
}
