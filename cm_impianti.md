# CM Impianti — Specifiche UX/UI implementate (Apr 2026)

## Obiettivo
Ripristinare la piena visibilita dei contenuti homepage e allineare l'interfaccia a uno standard premium mobile-first, con look tecnico ciano/blu e navigazione robusta.

## Fix strutturali critici
- Risolto il bug "contenuti fantasma" dopo Hero.
- Le classi `reveal` e `reveal-group` non nascondono piu permanentemente i blocchi.
- Animazioni reveal ora attivate da observer client-side dedicato (`RevealOnScroll`) con fallback sicuro: senza JS i contenuti restano visibili.
- Evitati stati bloccanti basati su opacita iniziale non risolta.

## Header e menu mobile
- Header con `z-index` alto e `backdrop blur` costante per layering stabile in scroll.
- Overlay mobile ridisegnato in stile premium: pannello chiaro, margini ampi, tipografia elegante e switch lingua visuale `IT/EN`.
- Blocco scroll body quando il menu mobile e aperto (`overflow-hidden` su `body`).
- Logo mobile centrato, piu grande e non tagliato ai margini.

## CTA e bottoni
- Tutti i pulsanti principali uniformati a proporzioni mobile premium:
  - `rounded-full`
  - altezza minima ampia
  - padding orizzontale coerente
  - tipografia piu leggibile
- CTA primarie in gradiente blu/ciano (`#0075FF -> #00C4FF`).
- CTA secondarie in stile light outline ad alta leggibilita.

## Home visual refresh
- Applicati gradienti soft ciano/blu su sezioni chiave per profondita tech.
- Migliorata gerarchia testo (leading, contrasto, bilanciamento pesi).
- Marquee partner resa piu leggibile, fluida e continua (infinite marquee con doppia traccia).

## Navigazione e routing
- Eliminati 404 principali da navigazione:
  - creata pagina `src/app/servizi/page.tsx`
  - creata pagina `src/app/privacy/page.tsx`
  - creata pagina `src/app/cookie/page.tsx`
- Link menu e footer ora puntano a route esistenti.

## Componenti toccati
- `src/components/RevealOnScroll.tsx` (nuovo)
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/components/Navbar.tsx`
- `src/components/CtaButton.tsx`
- `src/components/InfiniteMarquee.tsx`
- `src/app/page.tsx`
- `src/app/servizi/page.tsx` (nuovo)
- `src/app/privacy/page.tsx` (nuovo)
- `src/app/cookie/page.tsx` (nuovo)

## Nota design
Il linguaggio visivo e stato riallineato su un registro premium-tech: forte contrasto, superfici pulite, CTA ad alta evidenza, menu mobile editoriale e leggibilita prioritaria su viewport iPhone.

---

## Aggiornamento UX (stesso mese — iterazione feedback mobile)

### Logo e branding
- Nuovo componente `HeaderLogo`: icona vettoriale stile marchio (gradiente ciano/blu), wordmark **CM IMPIANTI** e tagline **Performance Technology**.
- Desktop: logo a sinistra; mobile: hamburger a sinistra, logo centrato con `max-width` per evitare tagli.

### Menu mobile (fix visibilita)
- Menu reso tramite **React Portal** su `document.body` con `z-index` 200, cosi non resta intrappolato negli stacking context dell’header.
- Pannello bianco **slide-in da destra** con transizione; backdrop scuro sotto; pulsante chiusura in header drawer.
- Scroll-to-top portato a `z-40` per non coprire il menu.

### Home: ritmo verticale e CTA
- Piu spazio tra paragrafo hero e bottoni; margini maggiori tra CTA e griglia KPI.
- `CtaButton`: padding interno aumentato (`min-h` ~3.75rem, `px-10` / `sm:px-12`).
- Sezioni **Servizi Core** e **Progetti Landmark**: piu `padding-y` e margine tra le due sezioni.
- Sezione **Progetti Landmark**: bottone rinominato in **Visione dei progetti** e spostato **sopra** la griglia progetti, con margine generoso.

### Offset per header fisso
- `main` con padding-top superiore (`pt-[5.75rem]` / `lg:pt-[7.25rem]`) e `scroll-pt` per ancore.
- Prime sezioni di contatti, certificazioni, progetti, chi-siamo, servizi: `pt` aumentato e `scroll-mt-28` dove serve.
- Layout servizi e case study: piu padding nel hero per titoli leggibili sotto header.

### Certificazioni (pagine servizio)
- Sostituito il blocco tag inline con `CertificationGrid`: griglia responsive, card con icone scudo uniformi e testo.

### Footer
- Separatore superiore piu marcato in oro (`border-t` + `shadow` inset) per staccare il footer dal corpo pagina.
