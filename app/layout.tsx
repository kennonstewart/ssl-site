import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: 'Second Street Labs',
  description: 'Scroll-driven storytelling for the modern data world',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white`}>
        <header className="py-6 px-8 border-b">
          <nav className="max-w-5xl mx-auto flex justify-between items-center">
            <span className="text-xl font-bold"><span className="gradient-text">Second Street Labs</span></span>
            <ul className="flex gap-4 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto">{children}</main>

        <footer className="text-sm text-center py-6 border-t">
          © {new Date().getFullYear()} Second Street Labs
        </footer>
      </body>
    </html>
  );
}