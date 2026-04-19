export const SITE_CONFIG = {
  name: "CM Impianti",
  tagline: "Performance Technology",
  description: "30 anni di eccellenza nell'impiantistica navale e industriale",
  phone: "+39 091 765 75 77",
  phoneGela: "+39 0933 196 2367",
  email: "sede@cmimpianti.info",
  whatsapp: "390917657577",
  addressPalermo: "Via dei Cantieri 75, 90142 Palermo",
  addressGela: "Via G.C. Siragusa 106, 93012 Gela (CL)",
  piva: "01912260856",
};

export const KPI = [
  { value: "30", suffix: "+", label: "Anni di Esperienza" },
  { value: "5", suffix: "", label: "Progetti Landmark Internazionali" },
  { value: "14", suffix: "+", label: "Certificazioni Tecniche" },
  { value: "10", suffix: "+", label: "Partner Tier-1" },
];

export const SERVICES = [
  {
    slug: "impiantistica-navale",
    title: "Impiantistica e Carpenteria Navale",
    shortTitle: "Impiantistica Navale",
    description:
      "Progettazione, realizzazione e installazione di impianti navali complessi. Manufatti in ferro, acciaio inox, Cu.Ni. Costruzione Helideck certificati Bureau Veritas.",
    image: "https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-impianti-navale-cm-impianti.jpg",
    serviceImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/tubi-nave-cmimpianti1.jpg",
    features: [
      "Tubazioni in acciaio inox e leghe speciali",
      "Sistemi piping completi per navi da crociera",
      "Costruzione e installazione Helideck",
      "Manufatti in Cu.Ni. per ambienti marini",
      "Carpenteria metallica navale su misura",
      "Coordinamento subappalto Fincantieri",
    ],
    certifications: ["Bureau Veritas", "ISO 9001", "Welding Engineer IWE", "END Radiografico"],
    caseStudies: ["silver-spirit", "queen-victoria"],
  },
  {
    slug: "impiantistica-industriale",
    title: "Impiantistica e Carpenteria Industriale",
    shortTitle: "Impiantistica Industriale",
    description:
      "Tubazioni in acciaio e leghe speciali per impianti industriali di grande scala. Progettazione e manutenzione impianti petrolchimici, infrastrutture energetiche e impianti ferroviari.",
    image: "https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-impianti-industriali-cm-impianti.jpg",
    serviceImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/saldaturaaaa.jpg",
    features: [
      "Tubazioni acciaio e leghe speciali",
      "Impianti petrolchimici e raffinerie",
      "Infrastrutture energetiche e oleodotti",
      "Impianti ferroviari (RFI)",
      "Manutenzione impianti industriali",
      "Progettazione sistemi piping ad alta pressione",
    ],
    certifications: ["ISO 9001", "Welding Inspector IWI", "END Magnetoscopico", "END Visivo"],
    caseStudies: ["oleodotto-gela"],
  },
  {
    slug: "refitting-navi",
    title: "Refitting su Navi",
    shortTitle: "Refitting Navi",
    description:
      "Riparazione, trasformazione e modernizzazione di navi da crociera, offshore e piattaforme petrolifere. Specializzazione in allungamento scafi e rinnovamento completo sistemi di bordo.",
    image: "https://www.cmimpianti.info/wp-content/uploads/2021/02/slide-refitting-cm-impianti.jpg",
    serviceImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/refitting1.jpg",
    features: [
      "Allungamento e trasformazione scafi",
      "Refitting sistemi piping e ventilazione",
      "Rinnovamento aree passeggeri",
      "Modernizzazione impianti offshore",
      "Trasformazione piattaforme petrolifere",
      "Gestione totale cantiere in dry dock",
    ],
    certifications: ["Bureau Veritas", "ISO 9001", "Welding Engineer IWE"],
    caseStudies: ["msc-crociere", "silver-spirit", "queen-victoria", "noordam"],
  },
];

