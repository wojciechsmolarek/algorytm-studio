import { siteConfig } from "../config/site";
import { experts } from "../config/experts";

const expertSlugs = experts.map((e) => e.slug);

// === Constants ===
const SITE_URL = siteConfig.url.endsWith("/")
    ? siteConfig.url.slice(0, -1)
    : siteConfig.url;
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

// === Types ===
export type SchemaType =
    | "WebSite"
    | "Organization"
    | "Service"
    | "FAQPage"
    | "Person"
    | "ProfilePage"
    | "BlogPosting"
    | "Blog"
    | "CollectionPage"
    | "ContactPage"
    | "BreadcrumbList";

export interface SchemaItem {
    type: SchemaType;
    data: Record<string, any>;
}

export interface Breadcrumb {
    name: string;
    url: string;
}

// === Helpers ===
function normalizeTrailingSlash(pathname: string): string {
    if (pathname === "/") return pathname;
    return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function buildUrl(pathname: string): string {
    return new URL(normalizeTrailingSlash(pathname), siteConfig.url).toString();
}

// === Breadcrumb auto-generation ===
const BREADCRUMB_LABELS: Record<string, string> = {
    oferta: "Oferta",
    ekspert: "Eksperci",
    blog: "Blog",
    kontakt: "Kontakt",
    "polityka-prywatnosci": "Polityka prywatności",
    "seo-techniczne": "SEO Techniczne",
    "konsultacje-seo": "Konsultacje SEO",
    "seo-ecommerce": "SEO dla E-commerce",
    "pozycjonowanie-ai": "Pozycjonowanie w AI",
    "strony-ktore-zarabiaja": "Strony, które zarabiają",
    "automatyzacje-ai": "Automatyzacje AI",
    "migracje-stron": "Migracje stron",
    "seo-pre-paid": "SEO w modelu pre-paid",
    "wojciech-smolarek": "Wojciech Smolarek",
    "piotr-firyn": "Piotr Firyn",
    "jakub-witkowski": "Jakub Witkowski",
    kategoria: "Kategoria",
    autor: "Autor",
};

export function generateBreadcrumbs(
    pathname: string,
    labels?: Record<string, string>,
): Breadcrumb[] {
    const normalized = normalizeTrailingSlash(pathname);
    const segments = normalized.split("/").filter(Boolean);
    const crumbs: Breadcrumb[] = [
        { name: "Strona główna", url: siteConfig.url },
    ];

    const labelMap = { ...BREADCRUMB_LABELS, ...labels };
    let currentPath = "";
    for (const segment of segments) {
        currentPath += `/${segment}`;
        crumbs.push({
            name: labelMap[segment] || segment,
            url: new URL(currentPath, siteConfig.url).toString(),
        });
    }

    return crumbs;
}

// === Schema builders ===
export function buildSchema(
    type: SchemaType,
    data: Record<string, any> = {},
): any {
    switch (type) {
        case "WebSite":
            return {
                "@type": "WebSite",
                "@id": SITE_ID,
                name: siteConfig.name,
                url: siteConfig.url,
                description: siteConfig.description,
                inLanguage: siteConfig.lang,
                publisher: { "@id": ORG_ID },
            };

        case "Organization":
            return {
                "@type": "Organization",
                "@id": ORG_ID,
                name: siteConfig.name,
                url: siteConfig.url,
                description: siteConfig.description,
                email: siteConfig.email,
                telephone: siteConfig.tel,
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "ul. Sępia 4",
                    addressLocality: "Bydgoszcz",
                    postalCode: "85-434",
                    addressCountry: "PL",
                },
                logo: {
                    "@type": "ImageObject",
                    url: new URL("/images/logo/favicon.ico", siteConfig.url).toString(),
                },
                sameAs: [
                    siteConfig.socialLinks.linkedin,
                    siteConfig.socialLinks.twitter,
                    siteConfig.socialLinks.github,
                ].filter(Boolean),
                founder: data.founders || [],
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: siteConfig.tel,
                    email: siteConfig.email,
                    contactType: "customer service",
                    availableLanguage: ["Polish", "English"],
                },
            };

        case "Service":
            return {
                "@type": "Service",
                "@id": `${data.url}#service`,
                name: data.title,
                description: data.description,
                url: data.url,
                provider: { "@id": ORG_ID },
                areaServed: { "@type": "Country", name: "Polska" },
            };

        case "FAQPage":
            return {
                "@type": "FAQPage",
                "@id": `${data.url}#faqpage`,
                mainEntity: (data.faqs || []).map((faq: any) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            };

        case "Person":
            return {
                "@type": "Person",
                "@id": `${data.url}#person`,
                name: data.name,
                jobTitle: data.jobTitle,
                description: data.description,
                image: data.image,
                url: data.url,
                sameAs: data.sameAs || [],
                knowsAbout: data.knowsAbout || [],
                worksFor: { "@id": ORG_ID },
            };

        case "ProfilePage":
            return {
                "@type": "ProfilePage",
                "@id": `${data.url}#profilepage`,
                url: data.url,
                mainEntity: { "@id": `${data.url}#person` },
            };

        case "BlogPosting":
            return {
                "@type": "BlogPosting",
                "@id": `${data.url}#article`,
                headline: data.title,
                description: data.description,
                image: data.image,
                articleBody: data.articleBody,
                datePublished: data.pubDate
                    ? new Date(data.pubDate).toISOString()
                    : undefined,
                dateModified: data.dateModified
                    ? new Date(data.dateModified).toISOString()
                    : undefined,
                author: {
                    "@type": "Person",
                    name: data.author,
                    url: data.authorSlug
                        ? new URL(
                              expertSlugs.includes(data.authorSlug)
                                  ? `/ekspert/${data.authorSlug}`
                                  : `/blog/autor/${data.authorSlug}`,
                              siteConfig.url,
                          ).toString()
                        : undefined,
                },
                publisher: { "@id": ORG_ID },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": data.url,
                },
                keywords: data.tags ? data.tags.join(", ") : undefined,
                articleSection: data.category,
            };

        case "Blog":
            return {
                "@type": "Blog",
                "@id": `${buildUrl("/blog")}#blog`,
                name: data.name || "Blog — Studio Algorytm",
                url: buildUrl("/blog"),
                publisher: { "@id": ORG_ID },
                blogPost: (data.posts || []).map((post: any) => ({
                    "@type": "BlogPosting",
                    "@id": `${buildUrl(`/blog/${post.slug}`)}#article`,
                    headline: post.title,
                    datePublished: post.pubDate
                        ? new Date(post.pubDate).toISOString()
                        : undefined,
                })),
            };

        case "CollectionPage":
            return {
                "@type": "CollectionPage",
                "@id": `${data.url}#collectionpage`,
                name: data.name,
                url: data.url,
                hasPart: (data.posts || []).map((post: any) => ({
                    "@type": "BlogPosting",
                    "@id": `${buildUrl(`/blog/${post.slug}`)}#article`,
                    headline: post.title,
                    datePublished: post.pubDate
                        ? new Date(post.pubDate).toISOString()
                        : undefined,
                })),
            };

        case "ContactPage":
            return {
                "@type": "ContactPage",
                "@id": `${data.url}#contactpage`,
                url: data.url,
                name: "Kontakt",
                mainEntity: { "@id": ORG_ID },
            };

        case "BreadcrumbList": {
            const crumbs =
                data.breadcrumbs ||
                generateBreadcrumbs(data.pathname || "/");
            const pageUrl =
                data.url || buildUrl(data.pathname || "/");
            return {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumbs`,
                itemListElement: crumbs.map(
                    (crumb: Breadcrumb, index: number) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        name: crumb.name,
                        item: crumb.url,
                    }),
                ),
            };
        }

        default:
            return {};
    }
}

// === Graph builder ===
export function buildGraph(items: SchemaItem[]): any {
    return {
        "@context": "https://schema.org",
        "@graph": items
            .map((item) => buildSchema(item.type, item.data))
            .filter((obj) => Object.keys(obj).length > 0),
    };
}
