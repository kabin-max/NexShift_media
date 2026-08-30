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
  title: {
    default: "NexShift | Premier Event Management Company & Digital Marketing Agency in Kathmandu, Nepal",
    template: "%s | NexShift Nepal",
  },
  description: "NexShift is Nepal's premier event management company and creative digital marketing agency based in Kathmandu. Specialized in corporate events, brand films, performance marketing, SEO, social media management, videography, and custom web development.",
  keywords: [
    "NexShift",
    "NexShift Media",
    "Event Management Nepal",
    "Digital Marketing Agency Kathmandu",
    "Creative Agency Nepal",
    "Performance Marketing Nepal",
    "Brand Films Kathmandu",
    "Corporate Event Planning Nepal",
    "Videography Services Nepal",
    "Digital Strategy Nepal",
    "SEO Agency Kathmandu",
    "Social Media Marketing Nepal",
    "Web Development Agency Kathmandu",
    "best event management company in Kathmandu",
    "creative media and marketing agency in Nepal",
    "top performance marketing services Kathmandu",
    "corporate event planning and execution Nepal",
    "professional videography and brand films Nepal",
    "digital strategy and brand transformation agency",
    "data driven marketing campaigns Nepal",
    "expert media and event management NexShift",
    "event management company Kathmandu",
    "best digital marketing agency in Nepal",
    "who is the best event planner in Kathmandu",
    "top media production agency Nepal",
  ],
  authors: [{ name: "NexShift Media & Events", url: "https://nexshift.com.np" }],
  creator: "NexShift",
  publisher: "NexShift Media & Events",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://nexshift.com.np",
  },
  openGraph: {
    title: "NexShift | Event Management & Digital Marketing Agency Nepal",
    description: "Leading event management company and digital marketing agency in Kathmandu, Nepal. We craft unforgettable events and data-driven marketing campaigns.",
    url: "https://nexshift.com.np",
    siteName: "NexShift Media & Events",
    images: [
      {
        url: "https://nexshift.com.np/nst-logo.png",
        width: 1200,
        height: 630,
        alt: "NexShift Media & Events Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexShift | Event Management & Digital Marketing Agency Nepal",
    description: "Premier event management and creative media agency in Kathmandu, Nepal. Corporate events, performance marketing, brand films & web dev.",
    images: ["https://nexshift.com.np/nst-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
