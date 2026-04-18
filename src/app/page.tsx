import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KpiCounter from "@/components/KpiCounter";
import SectionTitle from "@/components/SectionTitle";
import CtaButton from "@/components/CtaButton";
import { SERVICES, CASE_STUDIES, PARTNERS, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "CM Impianti | Impiantistica Navale e Industriale — Palermo, Sicilia",
  description:
    "CM Impianti: 30 anni di impiantistica navale, carpenteria industriale e refitting navi a Palermo e Gela. Certificati Bureau Veritas. Partner Fincantieri, MSC Crociere, Silversea.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.cmimpianti.info/wp-content/uploads/2021/03/Senza-titolo-2-1.jpg"
            alt="CM Impianti — Cantiere navale Palermo"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/90 via-[#0A0F1E]/70 to-[#0A0F1E]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Palermo · Gela · Italia
            </p>
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none text-[#E8EDF5] mb-6">
              IMPIANTISTICA
              <br />
              <span className="text-[#C9A84C]">NAVALE</span>
              <br />
              <span className="text-[#E8EDF5]/80">{"& INDUSTRIALE"}</span>
            </h1>
            <p className="text-[#9BA8C0] text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              30 anni al fianco di Fincantieri, MSC Crociere, Silversea e Cunard. Certificati Bureau Veritas. Contractor navale di fiducia.
            </p>
            <div className="flex flex-wrap gap-4">
              <CtaButton href="/contatti" variant="primary">
                Richiedi Preventivo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </CtaButton>
              <CtaButton href="/progetti" variant="outline">
                Vedi i Progetti
              </CtaButton>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* KPI */}
      <section className="bg-[#060B16] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KpiCounter />
        </div>
      </section>

      {/* SERVIZI */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTitle
              label="Cosa facciamo"
              title="SERVIZI CORE"
              subtitle="Tre aree di specializzazione con oltre 30 anni di expertise tecnica certificata."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}`}
                className="group relative overflow-hidden rounded-lg border border-[#1E2A42] hover:border-[#C9A84C] transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-[#E8EDF5] group-hover:text-[#C9A84C] transition-colors leading-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#9BA8C0] text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <span className="text-[#C9A84C] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Scopri il servizio
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#060B16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <SectionTitle
              label="Track record"
              title="PROGETTI LANDMARK"
              subtitle="5 interventi internazionali che hanno definito la nostra reputazione."
            />
            <CtaButton href="/progetti" variant="outline">
              Tutti i progetti
            </CtaButton>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((cs) => (
              <Link
                key={cs.slug}
                href={`/progetti/${cs.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-1">
                      {cs.client} · {cs.year}
                    </p>
                    <h3 className="font-heading text-xl text-[#E8EDF5] leading-tight">
                      {cs.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {CASE_STUDIES.slice(3).map((cs) => (
              <Link
                key={cs.slug}
                href={`/progetti/${cs.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-1">
                      {cs.client} · {cs.year}
                    </p>
                    <h3 className="font-heading text-xl text-[#E8EDF5] leading-tight">
                      {cs.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER STRIP */}
      <section className="py-12 border-y border-[#1E2A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#9BA8C0] text-xs tracking-[0.2em] uppercase mb-8">
            Hanno scelto CM Impianti
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="text-[#9BA8C0] hover:text-[#C9A84C] transition-colors text-sm font-semibold tracking-wide"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-refitting-cm-impianti.jpg"
            alt="CM Impianti refitting cantiere"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0A0F1E]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            label="Parliamo del tuo progetto"
            title="HAI UN PROGETTO NAVALE O INDUSTRIALE?"
            subtitle="Contattaci per un preventivo gratuito. Rispondiamo entro 24 ore."
            center
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton href="/contatti" variant="primary">
              Richiedi Preventivo
            </CtaButton>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Buongiorno, vorrei informazioni sui vostri servizi`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded font-semibold text-sm tracking-wide transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.519 5.837L.057 23.943a.5.5 0 00.6.6l6.105-1.462A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.493-5.244-1.358l-.376-.217-3.895.932.947-3.895-.217-.376A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
