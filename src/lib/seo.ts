import type { Metadata } from "next";
import { locales, defaultLocale, htmlLang, type Locale } from "@/i18n/config";

/**
 * Production origin, without a trailing slash. Every canonical, hreflang,
 * sitemap and JSON-LD URL is built from this, so switching domains (or www)
 * is a one-line change or a NEXT_PUBLIC_SITE_URL override.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mblaw.rs").replace(/\/+$/, "");

export const FIRM = {
  name: "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović",
  shortName: "MB Law",
  alternateNames: [
    "MB Law",
    "Marković i Bogdanović",
    "Advokatska kancelarija Marković i Bogdanović",
    "Marković & Bogdanović Joint Law Office",
  ],
  email: "office@mblaw.rs",
  phone: "+381653894111",
  street: "Resavska 68",
  city: "Beograd",
  postalCode: "11000",
  country: "RS",
  logo: "/icon.png",
  image: "/og-image.jpg",
  // Add LinkedIn / Instagram / Google Business Profile URLs here once they exist.
  sameAs: [] as string[],
} as const;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const OG_IMAGE = {
  url: FIRM.image,
  width: 1200,
  height: 630,
  alt: "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović, Beograd",
};

const ogLocale: Record<Locale, string> = {
  sr: "sr_RS",
  en: "en_GB",
  ru: "ru_RU",
};

/** "/o-nama" + "en" -> "/en/o-nama"; "" + "en" -> "/en". */
export function localePath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/** canonical + hreflang for a path that exists in every locale. */
export function localeAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [htmlLang[l], localePath(l, path)])),
      "x-default": localePath(defaultLocale, path),
    },
  };
}

/** "Radno pravo" + "advokat Beograd" -> "Radno pravo - advokat Beograd", unless that gets too long for a SERP title. */
export function withTitleSuffix(title: string, suffix: string, max = 52): string {
  const full = `${title} - ${suffix}`;
  return full.length <= max ? full : title;
}

/** Trims to about the length search engines show, cutting on a word boundary. */
export function clampDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:-]+$/, "")}…`;
}

type PageMetadataInput = {
  locale: Locale;
  /** Locale-less path, e.g. "/o-nama". Empty string for the home page. */
  path: string;
  title: string;
  description: string;
  /** Use when the title should not get the layout's " | MB Law" suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  image?: { url: string; width?: number; height?: number; alt: string };
};

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle,
  type = "website",
  publishedTime,
  image = OG_IMAGE,
}: PageMetadataInput): Metadata {
  description = clampDescription(description);
  const url = localePath(locale, path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: localeAlternates(locale, path),
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: FIRM.shortName,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: FIRM.street,
    addressLocality: FIRM.city,
    postalCode: FIRM.postalCode,
    addressCountry: FIRM.country,
  };
}

/** Site-wide LegalService node. Other pages point at it by @id instead of repeating it. */
export function organizationJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Organization"],
        "@id": ORGANIZATION_ID,
        name: FIRM.name,
        alternateName: FIRM.alternateNames,
        description,
        url: absoluteUrl(localePath(locale)),
        logo: absoluteUrl(FIRM.logo),
        image: absoluteUrl(FIRM.image),
        email: FIRM.email,
        telephone: FIRM.phone,
        address: postalAddress(),
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${FIRM.street}, ${FIRM.city}`)}`,
        areaServed: [
          { "@type": "City", name: "Belgrade" },
          { "@type": "Country", name: "Serbia" },
        ],
        knowsLanguage: ["sr", "en", "ru"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: FIRM.phone,
          email: FIRM.email,
          contactType: "customer service",
          areaServed: "RS",
          availableLanguage: ["Serbian", "English", "Russian"],
        },
        ...(FIRM.sameAs.length ? { sameAs: FIRM.sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: FIRM.shortName,
        alternateName: FIRM.name,
        inLanguage: locales.map((l) => htmlLang[l]),
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Serializes JSON-LD for a <script> tag, dropping empty strings and escaping "<". */
export function jsonLdString(data: object): string {
  return JSON.stringify(data, (_, value) => (value === "" ? undefined : value)).replace(/</g, "\\u003c");
}
