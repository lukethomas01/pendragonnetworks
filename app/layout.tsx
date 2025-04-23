import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pendragonnetworks.com'),
  title: {
    template: "%s | Pendragon Networks",
    default: "Pendragon Networks | Technical Services & Network Engineering in South Wales",
  },
  description: "Specialist technical services provider in South Wales offering rack & stack services, structured cabling, WiFi deployment, and network engineering across Cardiff, Swansea, Bridgend, and surrounding areas.",
  keywords: ["network engineering", "structured cabling", "rack and stack", "technical support", "South Wales", "Cardiff", "Swansea", "Bridgend"],
  authors: [{ name: "Pendragon Networks" }],
  creator: "Pendragon Networks",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://pendragonnetworks.com",
    siteName: "Pendragon Networks",
    title: "Pendragon Networks | Network Engineering & Technical Services in South Wales",
    description: "Specialist technical services provider in South Wales offering rack & stack services, structured cabling, WiFi deployment, and network engineering.",
    images: [
      {
        url: "/images/pendragon-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pendragon Networks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pendragon Networks | Network Engineering in South Wales",
    description: "Specialist technical services provider in South Wales offering rack & stack services, structured cabling, WiFi deployment, and network engineering.",
    images: ["/images/pendragon-twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
