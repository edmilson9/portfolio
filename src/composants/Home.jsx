import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Cpu, Database, Layout, Github, Linkedin, Mail } from "lucide-react";
import GoldBackground from "../animation/GoldBackground"; 
import CV_PATH from '../assets/cv_Edmilson_DA_COSTA_SA_stage.pdf'; 

export default function Home() {
  
  const infos = {
    nom: "EDMILSON",
    prenom: "DA COSTA SA",
    poste: "futur ingénieur IOT", 
    dispo: "9 MARS 2026",
    duree: "14 à 16 SEMAINES",
    lieu: "VILLEJUIF (94)",
    accroche: "étudiant en troisième année de but informatique à l'iut de villetaneuse, je suis à la recherche d'un stage en développement logiciel ",
    linkedin: "https://www.linkedin.com/in/edmilson-da-costa-sa-7471a5202",
    github:"https://github.com/edmilson9",
    email : "edmilson.sadacosta@gmail.com"
  };

  return (
    <section id="home" className="w-full h-auto min-h-[100dvh] bg-[#0F0F10] text-[#9C824A] flex flex-col justify-center items-center relative overflow-x-hidden overflow-y-auto font-serif py-20 lg:py-0">
       
       <GoldBackground />

       <div className="absolute top-4 right-4 md:top-8 md:right-10 z-50 flex flex-col items-end gap-2 md:gap-4">
          <div className="flex gap-3 md:gap-4 bg-[#0F0F10]/80 backdrop-blur-md p-1.5 rounded-lg border border-[#9C824A]/20 shadow-lg">
            <motion.a 
              whileHover={{ color: "#fff", x: -5 }}
              href={`mailto:${infos.email}`}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans text-[#9C824A]/70 transition-colors"
            >
               <Mail size={16} className="w-4 h-4" /> <span className="hidden lg:inline font-medium">{infos.email}</span>
            </motion.a>
            <div className="w-[1px] h-4 bg-[#9C824A]/20 mx-1"></div>
            <motion.a 
              whileHover={{ scale: 1.1, color: "#fff" }}
              href={infos.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans text-[#9C824A]/70"
            >
               <Github size={18} className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: "#fff" }}
              href={infos.linkedin} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans text-[#9C824A]/70"
            >
               <Linkedin size={18} className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </div>
       </div>

       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="fixed top-2 left-2 right-2 bottom-2 md:top-6 md:left-6 md:right-6 md:bottom-6 border border-[#9C824A]/30 pointer-events-none z-20 flex flex-col justify-between p-2 md:p-4"
       >
          <div className="flex justify-between uppercase text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-sans text-white/40">
             <span>Est. 2026</span>
          </div>
          <div className="flex justify-between uppercase text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-sans text-white/40">
             <span>{infos.lieu}</span>
             <span className="hidden sm:inline">Ref: FULLSTACK-IOT-26</span>
          </div>
       </motion.div>

       <div className="z-30 text-center relative px-4 w-full max-w-5xl flex flex-col justify-center items-center min-h-full">
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-4 md:h-10" 
          />

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-white"
          >
             {infos.nom}
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-white mb-6 md:mb-8 lg:mb-12"
          >
             {infos.prenom}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-24 mb-8 md:mb-10 lg:mb-16 text-white/60 font-sans text-[8px] md:text-[10px] uppercase tracking-[0.2em]"
          >
             <div className="flex flex-col items-center gap-2 md:gap-4 group">
                <div className="p-3 md:p-4 border border-[#9C824A]/20 rounded-full group-hover:border-[#9C824A]/60 transition-all duration-500 bg-[#0F0F10]/40 backdrop-blur-sm">
                    <Layout className="w-6 h-6 md:w-8 md:h-8 lg:w-[52px] lg:h-[52px] text-[#9C824A]"/>
                </div>
                <span className="font-semibold">Dev Web</span>
             </div>
             <div className="flex flex-col items-center gap-2 md:gap-4 group">
                <div className="p-3 md:p-4 border border-[#9C824A]/20 rounded-full group-hover:border-[#9C824A]/60 transition-all duration-500 bg-[#0F0F10]/40 backdrop-blur-sm">
                    <Database className="w-6 h-6 md:w-8 md:h-8 lg:w-[52px] lg:h-[52px] text-[#9C824A]"/>
                </div>
                <span className="font-semibold">Data</span>
             </div>
             <div className="flex flex-col items-center gap-2 md:gap-4 group">
                <div className="p-3 md:p-4 border border-[#9C824A]/20 rounded-full group-hover:border-[#9C824A]/60 transition-all duration-500 bg-[#0F0F10]/40 backdrop-blur-sm">
                    <Cpu className="w-6 h-6 md:w-8 md:h-8 lg:w-[52px] lg:h-[52px] text-[#9C824A]"/>
                </div>
                <span className="font-semibold">IoT</span>
             </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-[10px] md:text-xs lg:text-sm text-[#9C824A]/80 uppercase tracking-widest mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
             {infos.poste} <br/> 
             <span className="text-white">A la recherche d'un stage à partir du {infos.dispo}</span> pour une durée de {infos.duree} <br/>
             <span className="italic mt-2 block opacity-80 normal-case tracking-normal">{infos.accroche}</span>
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center font-sans w-full px-8 pb-8"
          >
             <a 
               href="#projets" 
               className="w-full sm:w-auto text-[#9C824A] border border-[#9C824A] px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors duration-500 flex justify-center items-center gap-2 text-[10px] md:text-xs bg-[#0F0F10]/50 backdrop-blur-sm"
             >
                Voir le Profil <ChevronRight size={16} />
             </a>
             <a 
               href="#projets" 
               className="w-full sm:w-auto text-[#9C824A] border border-[#9C824A] px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors duration-500 flex justify-center items-center gap-2 text-[10px] md:text-xs bg-[#0F0F10]/50 backdrop-blur-sm"
             >
                Voir les Projets <ChevronRight size={16} />
             </a>
          </motion.div>
       </div>
    </section>
  );
}