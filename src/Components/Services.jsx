import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useServices } from "../context/ServiceContext.jsx";

export default function Services() {
  const { services } = useServices();

  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] py-28 lg:py-36 overflow-hidden border-b border-[#F5F5F5] select-none"
    >
      {/* EXPANSIVE WHITESPACE CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* LEFT SIDEBAR ROTATED TEXT: 'ENGINEERING EXCELLENCE' */}
        <div className="hidden 2xl:block absolute -left-12 top-48">
          <span
            className="text-[11px] font-bold tracking-[0.4em] uppercase text-slate-300 select-none"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            ENGINEERING EXCELLENCE
          </span>
        </div>

        {/* SECTION HEADER: OVERSIZED OFFSET TITLE IN INTER BOLD (#000000) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 pb-8 border-b border-slate-200 gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C43030]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C43030] font-sans">
                DISCIPLINE &bull; CAPABILITY &bull; 01
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#000000] uppercase leading-none">
              OUR SERVICES
            </h2>

            <p className="font-subheading text-lg sm:text-xl text-slate-700 font-normal mt-4 leading-relaxed">
              Precision engineering, turnkey execution, and multidisciplinary mastery under direct in-house control.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
              [ 04 CORE DIVISIONS ]
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C43030] hover:bg-[#812425] text-white px-6 py-3.5 text-xs font-bold tracking-[0.1em] uppercase transition-colors rounded-[4px]"
            >
              <span>REQUEST SCOPE RFP &gt;</span>
            </Link>
          </div>
        </motion.div>

        {/* ASYMMETRIC 2-COLUMN STAGGERED EDITORIAL GRID (60-30-10 RULE ENFORCED) */}
        <div className="space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id || index}
                id={`service-${service.id}`}
                className="scroll-mt-32 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* 60% VISUAL FOCAL POINT: HIGH-RES PROJECT PHOTOGRAPHY (SLIDES IN FROM LEFT) */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? 70 : -70
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.85,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative group">
                      
                      {/* Main Featured Photo */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F5] border border-slate-200 shadow-sm">
                        <img
                          src={service.images?.[0] || "/services/construction_1.png"}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        {/* Subtle vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                        {/* Top Accent Badge: 10% Branding */}
                        <div className="absolute top-6 left-6 flex items-center gap-2">
                          <span className="bg-[#C43030] text-white font-mono text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-[3px]">
                            {service.number || `0${index + 1}`}
                          </span>
                          <span className="bg-[#2F4F6F] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-sans rounded-[3px]">
                            CERTIFIED DISCIPLINE
                          </span>
                        </div>

                        {/* Bottom Lead Marker */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <p className="font-subheading text-sm sm:text-base font-normal tracking-wide text-slate-200">
                            {service.lead}
                          </p>
                        </div>
                      </div>

                      {/* Supporting Thumbnails Strip */}
                      {service.images && service.images.length > 1 && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          {service.images.slice(1, 3).map((subImg, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="aspect-[16/9] overflow-hidden bg-[#F5F5F5] border border-slate-200 shadow-xs"
                            >
                              <img
                                src={subImg}
                                alt={`${service.title} view ${imgIdx + 2}`}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </motion.div>

                  {/* 30% TYPOGRAPHY & MESSAGING (SLIDES IN FROM RIGHT) */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? -70 : 70
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    
                    {/* Numbered Accent Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#C43030] font-mono font-bold text-sm tracking-widest">
                        {service.number || `0${index + 1}`} //
                      </span>
                      <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">
                        DIVISION SCOPE
                      </span>
                    </div>

                    {/* Service Title in Inter Bold */}
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-black text-[#000000] uppercase tracking-[-0.01em] leading-tight mb-4">
                      {service.title}
                    </h3>

                    {/* Sub-Header in Roboto Slab */}
                    <p className="font-subheading text-sm sm:text-base text-[#812425] font-medium leading-relaxed mb-6 border-l-2 border-[#C43030] pl-4">
                      {service.lead}
                    </p>

                    {/* Body Text in Inter Regular (Line-height 1.65) */}
                    <p className="font-body text-slate-600 text-sm sm:text-[15px] leading-[1.65] mb-8">
                      {service.description}
                    </p>

                    {/* Scope Items List with Mittura Red bullet accents */}
                    <div className="bg-[#F5F5F5] p-6 border-l-2 border-[#2F4F6F] mb-8">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 font-sans">
                        KEY DELIVERABLES &amp; CAPABILITIES:
                      </p>
                      <ul className="space-y-2.5">
                        {service.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800"
                          >
                            <span className="text-[#C43030] font-bold text-base leading-none">
                              &bull;
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Link */}
                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#C43030] hover:text-[#812425] transition-colors group"
                      >
                        <span>INQUIRE ABOUT THIS DIVISION</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}