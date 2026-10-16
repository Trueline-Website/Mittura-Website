import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe, Clock, Send, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: "Turnkey Construction & Civil Works",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const disciplines = [
    "01 | Turnkey Construction & Civil Works",
    "02 | Luxury Interior Fit-Out",
    "03 | Comprehensive MEP Services",
    "04 | Architectural Glass & Aluminium",
    "General Corporate Inquiry / RFP"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        discipline: "01 | Turnkey Construction & Civil Works",
        message: ""
      });
    }, 600);
  };

  return (
    <div className="w-full bg-white font-sans antialiased">
      
      {/* ARCHITECTURAL HERO BANNER */}
      <section className="relative w-full pt-36 pb-20 bg-[#3D181A] text-white overflow-hidden select-none">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/photo1.jpeg"
            alt="Mittura Corporate Headquarters Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D181A] via-[#3D181A]/90 to-[#3D181A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D181A] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C43030]" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] font-sans">
              DIRECT INQUIRIES &bull; RFP SUBMISSION
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-6">
            CONTACT <span className="text-[#C43030]">US</span>
          </h1>

          <p className="font-subheading text-lg sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed">
            Connect directly with our engineering and estimating departments for project inquiries, technical tenders, and turnkey feasibility studies across the UAE.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: VERIFIED CORPORATE CONTACT DETAILS */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-[#C43030]" />
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C43030] font-sans">
                    DUBAI HEADQUARTERS
                  </span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#000000] uppercase tracking-tight mb-4">
                  OFFICIAL CONTACT DIRECTORY
                </h2>

                <p className="font-body text-slate-600 text-sm leading-[1.65] mb-10">
                  Our multidisciplinary engineering teams are stationed at our central headquarters in Aspin Commercial Tower, Sheikh Zayed Road, Dubai.
                </p>

                <div className="space-y-6">
                  
                  {/* DIRECT PHONE */}
                  <div className="flex items-start gap-4 p-5 bg-[#F5F5F5] border-l-2 border-[#C43030] rounded-[4px]">
                    <div className="w-10 h-10 rounded-[4px] bg-[#C43030] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                        DIRECT PHONE LINE
                      </p>
                      <a
                        href="tel:+97142800334"
                        className="font-heading text-lg font-black text-slate-900 hover:text-[#C43030] transition-colors font-mono"
                      >
                        +971 4 280 0334
                      </a>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        Operating Hours: Sun - Thu, 8:30 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* OFFICIAL EMAIL */}
                  <div className="flex items-start gap-4 p-5 bg-[#F5F5F5] border-l-2 border-[#2F4F6F] rounded-[4px]">
                    <div className="w-10 h-10 rounded-[4px] bg-[#2F4F6F] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                        OFFICIAL EMAIL
                      </p>
                      <a
                        href="mailto:info@mittura.com"
                        className="font-heading text-lg font-black text-slate-900 hover:text-[#C43030] transition-colors font-mono lowercase"
                      >
                        info@mittura.com
                      </a>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        Guaranteed Response within 24 Business Hours
                      </p>
                    </div>
                  </div>

                  {/* REGISTERED ADDRESS */}
                  <div className="flex items-start gap-4 p-5 bg-[#F5F5F5] border-l-2 border-[#D4AF37] rounded-[4px]">
                    <div className="w-10 h-10 rounded-[4px] bg-[#D4AF37] text-black flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                        PHYSICAL LOCATION
                      </p>
                      <p className="font-heading text-sm font-bold text-slate-900 uppercase leading-snug">
                        Suite 3504, Aspin Commercial Tower, Sheikh Zayed Road, Dubai, UAE
                      </p>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        P.O. Box: 237763, Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* 24-MONTH GUARANTEE CARD */}
              <div className="mt-8 p-6 bg-[#3D181A] text-white border-l-4 border-[#C43030]">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-bold text-xs uppercase tracking-widest text-[#D4AF37]">
                    24-Month Platinum Guarantee
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  All executed civil, MEP, and fit-out contracts include our comprehensive warranty on structural workmanship and materials.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: RFP SUBMISSION FORM */}
            <div className="lg:col-span-7">
              <div className="bg-[#F5F5F5] p-8 sm:p-12 border border-slate-200">
                
                <div className="mb-8">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C43030] font-bold block mb-1">
                    ONLINE ESTIMATE / RFP SUBMISSION
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#000000] uppercase tracking-tight">
                    SUBMIT PROJECT SCOPE
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-1">
                    Fill out the form below to receive a formal consultation from our estimation department.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-white border border-[#C43030] text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#C43030] mx-auto mb-4" />
                    <h4 className="font-heading text-xl font-bold uppercase text-slate-900 mb-2">
                      INQUIRY TRANSMITTED SUCCESSFULLY
                    </h4>
                    <p className="text-sm text-slate-600 font-body mb-6">
                      Thank you for contacting Mittura Building Contracting L.L.C. A senior technical representative will review your project brief and get in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#C43030] hover:bg-[#812425] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-[4px]"
                    >
                      SUBMIT ANOTHER REQUEST
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Full Name / Representative"
                          className="w-full bg-white border border-slate-300 focus:border-[#C43030] px-4 py-3 text-sm text-slate-900 outline-none transition-colors rounded-[4px]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                          OFFICIAL EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-white border border-slate-300 focus:border-[#C43030] px-4 py-3 text-sm text-slate-900 outline-none transition-colors rounded-[4px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 -- --- ----"
                          className="w-full bg-white border border-slate-300 focus:border-[#C43030] px-4 py-3 text-sm text-slate-900 outline-none transition-colors rounded-[4px]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                          SERVICE DISCIPLINE *
                        </label>
                        <select
                          value={formData.discipline}
                          onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                          className="w-full bg-white border border-slate-300 focus:border-[#C43030] px-4 py-3 text-sm text-slate-900 outline-none transition-colors rounded-[4px]"
                        >
                          {disciplines.map((d, i) => (
                            <option key={i} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                        PROJECT SCOPE &amp; DETAILS *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details regarding project location, approximate built-up area (SQFT), target handover timeline, or technical requirements..."
                        className="w-full bg-white border border-slate-300 focus:border-[#C43030] px-4 py-3 text-sm text-slate-900 outline-none transition-colors resize-none rounded-[4px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#C43030] hover:bg-[#812425] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-md active:scale-98 disabled:opacity-50 rounded-[4px]"
                    >
                      <span>{submitting ? "TRANSMITTING..." : "[ SUBMIT RFP / INQUIRE NOW > ]"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FULL-WIDTH GOOGLE MAP */}
      <section className="w-full h-96 border-t border-slate-200 bg-slate-100">
        <iframe
          title="Mittura Dubai Location Map"
          src="https://www.google.com/maps?q=Aspin+Commercial+Tower+Dubai&output=embed"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
      </section>

    </div>
  );
}