import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refitting Navi",
  description:
    "CM Impianti: refitting e trasformazione navi da crociera, offshore e piattaforme petrolifere. Allungamento scafi. Certificati Bureau Veritas. Palermo, Sicilia.",
};

export default function RefittingNaviPage() {
  const service = SERVICES.find((s) => s.slug === "refitting-navi")!;
  return <ServicePageLayout service={service} />;
}
