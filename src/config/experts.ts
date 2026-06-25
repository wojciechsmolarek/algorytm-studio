import type { ImageMetadata } from "astro";
import wojciechImage from "../images/experts/wojciech-smolarek.jpg";
import piotrImage from "../images/experts/piotr-firyn.jpg";
import jakubImage from "../images/experts/jakub-witkowski.jpg";

export interface Expert {
  name: string;
  slug: string;
  role: string;
  description: string;
  fullBio: string;
  image: ImageMetadata;
  email: string;
  linkedin: string;
  technologies: string[];
  publications: { title: string; url: string; image?: string }[];
  experience: {
    title: string;
    summary: string;
    timeline: { period: string; role: string; company: string; description?: string }[];
    highlights: { label: string; value: string }[];
  };
}

export const experts: Expert[] = [
  {
    name: "Wojciech Smolarek",
    slug: "wojciech-smolarek",
    role: "Web Development & Operations",
    description:
      "Technical SEO Specialist w OPONEO PL S.A. — jednym z największych graczy e-commerce w branży opon. Łączy SEO, UX i web development.",
    fullBio:
      "Wojciech pracuje jako Technical SEO Specialist w OPONEO PL S.A., jednym z największych polskich e-commerce'ów. Odpowiada tam za strategię SEO, audyty techniczne, automatyzacje oparte na n8n i AI oraz migrację platformy na Next.js. Wcześniej zdobywał doświadczenie w Sunrise System, gdzie obsługiwał klientów VIP, prowadził szkolenia i publikował felietony branżowe. W Studio Algorytm odpowiada za web development, operacje i relacje biznesowe. Realizuje strony w Next.js, Astro, WordPressie oraz architekturach headless — m.in. wusp-jarocin.pl, deni.com.pl i projekty dla klientów korporacyjnych objętych NDA.",
    image: wojciechImage,
    email: "wojciech@algorytm.studio",
    linkedin: "https://www.linkedin.com/in/wojciech-smolarek/",
    technologies: ["Next.js", "Astro", "WordPress", "Headless CMS", "n8n", "AI"],
    publications: [
      {
        title: "Core Web Vitals — gdy dane Lighthouse i RUM się rozjeżdżają, co robić?",
        url: "https://www.wojciechsmolarek.pl/blog/core-web-vitals-gdy-dane-lighthouse-i-rum-sie-rozjezdzaja-co-robic",
      },
    ],
    experience: {
      title: "Doświadczenie",
      summary:
        "Obecnie Technical SEO Specialist w jednym z największych polskich e-commerce'ów. Wcześniej klient VIP, mentoring i szkolenia w Sunrise System.",
      timeline: [
        {
          period: "obecnie",
          role: "Technical SEO Specialist",
          company: "OPONEO PL S.A.",
          description:
            "Strategia SEO, audyty techniczne, automatyzacje z n8n i AI, migracja Oponeo.pl na Next.js.",
        },
        {
          period: "2024 – obecnie",
          role: "Specjalista ds. SEO",
          company: "Talem Technologies",
          description:
            "Wdrożenia automatyzacji AI, konsultacje techniczne, wsparcie nowoczesnych technologii.",
        },
        {
          period: "2018 – 2023",
          role: "Senior SEO Specialist / VIP",
          company: "Sunrise System",
          description:
            "Obsługa klientów VIP, analiza UX/CRO, mentoring, szkolenia i felietony branżowe.",
        },
      ],
      highlights: [
        { label: "Obecnie", value: "Technical SEO Specialist w OPONEO PL S.A." },
        { label: "Technologie", value: "Next.js, Astro, WordPress, Headless CMS" }
      ],
    },
  },
  {
    name: "Piotr Firyn",
    slug: "piotr-firyn",
    role: "Technical SEO Specialist",
    description:
      "Technical SEO Specialist w OPONEO.PL z 8-letnim doświadczeniem w branży. Prelegent SEO Poland Conference, specjalista od technicznego SEO i platform SaaS.",
    fullBio:
      "Piotr pracuje jako Technical SEO Specialist w OPONEO.PL, jednym z największych polskich e-commerce'ów. Wcześniej zdobywał doświadczenie w Talem Technologies oraz Grupie ZAKI, rozwijając kompetencje w technicznym SEO, HTML/CSS i optymalizacji platform e-commerce. Występuje jako prelegent — m.in. na SEO Poland Conference w Bydgoszczy, gdzie mówił o technicznym SEO na platformach e-commerce opartych o SaaS. W Studio Algorytm odpowiada za strategię SEO, audyty techniczne i automatyzacje.",
    image: piotrImage,
    email: "piotr@algorytm.studio",
    linkedin: "https://www.linkedin.com/in/piotr-firyn/",
    technologies: ["Technical SEO", "HTML", "CSS", "SaaS", "E-commerce SEO", "Automatyzacje AI"],
    publications: [
      {
        title: "Techniczne SEO, a rzeczywistość na platformach e-commerce opartych o SaaS",
        url: "https://www.linkedin.com/posts/piotr-firyn_seo-poland-conference-talem-technologies-activity-6961298765432123456-abc1",
        image: "https://media.licdn.com/dms/image/v2/C4D22AQEjdwYqHqAeuQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1661534410176?e=1784160000&v=beta&t=KuWDuGlufaqZYWA9ut_8sSVmDbgpPf_k4TsX3N-mJUE",
      },
    ],
    experience: {
      title: "Doświadczenie",
      summary:
        "Obecnie Technical SEO Specialist w OPONEO.PL. Łącznie ponad 8 lat w branży SEO, wcześniej Talem Technologies i Grupa ZAKI.",
      timeline: [
        {
          period: "kwi 2023 – obecnie",
          role: "Technical SEO Specialist",
          company: "OPONEO.PL",
          description:
            "Strategia i techniczne SEO dla jednego z największych e-commerce'ów w Polsce.",
        },
        {
          period: "lip 2018 – obecnie",
          role: "Specjalista ds. SEO",
          company: "Talem Technologies",
          description:
            "Optymalizacja techniczna, HTML/CSS, wsparcie SEO dla e-commerce i SaaS.",
        },
        {
          period: "cze 2017 – maj 2018",
          role: "Specjalista ds. SEO",
          company: "Grupa ZAKI",
          description:
            "Pierwsze kroki w branży SEO i e-commerce.",
        },
      ],
      highlights: [
        { label: "Obecnie", value: "Technical SEO Specialist w OPONEO.PL" },
        { label: "Technologie", value: "HTML, CSS, SaaS, E-commerce SEO" }
      ],
    },
  },
  {
    name: "Jakub Witkowski",
    slug: "jakub-witkowski",
    role: "SEO Specialist",
    description:
      "SEO Specialist w Talem Technologies. Specjalizuje się w SEO dla e-commerce, optymalizacji technicznej i projektowaniu ścieżek konwersji.",
    fullBio:
      "Jakub pracuje jako SEO Specialist w Talem Technologies, gdzie zajmuje się SEO dla e-commerce, audytami technicznymi i wsparciem klientów. Karierę zaczynał od stażu jako Junior SEO Specialist, szybko rozwijając kompetencje w technicznym SEO i optymalizacji ścieżek użytkownika. W Studio Algorytm odpowiada za SXO, marketing B2B i projektowanie ścieżek konwersji.",
    image: jakubImage,
    email: "jakub@algorytm.studio",
    linkedin: "https://www.linkedin.com/in/jakub-witkowski-76ab5a24b/",
    technologies: ["SEO", "E-commerce SEO", "Technical SEO", "SXO", "Analityka", "UX"],
    publications: [],
    experience: {
      title: "Doświadczenie",
      summary:
        "SEO Specialist w Talem Technologies. Staż od września 2023, pełne stanowisko od marca 2024. Specjalizacja w e-commerce i SEO technicznym.",
      timeline: [
        {
          period: "mar 2024 – obecnie",
          role: "SEO Specialist",
          company: "Talem Technologies",
          description:
            "SEO dla e-commerce, optymalizacja techniczna, rozwój ponad 4 dodatkowych kompetencji.",
        },
        {
          period: "wrz 2023 – lut 2024",
          role: "Junior SEO Specialist",
          company: "Talem Technologies",
          description:
            "Staż i pierwsze kroki w SEO, e-commerce oraz technicznej optymalizacji stron.",
        },
      ],
      highlights: [
        { label: "Obecnie", value: "SEO Specialist w Talem Technologies" }
      ],
    },
  },
];
