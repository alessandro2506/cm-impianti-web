import Link from "next/link";
import LogoSVG from "./LogoSVG";
import { SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#060B16] border-t border-[#1E2A42] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <LogoSVG width={140} height={42} />
            <p className="mt-4 text-[#9BA8C0] text-sm leading-relaxed">
              30 anni di eccellenza nell'impiantistica navale e industriale. Partner Fincantieri, MSC Crociere, Silversea, Cunard.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9BA8C0] hover:text-[#C9A84C] transition-colors"
                aria-label="WhatsApp CM Impianti"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.519 5.837L.057 23.943a.5.5 0 00.6.6l6.105-1.462A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.493-5.244-1.358l-.376-.217-3.895.932.947-3.895-.217-.376A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li><Link href="/servizi/impiantistica-navale" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">Impiantistica Navale</Link></li>
              <li><Link href="/servizi/impiantistica-industriale" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">Impiantistica Industriale</Link></li>
              <li><Link href="/servizi/refitting-navi" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">Refitting Navi</Link></li>
              <li><Link href="/certificazioni" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">Certificazioni</Link></li>
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-4">Azienda</h3>
            <ul className="space-y-2">
              <li><Link href="/chi-siamo" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">Chi Siamo</Link></li>
              <li><Link href="/progetti" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">Progetti</Link></li>
              <li><Link href="/contatti" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-[#9BA8C0] text-xs uppercase tracking-wider mb-1">Palermo</p>
                <p className="text-[#E8EDF5] text-sm">{SITE_CONFIG.addressPalermo}</p>
              </li>
              <li>
                <p className="text-[#9BA8C0] text-xs uppercase tracking-wider mb-1">Gela</p>
                <p className="text-[#E8EDF5] text-sm">{SITE_CONFIG.addressGela}</p>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#C9A84C] hover:text-[#D4B870] text-sm font-medium transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#9BA8C0] hover:text-[#E8EDF5] text-sm transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1E2A42] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#9BA8C0] text-xs">
            © {new Date().getFullYear()} CM Impianti S.r.l. — P.IVA {SITE_CONFIG.piva}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-xs transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="text-[#9BA8C0] hover:text-[#E8EDF5] text-xs transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
