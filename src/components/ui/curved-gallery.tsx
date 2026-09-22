"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CurvedGalleryProps {
  images: { id: number; src: string; alt: string }[];
}

export default function CurvedGallery({ images }: CurvedGalleryProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Duplicate images to create a full 360-degree cylinder
  // We have 5 images. Let's duplicate them 3 times to get 15 items, or 4 times to get 20 items.
  // 20 items at 18 degrees each = 360 degrees.
  const duplicatedImages = [...images, ...images, ...images, ...images];
  
  const angleStep = 360 / duplicatedImages.length; // 18 degrees
  
  // A larger radius spreads the items further apart. 
  // Mobile width is 220px, desktop is 300px.
  const radius = isMobile ? 800 : 1050; 

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center pointer-events-none group"
      style={{ perspective: "1200px" }}
    >
      <style>{`
        @keyframes spin-cylinder {
          0% { transform: translateZ(var(--radius)) rotateY(0deg); }
          100% { transform: translateZ(var(--radius)) rotateY(-360deg); }
        }
        .spin-cylinder-anim {
          animation: spin-cylinder 40s linear infinite;
        }
        .group:hover .spin-cylinder-anim {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="spin-cylinder-anim relative w-[220px] h-[330px] md:w-[300px] md:h-[450px]"
        style={{ 
          transformStyle: "preserve-3d", 
          "--radius": `${-radius}px` 
        } as React.CSSProperties}
      >
        {duplicatedImages.map((item, i) => {
          return (
            <div
              key={`${item.id}-${i}`}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl opacity-90 pointer-events-auto"
              style={{
                transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 220px, 300px"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
