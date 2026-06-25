export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export const services: ServiceItem[] = [
  {
    num: "01",
    title: "Strony, które zarabiają",
    description:
      "Projektujemy i wdrażamy strony firmowe oraz sklepy internetowe nastawione na sprzedaż. UX/UI, CMS, SEO techniczne i szkolenie w cenie.",
    tags: ["Web Design", "Development", "UX/UI"],
    href: "/oferta/strony-ktore-zarabiaja",
  },
  {
    num: "02",
    title: "SEO Techniczne",
    description:
      "Audytujemy fundamenty techniczne strony: crawl, indeks, Core Web Vitals, schema.org i bezpieczeństwo. Bez sprawnej techniki content nie zarabia.",
    tags: ["Audyt", "Crawl", "Indeksowanie"],
    href: "/oferta/seo-techniczne",
  },
  {
    num: "03",
    title: "SEO dla E-commerce",
    description:
      "Strategie widoczności dla sklepów internetowych. Architektura URL, filtrowanie, optymalizacja kategorii i produktów pod konwersję.",
    tags: ["E-commerce", "Konwersja", "Skalowanie"],
    href: "/oferta/seo-ecommerce",
  },
  {
    num: "04",
    title: "Konsultacje SEO",
    description:
      "Godzinowe konsultacje z ekspertem. Strategia, słowa kluczowe, ocena konkurencji, audyt — bez długoterminowej umowy i ukrytych kosztów.",
    tags: ["Strategia", "Audyt", "Doradztwo"],
    href: "/oferta/konsultacje-seo",
  },
  {
    num: "05",
    title: "Pozycjonowanie w AI",
    description:
      "Budujemy widoczność marki w odpowiedziach ChatGPT, Gemini, Perplexity i Copilot. Mierzalny mention rate i transparentne raporty.",
    tags: ["AI", "ChatGPT", "Brand Visibility"],
    href: "/oferta/pozycjonowanie-ai",
  },
  {
    num: "06",
    title: "Automatyzacje AI",
    description:
      "Automatyzujemy powtarzalne procesy biznesowe n8n, Make i modelami AI. Raportowanie, CRM, dokumenty — Twój zespół robi to, do czego jest potrzebny.",
    tags: ["n8n", "Make", "Workflow"],
    href: "/oferta/automatyzacje-ai",
  },
  {
    num: "07",
    title: "Migracje stron i sklepów",
    description:
      "Bezpieczne przenoszenie serwisów między domenami, CMS i platformami. Mapa przekierowań, testy i monitoring — bez utraty pozycji.",
    tags: ["301", "CMS", "Bezpieczeństwo"],
    href: "/oferta/migracje-stron",
  },
  {
    num: "08",
    title: "SEO w modelu pre-paid",
    description:
      "Elastyczny model współpracy. Kupujesz pakiet godzin, my realizujemy zadania według Twoich priorytetów. Pełna transparentność rozliczeń.",
    tags: ["Elastyczność", "Transparentność", "Budżet"],
    href: "/oferta/seo-pre-paid",
  },
];
