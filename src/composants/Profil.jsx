import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Database, Server, Terminal, ShieldCheck, Languages, UserCheck, Settings, Cpu, Layout, Smartphone } from "lucide-react";
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
      desc: "30 ECTS validés."
    },
    {
      annee: "2017 - 2020",
      titre: "Baccalauréat STI2D",
      lieu: "Lycée Polyvalent de Cachan",
      desc: "Option SIN. Mention Assez Bien."
    }
  ];

  const experiences = [
    {
      annee: "Juillet 2025 - Août 2025",
      titre: "Stage Développeur Fullstack",
      lieu: "E-petit pas, Argenteuil",
      desc: "Développement d'un espace entreprises : modules d'inscription, publication d'offres, devis, facturation et paiement via API PayPal. Stack : React.js, Node.js, Tailwind, Prisma, Supabase, JWT."
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

  return (
    <section id="profil" className="w-full min-h-screen bg-[#0F0F10] text-[#9C824A] py-12 md:py-24 px-4 md:px-8 font-serif relative overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full z-0 opacity-20 rotate-180 pointer-events-none mix-blend-screen">
         <GoldBackground />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-[#9C824A]/20 pb-4">
              <GraduationCap size={28} />
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-white">Académique</h3>
            </div>
            <div className="space-y-2">
              {formations.map((item, index) => (
                <TimelineCard key={index} {...item} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-[#9C824A]/20 pb-4">
              <Briefcase size={28} />
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-white">Professionnel</h3>
            </div>
            <div className="space-y-2">
              {experiences.map((item, index) => (
                <TimelineCard key={index} {...item} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex flex-col items-center mb-16 text-center">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] text-white mb-4">Expertise Technique</h3>
            <div className="w-24 h-1 bg-[#9C824A] rounded-full opacity-40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            <div className="md:col-span-8 bg-white/5 border border-[#9C824A]/20 p-8 rounded-2xl hover:border-[#9C824A]/60 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <Server className="text-[#9C824A]" size={32} />
                <h4 className="text-white font-bold uppercase text-lg tracking-widest">Développement Web</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "PHP", "Symfony", "Laravel", "React.js", "Node.js", "Tailwind", "FastAPI", "Figma"].map(s => (
                  <span key={s} className="px-3 py-1 bg-[#9C824A]/10 border border-[#9C824A]/30 rounded-full text-[10px] text-white font-sans">{s}</span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-white/5 border border-[#9C824A]/20 p-8 rounded-2xl hover:border-[#9C824A]/60 transition-all">
              <div className="flex items-center gap-3 mb-6 text-[#9C824A]">
                <Languages size={24} />
                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Langues</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between text-[11px] font-sans">
                  <span className="text-white/60">Anglais</span>
                  <span className="text-[#9C824A] font-bold">C1 (TOEIC: 950)</span>
                </li>
                <li className="flex justify-between text-[11px] font-sans">
                  <span className="text-white/60">Espagnol</span>
                  <span className="text-[#9C824A] font-bold">B1</span>
                </li>
                <li className="flex justify-between text-[11px] font-sans">
                  <span className="text-white/60">Portugais</span>
                  <span className="text-[#9C824A] font-bold">Bilingue</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 bg-white/5 border border-[#9C824A]/20 p-8 rounded-2xl hover:border-[#9C824A]/60 transition-all">
              <div className="flex items-center gap-3 mb-6 text-[#9C824A]">
                <Smartphone size={24} />
                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Dev Logiciel & Mobile</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "C#", "Flutter", "Dart", "C"].map(s => (
                  <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] text-white/70 font-sans">{s}</span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-white/5 border border-[#9C824A]/20 p-8 rounded-2xl hover:border-[#9C824A]/60 transition-all">
              <div className="flex items-center gap-3 mb-6 text-[#9C824A]">
                <Cpu size={24} />
                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Data Science</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Langage R", "ACP", "Clustering", "Pandas", "Matplotlib"].map(s => (
                  <span key={s} className="px-2 py-1 bg-white/10 text-[9px] text-white/80 font-sans rounded">{s}</span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 bg-[#9C824A]/5 border border-[#9C824A]/30 p-8 rounded-2xl hover:bg-[#9C824A]/10 transition-all">
              <div className="flex items-center gap-3 mb-6 text-[#9C824A]">
                <ShieldCheck size={24} />
                <h4 className="text-white font-bold uppercase text-sm tracking-widest">DevOps & BDD</h4>
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-[9px] uppercase text-white/50 font-sans tracking-tight">
                <span>MySQL</span><span>PostgreSQL</span><span>Docker</span><span>Jenkins</span><span>Git</span><span>Linux</span>
              </div>
            </div>

            <div className="md:col-span-6 bg-white/5 border border-[#9C824A]/20 p-8 rounded-2xl hover:border-[#9C824A]/60 transition-all">
              <div className="flex items-center gap-3 mb-4 text-[#9C824A]">
                <Settings size={24} />
                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Transverses & Gestion</h4>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase text-white/60 font-sans">
                <span>Méthode Agile</span><span>Trello</span><span>Klaxoon</span><span>Gantt</span><span>Droit des contrats</span>
              </div>
            </div>

            <div className="md:col-span-6 bg-white/5 border border-[#9C824A]/20 p-8 rounded-2xl hover:border-[#9C824A]/60 transition-all">
              <div className="flex items-center gap-3 mb-4 text-[#9C824A]">
                <UserCheck size={24} />
                <h4 className="text-white font-bold uppercase text-sm tracking-widest">Soft Skills</h4>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase text-[#9C824A] font-bold">
                <span>Adaptabilité</span><span>Rigueur</span><span>Organisation</span><span>Résilience</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}