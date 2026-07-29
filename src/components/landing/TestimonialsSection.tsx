

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-[5%] bg-transparent overflow-hidden border-t border-gray-200">
      {/* Ambient globs — top-right cyan, bottom-left navy */}
      <div className="absolute -top-[5%] -right-[5%] w-[45%] h-[55%] bg-[#00a3d0]/10 blur-[140px] rounded-full pointer-events-none z-0 transform-gpu" />
      <div className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] bg-[#00a3d0]/40 blur-[160px] rounded-full pointer-events-none z-0 transform-gpu" />
      {/* Large centered radial glow behind testimonial cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00a3d0]/8 blur-[180px] rounded-full pointer-events-none z-0 transform-gpu" />

      {/* Decorative Floating Circles */}
      <div className="absolute top-[15%] left-[8%] w-32 h-32 md:w-56 md:h-56 border border-[#00a3d0]/10 rounded-full pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[4%] w-20 h-20 md:w-32 md:h-32 border-2 border-[#e5e7eb]/20 rounded-full pointer-events-none z-0" />

      <div className="absolute bottom-[20%] right-[6%] w-24 h-24 md:w-40 md:h-40 bg-[#e5e7eb]/10 rounded-full blur-[2px] pointer-events-none z-0 transform-gpu" />
      <div className="absolute bottom-[10%] right-[10%] w-12 h-12 md:w-20 md:h-20 bg-[#00a3d0]/10 rounded-full pointer-events-none z-0" />

      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-sm text-[#154880] mb-4">
            What They Say
            <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full pointer-events-none" />
          </h2>
          <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#0D7A95] via-[#14A9D6] to-[#2E73B8] font-medium tracking-wide drop-shadow-sm">
            Don&apos;t just take our word for it.<br />Here&apos;s what our clients have to say about working with NexShift.
          </h3>
        </div>

        {/* Wrapper around testimonial component */}
        <div className="bg-[#154880] rounded-3xl p-4 sm:p-6 md:p-8 border border-[#154880]/50 shadow-xl">
          <AnimatedTestimonials
            autoplay={true}
            data={[
              {
                description:
                  "NexShift completely transformed our digital presence. The strategy they crafted was razor-sharp and the execution was flawless.",
                image:
                  "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                name: "Isabelle Carlos",
                handle: "@isabellecarlos",
              },
              {
                description:
                  "Their event management team handled our product launch with incredible attention to detail. Couldn't have asked for a better partner.",
                image:
                  "https://plus.unsplash.com/premium_photo-1692340973636-6f2ff926af39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                name: "Lana Akash",
                handle: "@lanaakash",
              },
              {
                description:
                  "The brand film NexShift produced for us was cinematic, emotional, and exactly on-brand. Highly recommend their videography team.",
                image:
                  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                name: "Liam O'Connor",
                handle: "@liamoc",
              },
              {
                description:
                  "Working with NexShift felt like magic — they just got our brand and brought it to life across every channel beautifully.",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                name: "Isabella Mendes",
                handle: "@isamendes",
              },
              {
                description:
                  "NexShift's performance marketing campaigns delivered measurable ROI from week one. They don't just promise results — they deliver them.",
                image:
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                name: "Meera Patel",
                handle: "@meerapatel",
              },
              {
                description:
                  "I recommend NexShift to any business looking for a creative agency that thinks strategically and executes beautifully.",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                name: "Emily Chen",
                handle: "@emchen",
              },
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}