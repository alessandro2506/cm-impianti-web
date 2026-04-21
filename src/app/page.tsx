// Design System v2 — CM Impianti
import type { Metadata } from "next";
import Image from "next/image";
import KpiCounter from "@/components/KpiCounter";
import SectionTitle from "@/components/SectionTitle";
import CtaButton from "@/components/CtaButton";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import MediaCarousel from "@/components/MediaCarousel";
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
      <section className="relative flex min-h-[calc(100vh-5rem)] w-full min-w-0 flex-col justify-center overflow-hidden py-6 lg:min-h-[calc(100vh-6rem)]">
        {/* Full-bleed image */}
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
          {/* Left overlay — stronger for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#041328] from-[34%] via-[#052043]/80 to-[#042342]/45" />
          {/* Mobile full overlay */}
          <div className="absolute inset-0 bg-[#0A0F1E]/60 lg:hidden" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          {/* Text column — 55% */}
          <div className="lg:w-[55%] xl:w-[50%]">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Palermo · Gela · Italia
            </div>

            <h1 className="mb-5 font-heading text-4xl leading-[1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              IMPIANTISTICA
              <br />
              <span className="text-[#4DB8FF]">NAVALE</span>
              <br />
              <span className="text-slate-200">{"& INDUSTRIALE"}</span>
            </h1>

            {/* Text with mobile readability protection */}
            <div className="relative mb-16 sm:mb-14">
              <div className="absolute -inset-x-4 -inset-y-3 rounded-xl bg-[#0A0F1E]/40 backdrop-blur-[2px] lg:hidden" />
              <p className="relative max-w-xl text-sm leading-[1.75] text-slate-100 sm:text-base lg:text-[1.05rem]">
                30 anni al fianco di Fincantieri, MSC Crociere, Silversea e Cunard.
                Certificati Bureau Veritas. Contractor navale di fiducia.
              </p>
            </div>

            <div className="mb-20 mt-0 flex flex-wrap gap-4 sm:mb-24 lg:mb-28">
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
            <div>
              <KpiCounter />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex flex-col items-center gap-2 opacity-40 mt-6 mb-8">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#C9A84C]/40" />
          <svg className="w-4 h-4 text-[#C9A84C]/60 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── SERVIZI — horizontal media carousel ─── */}
      <section className="section-bg relative w-full min-w-0 bg-[radial-gradient(circle_at_top_right,_rgba(63,175,255,0.22),_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(0,124,255,0.18),_transparent_46%),radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.08),transparent_55%),#001a33] py-16 md:py-24 lg:py-28">
        <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-6 md:px-12">
          <div className="mb-12 lg:mb-14">
            <SectionTitle
              label="Cosa facciamo"
              title="SERVIZI CORE"
              subtitle="Sfoglia i servizi principali con vista immersiva e focus tecnico."
            />
          </div>
          <MediaCarousel
            ariaLabel="Slider servizi CM Impianti"
            showIndicator={false}
            items={SERVICES.map((service) => ({
              href: `/servizi/${service.slug}`,
              image: service.image,
              title: service.shortTitle,
              meta: `Servizi · CM Impianti`,
              description: service.description,
            }))}
          />
        </div>
      </section>

      {/* ─── CASE STUDY — horizontal media carousel ─── */}
      <section className="section-bg relative w-full min-w-0 bg-[radial-gradient(circle_at_top_left,_rgba(63,175,255,0.22),_transparent_48%),radial-gradient(ellipse_at_80%_50%,rgba(14,165,233,0.09),transparent_50%),#00172d] py-16 md:py-24 lg:py-28">
        <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-6 md:px-12">
          <div className="mb-10">
            <SectionTitle
              label="Track record"
              title="PROGETTI LANDMARK"
              subtitle="Case study sfogliabili in stile editoriale per vedere interventi e milestone."
            />
          </div>

          <div className="mb-10 lg:mb-12">
            <CtaButton href="/progetti" variant="secondary" className="w-full justify-center sm:w-auto">
              Visione dei progetti
            </CtaButton>
          </div>
          <MediaCarousel
            ariaLabel="Slider progetti CM Impianti"
            items={CASE_STUDIES.map((cs) => ({
              href: `/progetti/${cs.slug}`,
              image: cs.coverImage,
              title: cs.title,
              meta: `${cs.year} · ${cs.client}`,
              description: cs.subtitle,
            }))}
          />
        </div>
      </section>

      {/* ─── PARTNER MARQUEE ─── */}
      <InfiniteMarquee />

      {/* ─── CTA — 2-col with image right + noise texture ─── */}
      <section className="section-bg noise relative w-full min-w-0 overflow-hidden py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(77,184,255,0.2),_transparent_42%),radial-gradient(ellipse_at_0%_100%,rgba(56,189,248,0.07),transparent_50%),#081327]" />
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-[min(500px,90vw)] w-[min(500px,90vw)] max-w-full -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
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
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-[#77DCA1] bg-[#E8F9EE] px-10 py-4 text-sm font-semibold leading-tight tracking-[-0.01em] text-[#14984A] transition-all duration-200 hover:bg-[#DDF6E7] md:min-h-[3.75rem] md:text-base"
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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#C9A84C]/10 lg:aspect-[5/3]">
              <Image
                src="https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-refitting-cm-impianti.jpg"
                alt="CM Impianti refitting cantiere navale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#0A0F1E]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-12 h-1 bg-[#C9A84C] rounded-full" />
              <div className="absolute top-4 left-4 w-1 h-12 bg-[#C9A84C] rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
