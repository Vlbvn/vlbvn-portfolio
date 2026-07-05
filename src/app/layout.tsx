"use client";

import React, { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const shadowX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const shadowY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col relative transition-colors duration-300">
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* HALO LUMINEUX GLOBAL - Actif sur toutes les pages et adapté au thème */}
          <motion.div 
            style={{ x: shadowX, y: shadowY }}
            className="hidden md:block pointer-events-none fixed w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-3xl z-40"
          />

          <Navbar /> 
          
          <div className="flex-grow z-10">
            {children}
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}