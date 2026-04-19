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
