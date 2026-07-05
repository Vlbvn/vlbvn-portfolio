"use client";

import React from 'react';

const TECHNOLOGIES = [
  { 
    name: "React.js", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#61DAFB]" viewBox="0 0 24 24">
        <path d="M12 21.154c-.23 0-.44-.07-.63-.22l-7.75-6a1.002 1.002 0 0 1 .63-1.78h14.25c.44 0 .81.29.93.71a.99.99 0 0 1-.3.1l-6.5 6.5c-.18.15-.4.22-.63.22z" opacity=".1"/>
        <path d="M23.32 9.87c-.55-1.99-1.92-3.8-3.82-5.02-3.92-2.53-9.08-2.53-13 0-1.9 1.22-3.27 3.03-3.82 5.02a5.46 5.46 0 0 0 0 2.26c.55 1.99 1.92 3.8 3.82 5.02 1.96 1.26 4.34 1.89 6.72 1.89s4.76-.63 6.72-1.89c1.9-1.22 3.27-3.03 3.82-5.02a5.46 5.46 0 0 0 0-2.26zm-1.8 1.77c-.45 1.64-1.58 3.12-3.14 4.13-3.23 2.08-7.53 2.08-10.76 0-1.56-1.01-2.69-2.49-3.14-4.13a3.52 3.52 0 0 1 0-1.46c.45-1.64 1.58-3.12 3.14-4.13 3.23-2.08 7.53-2.08 10.76 0 1.56 1.01 2.69 2.49 3.14 4.13a3.52 3.52 0 0 1 0 1.46z"/>
        <path d="M12 8.75c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75zm0 4.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    )
  },
  { 
    name: "Next.js", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-black dark:group-hover:text-white" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.273 17.519l-4.996-6.425v6.425h-1.611v-9.055h1.562l4.908 6.326v-6.326h1.611v9.055h-1.474z"/>
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#3178C6]" viewBox="0 0 24 24">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.063 11.233c.96.002 1.7.34 2.208.983.508.643.766 1.6.766 2.858 0 1.258-.266 2.21-.8 2.85-.533.642-1.304.962-2.316.962-.43 0-.825-.053-1.18-.16a2.827 2.827 0 0 1-.954-.483v2.24H14v-9.083h1.86v1.1c.314-.428.694-.766 1.14-.993a3.1 3.1 0 0 1 1.188-.267zm-7.9 1.625h2.246v1.64h-2.246v4.39H8.256v-4.39H6v-1.64h2.256V9.453h2.03v3.406zm6.336.195c-.52 0-.918.163-1.19.492-.274.328-.41.834-.41 1.52v.726c0 .685.13 1.192.394 1.524.263.33.66.496 1.19.496.538 0 .937-.166 1.196-.5.26-.33.388-.838.388-1.52v-.726c0-.687-.123-1.193-.37-1.52a1.59 1.59 0 0 0-1.198-.492z"/>
      </svg>
    )
  },
  { 
    name: "React Native", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#61DAFB] animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  { 
    name: "JavaScript", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#F7DF1E]" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M24 0H0v24h24V0zM8.47 19.34c-.45-.3-.75-.75-.9-1.35H9.7c.08.35.22.6.43.76.21.16.51.24.9.24.4 0 .71-.1.93-.31.22-.2.33-.52.33-1V10.2h2.15v7.45c0 1.07-.31 1.89-.93 2.45-.62.56-1.5.84-2.65.84-1.18 0-2-.32-2.46-.96zm8.17-.11c-.4-.45-.6-.1-.6-1.55h2.05c.05.52.21.92.47 1.2.26.27.65.41 1.18.41.48 0 .86-.11(1.13-.34.27-.22.4-.53.4-.91 0-.35-.11-.62-.34-.8-.23-.19-.63-.37-1.2-.54l-.94-.28c-.92-.26-1.6-.66-2.03-1.17-.43-.5-.65-1.19-.65-2.04 0-.82.25-1.49.74-2 .5-.5 1.21-.76 2.14-.76.9 0 1.6.23 2.11.7.51.46.79 1.12.83 1.97h-2.1c-.05-.43-.19-.76-.42-.97-.23-.22-.57-.33-1-.33-.42 0-.74.09-.96.28-.21.18-.32.45-.32.8 0 .28.1.5.31.67.21.16.63.34 1.25.52l.94.27c1 .29 1.73.72 2.18 1.3.45.57.68 1.33.68 2.27 0 .9-.28 1.64-.85 2.2-.56.57-1.4.85-2.5.85-1.33 0-2.31-.37-2.95-1.12z"/>
      </svg>
    )
  },
  { 
    name: "HTML5", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#E34F26]" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.3H6.8l.3 3h11.1l-.3 3.5H10.9l.1 1.3h7l-.5 5.2-5.5 1.8-5.5-1.8-.4-4.2h3l.2 2 2.7.8 2.7-.8.3-3.2H6.3L5.4 5.3h13.4z"/>
      </svg>
    )
  },
  { 
    name: "CSS3", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#1572B6]" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.2 5.3H5.3l.4 3.9h12.1l-.4 4.1H8.3l.2 1.3h9.3l-.5 5.2-5.3 1.7-5.3-1.7-.4-4.1H3.3l.5 5.2 8.2 2.6 8.2-2.6.9-9.3H10.1l-.2-1.3h10.3l.3-3.9z"/>
      </svg>
    )
  },
  { 
    name: "Node.js", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#339933]" viewBox="0 0 24 24">
        <path d="M12 3.122l7.747 4.49v8.955L12 21.058l-7.747-4.491V7.611L12 3.122zm0-2.24l-9.684 5.61v11.218L12 23.321l9.684-5.611V6.491L12 .881z"/>
      </svg>
    )
  },
  { 
    name: "Firebase", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#FFCA28]" viewBox="0 0 24 24">
        <path d="M3.877 16.425L10.36 3.99c.308-.594 1.157-.59 1.46.006l2.13 4.103-10.073 8.326zm16.31-.225L13.784 4.542a.846.846 0 0 0-1.469-.023L3.18 16.666l8.47 4.743a1.455 1.455 0 0 0 1.442-.022l7.095-4.187z"/>
      </svg>
    )
  },
  { 
    name: "Supabase", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#3ECF8E]" viewBox="0 0 24 24">
        <path d="M21.362 10.108L13.116 1.5a1.5 1.5 0 0 0-2.565 1.066v5.823H3.884a1.5 1.5 0 0 0-1.077 2.56l8.246 8.61a1.5 1.5 0 0 0 2.565-1.066v-5.823h6.667a1.5 1.5 0 0 0 1.077-2.562z"/>
      </svg>
    )
  },
  { 
    name: "Tailwind CSS", 
    icon: (
      <svg className="w-6 h-6 transition-colors duration-300 fill-current group-hover:text-[#06B6D4]" viewBox="0 0 24 24">
        <path d="M12 6.036c-2.286-3.822-6.095-5.223-11.429-4.202 5.334 5.093 3.429 9.16 0 13.236 5.333-1.018 8.762.51 11.429 4.07 2.286-3.821 6.095-5.222 11.429-4.201-5.334-5.093-3.43-9.16 0-13.237-5.333 1.018-8.763-.51-11.429-4.066z"/>
      </svg>
    )
  }
];

