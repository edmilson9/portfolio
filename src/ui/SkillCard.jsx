import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ categorie, icon, liste, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ y: -5, borderColor: "rgba(156, 130, 74, 0.8)" }}
      className="bg-[#0F0F10] border border-[#9C824A]/20 p-6 rounded-sm hover:shadow-[0_0_30px_rgba(156,130,74,0.15)] transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#9C824A]/10 text-[#9C824A]">
        <div className="p-2 bg-[#9C824A]/10 rounded-md">
            {icon}
        </div>
        <h4 className="font-bold uppercase tracking-wider text-xs md:text-sm">{categorie}</h4>
      </div>

      <ul className="space-y-3">
        {liste.map((skill, i) => (
          <li key={i} className="flex items-center gap-3 text-white/80 font-sans text-xs md:text-sm group">
            <span className="w-1.5 h-1.5 bg-[#9C824A]/50 rounded-full group-hover:bg-[#9C824A] group-hover:scale-150 transition-all duration-300"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}