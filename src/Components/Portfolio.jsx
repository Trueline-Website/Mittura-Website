import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, Layers, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects.json";
import logoWhite from "../assets/mitturafooter.png";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Commercial", "Residential", "Healthcare", "Retail"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const metrics = [
    {
      value: "2018",
      label: "Established in Dubai",
      sub: "Turnkey Building Contractor"
    },
    {
      value: "40+",
      label: "Flagship Projects Handled",
      sub: "Across Dubai Landmarks"
    },
    {
      value: "100+",
      label: "Direct Workforce",
      sub: "Certified Engineering Specialists"
    },
    {
      value: "24-MONTH",
      label: "Platinum Guarantee",
      sub: "On Workmanship & Handover",
      isGold: true
    }
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#FFFFFF] pt-16 pb-28 lg:pt-24 lg:pb-36 overflow-hidden border-b border-[#F5F5F5] select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* METRICS ROW: IN ONE ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-16 lg:pb-20 mb-16 lg:mb-20 border-b border-slate-200">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="flex items-baseline">
                <span
                  className={`font-heading text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-none whitespace-nowrap ${
                    metric.isGold ? "text-[#D4AF37]" : "text-[#000000]"
                  }`}
                >
                  {metric.value}
                </span>
              </div>
              
              {/* Mittura Red underline accent - Expands smoothly into view */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25 + idx * 0.08, ease: "easeOut" }}
                className="h-[2px] bg-[#C43030] mt-2 mb-3"
              />

              <span className="font-heading text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-tight">
                {metric.label}
              </span>
              <span className="text-[11px] text-slate-500 font-sans mt-0.5">
                {metric.sub}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* SECTION HEADER: 'OUR PORTFOLIO' WITH FILTER TABS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-8 border-b border-slate-200"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C43030]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C43030] font-sans">
                PROVEN EXECUTION &bull; 03
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#000000] uppercase leading-none">
              OUR PORTFOLIO
            </h2>

            <p className="font-subheading text-lg sm:text-xl text-slate-700 font-normal mt-4 leading-relaxed">
              Showcasing landmark environments, super-prime finishes, and technical delivery across the UAE.
            </p>
          </div>

          {/* FILTER TABS: All | Commercial | Residential | Healthcare | Retail */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200 rounded-[4px] cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#C43030] text-white shadow-sm"
                    : "bg-[#F5F5F5] text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* DEV.UN GALLERY GRID FORMAT WITH STAGGERED SCROLL & FILTER ANIMATIONS */}
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
                  {/* 60% VISUAL FOCAL POINT: HIGH QUALITY PHOTOGRAPHY OR BRAND GRADIENT PLACEHOLDER */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#3D181A]">
                    {project.isPlaceholder ? (
                      <div className="w-full h-full bg-gradient-to-r from-[#3D181A] via-[#812425] to-[#C43030] flex flex-col items-center justify-center p-6 text-center relative group-hover:scale-105 transition-transform duration-700">
                        <img
                          src={logoWhite}
                          alt="Mittura Logo"
                          className="h-10 w-auto object-contain mb-3 drop-shadow-md opacity-90"
                        />
                        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                          AWARDED VILLA PROJECT
                        </span>
                        <span className="text-xs font-semibold text-white/80 mt-1">
                          Project details forthcoming
                        </span>
                      </div>
                    ) : (
                      <>
                        <img
                          src={project.mainImage}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = "/photo2.jpeg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </>
                    )}

                    {/* Index & Category Tags */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-[#C43030] text-white text-xs font-mono font-bold px-2.5 py-1 rounded-[3px]">
                        {project.index}
                      </span>
                      <span className="bg-[#2F4F6F] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-[3px]">
                        {project.category}
                      </span>
                    </div>

                    {/* Delivery Timeline Overlay */}
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

                  {/* 30% TYPOGRAPHY & MESSAGING: SPECS & SCOPE */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      {/* Location with Pin */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C43030] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      {/* Project Name in Inter Bold */}
                      <h3 className="font-heading text-xl sm:text-2xl font-black text-[#000000] uppercase tracking-tight mb-2 group-hover:text-[#C43030] transition-colors">
                        {project.name}
                      </h3>

                      {/* Subtype in Roboto Slab */}
                      <p className="font-subheading text-xs sm:text-sm text-[#812425] font-medium mb-4">
                        {project.type}
                      </p>

                      {/* Scope Summary in Inter Regular */}
                      <div className="bg-[#F5F5F5] p-3.5 border-l-2 border-[#C43030] text-xs text-slate-700 leading-relaxed font-body mb-4">
                        <span className="font-bold text-slate-900 block mb-1 uppercase tracking-wider text-[10px]">
                          Scope Executed:
                        </span>
                        {project.scope}
                      </div>
                    </div>

                    {/* View Case Study CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 group-hover:text-[#C43030] transition-colors">
                        View Project Case Study
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#C43030] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM SECTION CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#C43030]" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Showing All 6 Verified Flagship Case Studies
            </span>
          </div>

          <Link
            to="/portfolio"
            className="bg-[#C43030] hover:bg-[#812425] text-white px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-colors shadow-sm rounded-[4px]"
          >
            [ VIEW FULL PROJECT ARCHIVE &gt; ]
          </Link>
        </motion.div>

      </div>
    </section>
  );
}