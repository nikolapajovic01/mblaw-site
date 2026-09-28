import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "next-sanity";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawInsightCard from "@/components/MbLawInsightCard";
import {
  getInsight,
  getInsightTag,
  getInsights,
  toCardData,
  type InsightTableRow,
} from "@/data/insights";
import { getAttorney } from "@/data/team";
import { isLocale, defaultLocale, htmlLang, intlTags } from "@/i18n/config";
import { getNavHref } from "@/i18n/nav";
import { getDictionary } from "@/dictionaries";
import {
  ORGANIZATION_ID,
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdString,
  localePath,
  pageMetadata,
} from "@/lib/seo";

// Must be a literal (Next reads it statically); keep in sync with INSIGHTS_REVALIDATE.
export const revalidate = 60;

// Articles exist in Serbian only, so only /sr/uvidi/{slug} is ever rendered.
export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  if (params.locale !== "sr") return [];
  const posts = await getInsights();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/uvidi/[slug]">): Promise<Metadata> {
  const { slug, locale: rawLocale } = await params;
  if (rawLocale !== "sr") return {};
  const post = await getInsight(slug);
  if (!post) return {};
  const path = `/uvidi/${post.slug}`;

  const metadata = pageMetadata({
    locale: "sr",
    path,
    title: (post.metaTitle ?? post.title).replace(/\.$/, ""),
    description: post.metaDescription ?? post.excerpt ?? "",
    type: "article",
    publishedTime: post.publishedAt,
    ...(post.heroImageUrl
      ? { image: { url: post.heroImageUrl, alt: post.heroImageAlt ?? post.title } }
      : {}),
  });

  // No English or Russian version exists, so don't advertise one.
  return {
    ...metadata,
    alternates: {
      canonical: localePath("sr", path),
      languages: {
        [htmlLang.sr]: localePath("sr", path),
        "x-default": localePath("sr", path),
      },
    },
  };
}

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[16px] leading-[1.8] text-[#C2BCB2] md:text-[17px] mb-prose">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        className="mt-6 text-[24px] font-bold leading-[1.2] tracking-[-0.015em] text-[#F1EEE7] md:text-[28px]"
        style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="mt-3 text-[19px] font-semibold leading-[1.3] text-[#EDE9E1] md:text-[21px]"
        style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
      >
        {children}
      </h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex flex-col gap-2 pl-5 text-[16px] leading-[1.75] text-[#C2BCB2] marker:text-[#C78B3E] md:text-[17px] list-disc">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[#EDE9E1]">{children}</strong>,
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const external = /^https?:\/\//.test(href) && !href.startsWith(absoluteUrl(""));
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-[#C78B3E] underline decoration-[#C78B3E]/40 underline-offset-4 transition-colors hover:text-[#D89B4C]"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) =>
      value?.url ? (
        <figure className="my-2">
          <Image
            src={value.url}
            alt={value.alt ?? ""}
            width={value.width ?? 1600}
            height={value.height ?? 900}
            sizes="(max-width: 768px) 100vw, 680px"
            className="h-auto w-full border border-[#4A4034]"
          />
        </figure>
      ) : null,
    ctable: ({ value }) => (
      <div className="my-2 overflow-x-auto border border-[#4A4034]">
        <table className="w-full min-w-[480px] border-collapse text-left text-[14px] leading-[1.55]">
          {value?.head?.length ? (
            <thead className="bg-[#241E18]">
              <tr>
                {(value.head as string[]).map((cell, index) => (
                  <th
                    key={index}
                    className="border-b border-[#4A4034] px-4 py-3 text-[11px] font-semibold tracking-[0.12em] text-[#C78B3E]"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {((value?.rows ?? []) as InsightTableRow[]).map((row) => (
              <tr
                key={row._key}
                className={row.highlight ? "bg-[#C78B3E]/10" : undefined}
              >
                {(row.cells ?? []).map((cell, index) => (
                  <td
                    key={index}
                    className="border-b border-[#3A3530] px-4 py-3 align-top text-[#C2BCB2]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
};

export default async function InsightArticlePage({
  params,
}: PageProps<"/[locale]/uvidi/[slug]">) {
  const { slug, locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  if (locale !== "sr") notFound();
  const post = await getInsight(slug);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const tag = getInsightTag(post.practiceArea) ?? dict.insights.eyebrow;
  const author = post.author ? getAttorney(post.author) : undefined;
  const faq = (post.faq ?? []).filter((item) => item.q && item.a);
  const path = `/uvidi/${post.slug}`;
  const url = absoluteUrl(localePath(locale, path));

  // formatToParts, because Serbian formatting appends a period to a bare day or year.
  const date = new Date(post.publishedAt);
  const datePart = (type: "day" | "month" | "year", options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(intlTags[locale], { timeZone: "Europe/Belgrade", ...options })
      .formatToParts(date)
      .find((item) => item.type === type)?.value ?? "";
  const day = datePart("day", { day: "2-digit" });
  const month = datePart("month", { month: "long" }).toUpperCase();
  const year = datePart("year", { year: "numeric" });

  const others = (await getInsights()).filter((item) => item.slug !== post.slug);
  const sameArea = (item: { practiceArea: string | null }) =>
    Boolean(post.practiceArea) && item.practiceArea === post.practiceArea;
  const related = [
    ...others.filter(sameArea),
    ...others.filter((item) => !sameArea(item)),
  ].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        url,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.metaDescription ?? post.excerpt ?? undefined,
        datePublished: post.publishedAt,
        inLanguage: htmlLang[locale],
        ...(post.heroImageUrl ? { image: post.heroImageUrl } : {}),
        ...(author
          ? {
              author: {
                "@type": "Person",
                name: author.name,
                jobTitle: author.role,
                url: absoluteUrl(localePath(locale, `/tim/${author.slug}`)),
              },
            }
          : {}),
        publisher: { "@id": ORGANIZATION_ID },
      },
      ...(faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
      breadcrumbJsonLd([
        { name: dict.nav.home, path: localePath(locale) },
        { name: dict.nav.insights, path: localePath(locale, "/uvidi") },
        { name: post.title, path: localePath(locale, path) },
      ]),
    ],
  };

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
        <article className="relative overflow-hidden px-6 pb-14 pt-12 md:px-[72px] md:pb-20 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(199,139,62,0.14),transparent_52%),radial-gradient(ellipse_at_82%_100%,rgba(199,139,62,0.1),transparent_48%)]"
          />

          <div className="relative max-w-[680px]">
            <Link
              href={getNavHref("insights", locale)}
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#8C877D] no-underline transition-colors hover:text-[#C78B3E]"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 6H2M4.5 2.5 1 6l3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {dict.insights.eyebrow}
            </Link>

            <div className="mt-10">
              <time
                dateTime={post.publishedAt}
                className="border-l-2 border-[#C78B3E] pl-3"
              >
                <span
                  className="block text-[40px] font-bold leading-none text-[#F1EEE7] md:text-[48px]"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {day}
                </span>
                <span className="mt-1.5 block text-[11px] font-semibold tracking-[0.2em] text-[#C78B3E]">
                  {month} {year}
                  {post.readingTime ? ` · ${post.readingTime} ${dict.insights.readingTime.toUpperCase()}` : ""}
                </span>
              </time>
            </div>

            <span className="mt-8 block text-[10px] font-semibold tracking-[0.14em] text-[#C78B3E]">
              {tag}
            </span>
            <h1
              className="mt-4 text-[32px] font-bold leading-[1.14] tracking-[-0.02em] text-[#F1EEE7] sm:text-[40px] md:text-[46px]"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-6 text-[17px] leading-[1.75] text-[#D5CFC6] md:text-[18px] mb-prose">
                {post.excerpt}
              </p>
            ) : null}

            {post.heroImageUrl ? (
              <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden border border-[#4A4034] bg-[#141210]">
                <Image
                  src={post.heroImageUrl}
                  alt={post.heroImageAlt ?? ""}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-cover"
                />
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-5 border-t border-[#4A4034] pt-10">
              <PortableText value={post.body ?? []} components={bodyComponents} />
            </div>

            {faq.length > 0 ? (
              <section className="mt-12 border-t border-[#4A4034] pt-10">
                <h2
                  className="text-[24px] font-bold leading-[1.2] tracking-[-0.015em] text-[#F1EEE7] md:text-[28px]"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {dict.insights.faqHeading}
                </h2>
                <div className="mt-6 flex flex-col">
                  {faq.map((item) => (
                    <details
                      key={item._key}
                      className="group border-b border-[#3A3530] py-4"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] font-semibold leading-[1.5] text-[#EDE9E1] [&::-webkit-details-marker]:hidden">
                        {item.q}
                        <span
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-[#C78B3E] transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[15.5px] leading-[1.75] text-[#C2BCB2]">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            {author ? (
              <Link
                href={localePath(locale, `/tim/${author.slug}`)}
                className="group mt-12 flex items-center gap-5 border-t border-[#4A4034] pt-10 no-underline"
              >
                {author.photo ? (
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#141210]">
                    <Image
                      src={author.photo}
                      alt={author.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : null}
                <div>
                  <span className="block text-[10px] font-semibold tracking-[0.2em] text-[#77726A]">
                    {dict.insights.authorLabel}
                  </span>
                  <span
                    className="mt-1 block text-[19px] font-semibold text-[#F1EEE7] transition-colors group-hover:text-[#C78B3E]"
                    style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                  >
                    {author.name}
                  </span>
                  <span className="block text-[13px] text-[#8C877D]">{author.role}</span>
                </div>
              </Link>
            ) : null}

            <div className="mt-12 border-t border-[#4A4034] pt-10">
              <p className="text-[15px] leading-[1.65] text-[#8C877D]">
                {dict.common.firstStepCta}
              </p>
              <Link
                href={getNavHref("contact", locale)}
                className="mt-5 inline-flex h-[50px] items-center bg-[#C78B3E] px-8 text-[11px] font-semibold tracking-[0.17em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C] sm:h-[52px]"
              >
                {dict.hero.ctaPrimary}
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="relative px-6 pb-16 md:px-[72px] md:pb-20">
            <div className="relative mb-section-shell border-t border-[#4A4034] pt-12">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <span className="text-[10.5px] font-semibold tracking-[0.26em] text-[#77726A]">
                  {dict.insights.moreInsights}
                </span>
                <Link
                  href={getNavHref("insights", locale)}
                  className="text-[11.5px] font-medium tracking-[0.15em] text-[#CFC9BF] no-underline transition-colors hover:text-[#C78B3E]"
                >
                  {dict.insights.viewAll}
                </Link>
              </div>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                {related.map((item) => (
                  <li key={item.slug} className="min-w-0">
                    <MbLawInsightCard
                      post={toCardData(item, dict.insights.eyebrow)}
                      variant="grid"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      locale={locale}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>

      <MbLawFooter locale={locale} />
    </>
  );
}
