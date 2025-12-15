import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "American Scale | Leadership & Finance Intelligence",
  description: "Patriotic Accountability Matrix scoring legislation and leaders on the For All Americans principle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-b from-slate-950 via-slate-950 to-black text-white`}
      >

        <Navbar />
        <div className="min-h-[80vh] flex flex-col">
          <main className="flex-1">{children}</main>
          <footer className="w-full flex flex-col items-center justify-center py-6 mt-12 glass-panel border-t border-cyan-900/60 backdrop-blur-lg">
            <span className="neural-gradient text-xs md:text-sm font-semibold tracking-wide select-none">
              © 2025 Aegis Civics Built By Phnx Ai. All rights reserved.
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
