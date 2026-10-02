import { defineQuery, type PortableTextBlock } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { practiceAreas } from "@/data/practice-areas";
import { getPracticeContent } from "@/dictionaries";
import type { Locale } from "@/i18n/config";

// Articles are written by the content pipeline and published to Sanity from the review
// dashboard (Serbian, no `language` set), or added in Studio as translations of a
// Serbian article. Each locale lists only the articles written in its language.

// How often (seconds) a page re-reads Sanity, so a newly approved article appears
// without a redeploy.
export const INSIGHTS_REVALIDATE = 60;

export type InsightSummary = {
  slug: string;
  title: string;
  excerpt: string | null;
  publishedAt: string;
  practiceArea: string | null;
  heroImageUrl: string | null;
  heroImageAlt: string | null;
};

/** One language version of an article, used for hreflang and the language switcher. */
export type InsightTranslation = { language: Locale; slug: string };

export type InsightTableRow = { _key: string; cells: string[] | null; highlight: boolean | null };

export type Insight = InsightSummary & {
  metaTitle: string | null;
  metaDescription: string | null;
  readingTime: number | null;
  author: string | null;
  body: PortableTextBlock[] | null;
  faq: { _key: string; q: string | null; a: string | null }[] | null;
  translations: InsightTranslation[];
};

const PUBLISHED = `_type == "blogPost" && defined(slug.current) && defined(publishedAt)`;
const LANGUAGE = `coalesce(language, "sr")`;
const TRANSLATION_KEY = `coalesce(translationKey, slug.current)`;

const SUMMARY_PROJECTION = `
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  practiceArea,
  "heroImageUrl": heroImage.asset->url,
  "heroImageAlt": heroImage.alt
`;

// Every published language version of the same article (including itself).
const TRANSLATIONS_PROJECTION = `
  "translations": *[${PUBLISHED} && ${TRANSLATION_KEY} == coalesce(^.translationKey, ^.slug.current)] {
    "language": ${LANGUAGE},
    "slug": slug.current
  }
`;

const INSIGHTS_QUERY = defineQuery(`
  *[${PUBLISHED} && ${LANGUAGE} == $locale]
    | order(publishedAt desc) { ${SUMMARY_PROJECTION} }
`);

const ALL_INSIGHTS_QUERY = defineQuery(`
  *[${PUBLISHED}] | order(publishedAt desc) {
    "language": ${LANGUAGE},
    "slug": slug.current,
    publishedAt,
    ${TRANSLATIONS_PROJECTION}
  }
`);

const INSIGHT_QUERY = defineQuery(`
  *[${PUBLISHED} && slug.current == $slug && ${LANGUAGE} == $locale][0] {
    ${SUMMARY_PROJECTION},
    metaTitle,
    metaDescription,
    readingTime,
    author,
    body[] {
      ...,
      _type == "image" => { "url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }
    },
    faq,
    ${TRANSLATIONS_PROJECTION}
  }
`);

// The article a slug belongs to in any language, with all its language versions. Used
// when a URL pairs a slug with the wrong locale (e.g. the language switcher sends
// /sr/uvidi/{sr-slug} to /ru/uvidi/{sr-slug}).
const TRANSLATIONS_BY_SLUG_QUERY = defineQuery(`
  *[${PUBLISHED} && slug.current == $slug][0] { ${TRANSLATIONS_PROJECTION} }.translations
`);

const fetchOptions = { next: { revalidate: INSIGHTS_REVALIDATE } };

export async function getInsights(locale: Locale): Promise<InsightSummary[]> {
  return client.fetch<InsightSummary[]>(INSIGHTS_QUERY, { locale }, fetchOptions);
}

/** Every published article in every language, for the sitemap. */
export async function getAllInsights(): Promise<
  (InsightTranslation & { publishedAt: string; translations: InsightTranslation[] })[]
> {
  return client.fetch(ALL_INSIGHTS_QUERY, {}, fetchOptions);
}

export async function getInsight(slug: string, locale: Locale): Promise<Insight | null> {
  return client.fetch<Insight | null>(INSIGHT_QUERY, { slug, locale }, fetchOptions);
}

/** All language versions of the article that owns this slug, in whatever language. */
export async function getTranslationsBySlug(slug: string): Promise<InsightTranslation[]> {
  return (
    (await client.fetch<InsightTranslation[] | null>(
      TRANSLATIONS_BY_SLUG_QUERY,
      { slug },
      fetchOptions
    )) ?? []
  );
}

/** Card label: the practice area's title in the page's language, or null when none. */
export function getInsightTag(practiceArea: string | null, locale: Locale): string | null {
  const area = practiceAreas.find((item) => item.slug === practiceArea);
  if (!area) return null;
  const title = getPracticeContent(locale)?.areas[area.slug]?.title ?? area.title;
  return title.toUpperCase();
}

export function toCardData(post: InsightSummary, fallbackTag: string, locale: Locale) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    tag: getInsightTag(post.practiceArea, locale) ?? fallbackTag,
    imageUrl: post.heroImageUrl,
  };
}
