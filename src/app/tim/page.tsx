import type { Metadata } from "next";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawTeamCards from "@/components/MbLawTeamCards";
import { attorneys } from "@/data/team";

const FIRM_NAME = "MB Law – Marković, Bogdanović & Partners";
const FIRM_URL = "https://mblaw.rs";

export const metadata: Metadata = {
  title: `Tim | ${FIRM_NAME}`,
  description:
    "Osnivački partneri advokatske kancelarije Marković i Bogdanović u Beogradu. Dušan S. Marković i Milovan M. Bogdanović vode predmete lično.",
};

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${FIRM_URL}/tim#page`,
    url: `${FIRM_URL}/tim`,
    name: `Tim | ${FIRM_NAME}`,
    description:
      "Osnivački partneri advokatske kancelarije Marković i Bogdanović.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: attorneys
        .filter((attorney) => !attorney.comingSoon)
        .map((attorney, index) => ({
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
              className="mt-5 max-w-[16ch] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              Osnivački partneri.
            </h1>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.75] md:text-[17px] mb-light-body">
              Od prvog razgovora klijent zna ko vodi predmet. Dušan i Milovan
              vode predmete lično, uz isti standard pažnje i odgovornosti.
            </p>

            <div className="mt-12 border-t border-[#C9C0AF] pt-10">
              <MbLawTeamCards />
            </div>
          </div>
        </section>

        <MbLawCTA />
      </main>

      <MbLawFooter />
    </>
  );
}
