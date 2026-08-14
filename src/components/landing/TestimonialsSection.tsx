"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    description:
      "NexShift completely transformed our digital presence. The strategy they crafted was razor-sharp and the execution was flawless.",
    image:
      "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    name: "Aman Shrestha",
    handle: "Co-Founder, Cafe O2",
  },
  {
    description:
      "Their event management team handled our product launch with incredible attention to detail. Couldn't have asked for a better partner.",
    image:
      "https://plus.unsplash.com/premium_photo-1692340973636-6f2ff926af39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    name: "Dr. Ram Prasad Neupane",
    handle: "Academic Director, Ritz College",
  },
  {
    description:
      "The brand film NexShift produced for us was cinematic, emotional, and exactly on-brand. Highly recommend their videography team.",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    name: "Sabin Thapa",
    handle: "Co-Founder, ZENO",
  },
  {
    description:
      "Working with NexShift felt like magic — they just got our brand and brought it to life across every channel beautifully.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    name: "Dr. Kareen Karki",
    handle: "Founder & Lead Dentist, Smile by Dr.Kareen",
  },
  {
    description:
      "NexShift's performance marketing campaigns delivered measurable ROI from week one. They don't just promise results — they deliver them.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    name: "Pratiksha Adhikari",
    handle: "Event Manager, Queens Palace",
  },
  {
    description:
      "I recommend NexShift to any business looking for a creative agency that thinks strategically and executes beautifully.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    name: "Kabita Rajbhandari",
    handle: "Administrative Head, Nisarga Batika",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-10 md:py-[5%] bg-transparent overflow-hidden border-t border-gray-200">




      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-10 md:mb-16 px-4">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-sm text-[#154880] mb-4">
            Our Clients, <br className="block sm:hidden" /> In Their Words
            <div className="h-1.5 w-20 md:w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full pointer-events-none" />
          </h2>
          <h3 className="text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-medium tracking-wide drop-shadow-sm">
            Here&apos;s what our clients have to say about working with NexShift.
          </h3>
        </div>

        <div className="bg-[#154880] rounded-3xl p-4 sm:p-6 md:p-8 border border-[#154880]/50 shadow-xl">
          <AnimatedTestimonials
            autoplay={true}
            data={testimonialsData}
          />
        </div>
      </motion.div>
    </section>
  );
}