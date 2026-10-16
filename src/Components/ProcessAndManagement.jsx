import React from "react";
import { BadgeCheck } from "lucide-react";

const ProcessAndManagement = () => {
  const gradientText =
    "bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] bg-clip-text text-transparent";

  return (
    <div className="bg-white">
      {/* SECTION 1: Operational Process Approach */}
      <section className="relative w-full min-h-screen pt-24 flex flex-col md:flex-row overflow-hidden border-t border-slate-100">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[60%] flex flex-col justify-center px-8 md:px-24 py-20 bg-white z-10">
          <div className="max-w-xl">
            {/* Main Heading */}
            <h2
              className={`text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight ${gradientText}`}
            >
              Operational Process <br /> Approach
            </h2>

            {/* Subtitle */}
            <h4
              className={`font-bold text-[0.7rem] md:text-xs tracking-[0.2em] uppercase mb-6 leading-tight ${gradientText}`}
            >
              THE MITTURA PROCESS APPROACH & RISK-BASED THINKING
            </h4>

            {/* Paragraph */}
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-8">
              At Mittura, we do not simply manage sites; we engineer repeatable,
              data-backed processes. By hard-coding a "Process Approach" into
              our daily heavy contracting operations, we control the complex
              interrelationships and interdependencies across massive
              engineering works.
            </p>

            <div className="space-y-8">
              {/* Operational Enablers */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] flex items-center justify-center shadow-md">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>

                  <h5
                    className={`font-bold text-[0.75rem] uppercase tracking-wider ${gradientText}`}
                  >
                    Operational Enablers
                  </h5>
                </div>

                <ul className="space-y-4">
                  {[
                    "Direct alignment between client-specific blueprints, environmental protection, and site safety.",
                    "Elimination of non-value-adding tasks to protect the client's capital.",
                    "Rapid, objective scaling of process performance based on raw data and on-site information.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-slate-600 text-xs md:text-sm leading-relaxed"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#7a1c1c] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk-Based Thinking */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] flex items-center justify-center shadow-md">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>

                  <h5
                    className={`font-bold text-[0.75rem] uppercase tracking-wider ${gradientText}`}
                  >
                    Risk-Based Thinking
                  </h5>
                </div>

                <p className="text-slate-600 leading-relaxed text-xs md:text-sm font-medium italic">
                  To prevent the delays common in large-scale building
                  contracting, Mittura utilizes a strict "Risk-Based Thinking"
                  philosophy. We actively plan and execute targeted actions to
                  prevent negative downstream effects on our structural
                  deliverables, workforce safety, and project timelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Image Side */}
        <div className="relative w-full md:w-[40%] min-h-[50vh] md:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/process-management.png")',
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative w-full min-h-screen pt-24 flex flex-col md:flex-row-reverse overflow-hidden border-t border-slate-100">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-[60%] flex flex-col justify-center px-8 md:px-24 py-20 bg-white z-10">
          <div className="max-w-xl">
            {/* PART A */}
            <div className="mb-16">
              <h2
                className={`text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight ${gradientText}`}
              >
                Document Control <br /> & Approvals
              </h2>

              <h4
                className={`font-bold text-[0.7rem] md:text-xs tracking-[0.2em] uppercase mb-4 leading-tight ${gradientText}`}
              >
                DOCUMENT GOVERNANCE, APPROVALS, & OBSOLESCENCE
              </h4>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-6">
                Integrity on the site starts with integrity on the paper.
                Mittura maintains a rigid chain of command for the creation,
                approval, and destruction of operational documents.
              </p>

              {/* Obsolescence Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] flex items-center justify-center shadow-md">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>

                  <h5
                    className={`font-bold text-[0.75rem] uppercase tracking-wider ${gradientText}`}
                  >
                    Obsolescence Control
                  </h5>
                </div>

                <p className="text-slate-600 text-[0.8rem] leading-relaxed">
                  Upon the release of any revised blueprint, safety manual, or
                  procedural document, all obsolete or invalid physical copies
                  are recalled and immediately destroyed. A single master copy
                  is marked "OBSOLETE" and securely filed strictly for auditing
                  purposes.
                </p>
              </div>
            </div>

            {/* PART B */}
            <div>
              <h2
                className={`text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight ${gradientText}`}
              >
                Records Management <br /> & Retention
              </h2>

              <h4
                className={`font-bold text-[0.7rem] md:text-xs tracking-[0.2em] uppercase mb-4 leading-tight ${gradientText}`}
              >
                SITE RECORDS, TRACEABILITY, & RETENTION
              </h4>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-8">
                Mittura handles its project data with the same heavy precision
                as its building materials, guaranteeing absolute peace of mind
                long after project handover.
              </p>

              {/* Records Cards */}
              <div className="space-y-5">
                {[
                  {
                    t: "Identification & Indexing",
                    d: "Clear reference numbering and organized chronology ensure instant retrieval during client audits or municipal inspections.",
                  },
                  {
                    t: "Data Protection",
                    d: "Robust physical and digital protection to prevent damage, data loss, or deterioration of critical records.",
                  },
                  {
                    t: "Retention Guarantee",
                    d: "Mandatory 5-year data retention policy organization-wide, extending to 10 years for high-scale engineering records.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a1a] via-[#4b0f14] to-[#7a1c1c] flex items-center justify-center shadow-md">
                        <BadgeCheck className="w-5 h-5 text-white" />
                      </div>

                      <span
                        className={`font-bold text-[0.75rem] uppercase tracking-wider ${gradientText}`}
                      >
                        {item.t}
                      </span>
                    </div>

                    <p className="text-slate-600 text-[0.8rem] leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Image Side */}
        <div className="relative w-full md:w-[40%] min-h-[50vh] md:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/process-management.png")',
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessAndManagement;