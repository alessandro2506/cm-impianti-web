import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import CtaButton from "./CtaButton";
import { CASE_STUDIES } from "@/lib/data";

interface ServicePageLayoutProps {
  service: {
    slug: string;
    title: string;
    description: string;
    image: string;
    serviceImage: string;
    features: string[];
    certifications: string[];
    caseStudies: string[];
  };
}

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const relatedProjects = CASE_STUDIES.filter((cs) =>
    service.caseStudies.includes(cs.slug)
  );

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/85 via-[#0A0F1E]/60 to-[#0A0F1E]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#9BA8C0] mb-6">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/servizi" className="hover:text-[#C9A84C] transition-colors">Servizi</Link>
            <span>/</span>
            <span className="text-[#C9A84C]">{service.title}</span>
          </nav>
          <h1 className="font-heading text-5xl lg:text-8xl text-[#E8EDF5] leading-none mb-6 max-w-3xl">
            {service.title.toUpperCase()}
          </h1>
          <p className="text-[#9BA8C0] text-xl max-w-2xl leading-relaxed mb-8">
            {service.description}
          </p>
          <CtaButton href="/contatti" variant="primary">
            Parlaci del tuo Progetto
          </CtaButton>
        </div>
      </section>

      {/* FEATURES + IMAGE */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Cosa offriamo"
                title="COMPETENZE SPECIFICHE"
              />
              <ul className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#E8EDF5] text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[480px] rounded-lg overflow-hidden">
              <Image
                src={service.serviceImage}
                alt={`${service.title} — CM Impianti`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICAZIONI */}
      <section className="py-12 bg-[#060B16] border-y border-[#1E2A42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9BA8C0] text-xs tracking-[0.2em] uppercase mb-6">
            Certificazioni pertinenti
          </p>
          <div className="flex flex-wrap gap-3">
            {service.certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm rounded font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY CORRELATI */}
      {relatedProjects.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <SectionTitle
                label="Casi reali"
                title="PROGETTI CORRELATI"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/progetti/${cs.slug}`}
                  className="group relative overflow-hidden rounded-lg border border-[#1E2A42] hover:border-[#C9A84C] transition-colors"
                >
                  <div className="relative h-48">
                    <Image
                      src={cs.coverImage}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <p className="text-[#C9A84C] text-xs mb-1">{cs.client} · {cs.year}</p>
                      <h3 className="font-heading text-xl text-[#E8EDF5]">{cs.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#060B16] border-t border-[#1E2A42]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl text-[#E8EDF5] mb-4">
            PARLIACI DEL TUO PROGETTO
          </h2>
          <p className="text-[#9BA8C0] mb-8">
            Preventivo gratuito. Risposta entro 24 ore. Certificazioni disponibili su richiesta.
          </p>
          <CtaButton href="/contatti" variant="primary">
            Richiedi Preventivo
          </CtaButton>
        </div>
      </section>
    </>
  );
}
