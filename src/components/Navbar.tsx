"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import HeaderLogo from "@/components/HeaderLogo";

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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[200] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="absolute inset-0 z-0 bg-[#041225]/60 backdrop-blur-sm"
          aria-label="Chiudi menu"
          onClick={closeMobileMenu}
        />
        <aside
          className={`absolute top-0 right-0 z-10 flex h-full w-full max-w-[24rem] flex-col bg-white shadow-[0_0_80px_rgba(5,18,37,0.35)] transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#E7EEF7] px-5 py-5">
            <p className="font-heading text-3xl leading-none tracking-[0.02em] text-[#0B2343]">Menu</p>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DCEAF9] text-[#0A2240] transition-colors hover:bg-[#F3F8FF]"
              onClick={closeMobileMenu}
              aria-label="Chiudi"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-2">
            <nav className="flex flex-col items-stretch gap-1">
              <div className="w-full">
                <Link
                  href="/"
                  className="flex w-full items-center justify-start rounded-2xl px-4 py-4 text-left font-heading text-xl font-medium leading-tight tracking-[0.01em] text-[#0A2240] transition-colors hover:bg-[#F0F7FF] sm:text-2xl"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </div>
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="w-full">
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left font-heading text-xl font-medium leading-tight tracking-[0.01em] text-[#0A2240] transition-colors hover:bg-[#F0F7FF] sm:text-2xl"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-submenu"
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`h-6 w-6 shrink-0 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        id="mobile-services-submenu"
                        className={`mx-1 mt-1 overflow-hidden rounded-2xl border border-[#E6EFFA] bg-[#F8FAFC] transition-all duration-300 ${
                          mobileServicesOpen ? "max-h-96 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
                        }`}
                      >
                        <Link
                          href="/servizi"
                          className="flex w-full items-center justify-start px-6 py-3.5 text-left font-body text-base font-medium text-[#1e3a5f] transition-colors hover:bg-white hover:text-[#0A2240]"
                          onClick={closeMobileMenu}
                        >
                          Tutti i Servizi
                        </Link>
                        {link.children.map((child, idx) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex w-full items-center justify-start px-8 py-3.5 text-left font-body text-base font-medium text-[#1e3a5f] transition-colors hover:bg-white hover:text-[#0A2240] ${
                              idx < link.children.length - 1 ? "border-b border-[#E6EFFA]" : ""
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex w-full items-center justify-start rounded-2xl px-4 py-4 text-left font-heading text-xl font-medium leading-tight tracking-[0.01em] text-[#0A2240] transition-colors hover:bg-[#F0F7FF] sm:text-2xl"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </div>,
      document.body
    );

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-[#A4D5FF]/20 bg-[#001a33]/88 shadow-[0_1px_40px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-[#001a33]/62"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-[5%]">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo left */}
          <Link
            href="/"
            className="z-[55] flex max-w-[calc(100%-4.5rem)] lg:max-w-none"
            aria-label="CM Impianti — Homepage"
          >
            <HeaderLogo compact />
          </Link>

          {/* Hamburger right on mobile */}
          <button
            type="button"
            className="z-[60] flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#D7E7F7] bg-white text-[#0A2240] shadow-[0_6px_24px_rgba(10,34,64,0.12)] transition-all lg:hidden"
            onClick={() => (mobileOpen ? closeMobileMenu() : setMobileOpen(true))}
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[0.125rem] w-6 origin-center rounded-full bg-current transition-all duration-300 ${mobileOpen ? "translate-y-[0.25rem] rotate-45" : ""}`}
            />
            <span
              className={`block h-[0.125rem] w-6 origin-center rounded-full bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-[0.25rem] -rotate-45" : ""}`}
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden min-w-0 flex-1 justify-center pl-8 lg:flex">
            <nav className="flex max-w-full flex-wrap items-center justify-center gap-1 xl:gap-1.5">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`nav-pill flex items-center gap-1.5 ${
                        servicesOpen ? "bg-white/10 text-white backdrop-blur-md" : ""
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`h-3.5 w-3.5 opacity-80 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`absolute top-full left-1/2 z-[80] mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 transition-all duration-200 ease-out ${
                        servicesOpen
                          ? "pointer-events-auto scale-100 opacity-100"
                          : "pointer-events-none scale-[0.98] opacity-0"
                      }`}
                      style={{
                        background: "rgba(15, 23, 42, 0.82)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
                      }}
                    >
                      {link.children.map((child, i) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center gap-3 px-5 py-3 text-sm font-normal text-slate-300 transition-colors hover:bg-white/10 hover:text-white ${
                            i < link.children.length - 1 ? "border-b border-white/[0.06]" : ""
                          }`}
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400/80" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className="nav-pill">
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
