import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

import Hero from '@/components/Hero';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechBlog",
  description: "One of the A.I Tech Blogs Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {children}
        
        <Footer />
        </body>
    </html>
  );
}
