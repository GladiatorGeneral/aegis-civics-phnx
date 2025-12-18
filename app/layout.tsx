import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { Mail, Phone, Instagram } from "lucide-react";
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
          <footer className="w-full py-6 mt-12 glass-panel border-t border-cyan-900/60 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 items-center">
              <div className="flex items-center gap-2 text-sm justify-start">
                <Mail className="w-4 h-4 text-cyan-100" aria-hidden />
                <a href="mailto:privacy@phnxai.com" className="text-cyan-100 hover:text-white hover:underline">privacy@phnxai.com</a>
              </div>

              <div className="text-center">
                <p className="neural-gradient font-semibold text-center mb-1">Get in touch to propose projects, partnerships, or implementation support — we'll help move ideas to production.<br />
                  <a href="mailto:projects@phnxai.com" className="underline">projects@phnxai.com</a>
                </p>
              </div>

              <div className="flex flex-col items-end gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/phnxai" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.tiktok.com/@phnxai" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-white" aria-label="TikTok">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                      <path d="M9 3v10a3 3 0 1 0 3-3V6a6 6 0 0 0 6 6h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-100" aria-hidden />
                  <a href="tel:+12022026002" className="neural-gradient underline hover:text-white">+1 (202) 202-6002</a>
                </div>
                <div>
                  <Link href="/contact" className="text-cyan-100 hover:text-white hover:underline">Contact</Link>
                </div>

                <div className="mt-2 flex flex-col items-end gap-1">
                  <div className="neural-gradient font-semibold">
                    <Link href="/privacy#privacy" className="hover:underline">Privacy Policy</Link>
                  </div>
                  <div className="neural-gradient font-semibold">
                    <Link href="/privacy#cookies" className="hover:underline">Cookie Policy</Link>
                  </div>
                  <div className="neural-gradient font-semibold">
                    <Link href="/privacy#terms" className="hover:underline">Terms of Service</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="max-w-7xl mx-auto px-4 text-center neural-gradient text-xs md:text-sm font-semibold tracking-wide select-none">
                © 2026 Aegis Civics Built By Phnx Ai. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
