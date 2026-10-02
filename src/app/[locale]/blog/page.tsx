import type { Metadata } from "next";
import Link from "next/link";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawInsightCard from "@/components/MbLawInsightCard";
import { getInsights, toCardData } from "@/data/insights";
import { practiceAreas } from "@/data/practice-areas";
import { isLocale, defaultLocale, htmlLang, type Locale } from "@/i18n/config";
import { getNavHref } from "@/i18n/nav";
import { getDictionary, getPracticeContent, type Dictionary } from "@/dictionaries";
import {
  FIRM,
  ORGANIZATION_ID,
  WEBSITE_ID,
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdString,
  localePath,
  pageMetadata,
} from "@/lib/seo";

const PATH = "/blog";

// Must be a literal (Next reads it statically); keep in sync with INSIGHTS_REVALIDATE.
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  // ?oblast= filter views share this canonical, so they don't compete with it.
  return pageMetadata({
    locale,
    path: PATH,
    title: dict.nav.insights,
    description: dict.meta.insightsDescription,
  });
}

function buildJsonLd(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, PATH));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: `${dict.nav.insights} | ${FIRM.shortName}`,
        description: dict.meta.insightsDescription,
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORGANIZATION_ID },
      },
      breadcrumbJsonLd([
        { name: dict.nav.home, path: localePath(locale) },
        { name: dict.nav.insights, path: localePath(locale, PATH) },
      ]),
    ],
  };
}

function filterHref(base: string, slug?: string) {
  return slug ? `${base}?oblast=${slug}` : base;
}

export default async function InsightsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ oblast?: string | string[] }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const base = getNavHref("insights", locale);
  const query = await searchParams;
  const raw = query.oblast;
  const oblast = Array.isArray(raw) ? raw[0] : raw;
  const posts = await getInsights(locale);
  // Filters list only the practice areas that actually have articles.
  const areas = practiceAreas.filter((area) =>
    posts.some((post) => post.practiceArea === area.slug)
  );
  const activeArea = areas.find((area) => area.slug === oblast);
  const filtered = activeArea
    ? posts.filter((post) => post.practiceArea === activeArea.slug)
    : posts;
  const jsonLd = buildJsonLd(locale, dict);

  const filters = [
    { slug: undefined as string | undefined, label: dict.insights.filterAll, active: !activeArea },
    ...areas.map((area) => ({
      slug: area.slug as string | undefined,
      label: getPracticeContent(locale)?.areas[area.slug]?.title ?? area.title,
      active: activeArea?.slug === area.slug,
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(jsonLd),
        }}
      />

      <MbLawSiteHeader active="insights" locale={locale} />

      <main className="w-full bg-[#2A231C]">
        <section className="relative overflow-hidden px-6 py-14 md:px-[72px] md:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(199,139,62,0.14),transparent_52%),radial-gradient(ellipse_at_82%_100%,rgba(199,139,62,0.1),transparent_48%)]"
          />

          <div className="relative mb-section-shell">
            <div className="h-px w-16 bg-[#C78B3E]" />
            <span className="mt-6 block text-[10.5px] font-semibold tracking-[0.26em] text-[#77726A] md:text-[11px]">
              {dict.insights.eyebrow}
            </span>
            <h1
              className="mt-4 max-w-[18ch] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F1EEE7] sm:text-[40px] md:text-[48px]"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {dict.insights.heading}
            </h1>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.75] text-[#D5CFC6] md:text-[17px] mb-prose">
              {dict.insights.indexLead}
            </p>

            {areas.length > 0 ? (
              <nav aria-label={dict.insights.filterAriaLabel} className="mt-8">
                <ul className="flex gap-x-6 gap-y-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {filters.map((item) => (
                    <li key={item.label} className="shrink-0">
                      <Link
                        href={filterHref(base, item.slug)}
                        scroll={false}
                        aria-current={item.active ? "page" : undefined}
                        className={`block pb-1 text-[13px] font-semibold tracking-[0.06em] no-underline transition-colors ${
                          item.active
                            ? "border-b border-[#C78B3E] text-[#F1EEE7]"
                            : "border-b border-transparent text-[#8C877D] hover:text-[#C78B3E]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            {filtered.length === 0 ? (
              <div className="mt-10 border-t border-[#4A4034] pt-8">
                <p className="text-[16px] leading-[1.75] text-[#C2BCB2]">
                  {dict.insights.emptyState}
                </p>
                {locale !== "sr" ? (
                  <Link
                    href={getNavHref("insights", "sr")}
                    className="mt-5 inline-block text-[11.5px] font-semibold tracking-[0.15em] text-[#C78B3E] no-underline transition-colors hover:text-[#D89B4C]"
                  >
                    {dict.insights.serbianOnlyLink}
                  </Link>
                ) : null}
              </div>
            ) : null}

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
              {filtered.map((post) => (
                <li key={post.slug} className="min-w-0">
                  <MbLawInsightCard
                    post={toCardData(post, dict.insights.eyebrow, locale)}
                    variant="grid"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    locale={locale}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MbLawCTA locale={locale} />
      </main>

      <MbLawFooter locale={locale} />
    </>
  );
}
