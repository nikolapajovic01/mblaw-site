import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawApproach from "@/components/MbLawApproach";
import { getPublishedAttorneys } from "@/data/team";

const FIRM_NAME = "MB Law – Marković, Bogdanović & Partners";
const FIRM_URL = "https://mblaw.rs";
const FIRM_EMAIL = "office@mblaw.rs";
const FIRM_PHONE = "+381112223344";
const FIRM_STREET = "Resavska 68";
const FIRM_CITY = "Beograd";
const FIRM_COUNTRY = "RS";

// TODO: sadržaj od klijenta (ISO 8601, npr. "2018")
const FOUNDING_DATE = "";

const copy = {
  metaTitle: `O nama | ${FIRM_NAME}`,
  metaDescription:
    "Zajednička advokatska kancelarija Marković i Bogdanović u Beogradu. Osnivači vode predmete lično, za domaće i inostrane klijente.",
  heroEyebrow: "O NAMA",
  heroTitle: "Od pitanja do rešenja.",
  heroLead:
    "Zajednička advokatska kancelarija Marković i Bogdanović, sa sedištem u Resavskoj 68 u Beogradu.",
  storyEyebrow: "PRIČA",
  storyTitle: "Kako je kancelarija nastala.",
  storyImage: "/mb/ChatGPT Image Sep 4, 2026, 04_43_02 PM.webp",
  storyPortrait: "/mb/kancelarijaSlika.webp",
  storyParagraphs: [
    "MB Law je zajednička advokatska kancelarija Dušana S. Markovića i Milovana M. Bogdanovića, izgrađena na jednoj jednostavnoj ideji: klijent od prvog razgovora zna ko vodi njegov predmet, i ta osoba ostaje uz njega do kraja.",
    "Zastupamo domaća i strana pravna i fizička lica, a svima dugujemo isto: jasan odgovor umesto uopštene utehe. Iz svakog razgovora izlazite znajući tri stvari: šta je moguće uraditi, do kog roka, i gde leži stvaran rizik.",
    "Ne posežemo za gotovim obrascima. Svaki predmet počinje od činjenica koje su pred nama i propisa koji ih uređuju. Plan dolazi tek posle, nikada pre.",
  ],
  howEyebrow: "PRISTUP",
  howTitle: "Kako vodimo predmet.",
  howLead:
    "Predmet ima jednog partnera koji odgovara za tok. Od prvog razgovora klijent zna ime. Gde oblast to zahteva, u rad ulaze saradnici pod tim vođenjem.",
  howSteps: [
    {
      no: "01",
      title: "Prvo čujemo šta se desilo.",
      text: "Sastanemo se. Čujemo činjenice, šta klijent hoće, i koji su rokovi. Tek posle toga se piše plan, ne pre.",
    },
    {
      no: "02",
      title: "Jedan partner odgovara.",
      text: "Predmet preuzima Dušan ili Milovan. Gde je potrebna uža specijalizacija, angažujemo saradnike i partnere za tu oblast, pod njihovim vođenjem. Klijent uvek zna ko vodi spis, i ko stoji iza svakog koraka.",
    },
    {
      no: "03",
      title: "Isti partner do kraja.",
      text: "Od prvog saveta do zatvaranja posla ili okončanja postupka klijent ostaje sa istim partnerom. Priču ne priča iz početka svaki put.",
    },
  ],
};

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
};

function buildJsonLd() {
  const founders = getPublishedAttorneys().map((attorney) => ({
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

export default function AboutPage() {
  const jsonLd = buildJsonLd();
  const founders = getPublishedAttorneys();

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

        <MbLawSiteHeader active="O NAMA" overlay />

        <div className="relative z-30 mx-6 mt-6 hidden h-px bg-[#2A2723] md:mx-[72px] md:block" />

        <div className="relative z-20 flex flex-1 flex-col justify-center px-6 py-5 md:w-[640px] md:px-[72px] md:py-0">
          <div className="flex flex-nowrap items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-[#C0B9AE] sm:gap-4 sm:text-[11.5px] sm:tracking-[0.2em]">
            <span className="whitespace-nowrap">{copy.heroEyebrow}</span>
            <span className="h-[13px] w-px shrink-0 bg-[#4A443C]" />
            <span className="whitespace-nowrap text-[#8C877D]">BEOGRAD, SRBIJA</span>
          </div>
          <h1
            className="mt-3 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F1EEE7] sm:text-[40px] md:mt-4 md:text-[48px] md:leading-[1.08] lg:text-[54px]"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {copy.heroTitle}
          </h1>
          <p className="mt-3 max-w-[46ch] text-[15.5px] font-medium leading-[1.6] text-[#ACA69D] md:mt-4 md:text-[16.5px] md:font-normal md:leading-[1.7]">
            {copy.heroLead}
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
        <section className="relative overflow-hidden bg-[#D5CDC0] px-6 py-16 md:px-[72px] md:py-20 lg:py-24 mb-light-section">
          <Image
            src={copy.storyImage}
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none object-cover object-[78%_72%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-[#171512]/22 to-transparent md:h-32"
          />

          <div className="relative z-[2] mb-section-shell">
            <div className="max-w-[54ch] lg:max-w-none lg:w-[calc(50%-36px)]">
              <div className="h-px w-16 bg-[#C78B3E]" />
              <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
                {copy.storyEyebrow}
              </span>
              <h2
                className="mt-5 max-w-[14ch] text-[29px] font-bold leading-[1.16] tracking-[-0.015em] sm:text-[35px] md:text-[40px] mb-light-heading"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {copy.storyTitle}
              </h2>

              {copy.storyParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 28)}
                  className={
                    index === 0
                      ? "mt-8 text-[17px] leading-[1.75] md:text-[18px] mb-light-body"
                      : "mt-5 text-[16px] leading-[1.75] md:text-[17px] mb-light-body"
                  }
                >
                  {paragraph}
                </p>
              ))}

              <ul className="mt-12 grid gap-8 border-t border-[#C9C0AF] pt-8 sm:grid-cols-2 sm:gap-x-10">
                {founders.map((attorney) => (
                  <li key={attorney.slug}>
                    <Link
                      href={`/tim/${attorney.slug}`}
                      className="group block no-underline"
                    >
                      <span className="block text-[10.5px] font-semibold tracking-[0.22em] mb-light-eyebrow">
                        {attorney.role.toUpperCase()}
                      </span>
                      <span
                        className="mt-2 block text-[18px] font-semibold leading-[1.25] tracking-[-0.01em] transition-colors group-hover:text-[#C78B3E] mb-light-heading md:text-[20px]"
                        style={{
                          fontFamily: "var(--font-mb-serif), Georgia, serif",
                        }}
                      >
                        {attorney.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="relative mt-10 flex min-h-[280px] flex-col border border-[#C78B3E]/70 p-2.5 sm:min-h-[340px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:min-h-0 lg:w-[calc(50%-36px)]">
              <span className="relative block min-h-[260px] flex-1 overflow-hidden sm:min-h-[320px] lg:min-h-0">
                <Image
                  src={copy.storyPortrait}
                  alt="Unutrašnjost kancelarije MB Law u Beogradu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[50%_40%]"
                />
              </span>
            </figure>
          </div>
        </section>

        <MbLawApproach
          eyebrow={copy.howEyebrow}
          title={copy.howTitle}
          lead={copy.howLead}
          steps={copy.howSteps}
        />

        <MbLawCTA />
      </main>

      <MbLawFooter />
    </>
  );
}
