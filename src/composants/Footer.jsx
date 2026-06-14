import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B111E] text-white/30 py-8 border-t border-[#9C824A]/5 text-center font-sans text-[10px] uppercase tracking-widest">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>&copy; 2026 - Edmilson DA COSTA SA</span>
        <span className="text-[#9C824A]/40">Développeur Logiciel Orienté Data</span>
      </div>
    </footer>
  );
}