import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa privacy CM Impianti.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="font-heading text-5xl text-[#F0F4F8]">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-[#C9DAEC]">
        <p>CM Impianti S.r.l. tratta i dati personali in conformita al Regolamento UE 2016/679 (GDPR).</p>
        <p>I dati inviati tramite form contatti vengono usati esclusivamente per rispondere alle richieste commerciali o tecniche.</p>
        <p>Per esercitare i diritti di accesso, rettifica o cancellazione, contattare: sede@cmimpianti.info.</p>
      </div>
      <Link href="/contatti" className="inline-flex mt-10 rounded-full px-6 py-3 bg-[#0E7FFF] text-white font-semibold">
        Contatta il titolare del trattamento
      </Link>
    </section>
  );
}
