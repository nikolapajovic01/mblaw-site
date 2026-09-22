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
  getPracticeMenuGroup,
  practiceAreas,
  practiceMenuGroups,
  type PracticeArea,
  type PracticeAreaSection,
  type PracticeMenuGroup,
} from "@/data/practice-areas";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getNavHref, getPracticeGroupHref } from "@/i18n/nav";
import { getDictionary } from "@/dictionaries";
import { getPracticeContent } from "@/dictionaries";
import type { Dictionary } from "@/dictionaries/types";
import type { PracticeContentTranslation } from "@/dictionaries/practice-content/types";

function localizedArea(area: PracticeArea, content?: PracticeContentTranslation): PracticeArea {
  const t = content?.areas[area.slug];
  if (!t) return area;
  return { ...area, title: t.title, summary: t.summary, intro: t.intro, sections: t.sections, closing: t.closing };
}

function groupTitle(group: PracticeMenuGroup, dict: Dictionary): string {
  return dict.practiceAreas.groups[group.slug]?.title ?? group.title;
}

function groupSummary(group: PracticeMenuGroup, content?: PracticeContentTranslation): string {
  return content?.groupSummaries[group.slug] ?? group.summary;
}

function areaTag(area: PracticeArea, content?: PracticeContentTranslation): string {
  return content?.areaTags[area.slug] ?? getPracticeAreaTag(area);
}

