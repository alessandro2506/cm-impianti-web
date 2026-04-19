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

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-[#06142A]/85 border-b border-[#A4D5FF]/20 shadow-[0_1px_40px_rgba(0,0,0,0.35)]"
          : "bg-[#06142A]/55 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="relative flex items-center justify-between h-20 lg:h-24">

          {/* Wordmark logo — gold glyph + text */}
          <Link href="/" className="hidden lg:flex flex-shrink-0 items-center gap-3" aria-label="CM Impianti — Homepage">
            <div className="flex items-center gap-[3px] h-8">
              <div className="w-[3px] h-full bg-[#C9A84C] rounded-full" />
              <div className="w-[3px] h-[60%] bg-[#C9A84C]/50 rounded-full" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-[30px] text-[#F0F4F8] tracking-[0.08em] leading-none">CM IMPIANTI</span>
              <span className="font-body text-[9px] text-[#9CD6FF]/85 tracking-[0.3em] uppercase mt-[3px]">Performance Technology</span>
            </div>
          </Link>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:hidden flex items-center gap-2.5 max-w-[72vw]"
            aria-label="CM Impianti — Homepage"
          >
            <div className="flex items-center gap-[3px] h-9 shrink-0">
              <div className="w-[3px] h-full bg-[#4DB8FF] rounded-full" />
              <div className="w-[3px] h-[60%] bg-[#4DB8FF]/60 rounded-full" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-[32px] text-[#F0F4F8] tracking-[0.06em] leading-none">CM IMPIANTI</span>
            </div>
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
                          i < link.children.length - 1 ? "border-b border-white/[0.05]" : ""
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
              className="px-6 py-3 rounded-full border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0F1E] font-semibold text-[14px] tracking-wide transition-all duration-200 hover:scale-[1.03]"
            >
              Richiedi Preventivo
            </Link>
          </div>

          {/* Hamburger — 2 lines, 2px height, visible */}
          <button
            className="lg:hidden ml-auto flex flex-col justify-center items-center w-12 h-12 gap-[6px] rounded-2xl bg-white text-[#0A2240] border border-[#D7E7F7] shadow-[0_6px_24px_rgba(10,34,64,0.12)] transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-[2px] bg-current transition-all duration-300 origin-center rounded-full ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-current transition-all duration-300 origin-center rounded-full ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-[#041225]/55 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className="absolute top-[86px] left-4 right-4 bottom-4 bg-white rounded-[30px] shadow-[0_30px_80px_rgba(5,18,37,0.25)] overflow-auto">
          <div className="px-6 pt-8 pb-6 border-b border-[#E7EEF7]">
            <p className="text-[#0B2343] text-[34px] font-heading leading-none tracking-[0.02em]">Menu</p>
            <div className="mt-8 p-1.5 rounded-2xl bg-[#F3F8FF] grid grid-cols-2 gap-2">
              <button className="h-11 rounded-xl border border-[#DCEAF9] text-[#19395E] text-lg font-semibold">IT</button>
              <button className="h-11 rounded-xl bg-[#0A2240] text-white text-lg font-semibold">EN</button>
            </div>
          </div>
          <div className="px-4 py-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-4 py-4 rounded-2xl text-[#0A2240] hover:text-[#005BB5] hover:bg-[#EFF6FF] transition-all font-semibold text-[34px] font-heading leading-none tracking-[0.02em]"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  {link.children && (
                    <svg className="w-4 h-4 text-[#0A2240]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && (
                  <div className="mx-2 mt-0.5 mb-1 rounded-xl overflow-hidden bg-[#F6FAFF] border border-[#E6EFFA]">
                    {link.children.map((child, idx) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-3 px-5 py-3 text-[#35597F] hover:text-[#0A2240] transition-all text-sm ${
                          idx < link.children.length - 1 ? "border-b border-[#E6EFFA]" : ""
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0CA6E8]/60 flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA area */}
          <div className="p-4 border-t border-[#E7EEF7] space-y-2.5">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-14 rounded-full bg-[#E7F9EE] border border-[#ADE6C0] text-[#1AA552] font-semibold text-base tracking-wide transition-all hover:bg-[#DDF6E7]"
              onClick={() => setMobileOpen(false)}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.519 5.837L.057 23.943a.5.5 0 00.6.6l6.105-1.462A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.493-5.244-1.358l-.376-.217-3.895.932.947-3.895-.217-.376A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contatti"
              className="flex items-center justify-center gap-2 w-full h-14 rounded-full text-white font-semibold text-base tracking-wide transition-all shadow-[0_12px_26px_rgba(10,166,255,0.35)]"
              style={{ background: "linear-gradient(90deg, #0075FF 0%, #00C4FF 100%)" }}
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
