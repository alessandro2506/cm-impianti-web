# CM Impianti V2 — Liquid & Responsive First

## Visione Progetto

- Ricostruzione completa in ottica **istituzionale + tech-SaaS**.
- Contenuti coerenti con `cmimpianti.info` (servizi, storia, casi studio, contatti, certificazioni).
- Linguaggio visivo ibrido:
  - rigore e spazi ampi in stile corporate/navale,
  - fluidita' moderna con gradienti soft e superfici glass.

## Architettura Layout

- Ogni sezione e' full-width (`w-full`), con contenuto centrato su:
  - `max-w-7xl mx-auto`
  - padding laterale percentuale: `px-[5%]`.
- Niente blocchi rigidi per container principali.
- Spaziatura verticale gestita con `py-*` e `gap-*` (rem-based Tailwind scale).

## Responsive Strategy

- Mobile-first su tutte le sezioni.
- Hero e blocchi informativi impostati con `flex flex-col` + `gap` per evitare collisioni tra testo e CTA.
- Sezioni dense (servizi/progetti/certificazioni) con grid responsive senza larghezze fisse.

## Design System

- Background globale: **Ocean Blue** `#001a33` con gradienti radiali morbidi.
- Typography:
  - Sans-serif moderna per heading e testi editoriali.
  - Monospace (`font-technical`) per dati tecnici, date e micro-label.
  - Titoli fluidi con `clamp(...)` nei punti principali (hero + section titles).
- CTA:
  - `rounded-full`
  - padding interno ampio (`py-4 px-10`)
  - contrasto alto su sfondo scuro.

## Navigazione

- Header sticky full-width.
- Logo a sinistra, hamburger ancorato a destra (mobile).
- Menu mobile con struttura gerarchica chiara (`Servizi` con sotto-menu espandibile).

## Timeline Chi Siamo

- Timeline orizzontale con snap scrolling e hint animato.
- Date in monospace.
- Testi con larghezza in caratteri per andare a capo in modo ordinato.
- UX touch-first e leggibilita' preservata su viewport ridotti.

## Footer Istituzionale

- Linea dorata superiore.
- Distanza ampia tra linea e logo (>= 8rem equivalente via utility verticali).
- Colonne informative affiancate su desktop, stack progressivo su mobile.

## Contenuti Migrati e Struttura

- Homepage (`src/app/page.tsx`)
- Chi Siamo con timeline (`src/app/chi-siamo/page.tsx`, `src/components/CompanyTimeline.tsx`)
- Servizi, Progetti, Certificazioni, Contatti
- Layout condivisi service/case study
- Navbar, Footer, componenti CTA e carousel
- Dataset centralizzato in `src/lib/data.ts`

## Note Deploy

- Codice pronto per deploy automatico su Vercel:
  - struttura Next.js App Router valida,
  - dipendenze ripristinate,
  - branch di backup preservato (`backup-pre-reset`) per rollback.

## Implementazione Eseguita su `main` (Apr 2026)

- Eseguita ricostruzione completa nella root (`src/`, `public/`) senza modificare il contenuto in `archive/`.
- Completate tutte le fasi operative descritte nel documento:
  - **Fondamenta & Header**: design tokens aggiornati in `globals.css`, navbar sticky con logo a sinistra e hamburger a destra.
  - **Hero Homepage**: layout liquido con `flex-col` mobile e `flex-row` desktop, separazioni con `gap`, CTA rounded con padding ampio.
  - **Sezioni contenuto**: uniformazione dei wrapper interni su `max-w-7xl mx-auto px-[5%]` per coerenza cross-page.
  - **Timeline Chi Siamo**: mantenuta struttura orizzontale con snap-scroll, hint e tipografia tecnica.
  - **Footer istituzionale**: linea dorata superiore, aumento spazio logo-linea (>= 8rem tramite `pt-32+`) e colonne affiancate desktop.
- Rimossi pattern di container legacy (`max-w-[80rem]`, `px-6 md:px-12`) dai file applicativi principali.
- Verifica tecnica finale completata con linting (`npm run lint`) senza errori.
