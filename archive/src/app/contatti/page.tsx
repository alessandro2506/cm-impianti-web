import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta CM Impianti per un preventivo gratuito. Impiantistica navale e industriale a Palermo e Gela. Risposta entro 24 ore.",
};

export default function ContattiPage() {
  return (
    <>
      {/* HERO */}
      <section className="scroll-mt-28 pb-16 pt-12 md:pt-16">
        <div className="mx-auto w-full max-w-[80rem] px-6 md:px-12">
          <SectionTitle
            label="Parliamo del tuo progetto"
            title="CONTATTI"
            subtitle="Preventivo gratuito e senza impegno. Risposta entro 24 ore lavorative."
          />
        </div>
      </section>

      <section className="pb-16 md:pb-24 lg:pb-28">
        <div className="mx-auto w-full max-w-[80rem] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* FORM */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* INFO */}
            <div className="lg:col-span-2 space-y-8">
              {/* CONTATTI */}
              <div>
                <h3 className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">
                  Recapiti
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#9BA8C0] text-xs uppercase tracking-wider mb-1">Telefono</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#E8EDF5] hover:text-[#C9A84C] transition-colors font-medium">
                      {SITE_CONFIG.phone}
                    </a>
                    <span className="text-[#9BA8C0] text-sm ml-2">(Palermo)</span>
                  </div>
                  <div>
                    <a href={`tel:${SITE_CONFIG.phoneGela}`} className="text-[#E8EDF5] hover:text-[#C9A84C] transition-colors font-medium">
                      {SITE_CONFIG.phoneGela}
                    </a>
                    <span className="text-[#9BA8C0] text-sm ml-2">(Gela)</span>
                  </div>
                  <div>
                    <p className="text-[#9BA8C0] text-xs uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#E8EDF5] hover:text-[#C9A84C] transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Buongiorno, vorrei richiedere un preventivo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded text-sm font-medium transition-all"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.519 5.837L.057 23.943a.5.5 0 00.6.6l6.105-1.462A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.493-5.244-1.358l-.376-.217-3.895.932.947-3.895-.217-.376A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      Scrivi su WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* SEDI */}
              <div>
                <h3 className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">
                  Sedi operative
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[#E8EDF5] font-semibold mb-1">Palermo</p>
                    <p className="text-[#9BA8C0] text-sm">{SITE_CONFIG.addressPalermo}</p>
                    <p className="text-[#9BA8C0] text-xs mt-1">Sede operativa — Navale</p>
                    <div className="mt-3 h-32 rounded-lg overflow-hidden">
                      <iframe
                        src="https://maps.google.com/maps?q=Via+dei+Cantieri+75,+90142+Palermo&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sede Palermo"
                        className="grayscale"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#E8EDF5] font-semibold mb-1">Gela</p>
                    <p className="text-[#9BA8C0] text-sm">{SITE_CONFIG.addressGela}</p>
                    <p className="text-[#9BA8C0] text-xs mt-1">Sede legale — Industriale</p>
                    <div className="mt-3 h-32 rounded-lg overflow-hidden">
                      <iframe
                        src="https://maps.google.com/maps?q=Via+G.C.+Siragusa+106,+93012+Gela+CL&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sede Gela"
                        className="grayscale"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
