import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impiantistica Navale",
  description:
    "CM Impianti: impiantistica e carpenteria navale a Palermo. Tubazioni acciaio inox, Cu.Ni., Helideck. Certificati Bureau Veritas. Partner Fincantieri e MSC Crociere.",
};

export default function ImpiantisticaNavalePage() {
  const service = SERVICES.find((s) => s.slug === "impiantistica-navale")!;
  return <ServicePageLayout service={service} />;
}
