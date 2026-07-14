export default function TrustedPartners() {
  return (
    <section className="w-full bg-black py-24 md:py-32 overflow-hidden flex flex-col gap-12 border-t border-zinc-900/50">
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
        <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
          Trusted Partners
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-10 md:gap-14">
        {/* Left and Right fade gradients for smooth seamless look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right (Scroll Right) */}
        <div className="flex w-max marquee-right items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
              {['NIKE', 'APPLE', 'SONY', 'ADIDAS', 'TESLA', 'GOOGLE', 'BMW'].map((brand, idx) => (
                <span key={`r1-${i}-${idx}`} className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-zinc-800 hover:text-white transition-colors duration-300 cursor-pointer select-none whitespace-nowrap">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left (Scroll Left) */}
        <div className="flex w-max marquee-left items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 md:gap-24 px-6 md:px-12 items-center">
              {['SAMSUNG', 'PORSCHE', 'NETFLIX', 'AMAZON', 'ROLEX', 'META', 'IBM'].map((brand, idx) => (
                <span key={`r2-${i}-${idx}`} className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-zinc-800 hover:text-white transition-colors duration-300 cursor-pointer select-none whitespace-nowrap">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