const FIRM_NAME = "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović";
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
}: PageProps<"/[locale]/oblasti-rada/[slug]">): Promise<Metadata> {
  const { slug, locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const content = getPracticeContent(locale);

  const area = getPracticeArea(slug);
  if (area) {
    const localized = localizedArea(area, content);
    return {
      title: `${localized.title} | ${FIRM_NAME}`,
      description: localized.summary,
    };
  }

  const group = getPracticeMenuGroup(slug);
  if (group?.areaSlugs.length === 1) {
    const leaf = getPracticeArea(group.areaSlugs[0]);
    if (leaf) {
      const localized = localizedArea(leaf, content);
      return {
        title: `${localized.title} | ${FIRM_NAME}`,
        description: localized.summary,
      };
    }
  }
  if (group) {
    const dict = getDictionary(locale);
    return {
      title: `${groupTitle(group, dict)} | ${FIRM_NAME}`,
      description: groupSummary(group, content),
    };
  }

  return {};
}

export default async function PracticeAreaPage({
  params,
}: PageProps<"/[locale]/oblasti-rada/[slug]">) {
  const { slug, locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const content = getPracticeContent(locale);
  const groupPage = getPracticeMenuGroup(slug);
  if (groupPage && groupPage.areaSlugs.length === 1 && !getPracticeArea(slug)) {
    redirect(`${getNavHref("practiceAreas", locale)}/${groupPage.areaSlugs[0]}`);
  }
  if (groupPage && !getPracticeArea(slug)) {
    return <PracticeGroupHub group={groupPage} locale={locale} />;
  }

  const rawArea = getPracticeArea(slug);
  if (!rawArea) notFound();
  const area = localizedArea(rawArea, content);

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
    inLanguage: locale,
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
      pager={<PracticePager prev={prev} next={next} locale={locale} dict={dict} content={content} />}
      locale={locale}
    >
      <PracticeBreadcrumb current={area.title} locale={locale} dict={dict} />

      <div className="relative mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 lg:grid-cols-[minmax(0,54ch)_minmax(0,1fr)] lg:gap-x-16">
        <div className="min-w-0">
          <div className="h-px w-16 bg-[#C78B3E]" />
          {group ? (
            <Link
              href={getPracticeGroupHref(group, locale)}
              className="mt-6 inline-block text-[10.5px] font-semibold tracking-[0.22em] no-underline transition-colors hover:text-[#C78B3E] mb-light-eyebrow"
            >
              {groupTitle(group, dict)}
            </Link>
          ) : (
            <span className="mt-6 block text-[10.5px] tracking-[0.26em] mb-light-eyebrow">
              {dict.practiceAreas.eyebrow}
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
              className={`text-[16px] leading-[1.75] md:text-[17px] mb-light-body mb-prose ${
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
            locale={locale}
            dict={dict}
            content={content}
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
            <p className="mt-10 max-w-[54ch] text-[16px] leading-[1.75] md:text-[17px] mb-light-body mb-prose">
              {area.closing}
            </p>
          ) : null}

          <div className="mt-12 border-t border-[#C9C0AF] pt-8">
            <p className="max-w-[46ch] text-[15px] leading-[1.7] mb-light-muted">
              {dict.common.firstStepCta}
            </p>
            <Link
              href={getNavHref("contact", locale)}
              className="mt-5 inline-flex h-[50px] items-center bg-[#C78B3E] px-8 text-[11px] font-semibold tracking-[0.17em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C] sm:h-[52px]"
            >
              {dict.hero.ctaPrimary}
            </Link>
          </div>
        </article>
      </div>
    </ParchmentPage>
  );
}

function PracticeGroupHub({
  group,
  locale,
}: {
  group: PracticeMenuGroup;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const content = getPracticeContent(locale);
  const areas = group.areaSlugs
    .map((item) => getPracticeArea(item))
    .filter((item): item is PracticeArea => Boolean(item))
    .map((item) => localizedArea(item, content));
  const title = groupTitle(group, dict);
  const summary = groupSummary(group, content);
  const groupNo = String(practiceMenuGroups.findIndex((item) => item.slug === group.slug) + 1).padStart(
    2,
    "0",
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: summary,
    url: `${FIRM_URL}/oblasti-rada/${group.slug}`,
    inLanguage: locale,
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
      locale={locale}
      pager={
        <nav aria-label={dict.practiceAreas.groupNavLabel} className="mt-14 border-t border-[#C9C0AF] pt-8">
          <Link
            href={getNavHref("practiceAreas", locale)}
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
            {dict.practiceAreas.viewAll}
          </Link>
        </nav>
      }
    >
      <PracticeBreadcrumb current={title} locale={locale} dict={dict} />

      <div className="relative mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 lg:grid-cols-[minmax(0,54ch)_minmax(0,1fr)] lg:gap-x-16">
        <div className="min-w-0">
          <div className="h-px w-16 bg-[#C78B3E]" />
          <span className="mt-6 block text-[10.5px] tracking-[0.26em] mb-light-eyebrow">
            {dict.practiceAreas.groupPrefix} · {groupNo}
          </span>
          <h1
            className="mt-5 max-w-[16ch] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {title}
          </h1>
          <p className="mt-6 text-[16px] leading-[1.75] md:text-[17px] mb-light-body mb-prose">
            {summary}
          </p>
        </div>

        <PracticeMonogram />
      </div>

      <ol
        className={`mt-14 grid border-t border-l border-[#C9C0AF] ${
          areas.length === 2
            ? "md:grid-cols-2"
            : areas.length === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {areas.map((area, index) => (
          <li key={area.slug} className="border-b border-r border-[#C9C0AF]">
            <Link
              href={`${getNavHref("practiceAreas", locale)}/${area.slug}`}
              className="group/row relative flex h-full flex-col px-5 py-7 no-underline md:px-6 md:py-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#C78B3E] transition-transform duration-500 group-hover/row:scale-x-100 motion-reduce:transition-none motion-reduce:group-hover/row:scale-x-0"
              />
              <span className="text-[11px] font-semibold tracking-[0.18em] text-[#C78B3E]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="mt-4 block text-[20px] font-semibold leading-[1.2] tracking-[-0.01em] transition-colors duration-300 group-hover/row:text-[#C78B3E] md:text-[22px] mb-light-heading"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {area.title}
              </span>
              <span className="mt-3 block text-[15px] leading-[1.7] md:text-[15.5px] mb-light-muted">
                {area.summary}
              </span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[10.5px] font-semibold tracking-[0.16em] text-[#8A8173] transition-colors duration-300 group-hover/row:text-[#C78B3E]">
                {dict.practiceAreas.details}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover/row:translate-x-0.5"
                >
                  <path
                    d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
          className={`max-w-[54ch] text-[15.5px] leading-[1.75] md:text-[16.5px] mb-light-muted mb-prose ${
            section.heading || i > 0 ? "mt-5" : "mt-0"
          }`}
        >
          {paragraph}
        </p>
      ))}

      {unlabeled.map((item, i) => (
        <p
          key={`plain-${i}`}
          className={`max-w-[54ch] text-[15.5px] leading-[1.75] md:text-[16.5px] mb-light-muted mb-prose ${
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
              <p className="mt-2.5 text-[14.5px] leading-[1.7] md:text-[15px] mb-light-muted mb-prose">
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
  locale,
  dict,
  content,
}: {
  group?: PracticeMenuGroup | null;
  currentSlug: string;
  headings: { id: string; label: string }[];
  locale: Locale;
  dict: Dictionary;
  content?: PracticeContentTranslation;
}) {
  const showCelina = Boolean(group && group.areaSlugs.length > 1);
  const showToc = headings.length >= 2;
  if (!showCelina && !showToc) return null;

  return (
    <aside className="border-t border-[#C9C0AF] pt-6 lg:col-start-2 lg:row-start-1 lg:sticky lg:top-8 lg:border-t-0 lg:pt-0">
      {showToc ? (
        <nav aria-label={dict.practiceAreas.tocLabel}>
          <span className="block text-[10.5px] font-semibold tracking-[0.22em] mb-light-eyebrow">
            {dict.practiceAreas.onThisPage}
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
            {dict.practiceAreas.inThisGroup}
          </span>
          <Link
            href={getPracticeGroupHref(group, locale)}
            className="mt-3 block text-[15px] font-semibold leading-snug no-underline transition-colors hover:text-[#C78B3E] mb-light-heading"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {groupTitle(group, dict)}
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
                      {areaTag(item, content)}
                    </span>
                  ) : (
                    <Link
                      href={`${getNavHref("practiceAreas", locale)}/${item.slug}`}
                      className="text-[14px] leading-snug no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
                    >
                      {areaTag(item, content)}
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

function PracticeBreadcrumb({
  current,
  locale,
  dict,
}: {
  current: string;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <nav
      aria-label={dict.practiceAreas.breadcrumbLabel}
      className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13.5px] md:text-[14px] mb-light-muted"
    >
      <Link href={getNavHref("home", locale)} className="no-underline transition-colors hover:text-[#C78B3E]">
        {dict.nav.home}
      </Link>
      <span aria-hidden="true" className="text-[#A39A8C]">
        /
      </span>
      <Link
        href={getNavHref("practiceAreas", locale)}
        className="no-underline transition-colors hover:text-[#C78B3E]"
      >
        {dict.nav.practiceAreas}
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
  locale,
  dict,
  content,
}: {
  prev?: PracticeArea;
  next?: PracticeArea;
  locale: Locale;
  dict: Dictionary;
  content?: PracticeContentTranslation;
}) {
  return (
    <nav
      aria-label={dict.practiceAreas.pagerLabel}
      className="mt-14 flex items-center justify-between gap-6 border-t border-[#C9C0AF] pt-8"
    >
      {prev ? (
        <Link
          href={`${getNavHref("practiceAreas", locale)}/${prev.slug}`}
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
          <span className="truncate">{areaTag(prev, content)}</span>
        </Link>
      ) : (
        <Link
          href={getNavHref("practiceAreas", locale)}
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
          {dict.practiceAreas.viewAll}
        </Link>
      )}
      {next ? (
        <Link
          href={`${getNavHref("practiceAreas", locale)}/${next.slug}`}
          className="group inline-flex min-w-0 items-center gap-2 text-right text-[12px] font-semibold tracking-[0.14em] no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
        >
          <span className="truncate">{areaTag(next, content)}</span>
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
  locale,
}: {
  jsonLd: object;
  children: ReactNode;
  pager?: ReactNode;
  locale: Locale;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MbLawSiteHeader active="practiceAreas" locale={locale} />

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

        <MbLawCTA locale={locale} />
      </main>

      <MbLawFooter locale={locale} />
    </>
  );
}
