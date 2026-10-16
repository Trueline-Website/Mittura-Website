import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const architecturalSlides = [
    {
      title: "LUXURY HIGH-RISE & CIVIL",
      location: "Dubai Marina / Downtown",
      tag: "CIVIL ARCHITECTURE",
      image: "/hero-highrise.png",
      sector: "Commercial & Residential"
    },
    {
      title: "PREMIER INFRASTRUCTURE",
      location: "Sheikh Zayed Corridor",
      tag: "TURNKEY WORKS",
      image: "/hero-bridge.png",
      sector: "Urban Infrastructure"
    },
    {
      title: "COMMERCIAL AIRPORT & TERMINALS",
      location: "Dubai Aviation Hub",
      tag: "COMPLEX MEP & CIVIL",
      image: "/hero-terminal.png",
      sector: "Industrial & Transport"
    },
    {
      title: "PRIVATE LUXURY ESTATES",
      location: "Emirates Hills / Palm Jumeirah",
      tag: "SUPER-PRIME FIT-OUT",
      image: "/hero-villa.png",
      sector: "Bespoke Residences"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % architecturalSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [architecturalSlides.length]);

  return (
    <section className="relative w-full min-h-screen bg-[#3D181A] text-white flex flex-col justify-between pt-28 pb-12 overflow-hidden select-none">
      
      {/* 60% VISUAL FOCAL POINT: HIGH-CONTRAST ARCHITECTURAL PHOTOGRAPHY BACKDROP */}
      <div className="absolute inset-0 z-0">
        {architecturalSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
              style={{
                transform: activeSlide === idx ? "scale(1.0)" : "scale(1.08)"
              }}
            />
            {/* Deep Ebony (#3D181A) & dark architectural gradient overlays with high contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D181A] via-[#3D181A]/80 to-transparent w-full lg:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D181A] via-transparent to-[#3D181A]/70" />
            <div className="absolute inset-0 bg-[#000000]/30" />
          </div>
        ))}
      </div>

      {/* RIGHT EDGE VERTICAL SIDEBAR MARKER (SMALL-CAPS INTER) */}
      <aside className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 pointer-events-none">
        <div className="w-[1px] h-16 bg-white/20" />
        <span
          className="text-[11px] font-semibold tracking-[0.35em] text-white/70 uppercase writing-mode-vertical"
          style={{ writingMode: "vertical-rl" }}
        >
          CONSTRUCTION | FIT-OUT | MEP | INFRASTRUCTURE
        </span>
        <div className="w-[1px] h-16 bg-white/20" />
      </aside>

      {/* MAIN EDITORIAL HERO CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-10">
        <div className="max-w-3xl flex flex-col items-start">
          
          {/* BRAND ACCENT / 10% CLEARSPACE BADGE */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#000000]/60 backdrop-blur-md border-l-2 border-[#C43030] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C43030] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-white uppercase font-sans">
              DUBAI, UAE &bull; ESTABLISHED 2018
            </span>
          </div>

          {/* MASSIVE WORDMARK 'MITTURA' IN INTER BOLD (WHITE/REVERSED) */}
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-[-0.02em] leading-none text-white uppercase mb-4 select-none drop-shadow-sm">
            MITTURA
          </h1>

          {/* SUB-HEADER IN ROBOTO SLAB */}
          <h2 className="font-subheading text-xl sm:text-2xl md:text-3xl text-slate-100 font-normal tracking-wide uppercase mb-8 max-w-2xl border-l-2 border-[#D4AF37] pl-4">
            CREATING STRUCTURES THAT INSPIRE
          </h2>

          {/* BODY TEXT IN INTER REGULAR */}
          <p className="font-body text-slate-300 text-sm sm:text-base max-w-xl leading-[1.65] mb-10">
            Integrated turnkey building contractor delivering civil engineering, luxury interior fit-out, and MEP solutions across landmark UAE developments with our signature 24-Month Platinum Guarantee.
          </p>

          {/* PRIMARY ACTION: RECTANGULAR CTA BUTTON IN MITTURA RED (#C43030) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="bg-[#C43030] hover:bg-[#812425] text-white px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg active:scale-95 group rounded-[4px]"
            >
              <span>[ CALCULATE ESTIMATE / INQUIRE NOW &gt; ]</span>
            </Link>

            <Link
              to="/portfolio"
              className="border border-white/30 hover:border-white bg-[#000000]/40 hover:bg-[#000000]/70 text-white px-7 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm rounded-[4px]"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ChevronRight className="w-4 h-4 text-[#C43030]" />
            </Link>
          </div>

        </div>
      </div>

      {/* BOTTOM MARQUEE / EDITORIAL RHYTHM STRIP */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#000000]/40 backdrop-blur-sm py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] font-medium tracking-[0.15em] text-white/70 uppercase">
          <div className="flex items-center gap-6">
            <span className="text-[#C43030] font-bold">01 //</span>
            <span>CIVIL CONTRACTING</span>
            <span className="text-[#C43030] font-bold">02 //</span>
            <span>LUXURY FIT-OUT</span>
            <span className="text-[#C43030] font-bold">03 //</span>
            <span>INTEGRATED MEP</span>
            <span className="text-[#C43030] font-bold">04 //</span>
            <span>FAÇADES & GLASS</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-white/50">
            <span>DUBAI MUNICIPALITY &bull; DEWA &bull; DCD APPROVED</span>
          </div>
        </div>
      </div>

    </section>
  );
}