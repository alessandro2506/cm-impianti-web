# CM Impianti — Specifiche definitive (layout, branding, UX)

Documento di riferimento per il sito **cm-impianti-web** (Next.js App Router).

> Su filesystem **case-insensitive** (es. macOS predefinito) questo file può comparire anche come `cm_impianti.md`: è lo stesso contenuto.

## 1. Full-width e responsive (web e mobile)

- **`html`**: `width: 100%`; nessun `overflow-x` forzato su `html`/`body` che tagli il layout o crei bande vuote.
- **`body`**: `w-full min-w-0`, flex column; nessun `overflow-x: clip` globale.
- **`main`**: `w-full min-h-0 flex-1` con padding-top per l’header fisso (`scroll-pt-*` + `pt-*` allineati all’altezza navbar).
- **Sezioni**: `w-full min-w-0`; contenuto interno con `max-w-7xl mx-auto` solo come **colonna di lettura**, non come limite che lascia il viewport “vuoto” a destra (`min-w-0` su flex children è obbligatorio).

## 2. Branding e logo

- **`HeaderLogo`**: marchio **CM IMPIANTI** leggibile.
  - **CM**: grande, gradiente ciano/blu (`background-clip: text`), elemento iconico.
  - **IMPIANTI**: affiancato, bianco, tracking definito.
  - Sotto: **Performance Technology** — `font-body` extralight, maiuscolo, tracking ampio, `text-slate-300`.
- Footer: wordmark compatto coerente + tagline.

## 3. Homepage e visibilità contenuti

- Nessun blocco lasciato a `opacity: 0`: `.reveal` / `.reveal-group` in `globals.css` impostano **sempre** `opacity: 1`.
- **`RevealOnScroll`** rimosso dal progetto (non più necessario).
- Hero e sezioni: **`text-white`**, **`text-slate-100`**, **`text-slate-200`**, **`text-slate-300`** su sfondi scuri; KPI con etichette leggibili.

## 4. Menu mobile e lingua

- **Solo italiano**: nessuno switch IT/EN né bandierine.
- Drawer mobile: link **grandi**, **centrati**, **bold** (`font-heading`, `text-3xl` / `sm:text-4xl`); sotto-voci servizi in pannello chiaro, touch-friendly.

## 5. Partner (marquee)

- Titolo **“Hanno scelto CM Impianti”**: grande, centrato sopra il carosello; sottotitolo in `text-slate-200`.

## 6. Footer

- Linea oro superiore + **`pt-24`** tra il bordo e il primo contenuto (respiro / “aria”).
- Nessun `overflow-x` superfluo sul footer.

## 7. Nav desktop — hover

- **`.nav-pill`**: hover con leggero vetro (`background` + `backdrop-blur`) e **sottolineatura** via `::after` con **`transition: transform 0.3s`**.

## File principali

- `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`
- `src/components/HeaderLogo.tsx`, `Navbar.tsx`, `Footer.tsx`, `InfiniteMarquee.tsx`, `SectionTitle.tsx`, `KpiCounter.tsx`

## 8. Restyle Chi Siamo — Timeline Usability (Apr 2026)

- **Sfondo globale Blu Oceano**: base aggiornata a `#001a33` con gradienti coerenti, senza stacchi netti tra contenuto, header e footer.
- **Timeline orizzontale touch-first** nella pagina `chi-siamo`:
  - dati storici CM (1993, 2005, 2006, 2008, 2010, 2017, 2018, 2023+),
  - cards con `snap-x`, scrolling fluido su mobile e desktop,
  - linea temporale sottile e indicatori minimali in stile tecnico.
- **Tipografia timeline**:
  - data in **font monospace** con tracking tecnico,
  - titolo evento in bold,
  - descrizione sotto con larghezza controllata (`max-width` in caratteri) per andare a capo in modo netto e incolonnato.
- **Indicatore di slide (chevron destro)**:
  - freccia sottile con animazione laterale “pulse”,
  - fade-out automatico quando l’utente inizia lo scroll orizzontale.
- **Fade-in pulito**: card timeline con animazione `fade-in-up` a comparsa progressiva.

## 9. Footer & Typography Standard (Apr 2026)

- **Footer stile Fincantieri (tutte le pagine)**:
  - mantenere linea oro superiore sottile e nitida,
  - grande spazio verticale tra linea e logo (`py-14` / `sm:py-16` / `lg:py-20`),
  - layout a griglia arioso con blocchi Servizi, Azienda e Contatti,
  - bottom footer minimale con link legali piccoli e distanziati (Privacy, Cookie, Note Legali).
- **Respiro mobile**:
  - nessun ammasso verticale, gap consistenti su blocchi e colonne,
  - allineamento leggibile e progressivo da 1 colonna a 4 colonne su desktop.
- **Palette testo globale**:
  - colore testo principale in **Bianco Ghiaccio `#F8FAFC`**,
  - grigi chiari/opachi per metadati e testo secondario.
- **Tipografia globale**:
  - titoli in sans-serif moderno (`Inter`) con tracking più ampio,
  - microtesti tecnici (date timeline, label, metadati) con classe `.font-technical` basata su font mono (`Roboto Mono`),
  - paragrafi descrittivi in peso leggero (`font-weight: 300`) per maggiore eleganza e leggibilità.

## 10. Stabilizzazione Layout & Font Scale (Apr 2026)

- **Offset fisso sotto navbar**:
  - `main` con top padding aumentato (`pt-[7.25rem]` mobile, `sm:pt-[7.5rem]`, `lg:pt-[8.5rem]`) e `scroll-pt` coerente per evitare qualunque sovrapposizione hero/header.
- **Hero homepage**:
  - distanza aumentata tra testo descrittivo e blocco CTA (`mb` più ampio sul paragrafo + `mt` CTA) per eliminare overlap su viewport strette.
- **Scala tipografica ridotta (globale)**:
  - base body ridotta (`0.95rem`) con line-height più contenuta,
  - `SectionTitle` ridimensionato (`text-3xl`/`text-4xl`/`text-5xl`),
  - sottotitoli/descrizioni riportati su `text-sm`/`text-base`.
- **Bottoni CTA**:
  - standard interno con padding generoso e coerente (`px-8 py-3.5` mobile, `sm:px-10 sm:py-4`) per evitare testo a contatto con i bordi.
- **Footer colonne affiancate**:
  - griglia base `grid-cols-2` (quindi `Servizi` e `Azienda` sempre una accanto all’altra),
  - sezione `Contatti` in `col-span-2` per bilanciamento su tutta la larghezza,
  - spacing orizzontale/verticale aumentato per mantenere aria su mobile e desktop.
