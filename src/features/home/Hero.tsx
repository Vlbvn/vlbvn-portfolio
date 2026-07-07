"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import Link from 'next/link'; // Importation de Link pour les redirections
import Button from '../../components/Button';

export default function Hero() {
  const { scrollY } = useScroll();

  /* CALCULS DE PARALLAX */
  const yBg = useTransform(scrollY, [0, 500], [0, 450]);
  const yText = useTransform(scrollY, [0, 500], [0, -700]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleBg = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">
      
      {/* 1. ARRIÈRE-PLAN ANIMÉ */}
      <motion.div 
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 dark:opacity-40 transition-colors duration-300" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* 2. CONTENU AU PREMIER PLAN */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl w-full text-center space-y-6 z-10"
      >
        {/* Badge Disponibilité */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-teal-600 dark:text-teal-400 backdrop-blur-md shadow-sm dark:shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-teal-500 dark:text-teal-400" />
          <span>Disponible pour vos projets ambitieux</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
          Concevoir des solutions <br />
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 dark:from-teal-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
            numériques d&apos;élite
          </span>
        </h1>

        {/* Description courte */}
        <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl font-light leading-relaxed">
          Développeur Full-Stack spécialisé dans les architectures web modernes et performantes. Je transforme vos idées complexes en code propre.
        </p>

        {/* Actions d'appel avec redirections Next.js */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Redirection vers la page Projets */}
          <Link href="/projets" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="group gap-2 w-full">
              <span>Découvrir mes projets</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
          
          {/* Redirection vers la page Contact */}
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="group gap-2 w-full border-slate-200 dark:border-slate-800 text-slate-800 dark:text-teal-400 hover:bg-slate-100 dark:hover:bg-teal-500/10">
              <Code2 className="w-4 h-4 transition-colors duration-300" />
              <span>Me contacter</span>
            </Button>
          </Link>

        </div>
      </motion.div>

      {/* 3. INDICATEUR DE SCROLL */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400 dark:text-slate-500">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-teal-500 dark:bg-teal-400 rounded-full" 
          />
        </div>
      </div>

    </section>
  );
}