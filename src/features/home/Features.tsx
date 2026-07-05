"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { Cpu, Layers, Smartphone, Zap } from 'lucide-react';

const SKILLS_DATA = [
  {
    icon: <Layers className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    title: "Développement Web",
    description: "Conception d'applications web modernes, performantes et scalables en utilisant l'écosystème React et Next.js.",
    tag: "Frontend"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
    title: "Applications Mobiles",
    description: "Création d'expériences mobiles natives et fluides multiplateformes grâce à React Native et Expo.",
    tag: "Mobile"
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    title: "Architecture Backend",
    description: "Développement d'API robustes, sécurisées et d'intégrations de bases de données avec Node.js et Firebase.",
    tag: "API & Cloud"
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    title: "Optimisation & SEO",
    description: "Garantie de performances maximales, d'un rendu statique ultra-rapide et d'une indexation impeccable.",
    tag: "Performance"
  }
];

const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Features() {
  return (
    <section className="w-full py-20 px-4 max-w-6xl mx-auto">
      
      {/* En-tête de la section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Mes domaines d&apos;
          <span className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
            expertise
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
          Des compétences pointues adaptées aux exigences des projets modernes pour garantir performance, esthétique et maintenabilité.
        </p>
      </div>

      {/* Grille de cartes */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}

function SkillCard({ skill }: { skill: typeof SKILLS_DATA[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const glareX = useTransform(glowX, (val) => -val + 150);
  const glareY = useTransform(glowY, (val) => -val + 150);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    glowX.set(mouseX);
    glowY.set(mouseY);

    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d"
      }}
      // Adaptation adaptative de la carte (bg-white le jour, bg-slate-900 la nuit)
      className="relative overflow-hidden bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-colors duration-300 group flex flex-col justify-between h-64 cursor-pointer hover:border-teal-500/30 dark:hover:border-teal-500/40 select-none shadow-md dark:shadow-lg"
    >
      {/* 1. HALO INTERNE EN ARRIÈRE-PLAN */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="absolute w-72 h-72 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
      />

      {/* 2. REFLET BRILLANT DE SURFACE */}
      <motion.div
        style={{
          left: glareX,
          top: glareY,
          translateX: "-30%",
          translateY: "-30%"
        }}
        className="absolute w-80 h-80 bg-radial from-black/5 dark:from-white/10 via-transparent to-transparent rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
      />

      {/* 3. CONTENU DE LA CARTE */}
      <div className="space-y-4 z-10 flex flex-col justify-between h-full pointer-events-none">
        
        {/* Haut de la carte : Icône & Tag */}
        <div className="flex items-center justify-between" style={{ transform: "translateZ(40px)" }}>
          <div className="p-3 bg-slate-50 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-inner group-hover:scale-110 group-hover:border-teal-500/20 transition-all duration-300">
            {skill.icon}
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-md shadow-sm">
            {skill.tag}
          </span>
        </div>

        {/* Bas de la carte : Textes */}
        <div className="space-y-2" style={{ transform: "translateZ(25px)" }}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 group-hover:dark:text-teal-300 transition-colors duration-300">
            {skill.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 font-light">
            {skill.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
}