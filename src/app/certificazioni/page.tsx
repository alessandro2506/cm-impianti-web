import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CtaButton from "@/components/CtaButton";
import { CERTIFICATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certificazioni",
  description:
    "14+ certificazioni CM Impianti: Bureau Veritas, ISO 9001, Welding Engineer IWE, Controllo Non Distruttivo. Qualifiche Fincantieri e RINA.",
};

const CERT_AREAS = [
  { id: "navale", label: "Navale & Marittimo" },
  { id: "saldatura", label: "Saldatura" },
  { id: "END", label: "Controllo Non Distruttivo" },
  { id: "generale", label: "Qualità Generale" },
  { id: "sicurezza", label: "Sicurezza" },
];

export default function CertificazioniPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-12 lg:pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Fiducia documentata"
            title="CERTIFICAZIONI"
            subtitle="14+ certificazioni internazionali. Ogni intervento CM Impianti è coperto dalle qualifiche tecniche necessarie."
          />
        </div>
      </section>

      {/* INTRO CARD */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🏆", label: "Bureau Veritas", desc: "Il marchio di qualità navale più riconosciuto internazionalmente." },
              { icon: "📋", label: "ISO 9001", desc: "Sistema di gestione qualità certificato per tutti i processi." },
              { icon: "🔬", label: "END Certificati", desc: "Controlli non distruttivi: radiografico, magnetoscopico, visivo." },
            ].map((item) => (
              <div key={item.label} className="border border-[#1E2A42] rounded-lg p-6 bg-[#060B16]">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#E8EDF5] mb-2">{item.label}</h3>
                <p className="text-[#9BA8C0] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTA CERTIFICAZIONI PER AREA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {CERT_AREAS.map((area) => {
            const certs = CERTIFICATIONS.filter((c) => c.area === area.id);
            if (certs.length === 0) return null;
            return (
              <div key={area.id} className="mb-12 last:mb-0">
                <h2 className="font-heading text-2xl text-[#C9A84C] mb-6 pb-3 border-b border-[#1E2A42]">
                  {area.label}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certs.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-start gap-4 p-5 border border-[#1E2A42] rounded-lg hover:border-[#C9A84C]/30 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[#E8EDF5] font-medium text-sm mb-1">{cert.name}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-[#C9A84C] text-xs font-medium">{cert.ente}</span>
                          <span className="text-[#9BA8C0] text-xs">· {cert.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#060B16] border-t border-[#1E2A42]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl text-[#E8EDF5] mb-4">
            CERTIFICAZIONI DISPONIBILI SU RICHIESTA
          </h2>
          <p className="text-[#9BA8C0] mb-8">
            Documentazione completa disponibile per ogni progetto. Richiedi il dossier tecnico.
          </p>
          <CtaButton href="/contatti" variant="primary">
            Richiedi Documentazione
          </CtaButton>
        </div>
      </section>
    </>
  );
}
