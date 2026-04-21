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

## 11. Correzioni Strutturali Finali (Apr 2026)

- **Hamburger mobile**: pulsante ancorato in modo assoluto al lato destro dell’header (`right-0`, `top-1/2`) per evitare regressioni di allineamento.
- **Footer spacing**:
  - separazione netta dall’ultima sezione con `mt-24`,
  - spazio extra tra linea dorata e logo (`pt-20` mobile, `pt-24/28` da tablet/desktop).
- **Usabilità slider servizi**:
  - rimossa la forzatura `touch-action: pan-x` nel carosello, così lo scroll verticale pagina resta sempre disponibile mentre il dito/mouse è sull’area slider.
- **Visibilità e clipping**:
  - rimossa la regola `overflow: hidden` dal contenitore `.section-bg` per ridurre il rischio di tagli o occultamenti involontari.
- **Riduzione scala hero**:
  - titolo e testo descrittivo homepage ulteriormente ridotti su mobile/desktop per mantenere proporzioni istituzionali e prevenire sovrapposizioni.

## 12. Visione Alvenco x Fincantieri (Apr 2026)

- **Identità visiva**:
  - sfondo globale confermato su `#001a33` con gradienti blur ciano/blu molto soft agli angoli,
  - tipografia istituzionale: titoli sans (`Inter`) e dati tecnici/timeline in mono (`.font-technical`).
- **Header mobile**:
  - logo ancorato a sinistra con tagline visibile,
  - hamburger fisso a destra, senza sovrapposizioni con il marchio.
- **Layout full-width e slider**:
  - sezioni homepage con card orizzontali scrollabili (`Servizi`, `Progetti`) mantenendo il look pulito,
  - nessun blocco dello scroll verticale mentre l’utente interagisce con i caroselli.
- **Spaziature “breathable”**:
  - incremento della distanza verticale tra le sezioni (`py-24`+),
  - footer con stacco superiore marcato, linea dorata netta e forte padding prima del logo.
- **Footer responsive definitivo**:
  - colonne in linea su desktop (`lg:grid-cols-4`),
  - incolonnamento progressivo su mobile (`grid-cols-1` → `sm:grid-cols-2`).
- **Bottoni e micro-interazioni**:
  - CTA rounded-full con padding generoso (`px-10 py-4`, `sm:px-12`),
  - hover fluidi e leggibili in continuità SaaS/istituzionale.

## 13. Architettura Liquida Responsive (Apr 2026)

- **Layout fluido**:
  - contenitori principali normalizzati su `w-full min-w-0`,
  - wrapper contenuto standardizzato con `max-w-7xl mx-auto` e gutter fluidi (`px-6 md:px-8 lg:px-10`).
- **Header sticky**:
  - navbar resa `sticky` full-width (non fixed),
  - logo a sinistra + hamburger ancorato a destra e centrato verticalmente sul mobile.
- **Spaziature dinamiche**:
  - sezione standard con ritmo `py-16 md:py-24` (estensioni `lg:py-28` dove utile),
  - mantenuta la distanza istituzionale nel footer con linea dorata e ampio padding prima del logo.
- **CTA standard**:
  - padding coerente e sicuro: `px-8 py-3.5` mobile, `md:px-10 md:py-4` desktop,
  - testo mai a contatto con i bordi.
- **Footer grid responsive**:
  - mobile in stack progressivo (`grid-cols-1`),
  - desktop affiancato (`sm:grid-cols-2`, `lg:grid-cols-4`) con gerarchie leggibili.
- **Slider usabilità**:
  - scrolling orizzontale snap mantenuto,
  - nessuna interferenza con lo scroll verticale pagina durante interazione touch/mouse.

## 14. Centratura & UI Refinement (Apr 2026)

- **Centratura desktop simmetrica**:
  - pattern contenitore applicato come standard: `w-full` + inner wrapper `max-w-7xl mx-auto px-6 md:px-12`.
- **Hero e CTA**:
  - separazione testo/call-to-action aumentata (`mb-10+`) per evitare collisioni su mobile,
  - padding CTA reso tassativo e uniforme (`px-10 py-4`) con scala font più compatta su mobile.
- **Carosello Servizi**:
  - rimosso l’indicatore freccia/chevron; lo slide è suggerito solo dal clipping dell’ultima card.
- **Drawer hamburger**:
  - rimossi i due bottoni extra nel footer del menu mobile,
  - tipografia dei link ridotta (`text-xl/sm:text-2xl`, peso `medium`) per tono istituzionale.
- **Controllo fluidità**:
  - nessun overflow-x nascosto usato per mascherare bug,
  - mantenuta architettura full-width senza larghezze fisse in pixel per i wrapper di sezione.

## 15. Hotfix Hero Mobile Spacing (Apr 2026)

- **Sezione Hero Homepage (mobile)**:
  - aumentato lo stacco tra riquadro descrittivo (“30 anni al fianco…”) e blocco CTA,
  - regolazione applicata con `mb-16` sul blocco testo e rimozione del margine superiore CTA (`mt-0`),
  - obiettivo: evitare che il testo risulti visivamente “attaccato” ai bottoni `Richiedi Preventivo` e `Vedi i Progetti`.

## 16. Normalizzazione Cross-Site Responsive (Apr 2026)

- **Root cause risolta**:
  - eliminata la coesistenza di due sistemi container (vecchio `px-4 sm:px-6 lg:px-8` vs nuovo layout fluido),
  - unificati i wrapper su pagine e layout condivisi per coerenza visiva tra homepage, pagine elenco e pagine dettaglio.
- **Standard contenitori globale**:
  - pattern: `w-full` + `max-w-7xl mx-auto px-6 md:px-12`,
  - applicato a `progetti`, `certificazioni`, `contatti`, `servizi`, `chi-siamo`, `privacy`, `cookie` e layout condivisi (`ServicePageLayout`, `CaseStudyLayout`).
- **Vertical rhythm coerente**:
  - sezioni principali riallineate a `py-16 md:py-24` (con estensioni `lg:py-28` dove necessario).
- **Fluidità visuale**:
  - ridotte aree con misure rigide non essenziali nei blocchi hero/feature,
  - mantenuta navigazione sticky con comportamento uniforme su tutti i template.
