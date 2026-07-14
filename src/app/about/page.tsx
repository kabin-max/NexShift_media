"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { 
  Menu, 
  X, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Play 
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaVimeoV, FaLinkedinIn } from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import AnimatedPhotoStack from "../components/AnimatedPhotoStack";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [fanned, setFanned] = useState(false);

  /* ─── Scroll-linked transforms for Hero ─────────────────────────────── */
  const { scrollY } = useScroll();
  const heroFade = useTransform(scrollY, [0, 300], [1, 0]);

  /* ─── Scroll Progress Refs for Parallax & Reveals ───────────────────── */
  const storyRef = useRef(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyY = useTransform(storyProgress, [0, 0.5], [60, 0]);

  // FAQs
  const faqs = [
    {
      q: "What digital marketing services do you offer in Nepal?",
      a: "We provide social media marketing, SEO, Google Ads, Meta Ads, branding, content creation, video production, website development, performance marketing, email marketing, and complete digital growth strategies tailored to your business."
    },
    {
      q: "How much does digital marketing cost in Nepal?",
      a: "Pricing depends on your business goals, campaign scope, advertising budget, and required services. We offer flexible packages suitable for startups, SMEs, and large enterprises."
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Paid advertising campaigns can generate results within days, while SEO and organic growth typically take 3–6 months. We provide transparent reporting throughout the process."
    },
    {
      q: "Do you work with businesses outside Kathmandu?",
      a: "Yes. We work with clients across Nepal and internationally through remote collaboration while also providing on-site support whenever required."
    }
  ];

  // Staggered Approach Steps (matching the layout style of "Our Steps")
  const steps = [
    { num: "01", title: "Strategy", desc: "Deep market research, competitor analysis, and data-driven planning to define clear objectives and identify growth opportunities." },
    { num: "02", title: "Creativity", desc: "Innovative concepts, compelling storytelling, and impactful visual experiences that make brands unforgettable." },
    { num: "03", title: "Execution", desc: "Seamless implementation with attention to every detail—on time, within budget, and aligned with brand goals." },
    { num: "04", title: "Results", desc: "Performance tracking, transparent reporting, optimization, and continuous improvement for measurable success." }
  ];

  // Team members matching desaturated/staggered visual grid
  const team = [
    { name: "Eleanor Pena", role: "Creative Director" },
    { name: "Ralph Edwards", role: "Marketing Strategist" },
    { name: "Annette Black", role: "Event Producer" },
    { name: "Jacob Jones", role: "Visual Producer" },
    { name: "Bessie Cooper", role: "Brand Designer" },
    { name: "Darrell Steward", role: "Web Developer" }
  ];

  return (
    <main className="relative flex flex-col w-full text-white font-sans bg-black overflow-x-hidden">
      
      {/* ── Fixed Background Image ────────────────────────── */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/bg-image.png" 
          alt="Background Backdrop" 
          fill 
          className="object-cover object-center opacity-60 select-none pointer-events-none" 
          priority 
        />
      </div>

      {/* ── Fixed Header ────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-45 flex items-center justify-between w-full px-8 py-6 md:px-12 md:py-8 pointer-events-none">
        <button 
          onClick={() => setMenuOpen(true)}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-100 transition shadow-md cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Static Header Logo */}
        <Link 
          href="/" 
          className="pointer-events-auto text-3xl font-bold text-white select-none cursor-pointer tracking-tight"
          style={{ fontFamily: "var(--font-permanent-marker), cursive" }}
        >
          XYX!
        </Link>

        <Link 
          href="/"
          className="pointer-events-auto px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition shadow-md"
        >
          Go Back Home
        </Link>
      </header>

      {/* ── Navigation Menu Overlay ─────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-lg"
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 left-8 md:left-12 flex items-center justify-center w-12 h-12 bg-white/10 rounded-full text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)}
                className="text-4xl md:text-5xl font-bold tracking-tight hover:text-amber-400 transition"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMenuOpen(false)}
                className="text-4xl md:text-5xl font-bold tracking-tight text-amber-500 hover:text-amber-400 transition"
              >
                About Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fixed Social Icons ──────────────────────────── */}
      <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center z-30">
        <a href="#" aria-label="Instagram" className="opacity-85 hover:opacity-100 hover:scale-110 transition-all text-white"><FaInstagram className="w-4 h-4 md:w-5 md:h-5" /></a>
        <a href="#" aria-label="Vimeo"     className="opacity-85 hover:opacity-100 hover:scale-110 transition-all text-white"><FaVimeoV    className="w-4 h-4 md:w-5 md:h-5" /></a>
        <a href="#" aria-label="Facebook"  className="opacity-85 hover:opacity-100 hover:scale-110 transition-all text-white"><FaFacebookF className="w-4 h-4 md:w-5 md:h-5" /></a>
        <a href="#" aria-label="YouTube"   className="opacity-85 hover:opacity-100 hover:scale-110 transition-all text-white"><FaYoutube   className="w-4 h-4 md:w-5 md:h-5" /></a>
      </div>

      {/* ── Page Content ────────────────────────────────── */}
      <div className="relative z-10 w-full flex flex-col">

        {/* ── Hero Section (Cinematic fanned layout with stack) ── */}
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen pt-32 pb-16 px-6">
          <motion.div 
            style={{ opacity: heroFade }}
            className="w-full max-w-6xl flex flex-col items-center"
          >
            {/* Animated Stack of Printed Photographs */}
            <div className="w-full mb-12 flex justify-center overflow-visible">
              <AnimatedPhotoStack onAnimationComplete={() => setFanned(true)} />
            </div>

            {/* Content fading in once photo stack fanning finishes */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={fanned ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center max-w-3xl"
            >
              <span className="text-amber-500 font-semibold tracking-widest text-xs uppercase mb-4">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                We're on a Mission to <br className="hidden md:inline"/>
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Elevate Brands
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 mb-10 leading-relaxed max-w-2xl">
                NexShift Media & Events is a creative and strategic agency based in Nepal. We specialize in digital marketing, event management, branding, visual storytelling, and content production for corporate clients, startups, banks, NGOs, and government institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a href="#story" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition shadow-lg flex items-center gap-2 group text-sm">
                  Explore Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/" className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition text-sm">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.footer
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 text-xs font-medium tracking-wider opacity-60 text-zinc-400"
            style={{ opacity: heroFade }}
          >
            <span>27.7172° N, 85.3240° E</span>
            <span className="hidden sm:block">Shifting perspectives from Kathmandu, Nepal</span>
          </motion.footer>
        </section>


        {/* ── Our Story Section (Matches Image Layout) ── */}
        <section id="story" ref={storyRef} className="relative w-full py-24 md:py-32 bg-black px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">
            
            {/* Left Column: Big Section Title */}
            <div className="lg:w-1/3">
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white sticky top-32">
                Our <br />Story
              </h3>
            </div>

            {/* Right Column: Bio Paragraphs & Staggered Stats */}
            <div className="lg:w-3/5 space-y-16">
              
              {/* Bio Content */}
              <motion.div 
                style={{ y: storyY }}
                className="text-zinc-400 space-y-6 text-lg leading-relaxed font-light"
              >
                <p className="text-white text-xl font-medium leading-relaxed">
                  Born from a passion for creativity and strategic excellence, NexShift was founded with a clear vision: to bridge the gap between powerful storytelling and measurable business results.
                </p>
                <p>
                  What started as a small team with big ambitions has grown into one of Nepal's most trusted creative agencies. We've successfully managed 150+ projects, partnered with 50+ organizations, and helped brands reach audiences of over 5 million people.
                </p>
                <p>
                  Today, we proudly serve corporate enterprises, ambitious startups, banking institutions, educational organizations, NGOs, and government bodies—always maintaining the same commitment to quality, creativity, and measurable impact.
                </p>
              </motion.div>

              {/* Staggered Stats Blocks (Matching Visual Layout in Image) */}
              <div className="relative pt-12 flex flex-col gap-12 sm:gap-0 sm:block min-h-[300px]">
                {/* Stat 1 */}
                <div className="sm:absolute sm:left-0 sm:top-0">
                  <span className="text-7xl md:text-8xl font-bold tracking-tight text-white font-mono block">150+</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest mt-1 block">Projects Completed</span>
                </div>

                {/* Stat 2: Indented & Staggered Down */}
                <div className="sm:absolute sm:left-[35%] sm:top-[70px]">
                  <span className="text-7xl md:text-8xl font-bold tracking-tight text-white font-mono block">50+</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest mt-1 block">Happy Clients</span>
                </div>

                {/* Stat 3: Indented Further & Staggered Down */}
                <div className="sm:absolute sm:right-0 sm:top-[140px]">
                  <span className="text-7xl md:text-8xl font-bold tracking-tight text-white font-mono block">5M+</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest mt-1 block">Audience Reached</span>
                </div>
              </div>

              {/* Video/Image Block (Matching "Explore more about us" layout) */}
              {/* <div className="relative w-full aspect-video rounded-xl overflow-hidden group shadow-2xl border border-white/10 mt-24">
                <Image 
                  src="/bg-image.png" 
                  alt="Explore more" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-70"
                />
                <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-zinc-400 text-xs tracking-wider uppercase mb-1 block">Interactive Video</span>
                      <h4 className="text-2xl md:text-4xl font-semibold text-white">Explore more about us</h4>
                    </div>
                    <button className="w-14 h-14 md:w-18 md:h-18 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer" aria-label="Play Reel">
                      <Play className="w-6 h-6 fill-black translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </section>


        {/* ── Our Steps Section (Matches Image Layout) ── */}
        <section className="relative w-full py-24 md:py-32 bg-zinc-950/80 px-6 md:px-12 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">
            {/* Left Column: Title */}
            <div className="lg:w-1/3">
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white sticky top-32">
                Our <br />Steps
              </h3>
            </div>

            {/* Right Column: Steps Staggered List Grid */}
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {steps.map((step, i) => (
                <div 
                  key={i}
                  className={`flex flex-col justify-between p-6 border-t border-white/10 pt-8 ${
                    i % 2 === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div>
                    <span className="text-amber-500 font-mono text-sm tracking-wider block mb-4">
                      {step.num}
                    </span>
                    <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white flex items-center justify-between">
                      {step.title}
                      <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── Meet The Amazing Team Section (Matches Image Layout Grid) ── */}
        <section className="relative w-full py-24 md:py-32 bg-black px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-20">
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-left mb-4">
                Meet The <br />Amazing Team
              </h3>
              <p className="text-zinc-400 text-lg max-w-2xl font-light">
                A passionate team of strategists, creatives, event managers, visualizers, and builders committed to delivering exceptional results.
              </p>
            </div>

            {/* Asymmetrical Grid of Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              {team.map((member, i) => {
                // Apply offsets for asymmetrical layout matching the grid vibe in the image
                const offsetClass = 
                  i === 1 || i === 4 ? "lg:translate-y-12" : 
                  i === 2 || i === 5 ? "lg:translate-y-24" : "";

                return (
                  <div 
                    key={i} 
                    className={`group relative flex flex-col overflow-hidden transition-all duration-300 ${offsetClass}`}
                  >
                    {/* Portrait Frame */}
                    <div className="relative aspect-[3/4] w-full bg-zinc-900 rounded-xl overflow-hidden">
                      <Image 
                        src="/bg-image.png" 
                        alt={member.name}
                        fill
                        className="object-cover object-center grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Name & Position inside image overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                          {member.name}
                        </h4>
                        <p className="text-xs text-zinc-400 font-semibold uppercase tracking-widest mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ── FAQ Section (Clean Accordion) ── */}
        <section className="relative w-full py-24 bg-zinc-950 px-6 md:px-12 lg:px-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-white text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index}
                    className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
                  >
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition"
                    >
                      <span className="font-semibold text-sm md:text-base text-white">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-amber-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-400" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── Banner CTA Section (Matches CTA in image) ── */}
        <section className="relative w-full py-32 md:py-48 bg-zinc-900 overflow-hidden px-6">
          <Image 
            src="/bg-image.png" 
            alt="Find House Faster Banner" 
            fill 
            className="object-cover object-center opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
            <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              Find your <br className="hidden md:inline"/>
              <span className="italic font-light">Dream Experience</span> <br />
              Faster
            </h3>
            
            {/* Spinning/interactive circular badge in center */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center cursor-pointer shadow-2xl hover:bg-amber-400 transition duration-300"
            >
              <ArrowUpRight className="w-8 h-8" />
            </motion.div>
          </div>
        </section>


        {/* ── Footer Section (Matches HOMAH style massive logo) ── */}
        <footer className="relative w-full pt-20 pb-12 bg-black px-8 md:px-16 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
            <div className="space-y-4">
              <span className="text-white font-bold tracking-wider text-xl">NEXSHIFT.</span>
              <p className="text-zinc-500 text-sm max-w-xs font-light">
                Shifting perspectives, elevating brands, creating meaningful digital experiences.
              </p>
            </div>
            
            <div className="flex gap-16">
              <div className="space-y-4">
                <h5 className="text-white text-xs uppercase tracking-widest font-semibold">Info</h5>
                <ul className="space-y-2 text-zinc-500 text-sm font-light">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                  <li><a href="#" className="hover:text-white transition">Services</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-white text-xs uppercase tracking-widest font-semibold">Contact</h5>
                <ul className="space-y-2 text-zinc-500 text-sm font-light">
                  <li>Kathmandu, Nepal</li>
                  <li>info@nexshift.com</li>
                  <li>+977 1 2345678</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Huge outline / italic footer logo (exactly like HOMAH) */}
          <div className="relative w-full border-t border-white/10 pt-10 text-center select-none overflow-hidden">
            <h2 className="text-[10vw] font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/5 uppercase select-none pointer-events-none">
              NEXSHIFT
            </h2>
          </div>
        </footer>

      </div>
    </main>
  );
}
