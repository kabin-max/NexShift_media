"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  heightClass: string; // Tailwing classes for varying heights in the masonry layout
}

interface ServiceCardProps {
  project: Project;
}

export default function ServiceCard({ project }: ServiceCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`relative w-full rounded-lg overflow-hidden group cursor-pointer ${project.heightClass}`}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-white text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-zinc-300 text-sm uppercase tracking-wider">{project.category}</p>
      </div>
    </motion.div>
  );
}
