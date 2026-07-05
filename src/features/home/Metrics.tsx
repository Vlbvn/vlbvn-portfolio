"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const METRICS_DATA = [
  { value: "02+", label: "Années d'expérience", desc: "Écosystèmes web & mobiles" },
  { value: "12+", label: "Projets Déployés", desc: "Applications et architectures privées" },
  { value: "96%", label: "Indice d'Optimisation", desc: "Performances et temps de réponse" },
  { value: "100%", label: "Rigueur Typée", desc: "Code robuste avec TypeScript" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function Metrics() {
  return (
    <section className="w-full py-16 px-4 max-w-6xl mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {METRICS_DATA.map((metric, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            // Changement des fonds, bordures et ombres selon le mode actif
            className="bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 p-6 rounded-2xl backdrop-blur-sm space-y-1 text-center lg:text-left shadow-sm dark:shadow-md group hover:border-slate-300 dark:hover:border-slate-800 transition-colors duration-300"
          >
            {/* Chiffre Géant en Dégradé (Teal 500 pour plus de peps le jour, Teal 400 la nuit) */}
            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block">
              {metric.value}
            </div>
            
            {/* Titre (Slate 800 le jour, Slate 200 la nuit) */}
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 pt-1">
              {metric.label}
            </div>
            
            {/* Sous-description courte (Slate 500 le jour, Slate 500 la nuit) */}
            <div className="text-xs text-slate-500 dark:text-slate-500 font-light">
              {metric.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}