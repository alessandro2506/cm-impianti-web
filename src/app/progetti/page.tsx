import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { CASE_STUDIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Portfolio CM Impianti: 5 case study landmark — MSC Crociere, Silver Spirit, Queen Victoria, Noordam, Oleodotto Gela. Impiantistica navale e industriale Palermo.",
};

const CATEGORIES = [
  { id: "all", label: "Tutti" },
  { id: "refitting-navi", label: "Refitting Navi" },
  { id: "impiantistica-navale", label: "Impiantistica Navale" },
  { id: "impiantistica-industriale", label: "Impiantistica Industriale" },
];

export default function ProgettiPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-12 lg:pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Track record"
            title="PORTFOLIO PROGETTI"
            subtitle="5 interventi internazionali. Dalla crocieristica luxury all'impiantistica petrolchimica."
          />
        </div>
      </section>

      {/* GRID PROGETTI */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/progetti/${cs.slug}`}
                className="group relative overflow-hidden rounded-lg border border-[#1E2A42] hover:border-[#C9A84C] transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-medium rounded">
                      {cs.year}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase mb-1">
                      {cs.client}
                    </p>
                    <h3 className="font-heading text-xl text-[#E8EDF5] leading-tight mb-2">
                      {cs.title}
                    </h3>
                    <p className="text-[#9BA8C0] text-xs">{cs.subtitle}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {cs.stats.slice(0, 2).map((stat) => (
                      <span key={stat.label} className="text-xs text-[#9BA8C0]">
                        <span className="text-[#E8EDF5] font-medium">{stat.value}</span> {stat.label}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#C9A84C] text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Dettagli
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 border border-[#1E2A42] rounded-lg text-center">
            <h3 className="font-heading text-3xl text-[#E8EDF5] mb-3">
              HAI UN PROGETTO SIMILE?
            </h3>
            <p className="text-[#9BA8C0] mb-6">
              Contattaci per un preventivo gratuito. Esperienza diretta nei tuoi settori.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] hover:bg-[#D4B870] text-[#0A0F1E] rounded font-semibold text-sm tracking-wide transition-colors"
            >
              Contattaci per un progetto simile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
