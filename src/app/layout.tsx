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
        url: "https://applycanara.vercel.app/bg2.png",
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
