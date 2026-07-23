"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  { name: "SMITH", image: "/bg-image.png", logoFont: "sans" },
  { name: "Hard Yakka", image: "/bg-image.png", logoFont: "sans" },
  { name: "BYD", image: "/bg-image.png", logoFont: "serif" },
  { name: "Rexona", image: "/bg-image.png", logoFont: "sans" },
  { name: "flybuys", image: "/bg-image.png", logoFont: "sans" },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="relative w-full bg-transparent py-[5%] text-[#171717] overflow-hidden border-t border-gray-200">
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
      <style>{`
        @keyframes scroll-gallery { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .marquee-gallery { 
          animation: scroll-gallery 40s linear infinite; 
        }
        .marquee-gallery:hover { 
          animation-play-state: paused; 
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <div className="text-center px-6 mb-12">
          <h2 className="font-sans font-bold text-[#154880] text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-sm">
            Clients & Projects
            <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full pointer-events-none" />
          </h2>
        </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max marquee-gallery gap-4 md:gap-8">

          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4 md:gap-8 pr-4 md:pr-8">
              {clients.map((client, idx) => (
                <div
                  key={`client-${i}-${idx}`}
                  className="group relative w-[280px] h-[380px] md:w-[300px] md:h-[420px] shrink-0 overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 bg-black">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      sizes="(max-width: 768px) 300px, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-60" />

                  {/* Content Container */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                    <div /> {/* Spacer for top */}

                    {/* Center Logo/Text */}
                    <div className="flex justify-center items-center transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className={`text-3xl md:text-4xl font-bold text-white drop-shadow-2xl ${client.logoFont === 'serif' ? 'font-serif' : 'font-sans'}`}>
                        {client.name}
                      </h3>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex justify-between items-end w-full transform transition-all duration-500 translate-y-4 opacity-70 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">
                        View Work
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
      </motion.div>
    </section>
  );
}
