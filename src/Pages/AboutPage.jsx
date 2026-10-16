import React from "react";
import About from "../Components/About";
import OrgStructure from "../Components/OrgStructure";
import QHSEPolicy from "../Components/QHSEPolicy";

export default function AboutPage() {
  return (
    <div className="w-full bg-white font-sans antialiased">
      {/* ARCHITECTURAL HERO BANNER */}
      <section className="relative w-full pt-36 pb-20 bg-[#3D181A] text-white overflow-hidden select-none">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/photo3.jpeg"
            alt="Mittura Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D181A] via-[#3D181A]/90 to-[#3D181A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D181A] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C43030]" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] font-sans">
              CORPORATE PROFILE &bull; ESTABLISHED 2018
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            ABOUT <span className="text-[#C43030]">MITTURA</span>
          </h1>

          <p className="font-subheading text-lg sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed">
            Built on discipline. Proven across Dubai's landmarks. Delivering integrated infrastructure, turnkey fit-out, and MEP solutions with our signature 24-Month Platinum Guarantee.
          </p>
        </div>
      </section>

      {/* CORE NARRATIVE & METRICS */}
      <About />

      {/* LEADERSHIP & ORG STRUCTURE */}
      <OrgStructure />

      {/* QHSE POLICY & SAFETY */}
      <QHSEPolicy />
    </div>
  );
}