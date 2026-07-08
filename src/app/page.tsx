"use client";

import React from 'react';
import Hero from '../features/home/Hero';
import TechStack from '../features/home/TechStack';
import Metrics from '../features/home/Metrics';
import Preview from '../features/home/Preview';
import Workflow from '../features/home/Workflow';
import BentoSkills from '../components/BentoSkills'; // Import bien présent ici

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white overflow-x-hidden transition-colors duration-300">
      
      {/* 1. Accroche */}
      <Hero />

      {/* 2. Technologies */}
      <TechStack />

      {/* 3. Écosystème technique (La Bento Grid remplace l'ancienne section Features) */}
      <BentoSkills />

      {/* 4. Statistiques */}
      <Metrics />

      {/* Séparateur adaptatif */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-900 to-transparent my-8 transition-colors duration-300" />

      {/* 5. Réalisations concrètes */}
      <Preview />

      {/* Séparateur adaptatif */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-900 to-transparent my-4 transition-colors duration-300" />

      {/* 6. Méthodologie */}
      <Workflow />

      <div className="h-12" />

    </main>
  );
}