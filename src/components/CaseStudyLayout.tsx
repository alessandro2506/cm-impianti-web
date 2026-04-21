import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";

interface CaseStudyStat {
  label: string;
  value: string;
}

interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  location: string;
  coverImage: string;
  heroImage: string;
  gallery: string[];
  stats: CaseStudyStat[];
  description: string;
  challenge: string;
  solution: string;
  certifications: string[];
}

export default function CaseStudyLayout({ cs }: { cs: CaseStudyData }) {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-16 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={cs.heroImage}
            alt={cs.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/50 to-[#0A0F1E]/20" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-28 px-[5%] pt-16 md:pt-20">
          <nav className="flex items-center gap-2 text-xs text-[#9BA8C0] mb-8">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/progetti" className="hover:text-[#C9A84C] transition-colors">Progetti</Link>
            <span>/</span>
            <span className="text-[#C9A84C]">{cs.title}</span>
          </nav>
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            {cs.client} · {cs.year} · {cs.location}
          </p>
          <h1 className="font-heading text-5xl lg:text-7xl text-[#E8EDF5] leading-none mb-4 max-w-4xl">
            {cs.title.toUpperCase()}
          </h1>
          <p className="text-[#9BA8C0] text-lg">{cs.subtitle}</p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#060B16] border-y border-[#1E2A42]">
        <div className="mx-auto w-full max-w-7xl px-[5%]">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1E2A42]">
            {cs.stats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center">
                <div className="font-heading text-3xl lg:text-4xl text-[#C9A84C] mb-1">{stat.value}</div>
                <div className="text-[#9BA8C0] text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIZIONE */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading text-3xl text-[#C9A84C] mb-4">IL PROGETTO</h2>
                <p className="text-[#9BA8C0] leading-relaxed">{cs.description}</p>
              </div>
              <div>
                <h2 className="font-heading text-3xl text-[#E8EDF5] mb-4">LA SFIDA</h2>
                <p className="text-[#9BA8C0] leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <h2 className="font-heading text-3xl text-[#E8EDF5] mb-4">LA SOLUZIONE CM IMPIANTI</h2>
                <p className="text-[#9BA8C0] leading-relaxed">{cs.solution}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border border-[#1E2A42] rounded-lg p-6">
                <h3 className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">
                  Certificazioni applicate
                </h3>
                <div className="space-y-2">
                  {cs.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-[#E8EDF5]">
                      <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-[#1E2A42] rounded-lg p-6">
                <h3 className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">
                  Dettagli progetto
                </h3>
                <div className="space-y-3">
                  {cs.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between text-sm">
                      <span className="text-[#9BA8C0]">{stat.label}</span>
                      <span className="text-[#E8EDF5] font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <CtaButton href="/contatti" variant="primary" className="w-full justify-center">
                Progetto Simile?
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {cs.gallery.length > 1 && (
        <section className="pb-16 md:pb-24 lg:pb-28">
          <div className="mx-auto w-full max-w-7xl px-[5%]">
            <h2 className="font-heading text-3xl text-[#E8EDF5] mb-8">GALLERIA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cs.gallery.map((img, i) => (
                <div key={i} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${cs.title} — foto ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#060B16] py-16 border-t border-[#1E2A42]">
        <div className="mx-auto w-full max-w-3xl px-6 md:px-12 text-center">
          <h2 className="font-heading text-4xl text-[#E8EDF5] mb-4">
            HAI UN PROGETTO SIMILE?
          </h2>
          <p className="text-[#9BA8C0] mb-8">
            Contattaci per discutere le specifiche tecniche. Preventivo gratuito entro 24 ore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton href="/contatti" variant="primary">
              Richiedi Preventivo
            </CtaButton>
            <CtaButton href="/progetti" variant="outline">
              Altri Progetti
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
