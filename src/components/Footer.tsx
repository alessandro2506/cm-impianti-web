// Design System v2 — CM Impianti
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";

const CERT_BADGES = [
  { label: "Bureau Veritas", abbr: "BV" },
  { label: "ISO 9001", abbr: "ISO" },
  { label: "IWE Welding", abbr: "IWE" },
  { label: "RINA", abbr: "RINA" },
  { label: "Fincantieri Qualified", abbr: "FNC" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060C1A] border-t border-[#C9A84C]/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-16 pb-10">

          {/* Brand col — spans 4 */}
          <div className="lg:col-span-4">
            {/* Wordmark */}
            <div className="flex flex-col leading-none mb-5">
              <span className="font-heading text-[20px] text-[#F0F4F8] tracking-[0.06em]">CM IMPIANTI</span>
              <span className="font-body text-[9px] text-[#8A9BAD] tracking-[0.28em] uppercase mt-0.5">Performance Technology</span>
            </div>
            <p className="text-[#8A9BAD] text-sm leading-relaxed max-w-xs">
              30 anni di eccellenza nell'impiantistica navale e industriale. Certificati Bureau Veritas. Partner Fincantieri, MSC Crociere, Silversea, Cunard.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Buongiorno, vorrei informazioni sui vostri servizi`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contatta CM Impianti su WhatsApp"
                className="w-9 h-9 rounded-full bg-[#0A0F1E] hover:bg-[#25D366]/10 border border-[#C9A84C]/15 hover:border-[#25D366]/50 flex items-center justify-center text-[#8A9BAD] hover:text-[#25D366] transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.519 5.837L.057 23.943a.5.5 0 00.6.6l6.105-1.462A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.493-5.244-1.358l-.376-.217-3.895.932.947-3.895-.217-.376A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email CM Impianti"
                className="w-9 h-9 rounded-full bg-[#0A0F1E] hover:bg-[#C9A84C]/10 border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 flex items-center justify-center text-[#8A9BAD] hover:text-[#C9A84C] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Servizi — spans 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-[#C9A84C] font-semibold text-xs tracking-[0.18em] uppercase mb-5">Servizi</h3>
            <ul className="space-y-3">
              <li><Link href="/servizi/impiantistica-navale" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors leading-snug block">Impiantistica Navale</Link></li>
              <li><Link href="/servizi/impiantistica-industriale" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors leading-snug block">Impiantistica Industriale</Link></li>
              <li><Link href="/servizi/refitting-navi" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors leading-snug block">Refitting Navi</Link></li>
              <li><Link href="/certificazioni" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors leading-snug block">Certificazioni</Link></li>
            </ul>
          </div>

          {/* Azienda — spans 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-[#C9A84C] font-semibold text-xs tracking-[0.18em] uppercase mb-5">Azienda</h3>
            <ul className="space-y-3">
              <li><Link href="/chi-siamo" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors block">Chi Siamo</Link></li>
              <li><Link href="/progetti" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors block">Progetti</Link></li>
              <li><Link href="/contatti" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors block">Contatti</Link></li>
            </ul>
          </div>

          {/* Contatti — spans 4 */}
          <div className="lg:col-span-4">
            <h3 className="text-[#C9A84C] font-semibold text-xs tracking-[0.18em] uppercase mb-5">Contatti</h3>
            <div className="space-y-5">
              <div>
                <p className="text-[#8A9BAD] text-xs uppercase tracking-wider mb-1.5 font-medium">Sede Operativa — Palermo</p>
                <p className="text-[#F0F4F8] text-sm">{SITE_CONFIG.addressPalermo}</p>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#C9A84C] hover:text-[#E2B96A] text-sm font-medium transition-colors mt-1 block">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div>
                <p className="text-[#8A9BAD] text-xs uppercase tracking-wider mb-1.5 font-medium">Sede Legale — Gela</p>
                <p className="text-[#F0F4F8] text-sm">{SITE_CONFIG.addressGela}</p>
                <a href={`tel:${SITE_CONFIG.phoneGela}`} className="text-[#C9A84C] hover:text-[#E2B96A] text-sm font-medium transition-colors mt-1 block">
                  {SITE_CONFIG.phoneGela}
                </a>
              </div>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#8A9BAD] hover:text-[#F0F4F8] text-sm transition-colors block">
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Cert badges row */}
        <div className="py-6 border-t border-[#C9A84C]/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#8A9BAD] text-xs mr-2">Certificazioni:</span>
            {CERT_BADGES.map((badge) => (
              <span
                key={badge.abbr}
                title={badge.label}
                aria-label={`CM Impianti certificazione ${badge.label}`}
                className="px-3 py-1 bg-[#0A0F1E] border border-[#C9A84C]/15 rounded-full text-[#8A9BAD] text-xs font-medium tracking-wider hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors cursor-default"
              >
                {badge.abbr}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#8A9BAD] text-xs">
            © {new Date().getFullYear()} CM Impianti S.r.l. — P.IVA {SITE_CONFIG.piva}
          </p>
          <div className="flex items-center gap-1">
            <Link href="/privacy" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-xs px-3 py-1 rounded-full hover:bg-white/[0.04] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#C9A84C]/20">·</span>
            <Link href="/cookie" className="text-[#8A9BAD] hover:text-[#F0F4F8] text-xs px-3 py-1 rounded-full hover:bg-white/[0.04] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
