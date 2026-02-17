import React from "react";
import { motion } from "framer-motion";

export default function GoldBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(circle, #9C824A 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] md:w-[800px] md:h-[800px] bg-[#9C824A] rounded-full blur-[150px] opacity-20"
      />
    </div>
  );
}