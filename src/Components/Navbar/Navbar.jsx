import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/mittura.png";
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useServices } from "../../context/ServiceContext.jsx";

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

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

          {/* RIGHT SIDE: DIRECT PHONE & WHATSAPP BUTTON */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+97142800334"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#C43030] transition-colors tracking-wide whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C43030] shrink-0" />
              <span className="whitespace-nowrap">+971 4 280 0334</span>
            </a>

            <a
              href="https://wa.me/97142800334"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 text-xs font-bold tracking-[0.08em] uppercase transition-all duration-300 shadow-sm hover:shadow active:scale-95 rounded-[4px]"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/97142800334"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:opacity-80 rounded-[4px]"
              aria-label="WhatsApp Mittura"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </a>
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
              <a
                href="https://wa.me/97142800334"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-center py-3 text-xs font-bold tracking-[0.08em] uppercase transition-colors rounded-[4px] shadow-sm active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}