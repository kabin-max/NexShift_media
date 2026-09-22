import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.92"],
  // Strip console.* (except error/warn) from production bundles to cut JS payload.
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  // Tree-shake heavy barrel packages so only the icons/utilities actually used
  // are bundled instead of the whole library.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "react-icons"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "andyhardy.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