export const CASE_STUDIES = [
  {
    slug: "msc-crociere",
    title: "MSC Crociere — Allungamento Scafo",
    subtitle: "Da 251m a 275m — Palermo, 2006",
    client: "MSC Crociere",
    year: "2006",
    location: "Palermo",
    category: "refitting-navi",
    coverImage: "https://www.cmimpianti.info/wp-content/uploads/2020/10/msc-seaside.jpg",
    heroImage: "https://www.cmimpianti.info/wp-content/uploads/2020/10/msc-seaside.jpg",
    gallery: [
      "https://www.cmimpianti.info/wp-content/uploads/2020/10/msc-seaside.jpg",
    ],
    stats: [
      { label: "Lunghezza iniziale", value: "251m" },
      { label: "Lunghezza finale", value: "275m" },
      { label: "Anno", value: "2006" },
      { label: "Tipo", value: "Allungamento scafo" },
    ],
    description:
      "Intervento di allungamento scafo di 24 metri sulla nave MSC, realizzato nei cantieri di Palermo. Un'operazione di ingegneria navale di alto livello che richiede coordinamento preciso tra taglio dello scafo, inserimento del nuovo segmento e ricongiunzione di tutti i sistemi di bordo: piping, impianti elettrici, ventilazione e strutture portanti.",
    challenge:
      "L'allungamento di una nave in servizio attivo richiede pianificazione millimetrica. Ogni sistema di bordo — tubazioni, cavi, strutture — deve essere sezionato, prolungato e ricongiunzionato con tolleranze di pochi millimetri. Il tutto in tempi dry dock rigorosi per minimizzare il fuori servizio.",
    solution:
      "CM Impianti ha gestito l'intero sistema piping del nuovo segmento, dalla progettazione alla collaudo in pressione. Tubazioni in acciaio inox e Cu.Ni., raccordi flangiati ad alta resistenza, test Bureau Veritas su ogni giunzione critica.",
    certifications: ["Bureau Veritas", "ISO 9001"],
  },
  {
    slug: "silver-spirit",
    title: "Silver Spirit — Allungamento + Piping Completo",
    subtitle: "Allungamento scafo + sistema piping, 2018",
    client: "Silversea Cruises",
    year: "2018",
    location: "Palermo",
    category: "refitting-navi",
    coverImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/Silver-Spirit.jpg",
    heroImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/Silver-Spirit.jpg",
    gallery: [
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/Silver-Spirit.jpg",
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/progettoallungamentoSS.jpg",
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/SS.jpg",
    ],
    stats: [
      { label: "Cliente", value: "Silversea" },
      { label: "Anno", value: "2018" },
      { label: "Tipo", value: "Allungamento + Piping" },
      { label: "Cantiere", value: "Palermo" },
    ],
    description:
      "Progetto di allungamento e rinnovamento completo del sistema piping della Silver Spirit, nave ammiraglia di Silversea Cruises. Intervento complesso che ha richiesto la gestione integrata dell'allungamento scafo e la sostituzione totale dei sistemi di tubazione nel nuovo segmento.",
    challenge:
      "Silversea opera nel segmento luxury — ogni componente deve rispettare standard estetici oltre che tecnici. Il sistema piping deve essere invisibile ma perfettamente funzionale, con rifiniture che rispettino l'ambiente premium della nave.",
    solution:
      "CM Impianti ha realizzato l'intero sistema piping del segmento aggiunto: tubazioni acqua mare, acqua dolce, combustibile, ventilazione, con materiali in acciaio inox AISI 316L e Cu.Ni. 90/10. Collaudi Bureau Veritas su ogni circuito.",
    certifications: ["Bureau Veritas", "ISO 9001", "Welding Engineer IWE"],
  },
  {
    slug: "queen-victoria",
    title: "Queen Victoria — Restyling Fincantieri",
    subtitle: "Restyling e refitting completo — Palermo, 2017",
    client: "Cunard Line / Fincantieri",
    year: "2017",
    location: "Palermo",
    category: "impiantistica-navale",
    coverImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/Queen-victoria.jpg",
    heroImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/Queen-victoria.jpg",
    gallery: [
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/Queen-victoria.jpg",
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/QueenV.jpg",
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/ingegneriqv.jpg",
    ],
    stats: [
      { label: "Cliente", value: "Cunard / Fincantieri" },
      { label: "Anno", value: "2017" },
      { label: "Tipo", value: "Restyling completo" },
      { label: "Cantiere", value: "Palermo" },
    ],
    description:
      "Intervento di restyling e refitting della Queen Victoria, nave storica della flotta Cunard Line, commissionato da Fincantieri. CM Impianti ha operato come contractor specializzato per l'impiantistica navale, coordinandosi con la direzione lavori Fincantieri per rispettare standard di qualità British Naval Authority.",
    challenge:
      "La Queen Victoria è un'icona della navigazione britannica. Ogni modifica deve rispettare la storia estetica della nave mantenendo i massimi standard di sicurezza SOLAS e conformità British Naval Authority. Coordinamento con Fincantieri richiede certificazioni specifiche e processi di qualità documentati.",
    solution:
      "CM Impianti ha gestito l'impiantistica navale del refitting: tubazioni, raccordi, sistemi di bordo. Tutta la documentazione di qualità è stata prodotta secondo protocolli Fincantieri con ispezioni Bureau Veritas.",
    certifications: ["Bureau Veritas", "ISO 9001", "Fincantieri QA"],
  },
  {
    slug: "noordam",
    title: "Noordam — Refitting",
    subtitle: "Refitting nave da crociera",
    client: "Holland America Line",
    year: "2010",
    location: "Palermo",
    category: "refitting-navi",
    coverImage: "https://www.cmimpianti.info/wp-content/uploads/2021/03/Noordam1.jpg",
    heroImage: "https://www.cmimpianti.info/wp-content/uploads/2021/03/Noordam1.jpg",
    gallery: [
      "https://www.cmimpianti.info/wp-content/uploads/2021/03/Noordam1.jpg",
    ],
    stats: [
      { label: "Cliente", value: "Holland America" },
      { label: "Tipo", value: "Refitting" },
      { label: "Cantiere", value: "Palermo" },
    ],
    description:
      "Intervento di refitting sulla Noordam, nave della flotta Holland America Line. CM Impianti ha gestito le lavorazioni di impiantistica navale durante il dry dock, garantendo rispetto dei tempi e qualità certificata.",
    challenge:
      "Le operazioni di dry dock hanno finestre temporali rigide. Ogni giorno di ritardo ha costi diretti significativi per l'armatore. La sfida è mantenere qualità certificata Bureau Veritas in tempi compressi.",
    solution:
      "Team specializzato CM Impianti ha operato in turni per rispettare il programma dry dock. Materiali e componenti pre-certificati per minimizzare i tempi di ispezione.",
    certifications: ["Bureau Veritas", "ISO 9001"],
  },
  {
    slug: "oleodotto-gela",
    title: "Oleodotto Gela",
    subtitle: "Impiantistica industriale — Gela, 2008",
    client: "ENI / Green Stream",
    year: "2008",
    location: "Gela (CL)",
    category: "impiantistica-industriale",
    coverImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/Oleodotto-Gela2.jpg",
    heroImage: "https://www.cmimpianti.info/wp-content/uploads/2021/02/Oleodotto-Gela2.jpg",
    gallery: [
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/Oleodotto-Gela2.jpg",
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/19.jpg",
      "https://www.cmimpianti.info/wp-content/uploads/2021/02/oleodottogela.jpg",
    ],
    stats: [
      { label: "Location", value: "Gela, Sicilia" },
      { label: "Anno", value: "2008" },
      { label: "Tipo", value: "Oleodotto industriale" },
      { label: "Settore", value: "Petrolchimico" },
    ],
    description:
      "Realizzazione e installazione di sistemi di tubazione per oleodotto nel polo petrolchimico di Gela. Intervento in ambiente ad alta criticità che richiede certificazioni specifiche per impianti sotto pressione e materiali resistenti agli idrocarburi.",
    challenge:
      "Gli oleodotti operano in condizioni estreme: pressioni elevate, temperature variabili, agenti chimici aggressivi. Ogni saldatura deve essere certificata con test radiografici e collaudi in pressione. L'ambiente petrolchimico richiede protocolli di sicurezza rigorosi.",
    solution:
      "CM Impianti ha realizzato le tubazioni con acciaio API 5L, saldature certificate con test END radiografico al 100%. Installazione coordinata con i sistemi esistenti del polo petrolchimico di Gela, nel rispetto degli standard safety dell'impianto.",
    certifications: ["ISO 9001", "END Radiografico", "Welding Inspector IWI"],
  },
];

