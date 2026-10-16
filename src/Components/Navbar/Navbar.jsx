import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/mittura.png";
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useServices } from "../../context/ServiceContext.jsx";

export default function Navbar() {
  const { services } = useServices();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* OFFICIAL DUAL-LANGUAGE MITTURA LOGO (2X CLEARSPACE ENFORCED) */}
          <Link
            to="/"
            className="flex items-center p-2 focus:outline-none transition-transform hover:opacity-95"
            aria-label="Mittura Home"
          >
            <img
              src={logo}
              alt="MITTURA Building Contracting L.L.C."
              className="h-10 sm:h-12 md:h-13 w-auto object-contain select-none"
              style={{ maxHeight: "52px" }}
            />
          </Link>

          {/* DESKTOP NAVIGATION (INTER REGULAR) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <Link
              to="/"
              className={`text-[14px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#C43030] font-bold"
                  : "text-slate-800 hover:text-[#C43030]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-[14px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                isActive("/about")
                  ? "text-[#C43030] font-bold"
                  : "text-slate-800 hover:text-[#C43030]"
              }`}
            >
              About
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <Link
                to="/#services"
                className={`inline-flex items-center gap-1.5 text-[14px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                  servicesOpen
                    ? "text-[#C43030]"
                    : "text-slate-800 hover:text-[#C43030]"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#C43030]" : "text-slate-500"
                  }`}
                />
              </Link>

              {/* SERVICES FLYOUT */}
              <div
                className={`absolute left-0 top-full mt-3 w-80 rounded-xl bg-white border border-slate-200 shadow-xl transition-all duration-200 p-3 z-50 ${
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="px-3 py-2 border-b border-slate-100 mb-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                    Official Disciplines
                  </span>
                </div>
                <div className="flex flex-col">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/#service-${service.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                    >
                      <span className="text-xs font-mono font-bold text-[#C43030] mt-0.5">
                        {service.number || service.id}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-[#C43030] transition-colors uppercase tracking-tight">
                          {service.title}
                        </p>
                        <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                          {service.lead}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/portfolio"
              className={`text-[14px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                isActive("/portfolio")
                  ? "text-[#C43030] font-bold"
                  : "text-slate-800 hover:text-[#C43030]"
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              className={`text-[14px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                isActive("/contact")
                  ? "text-[#C43030] font-bold"
                  : "text-slate-800 hover:text-[#C43030]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE: DIRECT PHONE & RECTANGULAR MITTURA RED CTA BUTTON */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+97142800334"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#C43030] transition-colors tracking-wide whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C43030] shrink-0" />
              <span className="whitespace-nowrap">+971 4 280 0334</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C43030] hover:bg-[#812425] text-white px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 shadow-sm active:scale-95 rounded-[4px]"
            >
              <span>[ INQUIRE NOW &gt; ]</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+97142800334"
              className="p-2 text-slate-700 hover:text-[#C43030] rounded-[4px]"
              aria-label="Call Mittura"
            >
              <Phone className="w-4 h-4 text-[#C43030]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-800 hover:text-[#C43030] rounded-[4px]"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-bold uppercase tracking-wider ${
                isActive("/") ? "text-[#C43030]" : "text-slate-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-bold uppercase tracking-wider ${
                isActive("/about") ? "text-[#C43030]" : "text-slate-900"
              }`}
            >
              About Company
            </Link>
            <Link
              to="/#services"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-slate-900"
            >
              Our Services
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-bold uppercase tracking-wider ${
                isActive("/portfolio") ? "text-[#C43030]" : "text-slate-900"
              }`}
            >
              Our Portfolio
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-bold uppercase tracking-wider ${
                isActive("/contact") ? "text-[#C43030]" : "text-slate-900"
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+97142800334"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#C43030] shrink-0" />
                <span className="whitespace-nowrap">+971 4 280 0334</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-[#C43030] hover:bg-[#812425] text-white text-center py-3 text-xs font-bold tracking-[0.1em] uppercase transition-colors rounded-[4px]"
              >
                [ CALCULATE ESTIMATE / INQUIRE NOW &gt; ]
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}