"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, EyeOff, Layers, Smartphone, Terminal } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../../data/projets';
import ProjectExtensions from '../../features/projects/ProjectExtensions';

type CategoryFilter = 'Tous' | 'Web' | 'Mobile' | 'Système';

export default function ProjetsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Tous');

  // Filtrage logique des données
  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeFilter === 'Tous') return true;
    return project.category === activeFilter;
  });

  const categories: CategoryFilter[] = ['Tous', 'Web', 'Mobile', 'Système'];

  return (
    // Fond adaptatif global (slate-50 / slate-950)
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* En-tête de la page */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Mes <span className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">Réalisations</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Découvrez mes projets web, mobiles et systèmes. Pour des raisons de confidentialité, les codes sources de ces applications commerciales sont privés.
          </p>
        </div>

        {/* Barre de Filtres Stylisée Adaptative */}
        <div className="flex justify-center flex-wrap gap-2 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 p-2 rounded-2xl max-w-md mx-auto backdrop-blur-md shadow-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer select-none ${
                activeFilter === category 
                  ? 'text-slate-950 dark:text-slate-950 font-bold' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-white'
              }`}
            >
              {/* Bulle de fond animée pour le filtre actif (Teal-400 stable sous les deux modes) */}
              {activeFilter === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-teal-400 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Grille de projets adaptative */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  y: -6, 
                  borderColor: "rgba(20, 184, 166, 0.4)",
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)"
                }}
                className="group bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col justify-between h-[420px] transition-all duration-300 cursor-pointer shadow-sm dark:shadow-md"
              >
                {/* Image du projet avec cadre adaptatif */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 dark:from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Badge de catégorie d'icône adaptatif */}
                  <div className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md rounded-xl text-slate-600 dark:text-slate-300 z-10 shadow-sm">
                    {project.category === 'Mobile' && <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                    {project.category === 'Web' && <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />}
                    {project.category === 'Système' && <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                  </div>
                </div>

                {/* Corps de la carte */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags techniques et Liens */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 rounded-md text-[10px] font-mono text-slate-600 dark:text-slate-400 shadow-inner"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Zone de liens d'accès sécurisés */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-xs font-medium text-slate-500">
                      {project.demo && project.demo !== "#" ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Accéder à l&apos;application</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-slate-400 dark:text-slate-500 opacity-80">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>En production (Interne)</span>
                        </div>
                      )}

                      <div className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500">
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Repo Privé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ligne séparatrice adaptative */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-900 to-transparent my-12 transition-colors duration-300" />

        {/* 3. Insertion des extensions complémentaires */}
        <ProjectExtensions />

      </div>
    </main>
  );
}