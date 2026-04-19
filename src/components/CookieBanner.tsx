"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("cm-cookie-consent");
  });

  const accept = () => {
    localStorage.setItem("cm-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cm-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#111827] border-t border-[#1E2A42] shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[#9BA8C0] text-sm flex-1">
          Utilizziamo cookie tecnici per il funzionamento del sito e cookie analitici (Google Analytics) per migliorare l&apos;esperienza. Consulta la nostra{" "}
          <Link href="/privacy" className="text-[#C9A84C] hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-[#9BA8C0] hover:text-[#E8EDF5] text-sm border border-[#1E2A42] rounded transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 bg-[#C9A84C] hover:bg-[#D4B870] text-[#0A0F1E] text-sm font-semibold rounded transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
