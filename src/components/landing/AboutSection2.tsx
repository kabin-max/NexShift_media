"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection2() {
  const sectionRef = useRef(null);
  
  // Track scroll for the bio text
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bioY = useTransform(sectionProgress, [0, 0.4], [80, 0]);
  const bioOpacity = useTransform(sectionProgress, [0, 0.35], [0, 1]);

  // Track scroll for the parallax gallery specifically
  const collageRef = useRef(null);
  const { scrollYProgress: collageProgress } = useScroll({
    target: collageRef,
    offset: ["start end", "end start"],
  });

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Parallax transforms for each image
  const img1Y = useTransform(collageProgress, [0, 1], [150, -200]);
  const img2Y = useTransform(collageProgress, [0, 1], [80, -120]);
  const img3Y = useTransform(collageProgress, [0, 1], [-80, 150]);
  const img4Y = useTransform(collageProgress, [0, 1], [200, -250]);

  const img1X = useTransform(collageProgress, [0, 1], [-40, 40]);
  const img2X = useTransform(collageProgress, [0, 1], [20, -20]);
  const img3X = useTransform(collageProgress, [0, 1], [-30, 30]);
  const img4X = useTransform(collageProgress, [0, 1], [50, -50]);

  const images = [
    {
      id: "img1",
      src: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1000",
      alt: "Top Left",
      className: "w-[65%] md:w-[35%] max-w-[320px] aspect-[3/4] top-[5%] left-[5%] md:top-[5%] md:left-[22%] z-20",
      rotation: -6,
      parallaxY: img1Y,
      parallaxX: img1X,
      borderStyle: "2% 4% 2% 3% / 3% 2% 4% 2%"
    },
    {
      id: "img2",
      src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000",
      alt: "Top Right",
      className: "w-[70%] md:w-[40%] max-w-[380px] aspect-[4/3] top-[15%] right-[5%] md:top-[12%] md:right-[20%] z-10",
      rotation: 8,
      parallaxY: img2Y,
      parallaxX: img2X,
      borderStyle: "3% 2% 4% 2% / 2% 4% 3% 4%"
    },
    {
      id: "img3",
      src: "/bg-image.png",
      alt: "Bottom Left",
      className: "w-[70%] md:w-[35%] max-w-[340px] aspect-[4/3] bottom-[20%] left-[5%] md:bottom-[15%] md:left-[20%] z-30",
      rotation: -4,
      parallaxY: img3Y,
      parallaxX: img3X,
      borderStyle: "4% 3% 2% 4% / 3% 4% 2% 3%"
    },
    {
      id: "img4",
      src: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1000",
      alt: "Bottom Right",
      className: "w-[65%] md:w-[35%] max-w-[320px] aspect-[3/4] bottom-[5%] right-[10%] md:bottom-[5%] md:right-[25%] z-40",
      rotation: 5,
      parallaxY: img4Y,
      parallaxX: img4X,
      borderStyle: "2% 3% 4% 2% / 4% 2% 3% 4%"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-start pt-20 pb-12 overflow-hidden"
    >
      {/* Rotated Background Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <img
          src="/bubble.jpg"
          alt="Bubble Background"
          className="w-[150%] h-[150%] md:w-[120%] md:h-[120%] max-w-none object-cover -rotate-[15deg]"
        />
      </div>

      {/* Section Heading */}
      <div className="text-center px-6 mb-12 relative z-50">
        <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
          About Us
        </h2>
      </div>

      {/* Bio text — centered */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-6 md:px-0 text-zinc-300 space-y-5 text-base md:text-lg leading-relaxed relative z-50"
        style={{ y: bioY, opacity: bioOpacity }}
      >
        <p>
          Company XYX is a commercial director, photographer and visual creator
          based just outside Melbourne, working across the East Coast of
          Australia.
        </p>
        <p>
          We&apos;ve built a practice that sits somewhere between creative director,
          DOP and production manager — often all at once. Specialising in
          cinematic commercial production and mini-documentary content, XYX makes
          lean productions look and feel far larger than their budgets suggest.
        </p>
        <p>
          We work alongside brands and agencies on everything from strategy and
          scripting through to full execution — developing campaign concepts,
          directing talent, managing small crews and delivering content built to
          reach specific audiences. We understand both the cultural engineering
          behind brand building and the practical realities of getting it done.
        </p>
        <p className="text-white text-sm font-normal">
          Founder of félan films &amp; emble studio.
        </p>
      </motion.div>

      {/* ── 4-photo scattered collage with scroll parallax ── */}
      <div 
        ref={collageRef}
        className="relative mt-32 w-full h-[600px] md:h-[800px] flex items-center justify-center pointer-events-auto"
      >
        
        {/* Particles/Dust on Left & Right */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'20\' cy=\'30\' r=\'1\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'80\' cy=\'70\' r=\'1.5\' fill=\'white\' opacity=\'0.2\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'0.8\' fill=\'white\' opacity=\'0.4\'/%3E%3C/svg%3E')] opacity-30 pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'20\' r=\'1.2\' fill=\'white\' opacity=\'0.3\'/%3E%3Ccircle cx=\'90\' cy=\'80\' r=\'0.8\' fill=\'white\' opacity=\'0.5\'/%3E%3Ccircle cx=\'40\' cy=\'60\' r=\'1.5\' fill=\'white\' opacity=\'0.2\'/%3E%3C/svg%3E')] opacity-30 pointer-events-none z-10" />

        {images.map((img) => {
          const isHovered = hoveredId === img.id;
          return (
            <motion.div
              key={img.id}
              className={`absolute ${img.className} cursor-pointer`}
              style={{
                y: img.parallaxY,
                x: img.parallaxX,
                rotate: img.rotation,
                zIndex: isHovered ? 100 : undefined,
              }}
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  boxShadow: isHovered 
                    ? "0px 30px 60px rgba(0,0,0,0.8)" 
                    : "0px 15px 30px rgba(0,0,0,0.5)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full rounded-[12px] overflow-hidden bg-black shadow-2xl border border-white/10"
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
