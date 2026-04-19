// Design System v2 — CM Impianti
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/data";

const NAV_LINKS = [
  { href: "/chi-siamo", label: "Chi Siamo" },
  {
    href: "/servizi",
    label: "Servizi",
    children: [
      { href: "/servizi/impiantistica-navale", label: "Impiantistica Navale" },
      { href: "/servizi/impiantistica-industriale", label: "Impiantistica Industriale" },
      { href: "/servizi/refitting-navi", label: "Refitting Navi" },
    ],
  },
  { href: "/progetti", label: "Progetti" },
  { href: "/certificazioni", label: "Certificazioni" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1E]/90 backdrop-blur-xl border-b border-[#C9A84C]/10 shadow-[0_1px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Wordmark logo */}
          <Link href="/" className="flex-shrink-0 flex flex-col leading-none" aria-label="CM Impianti — Homepage">
            <span className="font-heading text-[22px] text-[#F0F4F8] tracking-[0.06em]">CM IMPIANTI</span>
            <span className="font-body text-[9px] text-[#8A9BAD] tracking-[0.28em] uppercase mt-0.5">Performance Technology</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="nav-link flex items-center gap-1.5 text-[#8A9BAD] hover:text-[#C9A84C] text-sm font-medium tracking-wide py-1">
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl overflow-hidden transition-all duration-200 origin-top ${
                      servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    style={{
                      background: "rgba(10,15,30,0.97)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(201,168,76,0.12)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    }}
                  >
                    {link.children.map((child, i) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-3 px-5 py-3.5 text-sm text-[#8A9BAD] hover:text-[#F0F4F8] hover:bg-white/[0.04] transition-all ${
                          i < link.children.length - 1 ? "border-b border-[#C9A84C]/08" : ""
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60 flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-[#8A9BAD] hover:text-[#C9A84C] text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp CM Impianti"
              className="text-[#8A9BAD] hover:text-[#25D366] transition-colors p-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.519 5.837L.057 23.943a.5.5 0 00.6.6l6.105-1.462A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.493-5.244-1.358l-.376-.217-3.895.932.947-3.895-.217-.376A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
            <Link
              href="/contatti"
              className="px-5 py-2.5 rounded-full border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0F1E] font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03]"
            >
              Richiedi Preventivo
            </Link>
          </div>

          {/* Hamburger — 2 lines → X morph */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[7px] rounded-xl hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-[#F0F4F8] transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[4.25px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#F0F4F8] transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4.25px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="mx-4 mb-4 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(10,15,30,0.97)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,168,76,0.12)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          <div className="p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#8A9BAD] hover:text-[#F0F4F8] hover:bg-white/[0.04] transition-all text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-0.5 mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[#8A9BAD]/70 hover:text-[#F0F4F8] hover:bg-white/[0.04] transition-all text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#C9A84C]/60 flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="px-4 pb-4">
            <Link
              href="/contatti"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0F1E] font-semibold text-sm tracking-wide transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Richiedi Preventivo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
