"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ServiceCard, { Project } from "./ServiceCard";

const CATEGORIES = ["All", "Digital Marketing", "Video Editing", "Cameragraphy"];

// Using /bg-image.png as a placeholder for all images as requested
const MOCK_PROJECTS: Project[] = [
  { id: "1", title: "Brand Campaign", category: "Digital Marketing", imageUrl: "/bg-image.png", heightClass: "h-[400px]" },
  { id: "2", title: "Corporate Promo", category: "Video Editing", imageUrl: "/bg-image.png", heightClass: "h-[500px]" },
  { id: "3", title: "Nature Documentary", category: "Cameragraphy", imageUrl: "/bg-image.png", heightClass: "h-[350px]" },
  { id: "4", title: "Social Media Ads", category: "Digital Marketing", imageUrl: "/bg-image.png", heightClass: "h-[450px]" },
  { id: "5", title: "Wedding Highlight", category: "Video Editing", imageUrl: "/bg-image.png", heightClass: "h-[400px]" },
  { id: "6", title: "Product Shoot", category: "Cameragraphy", imageUrl: "/bg-image.png", heightClass: "h-[600px]" },
  { id: "7", title: "SEO Optimization", category: "Digital Marketing", imageUrl: "/bg-image.png", heightClass: "h-[350px]" },
  { id: "8", title: "Music Video", category: "Video Editing", imageUrl: "/bg-image.png", heightClass: "h-[450px]" },
];

export default function ServiceGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = MOCK_PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative text-xs md:text-sm font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
              activeCategory === category ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <ServiceCard project={project} />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
