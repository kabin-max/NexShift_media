import Background from "../../components/common/Background";
import Header from "../../components/common/Header";
import SocialIcons from "../../components/common/SocialIcons";
import Gallery from "../../components/gallery/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | NexShift",
  description: "Explore our portfolio of projects including digital marketing, video editing, and cameragraphy.",
};

export default function GalleryPage() {
  return (
    <main className="relative flex flex-col min-h-screen w-full text-white font-sans bg-black">
      <Background />
      <Header />
      <SocialIcons />

      <div className="relative z-10 w-full flex flex-col flex-grow pt-32">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-widest text-center mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            GALLERY
          </h1>
        </div>
        <Gallery />
      </div>
    </main>
  );
}
