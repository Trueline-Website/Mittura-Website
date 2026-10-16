import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import logoWhite from "../assets/mitturafooter.png";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#3D181A] text-white overflow-hidden border-t-2 border-[#C43030] select-none">
      
      {/* SECTION 04: TOP HIGH-IMPACT CONTACT BANNER */}
      <div className="relative border-b border-white/10 bg-gradient-to-r from-[#3D181A] via-[#812425] to-[#3D181A] py-20 lg:py-24">
        {/* Subtle architectural lighting accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C43030]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/40 border border-white/10 mb-6 rounded-[4px]">
            <span className="w-2 h-2 rounded-full bg-[#C43030]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              ESTABLISH YOUR NEXT LANDMARK
            </span>
          </div>

          {/* LARGE TYPOGRAPHY: 'BUILDING EXCELLENCE. DELIVERING TRUST.' IN INTER BOLD */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.02em] text-white max-w-4xl leading-tight mb-8">
            BUILDING EXCELLENCE. <br className="hidden sm:block" />
            <span className="text-white/60">DELIVERING TRUST.</span>
          </h2>

          <p className="font-subheading text-base sm:text-lg text-slate-200 font-normal max-w-2xl mb-10 leading-relaxed">
            Direct turnkey control across civil execution, luxury interior fit-out, and MEP systems with our 24-Month Platinum Guarantee.
          </p>

          {/* CONTACT DISPLAY & MITTURA RED BUTTON */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
            <a
              href="tel:+97142800334"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-black/50 hover:bg-black/70 border border-white/20 text-white font-mono text-sm tracking-wider uppercase transition-colors rounded-[4px] whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-[#C43030] shrink-0" />
              <span className="whitespace-nowrap">+971 4 280 0334</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C43030] hover:bg-[#812425] text-white font-heading text-xs sm:text-sm font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-300 shadow-xl active:scale-95 rounded-[4px] whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">[ GET IN TOUCH / SUBMIT RFP ]</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

        </div>
      </div>

      {/* CORPORATE FOOTER MAIN BODY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* COLUMN 1: OFFICIAL LOGO LOCKUP WITH 2X CLEARSPACE & CORPORATE OVERVIEW */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <Link to="/" className="mb-6 p-2 block focus:outline-none" aria-label="Mittura Home">
              <img
                src={logoWhite}
                alt="MITTURA Building Contracting L.L.C."
                className="h-12 sm:h-14 w-auto object-contain select-none"
                style={{ maxHeight: "56px" }}
              />
            </Link>

            <p className="font-body text-slate-300 text-sm leading-[1.65] mb-6">
              Mittura Building Contracting L.L.C. is an established turnkey building contractor headquartered in Dubai, UAE. Unifying civil execution, MEP engineering, and interior craftsmanship under direct, in-house management since 2018.
            </p>

            <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span>
                24-Month Platinum Guarantee on Workmanship &amp; Structural Handover.
              </span>
            </div>
          </div>

          {/* COLUMN 2: QUICK DISCIPLINE LINKS */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
              CORE DISCIPLINES
            </h3>
            <ul className="space-y-3 text-sm text-slate-300 font-sans">
              <li>
                <Link to="/#service-01" className="hover:text-[#C43030] transition-colors flex items-center gap-2">
                  <span className="text-[#C43030] font-mono text-xs">01 /</span> Turnkey Construction &amp; Civil
                </Link>
              </li>
              <li>
                <Link to="/#service-02" className="hover:text-[#C43030] transition-colors flex items-center gap-2">
                  <span className="text-[#C43030] font-mono text-xs">02 /</span> Luxury Interior Fit-Out
                </Link>
              </li>
              <li>
                <Link to="/#service-03" className="hover:text-[#C43030] transition-colors flex items-center gap-2">
                  <span className="text-[#C43030] font-mono text-xs">03 /</span> Comprehensive MEP Services
                </Link>
              </li>
              <li>
                <Link to="/#service-04" className="hover:text-[#C43030] transition-colors flex items-center gap-2">
                  <span className="text-[#C43030] font-mono text-xs">04 /</span> Architectural Glass &amp; Aluminium
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#C43030] transition-colors flex items-center gap-2 pt-2 text-white font-semibold">
                  <span className="text-[#D4AF37]">&gt;</span> SAJ Development Pipeline (2026+)
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CORPORATE HEADQUARTERS & VERIFIED CONTACT */}
          <div className="lg:col-span-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
              HEADQUARTERS &amp; INQUIRIES
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C43030] shrink-0 mt-0.5" />
                <div className="font-sans">
                  <p className="font-bold text-white uppercase text-xs tracking-wider">OFFICIAL REGISTERED ADDRESS</p>
                  <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                    Suite 3504, Aspin Commercial Tower, Sheikh Zayed Road, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C43030] shrink-0" />
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-wider">DIRECT LINE</p>
                  <a href="tel:+97142800334" className="text-slate-200 hover:text-[#C43030] transition-colors font-mono">
                    +971 4 280 0334
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C43030] shrink-0" />
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-wider">OFFICIAL EMAIL</p>
                  <a href="mailto:info@mittura.com" className="text-slate-200 hover:text-[#C43030] transition-colors font-mono lowercase">
                    info@mittura.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#C43030] shrink-0" />
                <div>
                  <p className="font-bold text-white uppercase text-xs tracking-wider">ONLINE PORTAL</p>
                  <span className="text-slate-200 font-mono">www.mittura.com</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT NOTICE & LEGAL */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <p>
            &copy; 2026 Mittura Building Contracting L.L.C. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Dubai Municipality Lic. No. 814920</span>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy &amp; Compliance
            </Link>
          </div>
        </div>

      </div>

    </footer>
  );
}