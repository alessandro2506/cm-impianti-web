import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impiantistica Industriale",
  description:
    "CM Impianti: impiantistica e carpenteria industriale a Palermo e Gela. Tubazioni acciaio e leghe speciali, oleodotti, impianti petrolchimici. ISO 9001.",
};

export default function ImpiantisticaIndustrialePage() {
  const service = SERVICES.find((s) => s.slug === "impiantistica-industriale")!;
  return <ServicePageLayout service={service} />;
}
