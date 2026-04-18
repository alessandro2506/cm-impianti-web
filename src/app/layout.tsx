import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cmimpianti.info"),
  title: {
    default: "CM Impianti | Impiantistica Navale e Industriale — Palermo, Sicilia",
    template: "%s | CM Impianti",
  },
  description:
    "CM Impianti: 30 anni di impiantistica navale, carpenteria industriale e refitting navi. Certificati Bureau Veritas e ISO. Partner Fincantieri, MSC Crociere, Silversea, Cunard.",
  keywords: [
    "impiantistica navale Palermo",
    "refitting navi Sicilia",
    "carpenteria industriale Palermo",
    "contractor Fincantieri subappalto",
    "allungamento navi crociera Palermo",
    "tubazioni acciaio inox navali",
    "impianti piping navale certificato Bureau Veritas",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.cmimpianti.info",
    siteName: "CM Impianti",
    title: "CM Impianti | Impiantistica Navale e Industriale",
    description:
      "30 anni di esperienza nell'impiantistica navale e industriale. Certificati Bureau Veritas. Partner Fincantieri e MSC Crociere.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable} ${bebas.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0A0F1E] text-[#E8EDF5]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
      </body>
    </html>
  );
}
