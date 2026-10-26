import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Tag, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import projects from "../data/projects.json";
import logoWhite from "../assets/mitturafooter.png";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="text-center p-8">
          <h2 className="font-heading text-3xl font-black text-[#C43030] uppercase mb-4">
            PROJECT NOT FOUND
          </h2>
          <p className="font-body text-slate-500 mb-6">
            The requested project archive does not exist or has been relocated.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-[#C43030] hover:bg-[#812425] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors rounded-[4px]"
          >
            <ArrowLeft size={16} /> BACK TO PORTFOLIO
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-36 pb-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BACK NAVIGATION */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#C43030] font-bold uppercase text-xs tracking-widest transition-colors mb-12"
        >
          <ArrowLeft size={16} /> [ BACK TO FULL PORTFOLIO ]
        </Link>

        {/* HEADER & OVERVIEW GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* LEFT: SPECS & NARRATIVE */}
          <div className="lg:col-span-6">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#C43030] text-white text-xs font-mono font-bold px-2.5 py-1 rounded-[3px]">
                {project.index}
              </span>
              <span className="bg-[#2F4F6F] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-[3px]">
                {project.category}
              </span>
              <span className="text-xs font-mono font-semibold text-slate-400">
                &bull; {project.timeline}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#000000] uppercase tracking-tight leading-tight mb-6">
              {project.name}
            </h1>

            <p className="font-subheading text-lg sm:text-xl text-[#812425] font-normal leading-relaxed mb-6 border-l-2 border-[#C43030] pl-4">
              {project.type}
            </p>

            <div className="flex items-center gap-2 text-slate-500 font-medium text-sm mb-8">
              <MapPin size={16} className="text-[#C43030] shrink-0" />
              <span>{project.location}</span>
            </div>

            <p className="font-body text-slate-600 text-sm sm:text-base leading-[1.65] mb-8">
              {project.description}
            </p>

            {/* TECHNICAL SCOPE BOX */}
            <div className="bg-[#F5F5F5] p-6 border-l-2 border-[#D4AF37] mb-8">
              <span className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-500 block mb-2 font-sans">
                EXECUTED SCOPE &amp; SPECIFICATIONS:
              </span>
              <p className="font-heading text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {project.scope}
              </p>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  HANDOVER STATUS
                </span>
                <span className="font-heading text-sm font-black uppercase text-slate-900">
                  100% Executed &bull; Handed Over
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-1">
                  WARRANTY
                </span>
                <span className="font-heading text-sm font-black uppercase text-slate-900 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  24-Month Platinum
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: MAIN PROJECT PHOTOGRAPHY (60% VISUAL FOCAL POINT) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#3D181A] overflow-hidden border border-slate-200 shadow-lg">
              {project.isPlaceholder ? (
                <div className="w-full h-full bg-gradient-to-r from-[#3D181A] via-[#812425] to-[#C43030] flex flex-col items-center justify-center p-8 text-center relative">
                  <img
                    src={logoWhite}
                    alt="Mittura Logo"
                    className="h-14 w-auto object-contain mb-4 drop-shadow-md opacity-90"
                  />
                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
                    AWARDED VILLA PROJECT
                  </span>
                  <p className="text-sm text-white/80 mt-2 max-w-sm">
                    Project photography, renders and specifications will be updated upon client release.
                  </p>
                </div>
              ) : (
                <>
                  <img
                    src={project.mainImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/photo2.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] block">
                      MITTURA BUILDING CONTRACTING L.L.C.
                    </span>
                    <p className="font-heading text-sm font-bold uppercase mt-1">
                      {project.location} &bull; {project.timeline}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>

        {/* GALLERY SECTION */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="pt-16 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-[2px] bg-[#C43030]" />
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
                PROJECT GALLERY &amp; DETAILS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] overflow-hidden bg-[#F5F5F5] border border-slate-200 shadow-xs group"
                >
                  <img
                    src={img}
                    alt={`${project.name} view ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/photo3.jpeg";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM ACTION CARD */}
        <div className="mt-20 p-8 sm:p-12 bg-[#3D181A] text-white border-l-4 border-[#C43030] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block mb-1">
              HAVE A SIMILAR SCOPE IN DUBAI?
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
              INITIATE YOUR TECHNICAL CONSULTATION
            </h3>
            <p className="font-body text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              Contact our engineering and procurement team for confidential feasibility studies and turnkey cost models.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-[#C43030] hover:bg-[#812425] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors shrink-0 inline-flex items-center gap-2 rounded-[4px]"
          >
            <span>[ INQUIRE NOW &gt; ]</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
