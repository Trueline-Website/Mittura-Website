import React from "react";
import { ShieldCheck, HardHat, Leaf, HeartPulse } from "lucide-react";

export default function QHSEPolicy() {
  const pillars = [
    {
      icon: <HeartPulse className="w-5 h-5 text-[#C43030]" />,
      title: "Health & Well-Being",
      text: "Protecting the physical and mental well-being of our certified workforce across all Dubai jobsites."
    },
    {
      icon: <HardHat className="w-5 h-5 text-[#C43030]" />,
      title: "Zero-Harm Safety",
      text: "Strict adherence to Dubai Civil Defence, OSHAD, and municipal protocols guaranteeing zero tolerance for compromise."
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#C43030]" />,
      title: "Environmental Stewardship",
      text: "Minimizing ecological footprint through waste diversion, sustainable procurement, and green building efficiency."
    }
  ];

  return (
    <section
      id="qhse-policy"
      className="relative w-full py-20 lg:py-28 bg-[#FFFFFF] text-slate-900 overflow-hidden border-t border-slate-200 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT: 30% TYPOGRAPHY & BRANDING */}
          <div className="lg:col-span-7">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C43030]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C43030] font-sans">
                QUALITY &bull; HEALTH &bull; SAFETY &bull; ENVIRONMENT
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#000000] uppercase tracking-tight mb-6">
              QHSE POLICY &amp; COMPLIANCE
            </h2>

            <p className="font-body text-slate-600 text-sm sm:text-base leading-[1.65] mb-8">
              Mittura is dedicated to maintaining the highest benchmarks of Quality, Health, Safety, and Environmental compliance across all operations. We believe engineering excellence is inseparable from our responsibility to safeguard our workforce, partners, and the built environment.
            </p>

            <div className="space-y-4 mb-8">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F5F5F5] border-l-2 border-[#C43030] flex items-start gap-4"
                >
                  <div className="p-2 bg-white rounded-[4px] shadow-xs shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-slate-600 leading-[1.65]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Certified under UAE Federal Safety Standards &bull; 100% In-House Safety Officers</span>
            </div>

          </div>

          {/* RIGHT VISUAL: 60% FOCAL POINT AUTHENTIC SITE PHOTOGRAPHY */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-[#F5F5F5] overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/hero-engineer.png"
                alt="QHSE Safety Officer on Dubai Construction Site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D181A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] block mb-1">
                  ZERO TOLERANCE PROTOCOL
                </span>
                <p className="font-heading text-sm font-bold uppercase tracking-tight">
                  Over 1,000,000+ Safe Man-Hours Executed
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}