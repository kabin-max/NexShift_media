import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-12 bg-black px-8 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
        <div className="space-y-4">
          {/* <span className="text-white font-bold tracking-wider text-xl">NEXSHIFT.</span>
          <p className="text-zinc-500 text-sm max-w-xs font-light">
            Shifting perspectives, elevating brands, creating meaningful digital experiences.
          </p> */}
          <div className="relative w-full  text-center overflow-hidden">
            <h2 className="text-[10vw] font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/5 uppercase select-none pointer-events-none">
              NEXSHIFT .
            </h2>
          </div>
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

      {/* <div className="relative w-full border-t border-white/10 pt-10 text-center select-none overflow-hidden">
        <h2 className="text-[10vw] font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/5 uppercase select-none pointer-events-none">
          NEXSHIFT
        </h2>
      </div> */}
    </footer>
  );
}
