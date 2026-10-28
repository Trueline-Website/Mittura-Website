import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects.json";
import logoWhite from "../assets/mitturafooter.png";
import ProjectCardImage from "../Components/ProjectCardImage";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Commercial", "Residential", "Healthcare", "Retail"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-white font-sans antialiased">
      
      {/* ARCHITECTURAL HERO BANNER */}
      <section className="relative w-full pt-36 pb-24 bg-[#3D181A] text-white overflow-hidden select-none">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/photo2.jpeg"
            alt="Mittura Portfolio Landmarks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D181A] via-[#3D181A]/90 to-[#3D181A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D181A] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C43030]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] font-sans">
                DELIVERED INFRASTRUCTURE &bull; LANDMARKS
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
              OUR <span className="text-[#C43030]">PORTFOLIO</span>
            </h1>

            <p className="font-subheading text-lg sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed">
              A comprehensive record of turnkey contracting, luxury commercial showrooms, corporate hubs, and super-prime residences delivered across the UAE.
            </p>

            {/* 24-MONTH PLATINUM GUARANTEE BANNER */}
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-black/40 border border-[#D4AF37]/40 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-[11px]">
                Every Handover Backed by Our Signature 24-Month Platinum Guarantee
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER & GALLERY GRID */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CATEGORY TABS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-6 mb-16 pb-6 border-b border-slate-200"
          >
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                SECTOR ARCHIVE
              </span>
              <p className="font-heading text-xl font-bold uppercase text-slate-900">
                FILTER BY PROJECT DISCIPLINE
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat, idx) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-[4px] cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#C43030] text-white shadow-sm"
                      : "bg-[#F5F5F5] text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* PROJECT CARDS WITH STAGGERED RISING ANIMATION */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 50, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: 0.75,
                    delay: (index % 3) * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="h-full"
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="group flex flex-col h-full bg-white border border-slate-200 hover:border-[#C43030] transition-all duration-300 shadow-xs hover:shadow-xl rounded-[4px] overflow-hidden"
                  >
                    {/* Visual Focal Point (60%) */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#3D181A]">
                      <ProjectCardImage project={project} logoWhite={logoWhite} />

                      {/* Index & Category Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-[#C43030] text-white text-xs font-mono font-bold px-2.5 py-1 rounded-[3px]">
                          {project.index}
                        </span>
                        <span className="bg-[#2F4F6F] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-[3px]">
                          {project.category}
                        </span>
                      </div>

                      {/* Delivery Timeline */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-200 rounded-[3px]">
                          <Calendar className="w-3 h-3 text-[#D4AF37]" />
                          {project.timeline}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-[#C43030] transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </span>
                      </div>
                    </div>

                    {/* Typography & Messaging (30%) */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2">
                          <MapPin className="w-3.5 h-3.5 text-[#C43030] shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>

                        <h3 className="font-heading text-xl sm:text-2xl font-black text-[#000000] uppercase tracking-tight mb-2 group-hover:text-[#C43030] transition-colors">
                          {project.name}
                        </h3>

                        <p className="font-subheading text-xs sm:text-sm text-[#812425] font-medium mb-4">
                          {project.type}
                        </p>

                        <div className="bg-[#F5F5F5] p-3.5 border-l-2 border-[#C43030] text-xs text-slate-700 leading-relaxed font-body mb-4">
                          <span className="font-bold text-slate-900 block mb-1 uppercase tracking-wider text-[10px]">
                            Scope:
                          </span>
                          {project.scope}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 group-hover:text-[#C43030] transition-colors">
                          View Project Details
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#C43030] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

    </div>
  );
}