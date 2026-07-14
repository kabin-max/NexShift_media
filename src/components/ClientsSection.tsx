"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const clients = [
  { name: "SMITH", image: "/bg-image.png", logoFont: "sans" },
  { name: "Hard Yakka", image: "/bg-image.png", logoFont: "sans" },
  { name: "BYD", image: "/bg-image.png", logoFont: "serif" },
  { name: "Rexona", image: "/bg-image.png", logoFont: "sans" },
  { name: "flybuys", image: "/bg-image.png", logoFont: "sans" },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-black pt-16 pb-24 md:pt-24 md:pb-32 text-white overflow-hidden">
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

      <div className="text-center px-6 mb-12">
        <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
          Clients & Projects
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
                  <div className="absolute inset-0 z-0 bg-zinc-900">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110 opacity-70 group-hover:opacity-100"
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
    </section>
  );
}
