import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servizi",
  description: "Impiantistica navale, industriale e refitting navi: i servizi core CM Impianti.",
};

export default function ServiziPage() {
  return (
    <section className="relative section-bg scroll-mt-28 pt-16 pb-20 lg:pt-20 lg:pb-28 bg-[radial-gradient(circle_at_top_right,_rgba(63,175,255,0.16),_transparent_45%),#07162D]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <SectionTitle
          label="Specializzazioni"
          title="SERVIZI CM IMPIANTI"
          subtitle="Tre aree operative con team certificati e know-how su impianti complessi in ambiente navale e industriale."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/servizi/${service.slug}`}
              className="group rounded-3xl overflow-hidden border border-[#A4D5FF]/20 bg-[#0A1E38]/75 hover:border-[#66C1FF]/40 transition-all"
            >
              <div className="relative h-52">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07162D] via-[#07162D]/45 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-3xl text-[#F0F7FF]">{service.shortTitle}</h3>
                <p className="mt-2 text-[#C7DBF0] text-sm leading-relaxed line-clamp-3">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
