import type { Metadata } from "next";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawTeamCards from "@/components/MbLawTeamCards";
import MbLawTeamNetwork from "@/components/MbLawTeamNetwork";
import {
  TEAM_HEADING,
  TEAM_PARTNERS_LABEL,
  getPublishedAttorneys,
} from "@/data/team";

const FIRM_NAME = "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović";
const FIRM_URL = "https://mblaw.rs";

export const metadata: Metadata = {
  title: `Tim | ${FIRM_NAME}`,
  description:
    "Upoznajte pravni tim advokatske kancelarije MB Law u Beogradu. Partneri Dušan S. Marković, Milovan M. Bogdanović i Isidora V. Marković.",
};

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${FIRM_URL}/tim#page`,
    url: `${FIRM_URL}/tim`,
    name: `Tim | ${FIRM_NAME}`,
    description:
      "Partneri advokatske kancelarije MB Law: Dušan S. Marković, Milovan M. Bogdanović i Isidora V. Marković.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: getPublishedAttorneys().map((attorney, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${FIRM_URL}/tim/${attorney.slug}`,
          name: attorney.name,
        })),
    },
  };
}

export default function TeamPage() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <MbLawSiteHeader active="TIM" />

      <main className="w-full bg-[#D5CDC0]">
        <section className="relative overflow-hidden px-6 py-14 md:px-[72px] md:py-16 lg:py-20 mb-light-section">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(165deg, #CEC5B8 0%, #DAD2C6 42%, #D0C8BC 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_100%,rgba(199,139,62,0.11),transparent_52%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#171512]/22 to-transparent md:h-32"
          />

          <div className="relative mb-section-shell">
            <div className="h-px w-16 bg-[#C78B3E]" />
            <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
              TIM
            </span>
            <h1
              className="mt-5 whitespace-nowrap text-[22px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[32px] md:text-[40px] lg:text-[46px] mb-light-heading"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {TEAM_HEADING}
            </h1>

            <div className="mt-12 border-t border-[#C9C0AF] pt-10">
              <span className="block text-[10.5px] font-semibold tracking-[0.22em] text-[#C78B3E]">
                {TEAM_PARTNERS_LABEL}
              </span>
              <div className="mt-6">
                <MbLawTeamCards />
              </div>
            </div>
          </div>
        </section>

        <MbLawTeamNetwork />

        <MbLawCTA />
      </main>

      <MbLawFooter />
    </>
  );
}
