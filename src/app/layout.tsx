import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_INFO } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE_INFO.name} | Boston Residential Architecture & Remodeling`,
  description:
    "Editorial monograph of Ashori Partners LLC: over 20 years of Boston residential renovation craft in kitchens, bathrooms, hardwood flooring, stairs, and interior painting.",
  icons: {
    icon: "/images/ashori-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Geist+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink selection:bg-accent-soft selection:text-ink">
        <a
          href="#main-content"
          className="visually-hidden focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
