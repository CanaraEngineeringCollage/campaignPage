import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import WhatsappChatWidget from "@/components/WhatsappChatWidget";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admissions 2026 | Canara Engineering College, Mangalore | Apply Now",
  description:
    "Apply for Admissions 2026 at Canara Engineering College, Mangalore. One of Karnataka’s leading engineering colleges offering B.E. programs with excellent placements, modern infrastructure, industry-focused curriculum, and hostel facilities.",
  keywords: [
    "Admissions 2026",
    "Canara Engineering College",
    "Engineering College Mangalore",
    "Top engineering colleges Karnataka",
    "B.E admissions 2026",
    "engineering courses Mangalore",
    "best engineering college placements Karnataka",
    "engineering admission 2026",
  ],
  openGraph: {
    title: "Admissions 2026 | Canara Engineering College, Mangalore",
    description:
      "B.E Admissions 2026 open at Canara Engineering College, Mangalore. Get world-class engineering education, campus placements, modern labs, research support, and hostel facilities.",
    url: "https://apply.canaraengineering.in/",
    siteName: "Canara Engineering College",
    images: [
      {
        url: "https://apply.canaraengineering.in/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Canara Engineering College – Admissions 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions 2026 | Canara Engineering College (Apply Online)",
    description:
      "Admissions 2026 open for B.E courses at Canara Engineering College, Mangalore. Secure your future with industry-ready engineering programs & top placement support.",
    images: ["https://apply.canaraengineering.in/images/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WTGB2QQ');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WTGB2QQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <Toaster position="top-right" />
        {children}
        <WhatsappChatWidget />
      </body>
    </html>
  );
}
