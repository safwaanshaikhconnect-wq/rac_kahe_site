import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CLUB } from "@/lib/data";

const fontDisplay = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${CLUB.shortName} | District 3206`,
    template: `%s | ${CLUB.shortName}`,
  },
  description: `${CLUB.name} — District 3206. Rise with Purpose, Soar with Impact.`,
  keywords: [
    "Rotaract",
    "KAHE",
    "Karpagam Academy of Higher Education",
    "Rotary District 3206",
    "Coimbatore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
