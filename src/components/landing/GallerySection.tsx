"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GallerySection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Handle mouse move over the section
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize mouse position to range [-1, 1]
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax transforms based on depth
  // Front layer moves the most
  const xLayer1 = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const yLayer1 = useTransform(smoothMouseY, [-1, 1], [-25, 25]);
  
  const xLayer2 = useTransform(smoothMouseX, [-1, 1], [-12, 12]);
  const yLayer2 = useTransform(smoothMouseY, [-1, 1], [-12, 12]);

  // Gallery items data
  const images = [
    {
      id: "mtb",
      src: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1000",
      alt: "Mountain Biking",
      baseRotation: -8,
      floatDelay: 0,
      className: "z-10 w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] md:w-[280px] md:h-[380px] lg:w-[320px] lg:h-[440px] top-[-10%] left-[-15%] md:top-[-15%] md:left-[-30%]",
      parallaxX: xLayer1,
      parallaxY: yLayer1,
    },
    {
      id: "forest",
      src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000",
      alt: "Drone Forest",
      baseRotation: 6,
      floatDelay: 1.5,
      className: "z-20 w-[180px] h-[260px] sm:w-[220px] sm:h-[300px] md:w-[260px] md:h-[360px] lg:w-[300px] lg:h-[420px] top-[15%] right-[-10%] md:top-[10%] md:right-[-20%]",
      parallaxX: xLayer2,
      parallaxY: yLayer2,
    },
    {
      id: "cave",
      src: "/bg-image.png",
      alt: "Cave Exploration",
      baseRotation: -4,
      floatDelay: 0.8,
      className: "z-30 w-[210px] h-[290px] sm:w-[250px] sm:h-[330px] md:w-[290px] md:h-[400px] lg:w-[340px] lg:h-[460px] bottom-[5%] left-[-5%] md:bottom-[-5%] md:left-[-15%]",
      parallaxX: xLayer1,
      parallaxY: yLayer1,
    },
    {
      id: "river",
      src: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1000",
      alt: "River Hiker",
      baseRotation: 9,
      floatDelay: 2.2,
      className: "z-10 w-[190px] h-[270px] sm:w-[230px] sm:h-[310px] md:w-[270px] md:h-[370px] lg:w-[310px] lg:h-[430px] bottom-[-10%] right-[-5%] md:bottom-[-15%] md:right-[-5%]",
      parallaxX: xLayer2,
      parallaxY: yLayer2,
    }
  ];

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (!isMounted) return null;

  return (
    <section 
      className="relative w-full min-h-screen bg-transparent overflow-hidden flex items-center justify-center py-20 select-none border-t border-gray-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
      {/* Rotated Background Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <Image
          src="/bubble.jpg"
          alt="Bubble Background"
          fill
          sizes="100vw"
          className="object-cover scale-[1.2] -rotate-[15deg] max-w-none"
        />
      </div>

      {/* Subtle Film Grain (CSS pattern) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay z-0" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }} 
      />

      {/* Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(250,250,250,0.9)_100%)] z-40" />

      {/* Soft spotlight behind the collage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#4C1D95]/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Particles/Dust on Left & Right */}
      <motion.div 
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-[5%] md:left-[10%] top-1/4 w-32 h-64 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'30\' r=\'1\' fill=\'%230D7A95\' opacity=\'0.4\'/%3E%3Ccircle cx=\'80\' cy=\'70\' r=\'1.5\' fill=\'%230D7A95\' opacity=\'0.3\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'0.8\' fill=\'%230D7A95\' opacity=\'0.5\'/%3E%3C/svg%3E')] opacity-50 pointer-events-none z-10" 
      />
      <motion.div 
        animate={{ x: [20, -20, 20], y: [10, -10, 10] }} 
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute right-[5%] md:right-[10%] bottom-1/4 w-40 h-80 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'20\' r=\'1.2\' fill=\'%230D7A95\' opacity=\'0.4\'/%3E%3Ccircle cx=\'90\' cy=\'80\' r=\'0.8\' fill=\'%230D7A95\' opacity=\'0.6\'/%3E%3Ccircle cx=\'40\' cy=\'60\' r=\'1.5\' fill=\'%230D7A95\' opacity=\'0.3\'/%3E%3C/svg%3E')] opacity-50 pointer-events-none z-10" 
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex items-center justify-center pointer-events-none z-20"
      >
        {/* Central Collage Container */}
        <div className="relative w-[250px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[450px] md:h-[550px] flex items-center justify-center pointer-events-auto">
          {images.map((img, index) => {
            const isHovered = hoveredId === img.id;
            
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`absolute ${img.className} rounded-[14px] cursor-pointer`}
                style={{
                  x: img.parallaxX,
                  y: img.parallaxY,
                  zIndex: isHovered ? 50 : undefined,
                }}
                onMouseEnter={() => setHoveredId(img.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Hover Rotation & Scale Layer */}
                <motion.div
                  animate={{
                    rotate: isHovered ? 0 : img.baseRotation,
                    scale: isHovered ? 1.05 : 1,
                    boxShadow: isHovered 
                      ? "0px 40px 80px rgba(0,0,0,0.15)" 
                      : "0px 20px 50px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full h-full rounded-[14px] overflow-hidden backdrop-blur-md bg-white/40 border border-gray-200"
                >
                  {/* Infinite Float Layer */}
                  <motion.div
                    animate={{
                      y: [-6, 6, -6],
                      rotate: [-1, 1, -1]
                    }}
                    transition={{
                      duration: 8 + index,
                      delay: img.floatDelay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 300px, 450px"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