export default function TechStack() {
  const doubledTech = [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    // Fond adaptatif : slate-50 le jour, slate-950 la nuit
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-8 overflow-hidden border-y border-slate-200 dark:border-slate-900/40 relative transition-colors duration-300">
      
      {/* Masquage des dégradés latéraux adaptés aux thèmes */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10 pointer-events-none transition-colors duration-300" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10 pointer-events-none transition-colors duration-300" />

      {/* Ruban horizontal */}
      <div className="flex w-max relative select-none">
        
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-33.333%, 0, 0); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .pause-marquee:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex gap-12 items-center animate-marquee pause-marquee pr-12">
          {doubledTech.map((tech, index) => (
            <div
              key={index}
              // Texte : slate-400 le jour (plus contrasté), slate-600 la nuit
              className="flex items-center gap-3 text-slate-400 dark:text-slate-600 hover:text-slate-800 dark:hover:text-slate-200 font-mono font-bold tracking-wide text-sm transition-colors duration-300 group cursor-default"
            >
              {/* Boîte d'icône : fond blanc/gris clair le jour, fond sombre la nuit */}
              <div className="p-2.5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-xl group-hover:border-slate-300 dark:group-hover:border-slate-800/60 shadow-sm dark:shadow-inner group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                {tech.icon}
              </div>
              <span className="hidden sm:inline opacity-50 dark:opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}