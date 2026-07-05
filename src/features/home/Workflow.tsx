"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import { Compass, Code, Rocket } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    icon: <Compass className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
    step: "01",
    title: "Analyse & Architecture",
    description: "Cadrage précis des besoins, modélisation de la base de données et choix de la stack pour assurer la scalabilité et la sécurité dès le départ."
  },
  {
    icon: <Code className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
    step: "02",
    title: "Développement Élite",
    description: "Codage propre et hautement typé avec TypeScript, React ou React Native. Intégration d'API sécurisées et de composants réutilisables."
  },
  {
    icon: <Rocket className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    step: "03",
    title: "Déploiement & Suivi",
    description: "Tests approfondis, optimisation des performances, automatisation des builds via EAS/Vercel et mise en production fluide."
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);

  // Le masque reste identique mais réagira aux variables CSS du thème
  const maskImage = useTransform(mouseX, (x) => `radial-gradient(150px circle at ${x}px 1px, var(--color-teal-500) 0%, transparent 100%)`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
  };

  return (
    <section className="w-full py-20 px-4 max-w-6xl mx-auto space-y-16">
      
      {/* En-tête de la section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Mon processus de 
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 dark:from-teal-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {" "}travail
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
          Une méthodologie horizontale, transparente et structurée pour mener vos projets ambitieux vers le succès.
        </p>
      </div>

      {/* Conteneur de la Chronologie Horizontale */}
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 pt-4 group/timeline"
      >
        
        {/* LIGNE DE BASE STRUCTURELLE (S'adapte au mode jour/nuit) */}
        <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-px bg-slate-200 dark:bg-slate-900 z-0" />

        {/* LIGNE LUMINEUSE MAGNÉTIQUE */}
        <motion.div 
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage
          }}
          className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-px bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 dark:from-teal-400 dark:via-cyan-400 dark:to-emerald-400 opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
        />

        {WORKFLOW_STEPS.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex flex-col items-center text-center space-y-4 group z-10 px-4"
          >
            {/* Pastille Numérotée / Icône */}
            <div className="relative flex items-center justify-center">
              <div className="p-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-2xl shadow-md dark:shadow-xl group-hover:border-teal-500/30 dark:group-hover:border-teal-500/30 group-hover:scale-110 transition-all duration-300 z-10 relative">
                {item.icon}
              </div>
              
              <span className="absolute -top-3 -right-3 px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[9px] font-mono font-bold rounded-md text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:border-teal-500/20 dark:group-hover:border-teal-500/20 transition-colors duration-300 z-20">
                {item.step}
              </span>
            </div>

            {/* Bloc Textuel */}
            <div className="space-y-2 max-w-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}