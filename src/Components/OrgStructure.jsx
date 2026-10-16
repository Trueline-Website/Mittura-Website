import React from "react";
import { Award, CheckCircle2 } from "lucide-react";

const occupations = [
  { id: "01", role: "Project Director / General Manager" },
  { id: "02", role: "Chief Estimator Cum Commercial Head" },
  { id: "03", role: "Senior Civil / Structural Engineer" },
  { id: "04", role: "Lead MEP Systems Engineer" },
  { id: "05", role: "QHSE Compliance Manager" },
  { id: "06", role: "Senior Interior Fit-Out Architect" },
  { id: "07", role: "Site Operations Superintendent" },
  { id: "08", role: "Bespoke Joinery Master Craftsman" },
  { id: "09", role: "Procurement & Supply Chain Lead" },
  { id: "10", role: "Certified Safety Inspector" }
];

export default function OrgStructure() {
  return (
    <section className="py-20 bg-[#F5F5F5] border-t border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C43030]" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C43030] font-sans">
              LEADERSHIP &amp; HUMAN CAPITAL
            </span>
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl font-black text-[#000000] uppercase tracking-tight">
            DIRECT ENGINEERING WORKFORCE
          </h3>
          <p className="font-subheading text-sm text-slate-600 mt-2">
            100+ direct certified personnel orchestrating design, engineering, and site execution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {occupations.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 p-5 flex flex-col justify-between hover:border-[#C43030] transition-colors shadow-xs group rounded-[4px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#C43030] transition-colors">
                  {item.id}
                </span>
                <div className="w-7 h-7 rounded-[4px] bg-[#F5F5F5] group-hover:bg-[#C43030] flex items-center justify-center transition-colors">
                  <Award className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </div>

              <h4 className="font-heading text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-tight leading-snug mb-4">
                {item.role}
              </h4>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase">
                <CheckCircle2 className="w-3 h-3 text-[#C43030]" />
                <span>Verified Direct</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}