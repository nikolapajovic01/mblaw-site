import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawInsightCard from "@/components/MbLawInsightCard";
import { getInsight, insights } from "@/data/insights";

const FIRM_NAME = "MB Law – Marković, Bogdanović & Partners";
const FIRM_URL = "https://mblaw.rs";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/uvidi/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${FIRM_NAME}`,
    description: post.excerpt,
  };
}

export default async function InsightArticlePage({
  params,
}: PageProps<"/uvidi/[slug]">) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const related = [
    ...insights.filter((item) => item.slug !== slug && item.topic === post.topic),
    ...insights.filter((item) => item.slug !== slug && item.topic !== post.topic),
  ].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    articleSection: post.tag,
    url: `${FIRM_URL}/uvidi/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: FIRM_NAME,
      url: FIRM_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <MbLawSiteHeader active="UVIDI" />

      <main className="w-full bg-[#2A231C]">
        <article className="relative overflow-hidden px-6 pb-14 pt-12 md:px-[72px] md:pb-20 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(199,139,62,0.14),transparent_52%),radial-gradient(ellipse_at_82%_100%,rgba(199,139,62,0.1),transparent_48%)]"
          />

          <div className="relative max-w-[680px]">
            <Link
              href="/uvidi"
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
              UVIDI
            </Link>

            <div className="mt-10">
              <time
                dateTime={post.isoDate}
                className="border-l-2 border-[#C78B3E] pl-3"
              >
                <span
                  className="block text-[40px] font-bold leading-none text-[#F1EEE7] md:text-[48px]"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {post.day}
                </span>
                <span className="mt-1.5 block text-[11px] font-semibold tracking-[0.2em] text-[#C78B3E]">
                  {post.month} {post.year}
                </span>
              </time>
            </div>

            <span className="mt-8 block text-[10px] font-semibold tracking-[0.14em] text-[#C78B3E]">
              {post.tag}
            </span>
            <h1
              className="mt-4 text-[32px] font-bold leading-[1.14] tracking-[-0.02em] text-[#F1EEE7] sm:text-[40px] md:text-[46px]"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {post.title}
            </h1>
            <p className="mt-6 text-[17px] leading-[1.75] text-[#D5CFC6] md:text-[18px]">
              {post.excerpt}
            </p>

            <div className="mt-10 flex flex-col gap-5 border-t border-[#4A4034] pt-10">
              {post.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-[16px] leading-[1.8] text-[#C2BCB2] md:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 border-t border-[#4A4034] pt-10">
              <p className="text-[15px] leading-[1.65] text-[#8C877D]">
                Ako je ovo vaš predmet, prvi korak je razgovor.
              </p>
              <Link
                href="/kontakt"
                className="mt-5 inline-flex h-[50px] items-center bg-[#C78B3E] px-8 text-[11px] font-semibold tracking-[0.17em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C] sm:h-[52px]"
              >
                ZAKAŽITE KONSULTACIJU
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="relative px-6 pb-16 md:px-[72px] md:pb-20">
            <div className="relative mb-section-shell border-t border-[#4A4034] pt-12">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <span className="text-[10.5px] font-semibold tracking-[0.26em] text-[#77726A]">
                  JOŠ UVIDA
                </span>
                <Link
                  href="/uvidi"
                  className="text-[11.5px] font-medium tracking-[0.15em] text-[#CFC9BF] no-underline transition-colors hover:text-[#C78B3E]"
                >
                  SVI UVIDI
                </Link>
              </div>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                {related.map((item) => (
                  <li key={item.slug} className="min-w-0">
                    <MbLawInsightCard
                      post={item}
                      variant="grid"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>

      <MbLawFooter />
    </>
  );
}
