import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Globe, Server, Monitor, Database, ArrowUpRight, Code, Github } from "lucide-react";
import GoldBackground from "../animation/GoldBackground";

export default function Projets() {
  const projets = [
    {
      titre: "Trackstar",
      type: "Application Mobile & Algorithmique",
      date: "S501 - 2025",
      desc: "Application de découverte musicale 100% offline (catalogue local de 30 000+ titres) basée sur un système interactif de swipe pour redonner un rôle actif à l'utilisateur. Le moteur de recommandation ultra-performant (83ms/swipe) repose sur un algorithme hybride couplant distance euclidienne sur vecteurs audio (70%) et affinité d'artiste (20%). Optimisation extrême sous Flutter : empreinte mémoire stabilisée à 237 Mo sans fuite et framerate maintenu à 43 FPS.",
      techs: ["Flutter", "Dart", "SQLite", "Python", "Algorithme Hybride"],
      icone: <Smartphone size={24} />,
      liens: [
        { label: "Code source", url: "https://github.com/edmilson9/sae-but3-eco-mobile", icone: <Github size={14} /> }
      ],
      size: "md:col-span-8",
      accent: "from-[#9C824A]/20"
    },
    {
      titre: "API Socle",
      type: "Backend & Architecture",
      date: "2025",
      desc: "Architecture Backend modulaire sous FastAPI intégrant les design patterns Factory et Repository. Modélisation de base de données relationnelle via SQLAlchemy et validation stricte des schémas d'entrée/sortie avec Pydantic. Implémentation d'une suite exhaustive de tests unitaires avec Pytest garantissant la robustesse des endpoints et la gestion sécurisée des exceptions.",
      techs: ["FastAPI", "Python", "Pydantic", "SQLAlchemy", "Pytest"],
      icone: <Server size={24} />,
      liens: [
        { label: "Code source", url: "https://github.com/edmilson9/tp_socle_fastapi_p2", icone: <Github size={14} /> }
      ],
      size: "md:col-span-4",
      accent: "from-white/5"
    },
    {
      titre: "Architecture POO Avancée",
      type: "Ingénierie Logicielle / TP",
      date: "2025",
      desc: "Modélisation orientée objet avancée en Python appliquée à un système de gestion d'entités complexes. Implémentation stricte des principes SOLID et du Design Pattern Strategy pour l'injection dynamique de comportements (algorithmes de production, d'alimentation). Validation complète via des suites de tests Pytest paramétrés pour le TDD (Test-Driven Development).",
      techs: ["Python", "Design Patterns", "Pytest", "SOLID", "TDD"],
      icone: <Code size={24} />,
      liens: [
        { label: "Code source", url: "https://github.com/edmilson9/rendu_r6a05_edmilson", icone: <Github size={14} /> }
      ],
      size: "md:col-span-4",
      accent: "from-white/5"
    },
    {
      titre: "Brevets 6G - Thales",
      type: "Data Pipeline & Dashboard",
      date: "2024 - 2025",
      desc: "Conception d'un pipeline de données (ETL) automatisé. Scraping ciblé de brevets technologiques via BeautifulSoup, traitement, nettoyage et analyse des dataframes avec Pandas. Restitution des indicateurs clés sur un dashboard interactif Streamlit, directement interfacé avec l'API Google Drive pour la synchronisation continue des données.",
      techs: ["Python", "Streamlit", "Pandas", "BeautifulSoup", "API REST"],
      icone: <Cpu size={24} />,
      liens: [
        { label: "Code source", url: "https://github.com/edmilson9/sae_brevets6g", icone: <Github size={14} /> },
        { label: "Voir le projet", url: "https://aadmsi.streamlit.app/", icone: <ArrowUpRight size={14} /> }
      ],
      size: "md:col-span-4",
      accent: "from-white/5"
    },
    {
      titre: "Mes Voyages",
      type: "Application Web Fullstack",
      date: "Travaux Pratiques",
      desc: "Application Web structurée selon une architecture MVC stricte sous le framework Symfony (PHP). Modélisation relationnelle complexe et exécution de requêtes sécurisées gérées par Doctrine ORM. Intégration de vues dynamiques via le moteur de templating Twig et gestion native des formulaires et des sessions utilisateurs.",
      techs: ["Symfony", "PHP", "Doctrine ORM", "Twig", "MySQL"],
      icone: <Database size={24} />,
      liens: [
        { label: "Code source", url: "https://github.com/edmilson9/mesvoyages", icone: <Github size={14} /> }
      ],
      size: "md:col-span-4",
      accent: "from-white/5"
    },
    {
      titre: "Gestionnaire Contacts",
      type: "Application de Bureau",
      date: "Travaux Pratiques",
      desc: "Développement d'une application de bureau client lourd en C# (.NET) via WinForms. Architecture orientée événements (Event-driven) avec séparation claire entre l'interface utilisateur et la logique métier. Mise en œuvre de mécanismes algorithmiques de sérialisation pour la persistance locale des données.",
      techs: ["C#", ".NET", "WinForms", "POO", "Sérialisation"],
      icone: <Monitor size={24} />,
      liens: [
        { label: "Code source", url: "https://github.com/edmilson9/gestionnaire_contacte", icone: <Github size={14} /> }
      ],
      size: "md:col-span-6",
      accent: "from-white/5"
    },
    {
      titre: "Youcean",
      type: "Nuit de l'Info 2024",
      date: "Hackathon",
      desc: "Création d'un site web interactif de sensibilisation écologique en 24h chrono. Développement Frontend 100% Vanilla (HTML5, CSS3, JS) avec manipulation algorithmique du DOM en temps réel et gestion de transitions CSS fluides. Collaboration asynchrone via un workflow Git strict (branches, résolutions de conflits).",
      techs: ["JavaScript", "HTML5", "CSS3", "Git", "DOM"],
      icone: <Globe size={24} />,
      liens: [
        { label: "Code source", url: "https://github.com/edmilson9", icone: <Github size={14} /> }
      ],
      size: "md:col-span-6",
      accent: "from-white/5"
    }
  ];

  return (
    <section id="projets" className="w-full min-h-screen bg-[#0B111E] text-[#9C824A] py-12 md:py-24 px-4 md:px-8 font-serif relative overflow-hidden border-t border-[#9C824A]/10">
      <div className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none mix-blend-screen">
        <GoldBackground />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#9C824A] to-[#604d25]">
            Projets
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#9C824A] mx-auto mt-4 rounded-full opacity-60"></div>
          <p className="mt-4 text-white/50 font-sans text-xs md:text-sm tracking-widest uppercase">Réalisations & Travaux Pratiques</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {projets.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${p.size} bg-white/5 border border-[#9C824A]/20 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-[#9C824A]/60 transition-all group relative overflow-hidden bg-gradient-to-br ${p.accent} to-transparent`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[#9C824A] p-3 bg-[#0B111E]/80 border border-[#9C824A]/10 rounded-xl group-hover:scale-110 transition-transform">
                    {p.icone}
                  </div>
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#9C824A]/50 bg-[#0B111E]/40 px-3 py-1 rounded-full border border-[#9C824A]/10">
                    {p.date}
                  </span>
                </div>

                <span className="text-[10px] uppercase font-sans tracking-widest text-[#9C824A]/60 block mb-2">{p.type}</span>
                <h3 className="text-xl md:text-2xl text-white font-bold uppercase tracking-wide mb-4 group-hover:text-[#9C824A] transition-colors">
                  {p.titre}
                </h3>
                <p className="text-white/60 font-sans text-xs md:text-sm leading-relaxed mb-8 max-w-3xl">
                  {p.desc}
                </p>
              </div>

              {/* Ligne du bas : Badges technos au-dessus, Boutons de liens en-dessous */}
              <div className="flex flex-col gap-5 pt-6 border-t border-white/5 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {p.techs.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-[#0B111E]/60 border border-[#9C824A]/20 rounded-md text-[9px] text-white/80 font-sans">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 items-center">
                  {p.liens && p.liens.map((lien, i) => (
                    <a 
                      key={i}
                      href={lien.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#9C824A]/30 text-[10px] md:text-xs font-sans font-bold uppercase tracking-wider text-[#9C824A] hover:bg-[#9C824A] hover:text-[#0B111E] transition-all"
                    >
                      {lien.icone} {lien.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}