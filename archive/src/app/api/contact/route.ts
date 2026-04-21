import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, email, tipo_progetto, paese, messaggio } = body;

    if (!nome || !email || !tipo_progetto || !paese || !messaggio) {
      return NextResponse.json({ error: "Campi mancanti" }, { status: 400 });
    }

    // Resend integration — aggiungere RESEND_API_KEY in .env.local
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY non configurata — form simulato");
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CM Impianti Sito <noreply@cmimpianti.info>",
        to: ["sede@cmimpianti.info"],
        reply_to: email,
        subject: `[Preventivo] ${tipo_progetto} — ${nome} (${paese})`,
        text: `
Nuova richiesta di preventivo dal sito cmimpianti.info

Nome: ${nome}
Email: ${email}
Tipo progetto: ${tipo_progetto}
Paese: ${paese}

Messaggio:
${messaggio}
        `.trim(),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Errore invio email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
