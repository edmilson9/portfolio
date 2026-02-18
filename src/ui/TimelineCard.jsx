import React from "react";
import { motion } from "framer-motion";

export default function TimelineCard({ annee, titre, lieu, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="relative group pl-8 border-l border-[#9C824A]/30 pb-8 last:pb-0"
    >
      <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#0F0F10] border-2 border-[#9C824A] group-hover:bg-[#9C824A] group-hover:scale-125 transition-all duration-300"></span>
      
      <div className="group-hover:translate-x-2 transition-transform duration-300">
        <span className="text-xs font-sans font-bold text-[#9C824A] tracking-widest uppercase mb-1 block">
            {annee}
        </span>
        <h4 className="text-lg md:text-xl text-white font-bold uppercase tracking-wide mb-1 group-hover:text-[#9C824A] transition-colors">
            {titre}
        </h4>
        <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mb-3">
            {lieu}
        </p>
        <p className="text-sm text-white/70 font-sans leading-relaxed border-l-2 border-[#9C824A]/10 pl-4">
            {desc}
        </p>
      </div>
    </motion.div>
  );
}