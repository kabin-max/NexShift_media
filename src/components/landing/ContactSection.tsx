"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "../common/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full min-h-[90vh] md:min-h-screen bg-transparent flex flex-col items-center justify-between overflow-hidden py-[5%] border-t border-gray-200">




      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full md:w-[70%] h-full">

          {/* Horizontal Gradient: fades more gently toward the right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] from-20% via-[#FAFAFA]/60 to-transparent" />

          {/* Vertical Gradient: subtle darkening at top and bottom to ensure text pops */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/40 via-transparent to-[#FAFAFA]/80" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex flex-col items-center flex-1"
      >
        {/* Top Heading */}
        <div className="text-center px-6 mt-12 md:mt-4 mb-8 md:mb-12 z-10 relative flex flex-col items-center">
          <h2 className="font-sans font-bold text-[#154880] text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-sm mb-4">
            Get in Touch
            <div className="h-1.5 w-24 bg-[#03b364] shadow-[0_0_10px_rgba(3,179,100,0.5)] mx-auto mt-2 rounded-full pointer-events-none" />
          </h2>
        </div>

        {/* Contact Content Grid */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center mb-auto pb-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white/60 backdrop-blur-xl p-6 sm:p-10 border border-gray-200 rounded-3xl shadow-xl w-full">

            {/* Left Side: Contact Info */}
            <div className="flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left justify-center">


              <div className="flex flex-col items-center lg:items-start space-y-8 pt-2 pb-2 w-full" itemScope itemType="https://schema.org/LocalBusiness">
                {/* Email */}
                <ScrollReveal direction="up" delay={0.1}>
                  <div className="flex flex-col items-center lg:items-start space-y-2">
                    <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-gray-500">Email Us</span>
                    <a
                      href="mailto:info@nexshift.com.np"
                      itemProp="email"
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#154880] tracking-tight hover:text-[#0D7A95] transition-colors duration-300 decoration-[#14A9D6] underline-offset-8 hover:underline"
                    >
                      info@nexshift.com.np
                    </a>
                  </div>
                </ScrollReveal>

                {/* Phone */}
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="flex flex-col items-center lg:items-start space-y-2">
                    <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-gray-500">Call Us</span>
                    <a
                      href="tel:+9779818633814"
                      itemProp="telephone"
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#154880] tracking-tight hover:text-[#0D7A95] transition-colors duration-300 decoration-[#14A9D6] underline-offset-8 hover:underline"
                    >
                      +977-9818633814
                    </a>
                  </div>
                </ScrollReveal>

                {/* Address */}
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="flex flex-col items-center lg:items-start space-y-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-gray-500">Visit Us</span>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#154880] tracking-tight text-center lg:text-left">
                      <span itemProp="streetAddress">New Baneshwor</span>, <span itemProp="addressLocality">Kathmandu</span>, <span itemProp="addressCountry">Nepal</span>
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Small Logo */}
              <div
                className="text-3xl text-[#00a3d0] font-black tracking-tight drop-shadow-sm select-none pt-4"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                NexShift
              </div>
            </div>

            {/* Right Side: Map */}
            <div className="w-full min-h-[350px] sm:min-h-[400px] h-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative">
              <iframe
                title="NexShift Media & Events location — New Baneshwor, Kathmandu"
                                src="https://maps.google.com/maps?q=Nexshift+Media+and+Events&t=k&z=18&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
