"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, EyeOff, Layers, Smartphone, Terminal, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projets';
import ProjectExtensions from '../../features/projects/ProjectExtensions';

type CategoryFilter = 'Tous' | 'Web' | 'Mobile' | 'Système';

export default function ProjetsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Tous');

  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeFilter === 'Tous') return true;
    return project.category === activeFilter;
  });

  const categories: CategoryFilter[] = ['Tous', 'Web', 'Mobile', 'Système'];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white pt-24 pb-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
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

        {/* Barre de Filtres */}
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

        {/* INDICATEUR DE SWIPE */}
        <div className="flex md:hidden items-center justify-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500 animate-pulse select-none">
          <span>Défilement automatique (Maintenir pour pauser)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

        {/* ZONE DU CARROUSEL COMPACT / AUTO-SCROLL ET TACTILE */}
        <div className="relative w-full overflow-hidden">
          
          {/* VERSION MOBILE : Auto-scroller de cartes infini */}
          <div className="flex md:hidden w-full overflow-x-auto scrollbar-none snap-x mandatory active:[&>div]:animation-play-state-paused py-4">
            <div className="flex gap-6 animate-auto-scroll whitespace-nowrap hover:[animation-play-state:paused] active:[animation-play-state:paused]">
              
              {/* Premier groupe de cartes */}
              {filteredProjects.map((project) => (
                <div
                  key={`carousel-1-${project.id}`}
                  className="inline-block whitespace-normal min-w-[80vw] sm:min-w-[400px] snap-center bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm h-[410px] shadow-sm"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/50">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md rounded-xl">
                      {project.category === 'Mobile' && <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                      {project.category === 'Web' && <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />}
                      {project.category === 'Système' && <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between h-[234px]">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 font-light">{project.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 rounded-md text-[9px] font-mono text-slate-600 dark:text-slate-400">{tag}</span>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500">
                        {project.demo && project.demo !== "#" ? (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold"><ExternalLink className="w-3 h-3" /><span>Accéder</span></a>
                        ) : (
                          <span className="text-slate-400 dark:text-slate-500 font-light">Interne</span>
                        )}
                        <div className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500"><EyeOff className="w-3 h-3" /><span>Privé</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Deuxième groupe de cartes (Duplication exacte requise pour l'effet infini transparent) */}
              {filteredProjects.map((project) => (
                <div
                  key={`carousel-2-${project.id}`}
                  className="inline-block whitespace-normal min-w-[80vw] sm:min-w-[400px] snap-center bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm h-[410px] shadow-sm"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/50">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md rounded-xl">
                      {project.category === 'Mobile' && <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                      {project.category === 'Web' && <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />}
                      {project.category === 'Système' && <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between h-[234px]">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 font-light">{project.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 rounded-md text-[9px] font-mono text-slate-600 dark:text-slate-400">{tag}</span>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500">
                        {project.demo && project.demo !== "#" ? (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold"><ExternalLink className="w-3 h-3" /><span>Accéder</span></a>
                        ) : (
                          <span className="text-slate-400 dark:text-slate-500 font-light">Interne</span>
                        )}
                        <div className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500"><EyeOff className="w-3 h-3" /><span>Privé</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* VERSION DESKTOP : Grille standard intacte */}
          <motion.div 
            layout 
            className="hidden md:grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, borderColor: "rgba(20, 184, 166, 0.4)", boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)" }}
                  className="group bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col justify-between h-[420px] transition-all duration-300 shadow-sm"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/50">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <div className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md rounded-xl text-slate-600 dark:text-slate-300 z-10">
                      {project.category === 'Mobile' && <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                      {project.category === 'Web' && <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />}
                      {project.category === 'Système' && <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 font-light">{project.description}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 rounded-md text-[10px] font-mono text-slate-600 dark:text-slate-400">{tag}</span>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between text-xs font-medium text-slate-500">
                        {project.demo && project.demo !== "#" ? (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-300"><ExternalLink className="w-3.5 h-3.5" /><span>Accéder</span></a>
                        ) : (
                          <span className="text-slate-400 dark:text-slate-500">En production</span>
                        )}
                        <div className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500"><EyeOff className="w-3.5 h-3.5" /><span>Repo Privé</span></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-900 to-transparent my-12" />
        <ProjectExtensions />

      </div>
    </main>
  );
}