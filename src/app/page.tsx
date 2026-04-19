// Design System v2 — CM Impianti
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KpiCounter from "@/components/KpiCounter";
import SectionTitle from "@/components/SectionTitle";
import CtaButton from "@/components/CtaButton";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import { SERVICES, CASE_STUDIES, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "CM Impianti | Impiantistica Navale e Industriale — Palermo, Sicilia",
  description:
    "CM Impianti: 30 anni di impiantistica navale, carpenteria industriale e refitting navi a Palermo e Gela. Certificati Bureau Veritas. Partner Fincantieri, MSC Crociere, Silversea.",
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO — 2-col asymmetric ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Full-bleed image on right half */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%]">
            <Image
              src="https://www.cmimpianti.info/wp-content/uploads/2021/03/Senza-titolo-2-1.jpg"
              alt="CM Impianti — Cantiere navale Palermo"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          {/* Left navy overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/90 lg:via-[#0A0F1E]/85 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-28 pb-0">
          {/* Text column — 55% */}
          <div className="lg:w-[55%] xl:w-[50%]">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Palermo · Gela · Italia
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] leading-none text-[#F0F4F8] mb-6">
              IMPIANTISTICA
              <br />
              <span className="text-[#C9A84C]">NAVALE</span>
              <br />
              <span className="text-[#F0F4F8]/60">{"& INDUSTRIALE"}</span>
            </h1>

            <p className="text-[#8A9BAD] text-lg lg:text-xl leading-[1.9] mb-10 max-w-lg">
              30 anni al fianco di Fincantieri, MSC Crociere, Silversea e Cunard.
              Certificati Bureau Veritas. Contractor navale di fiducia.
            </p>

            <div className="flex flex-wrap gap-4 mb-16 lg:mb-20">
              <CtaButton href="/contatti" variant="primary">
                Richiedi Preventivo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </CtaButton>
              <CtaButton href="/progetti" variant="secondary">
                Vedi i Progetti
              </CtaButton>
            </div>

            {/* KPI — integrated into hero bottom */}
            <div className="reveal">
              <KpiCounter />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex flex-col items-center gap-2 opacity-40 mt-10 mb-8">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#C9A84C]/40" />
          <svg className="w-4 h-4 text-[#C9A84C]/60 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── SERVIZI — magazine grid ─── */}
      <section className="relative section-bg py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="mb-16 reveal">
            <SectionTitle
              label="Cosa facciamo"
              title="SERVIZI CORE"
              subtitle="Tre aree di specializzazione con oltre 30 anni di expertise tecnica certificata."
            />
          </div>

          {/* Magazine grid: first card col-span-2, two medium alongside */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal-group">
            {/* Large card */}
            <Link
              href={`/servizi/${SERVICES[0].slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,168,76,0.08)] md:col-span-2 lg:col-span-2"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="relative h-72 md:h-80">
                <Image
                  src={SERVICES[0].image}
                  alt={SERVICES[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/40 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-3xl text-[#F0F4F8] group-hover:text-[#C9A84C] transition-colors leading-tight mb-3">
                  {SERVICES[0].title}
                </h3>
                <p className="text-[#8A9BAD] text-sm leading-[1.85] mb-5 line-clamp-2 max-w-lg">
                  {SERVICES[0].description}
                </p>
                <span className="text-[#C9A84C] text-sm font-medium flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Scopri il servizio
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Two medium cards stacked */}
            <div className="flex flex-col gap-5">
              {SERVICES.slice(1).map((service) => (
                <Link
                  key={service.slug}
                  href={`/servizi/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,168,76,0.08)] flex-1"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="relative h-44">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-[#F0F4F8] group-hover:text-[#C9A84C] transition-colors leading-tight mb-2">
                      {service.title}
                    </h3>
                    <span className="text-[#C9A84C] text-xs font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Scopri
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY — masonry 2+3 ─── */}
      <section className="relative section-bg py-28 lg:py-40 bg-[#060C1A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6 reveal">
            <SectionTitle
              label="Track record"
              title="PROGETTI LANDMARK"
              subtitle="5 interventi internazionali che hanno definito la nostra reputazione."
            />
            <CtaButton href="/progetti" variant="secondary">
              Tutti i progetti
            </CtaButton>
          </div>

          {/* Top row: 2 large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal-group">
            {CASE_STUDIES.slice(0, 2).map((cs) => (
              <Link
                key={cs.slug}
                href={`/progetti/${cs.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] hover:border-[#C9A84C]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(201,168,76,0.06)]"
              >
                <div className="relative h-72">
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/95 via-[#0A0F1E]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-2">
                      {cs.client} · {cs.year}
                    </p>
                    <h3 className="font-heading text-2xl text-[#F0F4F8] leading-tight">
                      {cs.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row: 3 medium */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 reveal-group">
            {CASE_STUDIES.slice(2).map((cs) => (
              <Link
                key={cs.slug}
                href={`/progetti/${cs.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] hover:border-[#C9A84C]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,168,76,0.06)]"
              >
                <div className="relative h-52">
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/95 via-[#0A0F1E]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-1.5">
                      {cs.client} · {cs.year}
                    </p>
                    <h3 className="font-heading text-xl text-[#F0F4F8] leading-tight">
                      {cs.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNER MARQUEE ─── */}
      <InfiniteMarquee />

      {/* ─── CTA — 2-col with image right + noise texture ─── */}
      <section className="relative section-bg noise py-28 lg:py-40 overflow-hidden">
        {/* Navy background */}
        <div className="absolute inset-0 bg-[#0A0F1E]" />
        {/* Gold radial glow left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div className="reveal">
              <SectionTitle
                label="Parliamo del tuo progetto"
                title="HAI UN PROGETTO NAVALE O INDUSTRIALE?"
                subtitle="Contattaci per un preventivo gratuito. Rispondiamo entro 24 ore lavorative."
              />
              <div className="mt-10 flex flex-wrap gap-4">
                <CtaButton href="/contatti" variant="primary">
                  Richiedi Preventivo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </CtaButton>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Buongiorno, vorrei informazioni sui vostri servizi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 rounded-full font-semibold text-sm tracking-wide transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.519 5.837L.057 23.943a.5.5 0 00.6.6l6.105-1.462A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.493-5.244-1.358l-.376-.217-3.895.932.947-3.895-.217-.376A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: real image */}
            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-[#C9A84C]/10 reveal">
              <Image
                src="https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-refitting-cm-impianti.jpg"
                alt="CM Impianti refitting cantiere navale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#0A0F1E]/60 via-transparent to-transparent" />
              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 w-12 h-1 bg-[#C9A84C] rounded-full" />
              <div className="absolute top-4 left-4 w-1 h-12 bg-[#C9A84C] rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
