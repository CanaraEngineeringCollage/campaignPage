import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import WhatsappChatWidget from "@/components/WhatsappChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admissions 2025 – Canara Engineering College, Mangalore",
  description:
    "Join Canara Engineering College, one of Karnataka’s top institutions for engineering education. Admissions open for B.E. programs with top placements and modern facilities.",
  openGraph: {
    title: "Admissions 2025 – Canara Engineering College",
    description:
      "Secure your future at Canara Engineering College. Enroll now for industry-ready engineering programs with excellent placement support.",
    url: "https://applycanara.vercel.app/",
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://applycanara.vercel.app/bg2.png", // from public/bg.png
        width: 1200,
        height: 630,
        alt: "Canara Engineering College Admissions 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions 2025 – Canara Engineering College",
    description:
      "Explore world-class engineering education at Canara Engineering College. Apply now for 2025 admissions.",
    images: ["https://applycanara.vercel.app/bg2.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         
        <Navbar/>
          <Toaster position="top-right" />
        {children}
        <WhatsappChatWidget />
      </body>
    </html>
  );
}
