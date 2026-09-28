import { defineQuery, type PortableTextBlock } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { practiceAreas } from "@/data/practice-areas";

// Articles are written by the content pipeline and published to Sanity from the review
// dashboard. They exist in Serbian only, so every other locale treats the list as empty.

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

export type InsightTableRow = { _key: string; cells: string[] | null; highlight: boolean | null };

export type Insight = InsightSummary & {
  metaTitle: string | null;
  metaDescription: string | null;
  readingTime: number | null;
  author: string | null;
  body: PortableTextBlock[] | null;
  faq: { _key: string; q: string | null; a: string | null }[] | null;
};

const SUMMARY_PROJECTION = `
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  practiceArea,
  "heroImageUrl": heroImage.asset->url,
  "heroImageAlt": heroImage.alt
`;

const INSIGHTS_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current) && defined(publishedAt)]
    | order(publishedAt desc) { ${SUMMARY_PROJECTION} }
`);

const INSIGHT_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${SUMMARY_PROJECTION},
    metaTitle,
    metaDescription,
    readingTime,
    author,
    body[] {
      ...,
      _type == "image" => { "url": asset->url, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }
    },
    faq
  }
`);

const fetchOptions = { next: { revalidate: INSIGHTS_REVALIDATE } };

export async function getInsights(): Promise<InsightSummary[]> {
  return client.fetch<InsightSummary[]>(INSIGHTS_QUERY, {}, fetchOptions);
}

export async function getInsight(slug: string): Promise<Insight | null> {
  return client.fetch<Insight | null>(INSIGHT_QUERY, { slug }, fetchOptions);
}

/** Card label: the practice area's title, or null when the article has none. */
export function getInsightTag(practiceArea: string | null): string | null {
  const area = practiceAreas.find((item) => item.slug === practiceArea);
  return area ? area.title.toUpperCase() : null;
}

export function toCardData(post: InsightSummary, fallbackTag: string) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    tag: getInsightTag(post.practiceArea) ?? fallbackTag,
    imageUrl: post.heroImageUrl,
  };
}
