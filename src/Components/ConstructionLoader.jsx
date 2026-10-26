import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "../assets/mitturafooter.png";

export default function ConstructionLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant, deliberate progress counter from 0 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth pacing that feels authentic and high-end
        const remaining = 100 - prev;
        const step = remaining > 20 ? (Math.random() > 0.4 ? 1 : 2) : 1;
        return Math.min(100, prev + step);
      });
    }, 28);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 450);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.95,
          ease: [0.77, 0, 0.175, 1],
        },
      }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#3D181A] text-white p-6 sm:p-12 overflow-hidden select-none"
    >
      {/* Brand architectural gradient ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3D181A] via-[#812425]/40 to-[#000000] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C43030]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* TOP BAR */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C43030] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-slate-300">
            MITTURA GROUP &bull; DUBAI, UAE
          </span>
        </div>

        <span className="font-mono text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
          EST. 2018
        </span>
      </div>

      {/* CENTER STAGE: OFFICIAL LOGO & EDITORIAL STATEMENT */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center my-auto py-8">
        {/* Dual-language white logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <img
            src={logoWhite}
            alt="Mittura Group"
            className="h-14 sm:h-20 w-auto object-contain mx-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Wordmark & Brand message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] text-white leading-tight mb-3"
        >
          BUILDING EXCELLENCE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-subheading text-sm sm:text-lg text-slate-300 font-normal tracking-wide max-w-xl"
        >
          Delivering end-to-end infrastructure solutions with precision and reliability.
        </motion.p>
      </div>

      {/* BOTTOM PROGRESS METRICS & SLIDEUP STATUS */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[#C43030] font-bold">01 //</span>
            <span className="tracking-widest uppercase">INITIALIZING ARCHITECTURAL ENVIRONMENT</span>
          </div>
          <span className="text-xl sm:text-2xl font-black font-heading text-white">
            {progress}%
          </span>
        </div>

        {/* Precision Progress Track */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3D181A] via-[#812425] to-[#C43030]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          <span>CIVIL &bull; FIT-OUT &bull; MEP &bull; INFRASTRUCTURE</span>
          <span>DUBAI MUNICIPALITY &bull; DEWA &bull; DCD</span>
        </div>
      </div>
    </motion.div>
  );
}