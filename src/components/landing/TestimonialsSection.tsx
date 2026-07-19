import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative w-full pt-12 pb-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-xl text-white">
            What They Say
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with NexShift.
          </p>
        </div>
        <AnimatedTestimonials
          autoplay={true}
          data={[
            {
              description:
                "ScrollX-UI has completely transformed how I build interfaces. The animations are silky smooth, and the components are modular and responsive.",
              image:
                "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              name: "Isabelle Carlos",
              handle: "@isabellecarlos",
            },
            {
              description:
                "I love how ScrollX-UI makes my projects look professional with minimal effort. The documentation is clear and the community is super helpful.",
              image:
                "https://plus.unsplash.com/premium_photo-1692340973636-6f2ff926af39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              name: "Lana Akash",
              handle: "@lanaakash",
            },
            {
              description:
                "The smooth scrolling animations and intuitive components in ScrollX-UI save me hours of development time!",
              image:
                "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              name: "Liam O’Connor",
              handle: "@liamoc",
            },
            {
              description:
                "Using ScrollX-UI feels like magic — it’s so easy to create beautiful, interactive UIs without writing complex code.",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              name: "Isabella Mendes",
              handle: "@isamendes",
            },
            {
              description:
                "ScrollX-UI’s open-source nature means I can customize components exactly how I want them — plus, the performance is outstanding.",
              image:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              name: "Meera Patel",
              handle: "@meerapatel",
            },
            {
              description:
                "I recommend ScrollX-UI to everyone looking for a powerful, flexible UI library with stunning animation support.",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
              name: "Emily Chen",
              handle: "@emchen",
            },
          ]}
        />
      </div>
    </section>
  );
}
