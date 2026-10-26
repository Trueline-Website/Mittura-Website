import React from "react";
import { ShieldCheck } from "lucide-react";

const corporatePartners = [
  { name: "HSBC Corporate", tag: "Banking Office Fit-Out" },
  { name: "Etisalat Hub", tag: "Telecom Facility & MEP" },
  { name: "Casa Lusso", tag: "Luxury Retail Flagship" },
  { name: "The 118 Downtown", tag: "Elite Residential Finishes" },
  { name: "Adria Medical Center", tag: "Specialized Healthcare" },
  { name: "SAJ Development", tag: "Villa Project Award" },
  { name: "Akoya Oxygen", tag: "Master Community Civil" },
  { name: "Mira Oasis", tag: "Turnkey Maintenance" }
];

export default function Clients() {
  return (
    <section className="py-20 bg-[#F5F5F5] border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C43030]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C43030] font-sans">
              TRUSTED ACROSS UAE SECTORS
            </span>
            <span className="w-6 h-[2px] bg-[#C43030]" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#000000] uppercase tracking-tight">
            PROVEN TRACK RECORD &amp; STRATEGIC PARTNERS
          </h3>
          <p className="font-subheading text-sm text-slate-600 mt-2">
            Delivering high-security corporate spaces, sterile clinical assets, and super-prime residences.
          </p>
        </div>

        {/* PARTNERS LOGO / BADGE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {corporatePartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-5 border border-slate-200 hover:border-[#C43030] transition-all duration-300 flex flex-col justify-between shadow-xs group rounded-[4px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#C43030] transition-colors">
                  0{index + 1}
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-heading text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight group-hover:text-[#C43030] transition-colors">
                  {partner.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-sans mt-1">
                  {partner.tag}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-xs text-slate-500 font-medium tracking-wide">
            Fully certified &bull; Dubai Municipality Lic. &bull; DEWA Approved &bull; Dubai Civil Defence (DCD) Registered
          </p>
        </div>

      </div>
    </section>
  );
}