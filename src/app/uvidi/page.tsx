import type { Metadata } from "next";
import Link from "next/link";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawInsightCard from "@/components/MbLawInsightCard";
import {
  getInsightTopic,
  getInsightsByTopic,
  insightTopics,
  insights,
} from "@/data/insights";

const FIRM_NAME = "MB Law – Marković, Bogdanović & Partners";
const FIRM_URL = "https://mblaw.rs";

export const metadata: Metadata = {
  title: `Uvidi | ${FIRM_NAME}`,
  description:
    "Analize i pravna praksa advokatske kancelarije Marković i Bogdanović: privredno pravo, nekretnine, radni odnosi i odbrana u postupku.",
};

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${FIRM_URL}/uvidi#page`,
    url: `${FIRM_URL}/uvidi`,
    name: `Uvidi | ${FIRM_NAME}`,
    description:
      "Analize i pravna praksa advokatske kancelarije Marković i Bogdanović.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: insights.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${FIRM_URL}/uvidi/${post.slug}`,
        name: post.title,
      })),
    },
  };
}

function filterHref(slug?: string) {
  return slug ? `/uvidi?oblast=${slug}` : "/uvidi";
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ oblast?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = params.oblast;
  const oblast = Array.isArray(raw) ? raw[0] : raw;
  const activeTopic = getInsightTopic(oblast);
  const filtered = getInsightsByTopic(activeTopic?.slug);
  const jsonLd = buildJsonLd();

  const filters = [
    { slug: undefined as string | undefined, label: "Sve", active: !activeTopic },
    ...insightTopics.map((topic) => ({
      slug: topic.slug as string | undefined,
      label: topic.label,
      active: activeTopic?.slug === topic.slug,
    })),
  ];

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
        <section className="relative overflow-hidden px-6 py-14 md:px-[72px] md:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(199,139,62,0.14),transparent_52%),radial-gradient(ellipse_at_82%_100%,rgba(199,139,62,0.1),transparent_48%)]"
          />

          <div className="relative mb-section-shell">
            <div className="h-px w-16 bg-[#C78B3E]" />
            <span className="mt-6 block text-[10.5px] font-semibold tracking-[0.26em] text-[#77726A] md:text-[11px]">
              UVIDI
            </span>
            <h1
              className="mt-4 max-w-[18ch] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F1EEE7] sm:text-[40px] md:text-[48px]"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              Najnovije analize i pravna praksa.
            </h1>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.75] text-[#D5CFC6] md:text-[17px]">
              Kratki tekstovi o propisima i praksi. Otvorite temu koja vas se
              tiče.
            </p>

            <nav aria-label="Filter uvida po oblasti" className="mt-8">
              <ul className="flex gap-x-6 gap-y-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {filters.map((item) => (
                  <li key={item.label} className="shrink-0">
                    <Link
                      href={filterHref(item.slug)}
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

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
              {filtered.map((post) => (
                <li key={post.slug} className="min-w-0">
                  <MbLawInsightCard
                    post={post}
                    variant="grid"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <MbLawCTA />
      </main>

      <MbLawFooter />
    </>
  );
}
