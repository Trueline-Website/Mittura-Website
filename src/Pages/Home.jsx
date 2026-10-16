import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Clients from "../Components/Clients";

export default function Home() {
  return (
    <div className="w-full bg-white font-sans antialiased">
      {/* HERO HEADER (FULL SCREEN ARCHITECTURAL) */}
      <Hero />

      {/* SECTION 01: 'OUR SERVICES' (STAGGERED EDITORIAL GRID) */}
      <Services />

      {/* SECTION 02: 'ABOUT COMPANY' (EDITORIAL NARRATIVE & METRICS) */}
      <About />

      {/* SECTION 03: 'OUR PORTFOLIO' (GALLERY GRID WITH DELIVERY TIMELINES) */}
      <Portfolio />

      {/* PROVEN TRACK RECORD & PARTNERS */}
      <Clients />
    </div>
  );
}
