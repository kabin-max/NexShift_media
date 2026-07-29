"use client";

import { useState, Suspense } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  CheckCircle2, 
  Smartphone, Target, Palette, FileText, TrendingUp, Megaphone,
  Building2, Rocket, Landmark, Building, Mic, Settings,
  Camera, Clapperboard, Aperture, Film, PlaySquare, Navigation 
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
};

const SERVICES: Record<string, ServiceItem[]> = {
  "Digital Marketing": [
    {
      title: "Social Media Management",
      description: "Strategic content creation, community management, and growth campaigns across all major platforms.",
      features: ["Consistent brand voice", "Engagement growth", "Audience analytics"],
      icon: Smartphone
    },
    {
      title: "Paid Ads & Lead Generation",
      description: "ROI-focused advertising on Facebook, Instagram, Google, and LinkedIn to drive qualified leads.",
      features: ["Precision targeting", "Cost optimization", "Conversion tracking"],
      icon: Target
    },
    {
      title: "Branding & Creative Design",
      description: "Logo design, brand identity systems, packaging, and visual assets that make your brand unforgettable.",
      features: ["Brand consistency", "Professional identity", "Market differentiation"],
      icon: Palette
    },
    {
      title: "Content Strategy",
      description: "Compelling narratives and content ecosystems that position your brand as an industry leader.",
      features: ["Thought leadership", "SEO benefits", "Audience retention"],
      icon: FileText
    },
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns with real-time optimization, A/B testing, and comprehensive ROI reporting.",
      features: ["Measurable ROI", "Real-time optimization", "Transparent reporting"],
      icon: TrendingUp
    },
    {
      title: "Corporate Campaign Management",
      description: "End-to-end campaign management for large-scale corporate and institutional marketing initiatives.",
      features: ["Strategic planning", "Multi-channel execution", "Impact measurement"],
      icon: Megaphone
    }
  ],
  "Event Management": [
    {
      title: "Corporate Events",
      description: "Board meetings, annual gatherings, gala dinners, and corporate celebrations managed with precision.",
      features: ["Professional execution", "Vendor coordination", "Brand alignment"],
      icon: Building2
    },
    {
      title: "Product Launches",
      description: "High-impact launch events with media coverage, influencer engagement, and immersive brand experiences.",
      features: ["Media coverage", "Brand awareness", "Lead generation"],
      icon: Rocket
    },
    {
      title: "Government & Institutional Events",
      description: "Conferences, seminars, and public events for government bodies and institutional organizations.",
      features: ["Protocol compliance", "Large-scale logistics", "Professional decorum"],
      icon: Landmark
    },
    {
      title: "Banking & Financial Events",
      description: "AGMs, investor meets, financial seminars, and banking sector conferences with corporate-grade execution.",
      features: ["Regulatory awareness", "Stakeholder management", "Data security"],
      icon: Building
    },
    {
      title: "Conferences & Seminars",
      description: "Multi-day conferences with speaker management, AV production, and attendee engagement programs.",
      features: ["Speaker coordination", "AV excellence", "Attendee experience"],
      icon: Mic
    },
    {
      title: "Full Event Production",
      description: "Complete production services including staging, lighting, sound, and technical management.",
      features: ["State-of-the-art equipment", "Technical expertise", "Seamless execution"],
      icon: Settings
    }
  ],
  "Photography & Videography": [
    {
      title: "Corporate Shoots",
      description: "Professional photography for corporate profiles, team portraits, office environments, and branding materials.",
      features: ["Professional quality", "Brand-aligned imagery", "Quick turnaround"],
      icon: Camera
    },
    {
      title: "Commercial Ads",
      description: "High-production commercial video content for TV, digital platforms, and social media campaigns.",
      features: ["Cinematic quality", "Story-driven", "Multi-platform"],
      icon: Clapperboard
    },
    {
      title: "Event Coverage",
      description: "Comprehensive photo and video documentation of events, capturing every meaningful moment.",
      features: ["Full coverage", "Same-day highlights", "Professional editing"],
      icon: Aperture
    },
    {
      title: "Cinematic Brand Films",
      description: "Narrative-driven brand films that tell your company's story in a compelling, cinematic format.",
      features: ["Emotional storytelling", "Premium production", "Brand positioning"],
      icon: Film
    },
    {
      title: "Reels & Short-form Content",
      description: "Trending short-form video content optimized for Instagram Reels, TikTok, and YouTube Shorts.",
      features: ["Trend-aligned", "High engagement", "Platform-optimized"],
      icon: PlaySquare
    },
    {
      title: "Drone Shoots",
      description: "Aerial photography and videography for stunning perspectives of events, properties, and landscapes.",
      features: ["Unique perspectives", "Licensed operators", "High-resolution 4K"],
      icon: Navigation
    }
  ]
};

const CATEGORIES = Object.keys(SERVICES);

function TiltCard({ service, index }: { service: ServiceItem; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative w-full h-full rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col hover:bg-white/10 transition-colors duration-300"
      >
        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full pointer-events-none">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 shrink-0">
              <service.icon className="w-6 h-6 text-white/80" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-white leading-tight">{service.title}</h3>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
            {service.description}
          </p>
          
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-white/50 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceGalleryContent() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative text-xs md:text-sm font-semibold tracking-[0.2em] uppercase transition-colors duration-300 px-4 py-2 ${
              activeCategory === category ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {SERVICES[activeCategory].map((service, index) => (
            <TiltCard key={service.title} service={service} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function ServiceGallery() {
  return (
    <Suspense fallback={
      <div className="w-full text-center py-24 text-zinc-500 font-sans">
        Loading gallery...
      </div>
    }>
      <ServiceGalleryContent />
    </Suspense>
  );
}
