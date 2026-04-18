"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(2, "Nome richiesto (min. 2 caratteri)"),
  email: z.string().email("Email non valida"),
  tipo_progetto: z.string().min(1, "Seleziona il tipo di progetto"),
  paese: z.string().min(1, "Paese richiesto"),
  messaggio: z.string().min(20, "Descrivi il tuo progetto (min. 20 caratteri)"),
});

type FormData = z.infer<typeof schema>;

const TIPI_PROGETTO = [
  "Impiantistica Navale",
  "Impiantistica Industriale",
  "Refitting Navi",
  "Altro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#111827] border border-[#1E2A42] rounded text-[#E8EDF5] placeholder-[#9BA8C0] focus:outline-none focus:border-[#C9A84C] transition-colors text-sm";
  const labelClass = "block text-[#9BA8C0] text-xs font-semibold tracking-wider uppercase mb-2";
  const errorClass = "text-red-400 text-xs mt-1";

  if (status === "success") {
    return (
      <div className="border border-[#C9A84C]/40 rounded-lg p-10 text-center">
        <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-3xl text-[#E8EDF5] mb-3">MESSAGGIO INVIATO</h3>
        <p className="text-[#9BA8C0]">Risponderemo entro 24 ore lavorative.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Nome e Cognome *</label>
          <input
            {...register("nome")}
            type="text"
            placeholder="Mario Rossi"
            className={inputClass}
            autoComplete="name"
          />
          {errors.nome && <p className={errorClass}>{errors.nome.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="mario@azienda.it"
            className={inputClass}
            autoComplete="email"
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Tipo di Progetto *</label>
          <select
            {...register("tipo_progetto")}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">Seleziona...</option>
            {TIPI_PROGETTO.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.tipo_progetto && <p className={errorClass}>{errors.tipo_progetto.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Paese *</label>
          <input
            {...register("paese")}
            type="text"
            placeholder="Italia"
            className={inputClass}
          />
          {errors.paese && <p className={errorClass}>{errors.paese.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Descrivi il tuo Progetto *</label>
        <textarea
          {...register("messaggio")}
          rows={6}
          placeholder="Descrivi brevemente il progetto, le specifiche tecniche, i tempi e qualsiasi altra informazione utile..."
          className={`${inputClass} resize-none`}
        />
        {errors.messaggio && <p className={errorClass}>{errors.messaggio.message}</p>}
      </div>

      {status === "error" && (
        <div className="p-4 border border-red-500/30 bg-red-500/10 rounded text-red-400 text-sm">
          Errore nell'invio. Riprova o contattaci direttamente via email.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto px-8 py-3 bg-[#C9A84C] hover:bg-[#D4B870] disabled:opacity-60 disabled:cursor-not-allowed text-[#0A0F1E] font-semibold text-sm tracking-wide rounded transition-colors flex items-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Invio in corso...
          </>
        ) : (
          "Invia Richiesta"
        )}
      </button>

      <p className="text-[#9BA8C0] text-xs">
        * Campi obbligatori. I dati sono trattati ai sensi del D.Lgs. 196/2003 e GDPR 2016/679.
      </p>
    </form>
  );
}
