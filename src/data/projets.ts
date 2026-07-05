export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'Mobile' | 'Système';
  github?: string; // Optionnel car tes repos sont privés
  demo?: string;   // Lien vers le site ou le Play Store / App Store si disponible
  image: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "segme",
    title: "SegMe",
    description: "Application mobile de planification et de prise de rendez-vous de services. Gestion complète du cycle de build avec Expo et EAS, configuration d'icônes adaptatives, splash screens et déploiement réussi sur le Google Play Store.",
    tags: ["React Native", "TypeScript", "Expo", "EAS", "Firebase"],
    category: "Mobile",
    demo: "https://play.google.com", // Tu pourras mettre le vrai lien Play Store
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "switchbf",
    title: "Switch Burkina",
    description: "Plateforme innovante de cartes de visite virtuelles et de services d'identification basés sur la technologie NFC. Permet le partage instantané de profils professionnels et la gestion dynamique des données de contact.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NFC API", "Firebase"],
    category: "Web",
    demo: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bevaxe",
    title: "Bevaxe",
    description: "Application web/mobile moderne conçue pour répondre à des besoins spécifiques d'infrastructure ou de services numériques sur mesure.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sunkiss",
    title: "Sunkiss",
    description: "Solution numérique optimisée mettant en valeur des interfaces fluides et une intégration d'API performante.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sysdef",
    title: "SysDef",
    description: "Module ou système de défense et d'architecture technique, développé pour structurer et sécuriser des flux de données applicatifs.",
    tags: ["Node.js", "TypeScript", "Architecture"],
    category: "Système",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sipe",
    title: "SIPE",
    description: "Système d'information ou outil de gestion technique spécialisé, mettant l'accent sur la robustesse du code et la rapidité de traitement.",
    tags: ["React.js", "Node.js", "PostgreSQL"],
    category: "Système",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];