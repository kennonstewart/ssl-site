import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Second Street Labs',
  description: "Detroit's Analytics Studio.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-blue`}>
        <header className="py-6 px-12 border-transparent text-transform uppercase">
          <nav className="max-w-5xl mx-auto flex justify-between items-center">
            <span className="text-xl font-bold gradient-text">Second Street Labs</span>
            <ul className="flex gap-4 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto">{children}</main>

        <footer className="text-sm text-center py-6 border-transparent">
          © {new Date().getFullYear()} Second Street Labs
        </footer>
      </body>
    </html>
  );
}
