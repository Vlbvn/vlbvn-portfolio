"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Briefcase, Mail, FileText } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/projets', label: 'Projets', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* NAVBAR TOP */}
      <nav className="w-full bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-900 sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Desktop : Masqué sur mobile (hidden md:block) */}
            <div className="hidden md:block flex-shrink-0">
              <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Vlbvn<span className="text-teal-500 dark:text-teal-400">.dev</span>
              </Link>
            </div>

            {/* Liens Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1 relative">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-xl ${
                        isActive 
                          ? 'text-teal-600 dark:text-teal-400' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navActiveBg"
                          className="absolute inset-0 bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/40 rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bouton Action Desktop */}
            <div className="hidden md:block">
              <a href="/assets/cv-brice-zongo.pdf" download="cv-brice-zongo.pdf">
                <Button variant="outline" size="sm" className="font-semibold text-xs border-slate-200 dark:border-teal-500/20 text-slate-800 dark:text-teal-400 hover:bg-slate-100 dark:hover:bg-teal-500/10">
                  Mon CV
                </Button>
              </a>
            </div>

            {/* Logo Mobile unique : Visible uniquement sur mobile (block md:hidden) */}
            <div className="block md:hidden w-full text-center font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              <Link href="/">
                Vlbvn<span className="text-teal-500 dark:text-teal-400">.dev</span>
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* NAVIGATION BASSE FLOTTANTE (Mobile uniquement) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl z-50 flex items-center justify-around py-2.5 px-4 transition-colors duration-300">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors duration-200 select-none ${
                isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="navActiveMobileBg"
                  className="absolute inset-0 bg-teal-500/10 dark:bg-teal-400/10 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium tracking-tight">{link.label}</span>
            </Link>
          );
        })}

        {/* Bouton raccourci CV mobile */}
        <a href="/assets/cv-brice-zongo.pdf" download="cv-brice-zongo.pdf" className="flex flex-col items-center gap-1 py-1 px-3 text-slate-500 dark:text-slate-400">
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight">CV</span>
        </a>
      </div>
    </>
  );
}