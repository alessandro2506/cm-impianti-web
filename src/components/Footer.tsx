// Design System v2 — CM Impianti
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import HeaderLogo from "@/components/HeaderLogo";

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full min-w-0 bg-[#00172d]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/85 to-transparent"
        aria-hidden
      />
      <div className="border-t border-[#C9A84C]/25 shadow-[inset_0_1px_0_rgba(201,168,76,0.12)]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="pb-14 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28">
            <div className="flex justify-center lg:justify-start">
              <HeaderLogo className="max-w-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 py-12 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-14 lg:py-16">
            <div>
              <p className="font-technical text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Servizi
              </p>
              <div className="mt-5 space-y-3">
                <Link href="/servizi/impiantistica-navale" className="block text-sm leading-relaxed text-slate-200 transition-colors hover:text-[#F8FAFC]">
                  Impiantistica Navale
                </Link>
                <Link href="/servizi/impiantistica-industriale" className="block text-sm leading-relaxed text-slate-200 transition-colors hover:text-[#F8FAFC]">
                  Impiantistica Industriale
                </Link>
                <Link href="/servizi/refitting-navi" className="block text-sm leading-relaxed text-slate-200 transition-colors hover:text-[#F8FAFC]">
                  Refitting Navi
                </Link>
              </div>
            </div>

            <div>
              <p className="font-technical text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Azienda
              </p>
              <div className="mt-5 space-y-3">
                <Link href="/chi-siamo" className="block text-sm leading-relaxed text-slate-200 transition-colors hover:text-[#F8FAFC]">
                  Chi Siamo
                </Link>
                <Link href="/progetti" className="block text-sm leading-relaxed text-slate-200 transition-colors hover:text-[#F8FAFC]">
                  Progetti
                </Link>
                <Link href="/certificazioni" className="block text-sm leading-relaxed text-slate-200 transition-colors hover:text-[#F8FAFC]">
                  Certificazioni
                </Link>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-2">
              <p className="font-technical text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Contatti
              </p>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-technical text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Sede Operativa — Palermo
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#F8FAFC]">{SITE_CONFIG.addressPalermo}</p>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="mt-2 inline-block text-sm text-slate-200 transition-colors hover:text-[#F8FAFC]">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div>
                  <p className="font-technical text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Sede Legale — Gela
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#F8FAFC]">{SITE_CONFIG.addressGela}</p>
                  <a href={`tel:${SITE_CONFIG.phoneGela}`} className="mt-2 inline-block text-sm text-slate-200 transition-colors hover:text-[#F8FAFC]">
                    {SITE_CONFIG.phoneGela}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-8 sm:py-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-technical text-[11px] tracking-[0.16em] text-slate-400">
                © {new Date().getFullYear()} CM Impianti S.r.l. · P.IVA {SITE_CONFIG.piva}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link href="/privacy" className="font-technical text-[11px] uppercase tracking-[0.16em] text-slate-300 transition-colors hover:text-[#F8FAFC]">
                  Privacy Policy
                </Link>
                <Link href="/cookie" className="font-technical text-[11px] uppercase tracking-[0.16em] text-slate-300 transition-colors hover:text-[#F8FAFC]">
                  Cookie Policy
                </Link>
                <Link href="/privacy" className="font-technical text-[11px] uppercase tracking-[0.16em] text-slate-300 transition-colors hover:text-[#F8FAFC]">
                  Note Legali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
