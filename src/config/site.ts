import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Studio Algorytm",
  description: "Kolektyw 3 ekspertów B2B: SEO, Web Development, Strategia. Wspólnie budujemy widoczność Twojej firmy.",
  url: "https://algorytm.studio/",
  lang: "pl",
  locale: "pl_PL",
  author: "Studio Algorytm",
  email: "wojciech@algorytm.studio",
  tel: "+48 697 225 901",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    discord: "https://discord.com",
    linkedin: "https://linkedin.com",
  },
  navLinks: [
     { text: "O nas", href: "/o-nas" },
    {
      text: "Oferta",
      children: [
        { text: "SEO Techniczne", href: "/oferta/seo-techniczne" },
        { text: "Konsultacje SEO", href: "/oferta/konsultacje-seo" },
        { text: "SEO dla e-commerce", href: "/oferta/seo-ecommerce" },
        { text: "Pozycjonowanie w AI", href: "/oferta/pozycjonowanie-ai" },
        { text: "Strony, które zarabiają", href: "/oferta/strony-ktore-zarabiaja" },
        { text: "Automatyzacje AI", href: "/oferta/automatyzacje-ai" },
        { text: "Migracje stron i sklepów", href: "/oferta/migracje-stron" },
        { text: "SEO w modelu pre-paid", href: "/oferta/seo-pre-paid" },
      ],
    },
    {
      text: "Eksperci",
      children: [
        { text: "Wojciech Smolarek", href: "/ekspert/wojciech-smolarek" },
        { text: "Piotr Firyn", href: "/ekspert/piotr-firyn" },
        { text: "Jakub Witkowski", href: "/ekspert/jakub-witkowski" },
      ],
    },
    // { text: "Baza Wiedzy", href: "/blog" },
    //{ text: "Kontakt", href: "/kontakt" },
  ],
};
