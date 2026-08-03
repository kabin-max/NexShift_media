import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexshift.com.np"),
  title: "NexShift | Creating amazing experiences",
  description: "Landing page for NexShift company.",
  keywords: [
    "NexShift",
    "Event Management",
    "Media Agency",
    "Creative Agency",
    "Performance Marketing",
    "Brand Films",
    "Videography",
    "Digital Strategy",
    "Marketing Agency Nepal",
    "Kathmandu Events",
    "best event management company in Kathmandu",
    "creative media and marketing agency in Nepal",
    "top performance marketing services Kathmandu",
    "corporate event planning and execution Nepal",
    "professional videography and brand films Nepal",
    "digital strategy and brand transformation agency",
    "data driven marketing campaigns Nepal",
    "expert media and event management NexShift",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
