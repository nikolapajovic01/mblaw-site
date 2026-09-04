import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawCTA from "@/components/MbLawCTA";
import {
  getPracticeArea,
  getPracticeAreaTag,
  getPracticeGroupForArea,
  getPracticeGroupHref,
  getPracticeMenuGroup,
  practiceAreas,
  practiceMenuGroups,
  type PracticeArea,
  type PracticeAreaSection,
  type PracticeMenuGroup,
} from "@/data/practice-areas";

const FIRM_NAME = "MB Law – Marković, Bogdanović & Partners";
const FIRM_URL = "https://mblaw.rs";

function toSectionId(heading: string, index: number) {
  const slug = heading
    .toLowerCase()
    .replace(/đ/g, "dj")
    .replace(/[čć]/g, "c")
    .replace(/š/g, "s")
    .replace(/ž/g, "z")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || `deo-${index + 1}`;
}

export function generateStaticParams() {
  const areaSlugs = new Set(practiceAreas.map((area) => area.slug));
  return [
    ...practiceAreas.map((area) => ({ slug: area.slug })),
    ...practiceMenuGroups
      .filter((group) => !areaSlugs.has(group.slug))
      .map((group) => ({ slug: group.slug })),
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/oblasti-rada/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (area) {
    return {
      title: `${area.title} | ${FIRM_NAME}`,
      description: area.summary,
    };
  }

  const group = getPracticeMenuGroup(slug);
  if (group?.areaSlugs.length === 1) {
    const leaf = getPracticeArea(group.areaSlugs[0]);
    if (leaf) {
      return {
        title: `${leaf.title} | ${FIRM_NAME}`,
        description: leaf.summary,
      };
    }
  }
  if (group) {
    return {
      title: `${group.title} | ${FIRM_NAME}`,
      description: group.summary,
    };
  }

  return {};
}

export default async function PracticeAreaPage({
  params,
}: PageProps<"/oblasti-rada/[slug]">) {
  const { slug } = await params;
  const groupPage = getPracticeMenuGroup(slug);
  if (groupPage && groupPage.areaSlugs.length === 1) {
    redirect(`/oblasti-rada/${groupPage.areaSlugs[0]}`);
  }
  if (groupPage && !getPracticeArea(slug)) {
    return <PracticeGroupHub group={groupPage} />;
  }

  const area = getPracticeArea(slug);
  if (!area) notFound();

  const group = getPracticeGroupForArea(slug);
  const groupSlugs = group?.areaSlugs ?? [];
  const groupIndex = groupSlugs.indexOf(slug);
  const prev = groupIndex > 0 ? getPracticeArea(groupSlugs[groupIndex - 1]) : undefined;
  const next =
    groupIndex >= 0 && groupIndex < groupSlugs.length - 1
      ? getPracticeArea(groupSlugs[groupIndex + 1])
      : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    description: area.summary,
    url: `${FIRM_URL}/oblasti-rada/${area.slug}`,
    inLanguage: "sr",
    provider: {
      "@type": "LegalService",
      name: FIRM_NAME,
      url: FIRM_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Resavska 68",
        addressLocality: "Beograd",
        addressCountry: "RS",
      },
    },
    areaServed: [
      { "@type": "City", name: "Belgrade" },
      { "@type": "Country", name: "Serbia" },
    ],
  };

  const headings = area.sections
    .map((section, index) =>
      section.heading
        ? { id: toSectionId(section.heading, index), label: section.heading }
        : null,
    )
    .filter((item): item is { id: string; label: string } => Boolean(item));
  const showAside =
    headings.length >= 2 || Boolean(group && group.areaSlugs.length > 1);

  return (
    <ParchmentPage
      jsonLd={jsonLd}
      pager={<PracticePager prev={prev} next={next} />}
    >
      <PracticeBreadcrumb current={area.title} />

      <div className="relative mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 lg:grid-cols-[minmax(0,54ch)_minmax(0,1fr)] lg:gap-x-16">
        <div className="min-w-0">
          <div className="h-px w-16 bg-[#C78B3E]" />
          {group ? (
            <Link
              href={
                group.areaSlugs.length > 1
                  ? `/oblasti-rada/${group.slug}`
                  : "/oblasti-rada"
              }
              className="mt-6 inline-block text-[10.5px] font-semibold tracking-[0.22em] no-underline transition-colors hover:text-[#C78B3E] mb-light-eyebrow"
            >
              {group.title}
            </Link>
          ) : (
            <span className="mt-6 block text-[10.5px] tracking-[0.26em] mb-light-eyebrow">
              OBLASTI RADA
            </span>
          )}
          <h1
            className={`max-w-[16ch] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading ${
              group ? "mt-3" : "mt-5"
            }`}
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {area.title}
          </h1>
          {area.intro.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 32)}
              className={`text-[16px] leading-[1.75] md:text-[17px] mb-light-body ${
                i === 0 ? "mt-6" : "mt-5"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <PracticeMonogram />
      </div>

      <div
        className={
          showAside
            ? "mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-x-[72px]"
            : "mt-12"
        }
      >
        {showAside ? (
          <PracticeAside
            group={group}
            currentSlug={area.slug}
            headings={headings}
          />
        ) : null}

        <article className={showAside ? "min-w-0 lg:col-start-1 lg:row-start-1" : "min-w-0"}>
          <div>
            {area.sections.map((section, i) => (
              <PracticeSection
                key={i}
                section={section}
                id={section.heading ? toSectionId(section.heading, i) : undefined}
              />
            ))}
          </div>

          {area.closing ? (
            <p className="mt-10 max-w-[54ch] text-[16px] leading-[1.75] md:text-[17px] mb-light-body">
              {area.closing}
            </p>
          ) : null}

          <div className="mt-12 border-t border-[#C9C0AF] pt-8">
            <p className="max-w-[46ch] text-[15px] leading-[1.7] mb-light-muted">
              Ako je ovo vaš predmet, prvi korak je razgovor.
            </p>
            <Link
              href="/kontakt"
              className="mt-5 inline-flex h-[50px] items-center bg-[#C78B3E] px-8 text-[11px] font-semibold tracking-[0.17em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C] sm:h-[52px]"
            >
              ZAKAŽITE KONSULTACIJU
            </Link>
          </div>
        </article>
      </div>
    </ParchmentPage>
  );
}

function PracticeGroupHub({ group }: { group: PracticeMenuGroup }) {
  const areas = group.areaSlugs
    .map((item) => getPracticeArea(item))
    .filter((item): item is PracticeArea => Boolean(item));
  const groupNo = String(practiceMenuGroups.findIndex((item) => item.slug === group.slug) + 1).padStart(
    2,
    "0",
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: group.title,
    description: group.summary,
    url: `${FIRM_URL}/oblasti-rada/${group.slug}`,
    inLanguage: "sr",
    isPartOf: { "@type": "WebSite", name: FIRM_NAME, url: FIRM_URL },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: areas.map((area, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${FIRM_URL}/oblasti-rada/${area.slug}`,
        name: area.title,
      })),
    },
  };

  return (
    <ParchmentPage
      jsonLd={jsonLd}
      pager={
        <nav aria-label="Navigacija oblasti" className="mt-14 border-t border-[#C9C0AF] pt-8">
          <Link
            href="/oblasti-rada"
            className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              <path
                d="M10 6H2M4.5 2.5 1 6l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            SVE OBLASTI RADA
          </Link>
        </nav>
      }
    >
      <PracticeBreadcrumb current={group.title} />

      <div className="relative mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 lg:grid-cols-[minmax(0,54ch)_minmax(0,1fr)] lg:gap-x-16">
        <div className="min-w-0">
          <div className="h-px w-16 bg-[#C78B3E]" />
          <span className="mt-6 block text-[10.5px] tracking-[0.26em] mb-light-eyebrow">
            OBLASTI RADA · {groupNo}
          </span>
          <h1
            className="mt-5 max-w-[16ch] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {group.title}
          </h1>
          <p className="mt-6 text-[16px] leading-[1.75] md:text-[17px] mb-light-body">
            {group.summary}
          </p>
        </div>

        <PracticeMonogram />
      </div>

      <ol className="mt-14 grid border-t border-[#C9C0AF] md:grid-cols-2 md:gap-x-[72px]">
        {areas.map((area, index) => (
          <li key={area.slug}>
            <Link
              href={`/oblasti-rada/${area.slug}`}
              className="group/row grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-x-1 border-b border-[#C9C0AF] py-7 no-underline md:grid-cols-[3.25rem_minmax(0,1fr)] md:py-8"
            >
              <span className="pt-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#C78B3E]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span
                  className="block text-[20px] font-semibold leading-[1.2] tracking-[-0.01em] transition-colors group-hover/row:text-[#C78B3E] md:text-[22px] mb-light-heading"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {area.title}
                </span>
                <span className="mt-2 block text-[15px] leading-[1.7] md:text-[15.5px] mb-light-muted">
                  {area.summary}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </ParchmentPage>
  );
}

function PracticeSection({
  section,
  id,
}: {
  section: PracticeAreaSection;
  id?: string;
}) {
  const labeled = section.items?.filter((item) => item.label) ?? [];
  const unlabeled = section.items?.filter((item) => !item.label) ?? [];
  const hasLead = Boolean(section.heading || section.intro?.length);

  return (
    <section id={id} className="scroll-mt-10 border-t border-[#C9C0AF] py-10 md:py-12">
      {section.heading ? (
        <h2
          className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em] md:text-[26px] mb-light-heading"
          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
        >
          {section.heading}
        </h2>
      ) : null}

      {section.intro?.map((paragraph, i) => (
        <p
          key={i}
          className={`max-w-[54ch] text-[15.5px] leading-[1.75] md:text-[16.5px] mb-light-muted ${
            section.heading || i > 0 ? "mt-5" : "mt-0"
          }`}
        >
          {paragraph}
        </p>
      ))}

      {unlabeled.map((item, i) => (
        <p
          key={`plain-${i}`}
          className={`max-w-[54ch] text-[15.5px] leading-[1.75] md:text-[16.5px] mb-light-muted ${
            hasLead || i > 0 ? "mt-5" : "mt-0"
          }`}
        >
          {item.desc}
        </p>
      ))}

      {labeled.length > 0 ? (
        <ol
          className={`grid sm:grid-cols-2 sm:gap-x-10 ${
            hasLead ? "mt-8 border-t border-[#C9C0AF]" : ""
          }`}
        >
          {labeled.map((item, i) => (
            <li key={item.label} className="border-b border-[#C9C0AF] py-6">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-[#C78B3E]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="mt-3 text-[17px] font-semibold leading-[1.25] tracking-[-0.01em] md:text-[18px] mb-light-heading"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {item.label}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.7] md:text-[15px] mb-light-muted">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}

function PracticeAside({
  group,
  currentSlug,
  headings,
}: {
  group?: PracticeMenuGroup | null;
  currentSlug: string;
  headings: { id: string; label: string }[];
}) {
  const showCelina = Boolean(group && group.areaSlugs.length > 1);
  const showToc = headings.length >= 2;
  if (!showCelina && !showToc) return null;

  return (
    <aside className="border-t border-[#C9C0AF] pt-6 lg:col-start-2 lg:row-start-1 lg:sticky lg:top-8 lg:border-t-0 lg:pt-0">
      {showToc ? (
        <nav aria-label="Sadržaj stranice">
          <span className="block text-[10.5px] font-semibold tracking-[0.22em] mb-light-eyebrow">
            NA OVOJ STRANICI
          </span>
          <ol className="mt-4 flex flex-col">
            {headings.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-1 border-b border-[#C9C0AF] py-2.5 no-underline"
                >
                  <span className="pt-0.5 text-[10.5px] font-semibold tracking-[0.14em] text-[#C78B3E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-snug transition-colors group-hover:text-[#C78B3E] mb-light-heading">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {showCelina && group ? (
        <div className={showToc ? "mt-10" : ""}>
          <span className="block text-[10.5px] font-semibold tracking-[0.22em] mb-light-eyebrow">
            U OVOJ CELINI
          </span>
          <Link
            href={getPracticeGroupHref(group)}
            className="mt-3 block text-[15px] font-semibold leading-snug no-underline transition-colors hover:text-[#C78B3E] mb-light-heading"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {group.title}
          </Link>
          <ul className="mt-4 flex flex-col gap-2.5">
            {group.areaSlugs.map((slug) => {
              const item = getPracticeArea(slug);
              if (!item) return null;
              const current = item.slug === currentSlug;
              return (
                <li key={item.slug}>
                  {current ? (
                    <span className="text-[14px] leading-snug mb-light-heading" aria-current="page">
                      {getPracticeAreaTag(item)}
                    </span>
                  ) : (
                    <Link
                      href={`/oblasti-rada/${item.slug}`}
                      className="text-[14px] leading-snug no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
                    >
                      {getPracticeAreaTag(item)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}

function PracticeMonogram() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex justify-end pt-8 lg:pt-[4.25rem]"
    >
      <Image
        src="/mb/mb-logo.webp"
        alt=""
        width={220}
        height={220}
        className="h-[112px] w-[112px] object-contain opacity-[0.38] mix-blend-screen sm:h-[160px] sm:w-[160px] lg:h-[220px] lg:w-[220px] lg:opacity-[0.32] xl:h-[260px] xl:w-[260px]"
      />
    </div>
  );
}

function PracticeBreadcrumb({ current }: { current: string }) {
  return (
    <nav
      aria-label="Putanja"
      className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13.5px] md:text-[14px] mb-light-muted"
    >
      <Link href="/" className="no-underline transition-colors hover:text-[#C78B3E]">
        Početna
      </Link>
      <span aria-hidden="true" className="text-[#A39A8C]">
        /
      </span>
      <Link
        href="/oblasti-rada"
        className="no-underline transition-colors hover:text-[#C78B3E]"
      >
        Oblasti rada
      </Link>
      <span aria-hidden="true" className="text-[#A39A8C]">
        /
      </span>
      <span className="mb-light-heading">{current}</span>
    </nav>
  );
}

function PracticePager({
  prev,
  next,
}: {
  prev?: PracticeArea;
  next?: PracticeArea;
}) {
  return (
    <nav
      aria-label="Susedne oblasti"
      className="mt-14 flex items-center justify-between gap-6 border-t border-[#C9C0AF] pt-8"
    >
      {prev ? (
        <Link
          href={`/oblasti-rada/${prev.slug}`}
          className="group inline-flex min-w-0 items-center gap-2 text-[12px] font-semibold tracking-[0.14em] no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
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
          <span className="truncate">{getPracticeAreaTag(prev)}</span>
        </Link>
      ) : (
        <Link
          href="/oblasti-rada"
          className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.16em] no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
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
          SVE OBLASTI RADA
        </Link>
      )}
      {next ? (
        <Link
          href={`/oblasti-rada/${next.slug}`}
          className="group inline-flex min-w-0 items-center gap-2 text-right text-[12px] font-semibold tracking-[0.14em] no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
        >
          <span className="truncate">{getPracticeAreaTag(next)}</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path
              d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

function ParchmentPage({
  jsonLd,
  children,
  pager,
}: {
  jsonLd: object;
  children: ReactNode;
  pager?: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MbLawSiteHeader active="OBLASTI RADA" />

      <main className="w-full bg-[#D5CDC0]">
        <section className="relative isolate overflow-hidden bg-[#D5CDC0] px-6 py-14 md:px-[72px] md:py-16 lg:py-20 mb-light-section">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[100dvh] max-h-full">
            <Image
              src="/mb/ChatGPT Image Sep 4, 2026, 04_43_02 PM.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[78%_72%]"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#D5CDC0] to-transparent"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-[#171512]/22 to-transparent md:h-32"
          />

          <div className="relative z-[2] mb-section-shell">
            {children}
            {pager}
          </div>
        </section>

        <MbLawCTA />
      </main>

      <MbLawFooter />
    </>
  );
}
