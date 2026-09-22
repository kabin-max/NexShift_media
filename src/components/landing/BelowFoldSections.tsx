"use client";

import dynamic from "next/dynamic";

/**
 * Below-the-fold landing sections are code-split out of the initial bundle.
 * They are not needed for first paint, so deferring them removes a large
 * amount of JavaScript (and framer-motion usage) from the critical path,
 * lowering Total Blocking Time and unused-JS on initial load.
 */
const AboutSection2 = dynamic(() => import("./AboutSection2"));
const ServicesSection = dynamic(() => import("./ServicesSection"));
const TrustedPartners = dynamic(() => import("./TrustedPartners"));
const ClientsSection = dynamic(() => import("./ClientsSection"));
const TestimonialsSection = dynamic(() => import("./TestimonialsSection"));
const ContactSection = dynamic(() => import("./ContactSection"));
const Footer = dynamic(() => import("../common/Footer"));

export default function BelowFoldSections() {
  return (
    <div className="w-full flex flex-col md:pl-[72px]">
      <AboutSection2 />
      <ServicesSection />
      <TrustedPartners />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
