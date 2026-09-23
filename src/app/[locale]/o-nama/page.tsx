import type { Metadata } from "next";
import Image from "next/image";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawApproach from "@/components/MbLawApproach";
import { getPublishedAttorneys } from "@/data/team";
import { isLocale, defaultLocale, intlTags } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";

const FIRM_NAME = "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović";
const FIRM_URL = "https://mblaw.rs";
const FIRM_EMAIL = "office@mblaw.rs";
const FIRM_PHONE = "+381653894111";
const FIRM_STREET = "Resavska 68";
const FIRM_CITY = "Beograd";
const FIRM_COUNTRY = "RS";

// TODO: sadržaj od klijenta (ISO 8601, npr. "2018")
const FOUNDING_DATE = "";

const STORY_IMAGE = "/mb/ChatGPT Image Sep 4, 2026, 04_43_02 PM.webp";
const STORY_PORTRAIT = "/slike jpg/kancelarija.png";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/o-nama">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.nav.about} | ${FIRM_NAME}`,
    description: dict.about.heroLead,
  };
}

function buildJsonLd() {
  const founders = getPublishedAttorneys()
    .filter((attorney) => attorney.founder)
    .map((attorney) => ({
      "@type": "Person" as const,
      name: attorney.name,
      jobTitle: attorney.role,
      url: `${FIRM_URL}/tim/${attorney.slug}`,
    }));
  const partners = getPublishedAttorneys().map((attorney) => ({
    "@type": "Person" as const,
    name: attorney.name,
    jobTitle: attorney.role,
    url: `${FIRM_URL}/tim/${attorney.slug}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization"],
    "@id": `${FIRM_URL}/o-nama#organization`,
    name: FIRM_NAME,
    url: FIRM_URL,
    email: FIRM_EMAIL,
    telephone: FIRM_PHONE,
    foundingDate: FOUNDING_DATE,
    founder: founders,
    employee: partners,
    areaServed: [
      { "@type": "City", name: "Belgrade" },
      { "@type": "Country", name: "Serbia" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: FIRM_STREET,
      addressLocality: FIRM_CITY,
      addressCountry: FIRM_COUNTRY,
    },
  };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/o-nama">) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd, (_, value) =>
            value === "" ? undefined : value,
          ),
        }}
      />

      <section className="relative flex h-[50dvh] min-h-[380px] w-full flex-col bg-[#1B1916] md:min-h-[440px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/mb/kancelarijaSlika1.webp"
            alt="Kancelarija MB Law u Resavskoj 68 u Beogradu"
            fill
            sizes="100vw"
            className="absolute inset-0 z-[1] object-cover object-[72%_58%] md:object-[62%_62%]"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(23,21,18,0.62) 0%, rgba(23,21,18,0.28) 22%, rgba(23,21,18,0.12) 48%, rgba(23,21,18,0.38) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,13,11,0.28) 0%, rgba(15,13,11,0.38) 50%, rgba(15,13,11,0.62) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[2] hidden md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(23,21,18,0.78) 0%, rgba(23,21,18,0.52) 28%, rgba(23,21,18,0.16) 52%, transparent 70%)",
            }}
          />
        </div>

        <MbLawSiteHeader active="about" overlay locale={locale} />

        <div className="relative z-30 mx-6 mt-6 hidden h-px bg-[#2A2723] md:mx-[72px] md:block" />

        <div className="relative z-20 flex flex-1 flex-col justify-center px-6 py-5 md:w-[640px] md:px-[72px] md:py-0">
          <div className="flex flex-nowrap items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-[#C0B9AE] sm:gap-4 sm:text-[11.5px] sm:tracking-[0.2em]">
            <span className="whitespace-nowrap">{dict.about.eyebrow}</span>
            <span className="h-[13px] w-px shrink-0 bg-[#4A443C]" />
            <span className="whitespace-nowrap text-[#8C877D]">{dict.hero.eyebrowRight}</span>
          </div>
          <h1
            className="mt-3 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F1EEE7] sm:text-[40px] md:mt-4 md:text-[48px] md:leading-[1.08] lg:text-[54px]"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {dict.about.heading}
          </h1>
          <p className="mt-3 max-w-[46ch] text-[15.5px] font-medium leading-[1.6] text-[#ACA69D] md:mt-4 md:text-[16.5px] md:font-normal md:leading-[1.7] mb-prose">
            {dict.about.heroLead}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-5 z-20 hidden justify-center md:flex"
        >
          <div className="relative h-9 w-px overflow-hidden bg-[#3A3831]/70">
            <span
              className="absolute inset-x-0 top-0 h-1/2 bg-[#C78B3E]"
              style={{ animation: "mbScrollCue 2.4s ease-in-out infinite" }}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-30 h-px bg-[#2A2723]" />
      </section>

      <main className="w-full bg-[#171512]">
        <section className="relative bg-[#D5CDC0] px-6 py-16 md:px-[72px] md:py-20 lg:py-24 mb-light-section">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Image
              src={STORY_IMAGE}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[78%_72%]"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-[#171512]/22 to-transparent md:h-32"
          />

          <div className="relative z-[2] mb-section-shell">
            <div className="max-w-[54ch] lg:max-w-none lg:w-[calc(50%-36px)]">
              <div className="h-px w-16 bg-[#C78B3E]" />
              <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
                {dict.about.storyEyebrow}
              </span>
              <h2
                className="mt-5 max-w-[12ch] text-[29px] font-bold leading-[1.16] tracking-[-0.015em] sm:text-[35px] md:text-[40px] mb-light-heading"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {dict.about.storyTitle}
              </h2>

              <div
                lang={intlTags[locale]}
                className="mt-8 space-y-5 text-[16px] leading-[1.75] md:text-[17px] mb-light-body mb-prose"
              >
                {dict.about.storyParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <figure className="relative mt-10 flex min-h-[280px] flex-col border border-[#C78B3E]/70 p-2.5 sm:min-h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:min-h-0 lg:w-[calc(50%-36px)]">
              <span className="relative block min-h-[260px] flex-1 overflow-hidden sm:min-h-[320px] lg:min-h-0">
                <Image
                  src={STORY_PORTRAIT}
                  alt="Sala za sastanke kancelarije MB Law"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  quality={90}
                />
              </span>
            </figure>
          </div>
        </section>

        <MbLawApproach
          eyebrow={dict.about.howEyebrow}
          title={dict.about.howTitle}
          lead={dict.about.paragraph2}
          steps={dict.about.howSteps}
          stepLabel={dict.about.stepLabel}
          navAriaLabel={dict.about.approachNavLabel}
        />

        <MbLawCTA locale={locale} />
      </main>

      <MbLawFooter locale={locale} />
    </>
  );
}