export const CERTIFICATIONS = [
  { name: "Bureau Veritas — Sistemi di Qualità", ente: "Bureau Veritas", year: "2010", area: "navale" },
  { name: "ISO 9001 — Quality Management System", ente: "ISO", year: "2012", area: "generale" },
  { name: "Welding Engineer IWE", ente: "IIW International", year: "2008", area: "saldatura" },
  { name: "Welding Inspector IWI", ente: "IIW International", year: "2009", area: "saldatura" },
  { name: "Controllo Non Distruttivo — Radiografico Livello II", ente: "CICPND", year: "2007", area: "END" },
  { name: "Controllo Non Distruttivo — Magnetoscopico Livello II", ente: "CICPND", year: "2007", area: "END" },
  { name: "Controllo Non Distruttivo — Visivo Livello II", ente: "CICPND", year: "2007", area: "END" },
  { name: "Saldatura su Tubi in Acciaio — EN 287", ente: "TÜV / Bureau Veritas", year: "2011", area: "saldatura" },
  { name: "Saldatura su Lastre in Acciaio — EN 287", ente: "TÜV / Bureau Veritas", year: "2011", area: "saldatura" },
  { name: "Qualifica Fincantieri — Subappaltatore Navale", ente: "Fincantieri S.p.A.", year: "2005", area: "navale" },
  { name: "Qualifica RINA — Sistemi Navali", ente: "RINA", year: "2006", area: "navale" },
  { name: "Sicurezza Lavori in Quota — D.Lgs 81/08", ente: "INAIL", year: "2015", area: "sicurezza" },
  { name: "Sistemi Antincendio Navale", ente: "Bureau Veritas", year: "2008", area: "navale" },
  { name: "Piping Systems per Navi da Crociera", ente: "Bureau Veritas", year: "2009", area: "navale" },
];

