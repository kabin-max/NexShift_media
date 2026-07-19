"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // In a real app, you would submit the form data here
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: "" });
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-[90vh] md:min-h-screen bg-black flex flex-col items-center justify-between overflow-hidden pt-20 pb-10 border-t border-zinc-900/50">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full md:w-[70%] h-full">
          <Image
            src="/bg-image.png"
            alt="Contact Background"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          {/* Horizontal Gradient: fades more gently toward the right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black from-20% via-black/60 to-transparent" />

          {/* Vertical Gradient: subtle darkening at top and bottom to ensure text pops */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>
      </div>

      {/* Top Heading */}
      <div className="text-center px-6 mt-12 md:mt-4 mb-8 md:mb-16">
        <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-xl">
          Get in Touch
        </h2>
      </div>

      {/* Contact Content Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-auto pb-12">

        {/* Left Side: Form (Glassmorphism) */}
        <div className="w-full bg-black/40 backdrop-blur-xl p-8 sm:p-10 border border-zinc-800 rounded-3xl shadow-2xl order-2 md:order-1">
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} className={`bg-zinc-900/60 border ${errors.name ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-4 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800/80 transition-all`} placeholder="John Doe" />
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className={`bg-zinc-900/60 border ${errors.email ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-4 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800/80 transition-all`} placeholder="john@example.com" />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400">Subject</label>
              <input type="text" id="subject" value={formData.subject} onChange={handleChange} className={`bg-zinc-900/60 border ${errors.subject ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-4 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800/80 transition-all`} placeholder="Project Inquiry" />
              {errors.subject && <span className="text-red-500 text-xs mt-1">{errors.subject}</span>}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400">Message</label>
              <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className={`bg-zinc-900/60 border ${errors.message ? 'border-red-500' : 'border-zinc-800'} text-white rounded-xl px-4 py-4 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800/80 transition-all resize-none`} placeholder="Tell us about your project..."></textarea>
              {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
            </div>

            <button type="submit" className={`w-full font-bold text-sm tracking-wide rounded-xl py-5 mt-2 transition-colors cursor-pointer ${isSubmitted ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'}`}>
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-8 text-center md:text-left order-1 md:order-2">
          <p className="text-zinc-300 text-lg leading-relaxed max-w-md">
            Ready to start your next project? We&apos;d love to hear from you. Fill out the form or reach out directly via email.
          </p>

          <div className="flex flex-col space-y-2">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-500">Email Us</span>
            <a
              href="mailto:info@nexshift.com"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight hover:text-zinc-300 transition-colors duration-300 decoration-zinc-700 underline-offset-8 hover:underline"
            >
              info@nexshift.com
            </a>
          </div>

          {/* Small Logo */}
          <div
            className="text-3xl text-white font-black italic tracking-tight drop-shadow-xl select-none pt-4"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            NexShift!
          </div>
        </div>

      </div>

    </section>
  );
}
