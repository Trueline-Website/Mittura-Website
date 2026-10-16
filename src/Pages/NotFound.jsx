import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center px-6 py-36 font-sans antialiased">
      <div className="max-w-xl w-full text-center">
        {/* Error Code */}
        <div className="relative inline-block mb-6">
          <span className="font-heading text-8xl sm:text-9xl font-black text-slate-100 select-none tracking-tight">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#C43030]">
            PAGE NOT FOUND
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-2xl sm:text-3xl font-black text-[#000000] uppercase tracking-tight mb-4">
          STRUCTURE UNAVAILABLE
        </h1>

        {/* Description */}
        <p className="font-body text-slate-600 text-sm sm:text-base mb-8 leading-[1.65]">
          The blueprint or destination you are seeking has been relocated, completed, or is temporarily offline. Return to the main portal to explore our active project portfolio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C43030] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#812425] transition-colors rounded-[4px]"
          >
            <Home className="w-4 h-4" />
            <span>[ RETURN TO HOME ]</span>
          </Link>
          <Link
            to="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-[#F5F5F5] transition-colors rounded-[4px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VIEW PORTFOLIO</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
