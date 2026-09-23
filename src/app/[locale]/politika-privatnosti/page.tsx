import type { Metadata } from "next";
import MbLawLegalDoc from "@/components/MbLawLegalDoc";
import { isLocale, defaultLocale, htmlLang, type Locale } from "@/i18n/config";
import { getLegalHref } from "@/i18n/nav";
import { getDictionary, type Dictionary } from "@/dictionaries";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdString,
  localePath,
  pageMetadata,
} from "@/lib/seo";

const PATH = "/politika-privatnosti";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/politika-privatnosti">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: PATH,
    title: dict.legal.privacy.title,
    description: dict.meta.privacyDescription,
  });
}

function buildJsonLd(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, PATH));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: `${dict.legal.privacy.title} | MB Law`,
        description: dict.meta.privacyDescription,
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
      },
      breadcrumbJsonLd([
        { name: dict.nav.home, path: localePath(locale) },
        { name: dict.legal.privacy.title, path: localePath(locale, PATH) },
      ]),
    ],
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/politika-privatnosti">) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const jsonLd = buildJsonLd(locale, dict);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <MbLawLegalDoc
        locale={locale}
        doc={dict.legal.privacy}
        otherHref={getLegalHref("terms", locale)}
      />
    </>
  );
}
