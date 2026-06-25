export interface Expert {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const experts: Expert[] = [
  {
    name: "Wojciech Smolarek",
    role: "Web Development & Operations",
    description:
      "Specjalista od technicznego SEO i widoczności w Google. Buduje strategie, które przekładają się na realne leady.",
    image: "/images/wojciech-smolarek.jpg",
  },
  {
    name: "Piotr Firyn",
    role: "Strategia SEO",
    description:
      "Architekt systemów i web deweloper. Tworzy szybkie, skalowalne strony internetowe z naciskiem na wydajność i SEO.",
    image: "/images/piotr-firyn.jpg",
  },
  {
    name: "Jakub Witkowski",
    role: "SXO & Marketing",
    description:
      "Łączy kropki między marketingiem a sprzedażą. Dba o to, by ruch na stronie konwertował.",
    image: "/images/jakub-witkowski.jpg",
  },
];
