export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: ServiceItem[] = [
  {
    num: "01",
    title: "Strony, które zarabiają",
    description:
      "Projektujemy serwisy nastawione na konwersje. UX/UI dopasowany do ścieżki zakupowej klienta B2B, maksymalizujący ilość zapytań ofertowych.",
    tags: ["Web Design", "Development", "UX Research"],
  },
  {
    num: "02",
    title: "SEO B2B",
    description:
      "Pozycjonujemy liderów. Tworzymy dedykowane strategie widoczności, które budują autorytet domeny i przyciągają ruch intencyjny.",
    tags: ["Audyty SEO", "Link Building", "Optymalizacja treści"],
  },
  {
    num: "03",
    title: "Utrzymanie WWW",
    description:
      "Stałe wsparcie techniczne i optymalizacja wydajności, by Twoja strona zawsze działała bez zarzutu i była bezpieczna.",
    tags: ["Security", "Updates", "Monitoring 24/7"],
  },
  {
    num: "04",
    title: "Nadzór nad migracjami",
    description:
      "Kompleksowe zarządzanie procesem przenoszenia serwisu. Gwarantujemy zachowanie widoczności w wynikach wyszukiwania po wdrożeniu nowej strony.",
    tags: ["Mapa przekierowań", "Testy", "Wdrożenie"],
  },
  {
    num: "05",
    title: "Strategia Content",
    description:
      "Tworzymy plany treści eksperckich, które edukują rynek, rozwiązują problemy klientów i budują wizerunek lidera branży.",
    tags: ["Content Plan", "Copywriting", "Dystrybucja"],
  },
  {
    num: "06",
    title: "Audyty UX/UI",
    description:
      "Szczegółowa analiza użyteczności strony. Identyfikujemy bariery w konwersji i proponujemy rozwiązania zwiększające sprzedaż.",
    tags: ["Heatmaps", "User Testing", "Raportowanie"],
  },
];
