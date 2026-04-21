import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import CtaButton from "@/components/CtaButton";
import CompanyTimeline from "@/components/CompanyTimeline";
import { SITE_CONFIG, PARTNERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "CM Impianti: 30 anni di storia nell'impiantistica navale e industriale a Palermo e Gela. La filosofia del cantiere flessibile certificato Bureau Veritas.",
};

const TIMELINE = [
  {
    year: "1993",
    title: "Fondazione a Palermo",
    description:
      "Nasce CM Impianti. Primi interventi di carpenteria e impiantistica navale.",
  },
  {
    year: "2005",
    title: "Qualifica Fincantieri",
    description:
      "Ingresso ufficiale nella filiera cantieristica con commesse a respiro internazionale.",
  },
  {
    year: "2006",
    title: "Allungamento MSC",
    description:
      "Intervento landmark a Palermo: nave estesa da 251m a 275m con lavorazioni integrate.",
  },
  {
    year: "2008",
    title: "Oleodotto Gela",
    description:
      "Primo progetto industriale petrolchimico di grande scala, con piping e coordinamento multi-team.",
  },
  {
    year: "2010",
    title: "Certificazioni complete",
    description:
      "Consolidamento Bureau Veritas e refitting Noordam per Holland America.",
  },
  {
    year: "2017",
    title: "Queen Victoria Restyling",
    description:
      "Nuovo step nel rapporto con Cunard Line su commesse ad alto standard tecnico.",
  },
  {
    year: "2018",
    title: "Silver Spirit",
    description:
      "Allungamento nave e piping completo per Silversea Cruises in finestra dry dock.",
  },
  {
    year: "2023+",
    title: "Contractor di riferimento",
    description:
      "CM Impianti consolida il ruolo strategico per navale e industriale in Sicilia.",
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative scroll-mt-28 overflow-hidden pb-16 pt-12 md:pb-24 md:pt-14">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.cmimpianti.info/wp-content/uploads/2021/03/Senza-titolo-3.jpg"
            alt="CM Impianti cantiere"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/80 via-[#0A0F1E]/60 to-[#0A0F1E]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Palermo · Gela · Dal 1993
          </p>
          <h1 className="mb-5 font-heading text-4xl leading-none text-[#E8EDF5] sm:text-5xl lg:text-6xl">
            CHI SIAMO
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#9BA8C0] sm:text-base">
            Tre decenni di eccellenza nell&apos;impiantistica navale e industriale. Una storia costruita progetto dopo progetto, cantiere dopo cantiere.
          </p>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="La nostra filosofia"
                title="IL CANTIERE FLESSIBILE"
                subtitle="CM Impianti non è un subappaltatore generico. È un contractor navale con competenze specifiche, certificazioni internazionali e un track record che parla da solo."
              />
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#E8EDF5] font-semibold mb-1">Flessibilità operativa</h3>
                    <p className="text-[#9BA8C0] text-sm leading-relaxed">
                      Adattiamo team e risorse alle esigenze del progetto. Dry dock con finestre temporali rigide, cantieri complessi, coordinamento multi-contractor.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#E8EDF5] font-semibold mb-1">Qualità certificata</h3>
                    <p className="text-[#9BA8C0] text-sm leading-relaxed">
                      Bureau Veritas, ISO 9001, qualifiche saldatura IWE/IWI. Ogni giunzione, ogni saldatura documentata e certificata secondo protocolli internazionali.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#E8EDF5] font-semibold mb-1">Radicamento siciliano</h3>
                    <p className="text-[#9BA8C0] text-sm leading-relaxed">
                      Due sedi operative — Palermo e Gela — per coprire le esigenze di navale e industriale in Sicilia con prontezza di intervento.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <CtaButton href="/servizi/impiantistica-navale" variant="primary">
                  Scopri i nostri Servizi
                </CtaButton>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg lg:aspect-[5/6]">
                <Image
                  src="https://www.cmimpianti.info/wp-content/uploads/2021/03/gru1.jpg"
                  alt="CM Impianti — operatività cantiere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] text-[#0A0F1E] p-6 rounded-lg">
                <div className="font-heading text-5xl">30+</div>
                <div className="text-sm font-semibold">Anni di esperienza</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[linear-gradient(180deg,#001a33_0%,#001a33_55%,#00172d_100%)] py-16 md:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-10 text-center sm:mb-14">
            <SectionTitle
              label="La nostra storia"
              title="TRENT'ANNI DI CANTIERE"
              subtitle="Scorri la timeline per seguire l'evoluzione di CM Impianti."
              center
            />
          </div>
          <CompanyTimeline items={TIMELINE} />
        </div>
      </section>

      {/* SEDI */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-12">
            <SectionTitle label="Dove operiamo" title="DUE SEDI OPERATIVE" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                city: "Palermo",
                address: SITE_CONFIG.addressPalermo,
                phone: SITE_CONFIG.phone,
                type: "Sede Operativa — Navale",
                mapSrc: "https://maps.google.com/maps?q=Via+dei+Cantieri+75,+90142+Palermo&output=embed",
              },
              {
                city: "Gela",
                address: SITE_CONFIG.addressGela,
                phone: SITE_CONFIG.phoneGela,
                type: "Sede Legale — Industriale",
                mapSrc: "https://maps.google.com/maps?q=Via+G.C.+Siragusa+106,+93012+Gela+CL&output=embed",
              },
            ].map((sede) => (
              <div key={sede.city} className="border border-[#1E2A42] rounded-lg overflow-hidden">
                <iframe
                  src={sede.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mappa sede ${sede.city}`}
                  className="grayscale"
                />
                <div className="p-6">
                  <p className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-1">
                    {sede.type}
                  </p>
                  <h3 className="font-heading text-3xl text-[#E8EDF5] mb-2">{sede.city}</h3>
                  <p className="text-[#9BA8C0] text-sm mb-3">{sede.address}</p>
                  <a
                    href={`tel:${sede.phone}`}
                    className="text-[#C9A84C] hover:text-[#D4B870] font-medium text-sm transition-colors"
                  >
                    {sede.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="py-12 border-t border-[#1E2A42]">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <p className="text-center text-[#9BA8C0] text-xs tracking-[0.2em] uppercase mb-8">
            Partner e clienti di riferimento
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {PARTNERS.map((partner) => (
              <span key={partner.name} className="text-[#9BA8C0] text-sm font-semibold tracking-wide">
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
