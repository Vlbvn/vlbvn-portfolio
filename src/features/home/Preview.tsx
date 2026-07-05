"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink, CodeXml } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';

const FEATURED_PROJECTS = [
  {
    title: "Switch Burkina",
    description: "Plateforme d'identification par carte NFC et de gestion de profils professionnels en temps réel. Développement d'une architecture full-stack permettant la lecture, l'écriture et la synchronisation instantanée de cartes de visite virtuelles pour les entreprises.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "NFC API"],
    github: "https://github.com/BriceZongo",
    demo: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "SegMe",
    description: "Application mobile de planification et de gestion de rendez-vous de services déployée sur le Google Play Store. Intégration d'une interface fluide avec Expo/EAS et implémentation en cours de l'API de paiement mobile BarkaPay pour sécuriser les transactions de services.",
    tags: ["React Native", "Expo", "EAS", "TypeScript", "Node.js", "BarkaPay API"],
    github: "https://github.com/BriceZongo",
    demo: "https://play.google.com/store",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Preview() {
  return (
    <section className="w-full py-20 px-4 max-w-6xl mx-auto space-y-16">
      
      {/* En-tête de section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Projets 
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
              {" "}sélectionnés
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg text-sm sm:text-base font-light">
            Un aperçu des défis techniques complexes que j&apos;ai relevés récemment.
          </p>
        </div>

        <Link href="/projets" className="self-center md:self-auto">
          <Button variant="outline" className="group gap-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-teal-400 hover:bg-slate-100 dark:hover:bg-teal-500/10">
            <span>Voir toutes mes réalisations</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      {/* Liste des projets */}
      <div className="space-y-16 md:space-y-24">
        {FEATURED_PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* 1. Bloc Image avec effet de Parallax Interne */}
              <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 isolation-isolate shadow-md dark:shadow-xl">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-slate-950/5 dark:bg-slate-950/10 pointer-events-none z-10" />
              </div>

              {/* 2. Bloc Descriptif technique */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-mono shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                  >
                    <CodeXml className="w-4 h-4" />
                    <span>Dépôt GitHub</span>
                  </a>
                  
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Démo en ligne</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={targetRef} className="w-full h-full relative overflow-hidden group/img">
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.15 }}
        className="absolute inset-0 w-full h-[120%] object-cover object-center transition-transform duration-300 ease-out group-hover/img:scale-120"
        loading="lazy"
      />
    </div>
  );
}