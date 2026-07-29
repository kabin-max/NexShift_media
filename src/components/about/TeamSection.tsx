"use client";

import Image from "next/image";

export default function TeamSection() {
  const team = [
    { name: "Eleanor Pena", role: "Creative Director" },
    { name: "Ralph Edwards", role: "Marketing Strategist" },
    { name: "Annette Black", role: "Event Producer" },
    { name: "Jacob Jones", role: "Visual Producer" },
    { name: "Bessie Cooper", role: "Brand Designer" },
    { name: "Darrell Steward", role: "Web Developer" }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent px-6 md:px-12 lg:px-24 overflow-hidden border-t border-gray-200">
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
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#154880] drop-shadow-sm mb-6 flex flex-col items-center">
            Meet The Amazing Team
            <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full" />
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl font-medium font-sans">
            A passionate team of strategists, creatives, event managers, visualizers, and builders committed to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 sm:gap-y-20">
          {team.map((member, i) => {
            const offsetClass =
              i === 1 || i === 4 ? "lg:translate-y-12" :
                i === 2 || i === 5 ? "lg:translate-y-24" : "";

            return (
              <div
                key={i}
                className={`group relative flex flex-col overflow-hidden transition-all duration-300 ${offsetClass}`}
              >
                <div className="relative aspect-[3/4] w-full bg-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#0D7A95]/10 transition-all duration-300">
                  <Image
                    src="/bg-image.png"
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#39FF14] transition font-sans">
                      {member.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-300 font-bold uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