export const PARTNERS: { name: string; logo: string | null; width: number; height: number }[] = [
  {
    name: "Fincantieri",
    width: 140,
    height: 28,
    logo: `<svg viewBox="0 0 280 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Fincantieri"><rect x="0" y="14" width="8" height="16" rx="1"/><rect x="11" y="8" width="8" height="28" rx="1"/><rect x="22" y="14" width="8" height="16" rx="1"/><text x="38" y="30" font-family="Arial" font-weight="700" font-size="20" letter-spacing="1">FINCANTIERI</text></svg>`,
  },
  {
    name: "MSC Crociere",
    width: 100,
    height: 28,
    logo: `<svg viewBox="0 0 140 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="MSC Crociere"><text x="0" y="34" font-family="Arial" font-weight="900" font-size="36" letter-spacing="2">MSC</text></svg>`,
  },
  {
    name: "Silversea Cruises",
    width: 130,
    height: 28,
    logo: `<svg viewBox="0 0 200 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Silversea Cruises"><text x="0" y="30" font-family="Georgia,serif" font-weight="400" font-size="22" letter-spacing="3">SILVERSEA</text></svg>`,
  },
  {
    name: "Cunard",
    width: 100,
    height: 28,
    logo: `<svg viewBox="0 0 140 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Cunard Line"><text x="0" y="30" font-family="Georgia,serif" font-weight="700" font-size="24" letter-spacing="2">CUNARD</text></svg>`,
  },
  {
    name: "Fiat",
    width: 60,
    height: 28,
    logo: `<svg viewBox="0 0 80 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="FIAT"><text x="0" y="34" font-family="Arial" font-weight="900" font-size="34" letter-spacing="2">FIAT</text></svg>`,
  },
  {
    name: "RFI",
    width: 80,
    height: 28,
    logo: `<svg viewBox="0 0 100 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="RFI Rete Ferroviaria Italiana"><rect x="0" y="10" width="32" height="24" rx="3"/><text x="4" y="28" font-family="Arial" font-weight="900" font-size="18" fill="white">RFI</text><text x="40" y="20" font-family="Arial" font-weight="400" font-size="9" fill="currentColor">Rete Ferroviaria</text><text x="40" y="32" font-family="Arial" font-weight="400" font-size="9" fill="currentColor">Italiana</text></svg>`,
  },
  {
    name: "V.Ships",
    width: 90,
    height: 28,
    logo: `<svg viewBox="0 0 120 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="V.Ships"><text x="0" y="34" font-family="Arial" font-weight="900" font-size="30" letter-spacing="1">V.</text><text x="36" y="34" font-family="Arial" font-weight="400" font-size="26" letter-spacing="1">Ships</text></svg>`,
  },
  {
    name: "Bureau Veritas",
    width: 130,
    height: 28,
    logo: `<svg viewBox="0 0 200 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Bureau Veritas"><rect x="0" y="8" width="28" height="28" rx="14"/><text x="6" y="28" font-family="Arial" font-weight="900" font-size="16" fill="white">BV</text><text x="36" y="22" font-family="Arial" font-weight="700" font-size="12" letter-spacing="0.5">BUREAU</text><text x="36" y="36" font-family="Arial" font-weight="400" font-size="11" letter-spacing="0.5">VERITAS</text></svg>`,
  },
  {
    name: "Callemberg Group",
    width: 140,
    height: 28,
    logo: `<svg viewBox="0 0 200 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Callemberg Group"><text x="0" y="30" font-family="Arial" font-weight="700" font-size="20" letter-spacing="1">CALLEMBERG</text></svg>`,
  },
  {
    name: "Green Stream",
    width: 130,
    height: 28,
    logo: `<svg viewBox="0 0 190 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Green Stream"><text x="0" y="30" font-family="Arial" font-weight="600" font-size="20" letter-spacing="1">GREEN STREAM</text></svg>`,
  },
];
