import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Database, Server, Terminal, ShieldCheck, Languages, UserCheck, Settings, Cpu } from "lucide-react";
import TimelineCard from "../ui/TimelineCard"; 
import GoldBackground from "../animation/GoldBackground";

export default function Profil() {

  const formations = [
    {
      annee: "Oct. 2024 - Août 2026",
      titre: "BUT Informatique",
      lieu: "IUT de Villetaneuse",
      desc: "Réalisation d'applications : conception, développement, validation."
    },
    {
      annee: "2022 - 2024",
      titre: "BTS SIO",
      lieu: "CNED",
      desc: "Option Solutions Logicielles et Applications Métiers (SLAM)."
    },
    {
      annee: "2020 - 2022",
      titre: "DUT GEII",
      lieu: "Université Paris Est Créteil",
      desc: "Génie Électrique et Informatique Industrielle (30 ECTS validés)."
    },
    {
      annee: "2017 - 2020",
      titre: "Baccalauréat STI2D",
      lieu: "Lycée Polyvalent de Cachan",
      desc: "Mention Assez Bien."
    }
  ];

  const experiences = [
    {
      annee: "Juillet 2025 - Août 2025",
      titre: "Stage Développeur Fullstack",
      lieu: "E-petit pas, Argenteuil",
      desc: "Développement d'un espace entreprises : modules d'inscription, publication d'offres, devis, facturation et paiement via API PayPal. Stack : React.js, Node.js, Tailwind, Prisma, Supabase."
    },
    {
      annee: "Depuis Octobre 2024",
      titre: "Équipier Commercial",
      lieu: "ALDI, Paris (75007)",
      desc: "Gestion de stock, encaissement, accueil et renseignement client."
    },
    {
      annee: "Août 2023 - Août 2024",
      titre: "Équipier Polyvalent",
      lieu: "McDonald's, Paris (75007)",
      desc: "Job étudiant."
    }
  ];

  const skillGroups = [
    {
      title: "Développement Web",
      icon: <Server size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Symfony", "Laravel", "React.js", "Node.js", "Tailwind", "FastAPI", "Figma"],
      size: "md:col-span-8"
    },
    {
      title: "Développement Logiciel",
      icon: <Code size={24} />,
      skills: ["Python", "Java (Servlets, JSP)", "C#", "C", "Flutter", "Dart"],
      size: "md:col-span-4"
    },
    {
      title: "Data Science",
      icon: <Cpu size={24} />,
      skills: ["Langage R", "Analyse ACP", "Clustering", "Pandas", "Matplotlib"],
      size: "md:col-span-4"
    },
    {
      title: "DevOps",
      icon: <ShieldCheck size={24} />,
      skills: ["Git", "Docker", "Jenkins", "Linux", "Pytest", "Cypress"],
      size: "md:col-span-4"
    },
    {
      title: "Base de données",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Prisma", "UML"],
      size: "md:col-span-4"
    },
    {
      title: "Langues",
      icon: <Languages size={24} />,
      skills: ["Anglais (C1 TOEIC: 950)", "Portugais (Bilingue)", "Espagnol (B1)"],
      size: "md:col-span-4"
    },
    {
      title: "Transverses",
      icon: <Settings size={24} />,
      skills: ["Agile", "Trello", "Klaxoon", "Gantt", "Droit des contrats"],
      size: "md:col-span-4"
    },
    {
      title: "Soft Skills",
      icon: <UserCheck size={24} />,
      skills: ["Adaptabilité", "Rigueur", "Organisation", "Résilience"],
      size: "md:col-span-4"
    }
  ];

  return (
    <section id="profil" className="w-full min-h-screen bg-[#0F0F10] text-[#9C824A] py-12 md:py-24 px-4 md:px-8 font-serif relative overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full z-0 opacity-20 rotate-180 pointer-events-none mix-blend-screen">
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
            Parcours
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#9C824A] mx-auto mt-4 rounded-full opacity-60"></div>
          <p className="mt-4 text-white/50 font-sans text-xs md:text-sm tracking-widest uppercase">Formations & Expériences</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-[#9C824A]/20 pb-4">
              <GraduationCap size={28} />
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-white">Académique</h3>
            </div>
            {formations.map((item, index) => (
              <TimelineCard key={index} {...item} delay={index * 0.1} />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-[#9C824A]/20 pb-4">
              <Briefcase size={28} />
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-white">Professionnel</h3>
            </div>
            {experiences.map((item, index) => (
              <TimelineCard key={index} {...item} delay={index * 0.1} />
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] text-white mb-4">Compétences</h3>
            <div className="w-24 h-1 bg-[#9C824A] rounded-full opacity-40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-fr">
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`${group.size} bg-white/5 border border-[#9C824A]/20 p-6 rounded-2xl hover:border-[#9C824A]/60 transition-all group flex flex-col justify-between`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[#9C824A] group-hover:scale-110 transition-transform">
                    {group.icon}
                  </div>
                  <h4 className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(s => (
                    <span key={s} className="px-2.5 py-1 bg-[#9C824A]/10 border border-[#9C824A]/30 rounded-full text-[9px] text-white/80 font-sans">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}