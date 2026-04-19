import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa cookie CM Impianti.",
};

export default function CookiePage() {
  return (
    <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
      <h1 className="font-heading text-5xl text-[#F0F4F8]">Cookie Policy</h1>
      <div className="mt-8 space-y-5 text-[#C9DAEC]">
        <p>Questo sito utilizza cookie tecnici necessari al corretto funzionamento delle pagine.</p>
        <p>Potrebbero essere usati cookie analitici aggregati per misurare traffico e performance del sito.</p>
        <p>Le preferenze possono essere gestite dal banner cookie e dalle impostazioni del browser.</p>
      </div>
    </section>
  );
}
