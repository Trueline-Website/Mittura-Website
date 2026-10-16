import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {

  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] py-28 lg:py-36 overflow-hidden border-b border-[#F5F5F5] select-none"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER: SLIDES UP SMOOTHLY ON SCROLL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C43030]" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C43030] font-sans">
              CORPORATE PROFILE &bull; 02
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#000000] uppercase leading-none">
            ABOUT COMPANY
          </h2>

          <p className="font-subheading text-lg sm:text-2xl text-slate-700 font-normal mt-4 max-w-3xl leading-relaxed">
            Delivering end-to-end infrastructure solutions with precision and reliability.
          </p>
        </motion.div>

        {/* 2-COLUMN EDITORIAL NARRATIVE & METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: STACKED AUTHENTIC SITE PHOTOGRAPHY (SLIDES IN FROM LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              
              {/* Primary Stacked Image: Engineer reviewing blueprints on site */}
              <div className="relative aspect-[4/5] bg-[#F5F5F5] overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src="/hero-engineer.png"
                  alt="Mittura Engineer reviewing blueprints on-site"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* 10% Branding Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#3D181A]/95 backdrop-blur-md p-4 border-l-2 border-[#C43030] text-white">
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37]">
                    AUTHENTIC SITE GOVERNANCE
                  </p>
                  <p className="font-heading text-xs sm:text-sm font-bold uppercase mt-1">
                    Direct Supervision &bull; In-House Engineering Teams
                  </p>
                </div>
              </div>

              {/* Secondary Floating Offset Image: Pops in with staggered delay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block absolute -bottom-10 -right-8 w-56 aspect-[4/3] bg-white p-2 border border-slate-200 shadow-2xl"
              >
                <img
                  src="/process-management.png"
                  alt="Precision construction execution"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: NARRATIVE (SLIDES IN FROM RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >


            {/* REVISED OFFICIAL STORY COPY */}
            <div className="space-y-6">
              
              {/* Header (Inter Bold) */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-2xl sm:text-3xl font-black text-[#000000] tracking-tight uppercase"
              >
                Built on Discipline. Proven Across Dubai's Landmarks.
              </motion.h3>

              {/* Sub-Header (Roboto Slab) */}
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-subheading text-base sm:text-lg text-[#812425] font-medium leading-relaxed border-l-2 border-[#C43030] pl-4"
              >
                Delivering integrated infrastructure, construction, and turnkey fit-out solutions with precision and reliability.
              </motion.p>

              {/* Prologue (Inter Regular, Line-height 1.65) */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-body text-slate-600 text-sm sm:text-[15px] leading-[1.65]"
              >
                In a regional built environment defined by world-scale architectural ambition, the decisive factor is execution discipline. Since 2018, Mittura Building Contracting L.L.C. has delivered projects by taking direct control of the construction lifecycle—unifying civil execution, MEP engineering, and interior craftsmanship under direct, in-house management.
              </motion.p>

              {/* The Track Record (Inter Regular, Line-height 1.65) */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-body text-slate-600 text-sm sm:text-[15px] leading-[1.65]"
              >
                Our multidisciplinary teams have proven their precision across demanding sectors in the UAE: executing secure corporate environments for HSBC and Etisalat (Al Kifaf), delivering luxury residential finishes at The 118 Downtown Dubai, bespoke private villas, and community infrastructure across Akoya Oxygen and Mira Oasis. In specialized commercial sectors, we have built clinical-grade healthcare facilities at Adria Medical Center Jumeirah and premier retail environments for Casa Lusso in Al Barsha.
              </motion.p>


              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/portfolio"
                  className="bg-[#C43030] hover:bg-[#812425] text-white px-7 py-3.5 text-xs font-bold tracking-[0.1em] uppercase transition-colors inline-flex items-center gap-2 group shadow-sm active:scale-95 rounded-[4px]"
                >
                  <span>VIEW VERIFIED PORTFOLIO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="border border-slate-300 hover:border-[#000000] text-slate-900 px-6 py-3.5 text-xs font-bold tracking-[0.1em] uppercase transition-colors hover:bg-slate-50 rounded-[4px]"
                >
                  READ EXTENDED BIO &gt;
                </Link>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}