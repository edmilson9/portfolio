import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Database, Server, Terminal, ShieldCheck } from "lucide-react";
import TimelineCard from "../ui/TimelineCard"; 
import SkillCard from "../ui/SkillCard";  
import GoldBackground from "../animation/GoldBackground"
export default function Profil() {

  const formations = [
    {
      annee: "Oct. 2024 - Août 2026",
      titre: "BUT Informatique",
      lieu: "IUT de Villetaneuse (93)",
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
      annee: "Juil. 2025 - Août 2025",
      titre: "Stage Développeur Fullstack",
      lieu: "E-petit pas, Argenteuil",
      desc: "Développement d'un espace entreprises : modules de connexion, publication d'offres, devis, facturation et paiement API PayPal. Stack : React.js, Node.js, Tailwind, Prisma, Supabase."
    },
    {
      annee: "Depuis Oct. 2024",
      titre: "Équipier Commercial",
      lieu: "ALDI, Paris (75007)",
      desc: "Job étudiant (10h/semaine). Gestion de stock, encaissement, accueil et renseignement client. Acquis : relation client, rigueur, travail en équipe."
    },
    {
      annee: "Août 2023 - Août 2024",
      titre: "Équipier Polyvalent",
      lieu: "McDonald's, Paris (75007)",
      desc: "Job étudiant (16h/semaine)."
    }
  ];

  const competences = [
    {
      categorie: "Développement Web",
      icon: <Server size={20} />,
      liste: ["HTML / CSS / JavaScript", "PHP / Symfony / Laravel", "React.js / Node.js", "Tailwind CSS", "FastAPI", "Figma"]
    },
    {
      categorie: "Logiciel & Mobile",
      icon: <Code size={20} />,
      liste: ["Python", "Java (Servlets, JSP, Beans)", "C#", "Flutter / Dart", "C", "R"]
    },
    {
      categorie: "Base de données & Data",
      icon: <Database size={20} />,
      liste: ["MySQL / PostgreSQL", "MariaDB / Redis", "MongoDB", "Supabase / Prisma", "Pandas / Matplotlib", "ACP / Clustering"]
    },
    {
      categorie: "DevOps & Transverses",
      icon: <ShieldCheck size={20} />,
      liste: ["Git / Docker / Jenkins", "Linux / Windows", "Anglais (C1 TOEIC: 950)", "Espagnol (B1)", "Gestion de projet (Agile/Trello)"]
    }
  ];

  return (
    <section id="profil" className="w-full min-h-screen bg-[#0F0F10] text-[#9C824A] py-12 md:py-20 px-4 md:px-8 font-serif relative overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 rotate-180 pointer-events-none mix-blend-screen">
         <GoldBackground />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#9C824A]/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
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
          <p className="mt-4 text-white/50 font-sans text-xs md:text-sm tracking-widest uppercase">Formation & Expérience</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 md:mb-32">
          
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-10 border-b border-[#9C824A]/20 pb-4">
              <div className="p-2 md:p-3 bg-[#9C824A]/10 rounded-full">
                <GraduationCap size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em] text-white">Académique</h3>
            </div>
            <div>
              {formations.map((item, index) => (
                <TimelineCard key={index} {...item} delay={index * 0.2} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-10 border-b border-[#9C824A]/20 pb-4">
              <div className="p-2 md:p-3 bg-[#9C824A]/10 rounded-full">
                <Briefcase size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em] text-white">Professionnel</h3>
            </div>
            <div>
              {experiences.map((item, index) => (
                <TimelineCard key={index} {...item} delay={index * 0.2 + 0.2} />
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
               <Terminal size={28} className="text-[#9C824A] md:w-8 md:h-8" />
               <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] text-white">Compétences</h3>
            </div>
            <p className="text-white/40 font-sans text-xs tracking-[0.3em] uppercase">Savoir-faire Technique</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competences.map((cat, index) => (
              <SkillCard key={index} {...cat} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}