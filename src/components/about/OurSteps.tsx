"use client";

import { ArrowUpRight } from "lucide-react";

export default function OurSteps() {
  const steps = [
    { num: "01", title: "Strategy", desc: "Deep market research, competitor analysis, and data-driven planning to define clear objectives and identify growth opportunities." },
    { num: "02", title: "Creativity", desc: "Innovative concepts, compelling storytelling, and impactful visual experiences that make brands unforgettable." },
    { num: "03", title: "Execution", desc: "Seamless implementation with attention to every detail—on time, within budget, and aligned with brand goals." },
    { num: "04", title: "Results", desc: "Performance tracking, transparent reporting, optimization, and continuous improvement for measurable success." }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-zinc-950/80 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 items-center">
        <div className="w-full text-center">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Our Steps
          </h3>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-6 border-t border-white/10 pt-8 ${i % 2 === 1 ? "md:translate-y-8" : ""
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
  );
}
