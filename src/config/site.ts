import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "B2B Collective",
  description: "Kolektyw 3 ekspertów B2B: SEO, Web Development, Strategia. Wspólnie budujemy widoczność Twojej firmy.",
  url: "https://b2bcollective.pl",
  lang: "pl",
  locale: "pl_PL",
  author: "B2B Collective",
  email: "[EMAIL_ADDRESS]",
  tel: "+48 123 456 789",
  twitter: "@b2bcollective",
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
      href: "/oferta",
      children: [
        { text: "SEO Techniczne", href: "/oferta/seo-techniczne" },
        { text: "Konsultacje SEO", href: "/oferta/konsultacje-seo" },
        { text: "SEO dla e-commerce", href: "/oferta/seo-ecommerce" },
        { text: "Pozycjonowanie w AI", href: "/oferta/pozycjonowanie-ai" },
        { text: "Strony, które zarabiają", href: "/oferta/strony-ktore-zarabiaja" },
        { text: "Automatyzacje AI", href: "/" },
      ],
    },
    { text: "Baza Wiedzy", href: "/blog" },
    { text: "Kontakt", href: "/kontakt" },
  ],
};
