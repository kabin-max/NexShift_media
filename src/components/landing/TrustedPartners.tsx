const rawPartners = [
  // Simple logos (Row 1)
  { name: "Nisarga Batika", filename: "nisarga batika.svg", type: "simple" },
  { name: "Milestone Logo", filename: "Milestone logoo.png", type: "simple" },
  { name: "New York Cargo", filename: "new york cargo.png", type: "simple" },
  { name: "Cafe O2", filename: "Cafe_O2.png", type: "simple", scale: 1.2 },
  { name: "Queens Logo", filename: "Queens.png", type: "simple", scale: 1.2 },
  { name: "Tulsi Portrait", filename: "Tulsi.png", type: "simple" },
  { name: "Praise Consultancy", filename: "praise consultancy.jpg", type: "simple" },
  { name: "Ritz College", filename: "ritz.png", type: "simple", scale: 1.2 },
  { name: "Smile Dental Clinic", filename: "smile_dental.png", type: "simple", scale: 1.2 },

  // Box / Rectangular logos (Row 2)
  { name: "Guru Pashmina", filename: "guru pashmina.jpg", type: "box" },
  { name: "Palmos", filename: "palmos logo.jpeg", type: "box" },
  { name: "EG Bag", filename: "eg_bag.jpg", type: "box" },
  { name: "Hotel Royal Airport", filename: "hotel royal.jpg", type: "box" },
  { name: "Mega Lights", filename: "Meg-Lights.jpg", type: "box", scale: 1.2 },
  { name: "Zeno", filename: "zeno.PNG", type: "box" },
];

const partners = rawPartners.map(p => ({
  name: p.name,
  src: `/trusted partner/${p.filename}`,
  scale: p.scale || null,
  type: p.type
}));

const row1 = partners.filter(p => p.type === "simple");
const row2 = [
  ...partners.filter(p => p.type === "box"),
  ...partners.filter(p => p.type === "box") // Duplicate to balance length with row 1
];

export default function TrustedPartners() {
  return (
    <section className="w-full bg-transparent py-[5%] overflow-hidden flex flex-col gap-12 border-t border-gray-200">
      <style>{`
        @keyframes scroll-left { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        @keyframes scroll-right { 
          0% { transform: translateX(-50%); } 
          100% { transform: translateX(0); } 
        }
        .marquee-left { 
          animation: scroll-left 30s linear infinite; 
        }
        .marquee-right { 
          animation: scroll-right 30s linear infinite; 
        }
        .marquee-left:hover, .marquee-right:hover { 
          animation-play-state: paused; 
        }
      `}</style>

      <div className="text-center px-6">
        <h2 className="font-sans font-bold text-[#154880] text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-sm">
          Our Clients
          <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full pointer-events-none" />
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-10 md:gap-14">
        {/* Left and Right fade gradients for smooth seamless look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right (Scroll Right) */}
        <div className="flex w-max marquee-right items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
              {row1.map((partner, idx) => (
                <div 
                  key={`r1-${i}-${idx}`} 
                  className="relative h-16 md:h-20 w-32 md:w-40 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
                >
                  <img
                    src={encodeURI(partner.src)}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain pointer-events-none"
                    style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left (Scroll Left) */}
        <div className="flex w-max marquee-left items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
              {row2.map((partner, idx) => (
                <div 
                  key={`r2-${i}-${idx}`} 
                  className="relative h-16 md:h-20 w-32 md:w-40 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
                >
                  <img
                    src={encodeURI(partner.src)}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain pointer-events-none"
                    style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

