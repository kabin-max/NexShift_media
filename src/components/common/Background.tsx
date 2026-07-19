import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <Image src="/bg-image.png" alt="Background" fill sizes="100vw" className="object-cover object-center opacity-60" priority />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
