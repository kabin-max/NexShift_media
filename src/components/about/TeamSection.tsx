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
    <section className="relative w-full py-24 md:py-32 bg-black px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl text-white mb-6">
            Meet The Amazing Team
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            A passionate team of strategists, creatives, event managers, visualizers, and builders committed to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {team.map((member, i) => {
            const offsetClass =
              i === 1 || i === 4 ? "lg:translate-y-12" :
                i === 2 || i === 5 ? "lg:translate-y-24" : "";

            return (
              <div
                key={i}
                className={`group relative flex flex-col overflow-hidden transition-all duration-300 ${offsetClass}`}
              >
                <div className="relative aspect-[3/4] w-full bg-zinc-900 rounded-xl overflow-hidden">
                  <Image
                    src="/bg-image.png"
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                      {member.name}
                    </h4>
                    <p className="text-xs text-zinc-400 font-semibold uppercase tracking-widest mt-1">
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
