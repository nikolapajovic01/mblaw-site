import type { Metadata } from "next";
import Image from "next/image";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawContactForm from "@/components/MbLawContactForm";
import { practiceMenuGroups } from "@/data/practice-areas";

const FIRM_NAME = "MB Law – Marković, Bogdanović & Partners";
const FIRM_URL = "https://mblaw.rs";
const FIRM_EMAIL = "office@mblaw.rs";
const FIRM_PHONE = "+381112223344";
const FIRM_PHONE_DISPLAY = "+381 11 222 3344";
const FIRM_STREET = "Resavska 68";
const FIRM_CITY = "Beograd";
const FIRM_COUNTRY = "RS";
const MAPS_QUERY = "Resavska 68, Beograd";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&hl=sr&z=16&output=embed`;

const copy = {
  metaTitle: `Kontakt | ${FIRM_NAME}`,
  metaDescription:
    "Kontaktirajte advokatsku kancelariju Marković i Bogdanović u Resavskoj 68 u Beogradu. Telefon, email ili pisani upit.",
  eyebrow: "KONTAKT",
  title: "Prvi korak je razgovor.",
  lead: "Nazovite, pišite ili pošaljite upit. Odgovaramo ko vodi predmet, i da li možemo da ga preuzmemo.",
  formEyebrow: "UPIT",
  formTitle: "Napišite nam.",
  formLead:
    "Kratko šta se desilo i šta vam treba. Nije potrebno da šaljete spise u prvom koraku.",
};

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
};

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${FIRM_URL}/kontakt#page`,
    url: `${FIRM_URL}/kontakt`,
    name: copy.metaTitle,
    description: copy.metaDescription,
    mainEntity: {
      "@type": ["LegalService", "Organization"],
      "@id": `${FIRM_URL}/o-nama#organization`,
      name: FIRM_NAME,
      url: FIRM_URL,
      email: FIRM_EMAIL,
      telephone: FIRM_PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: FIRM_STREET,
        addressLocality: FIRM_CITY,
        addressCountry: FIRM_COUNTRY,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: FIRM_PHONE,
        email: FIRM_EMAIL,
        contactType: "customer service",
        areaServed: "RS",
      },
    },
  };
}

export default function ContactPage() {
  const jsonLd = buildJsonLd();
  const areas = practiceMenuGroups.map((group) => ({
    slug: group.slug,
    title: group.title,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <MbLawSiteHeader active="KONTAKT" />

      <main className="w-full bg-[#171512]">
        <section className="relative grid w-full overflow-hidden bg-[#D5CDC0] lg:min-h-[560px] lg:grid-cols-2 mb-light-section">
          <div className="relative px-6 py-14 md:px-[72px] md:py-16 lg:flex lg:items-center lg:py-20">
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
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(199,139,62,0.1),transparent_55%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#171512]/22 to-transparent md:h-32"
            />

            <div className="relative max-w-[520px]">
              <div className="h-px w-16 bg-[#C78B3E]" />
              <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
                {copy.eyebrow}
              </span>
              <h1
                className="mt-5 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {copy.title}
              </h1>
              <p className="mt-5 text-[16px] leading-[1.75] md:text-[17px] mb-light-body">
                {copy.lead}
              </p>

              <ul className="mt-8 flex flex-col border-t border-[#C9C0AF]">
                <li className="border-b border-[#C9C0AF] py-5">
                  <span className="block text-[10px] font-semibold tracking-[0.22em] mb-light-eyebrow">
                    TELEFON
                  </span>
                  <a
                    href={`tel:${FIRM_PHONE}`}
                    className="mt-2 inline-block text-[20px] font-semibold tracking-[-0.015em] no-underline transition-colors hover:text-[#C78B3E] mb-light-heading md:text-[22px]"
                    style={{
                      fontFamily: "var(--font-mb-serif), Georgia, serif",
                    }}
                  >
                    {FIRM_PHONE_DISPLAY}
                  </a>
                </li>
                <li className="border-b border-[#C9C0AF] py-5">
                  <span className="block text-[10px] font-semibold tracking-[0.22em] mb-light-eyebrow">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${FIRM_EMAIL}`}
                    className="mt-2 inline-block text-[20px] font-semibold tracking-[-0.015em] no-underline transition-colors hover:text-[#C78B3E] mb-light-heading md:text-[22px]"
                    style={{
                      fontFamily: "var(--font-mb-serif), Georgia, serif",
                    }}
                  >
                    {FIRM_EMAIL}
                  </a>
                </li>
                <li className="py-5">
                  <span className="block text-[10px] font-semibold tracking-[0.22em] mb-light-eyebrow">
                    ADRESA
                  </span>
                  <p
                    className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] mb-light-heading md:text-[22px]"
                    style={{
                      fontFamily: "var(--font-mb-serif), Georgia, serif",
                    }}
                  >
                    {FIRM_STREET}, {FIRM_CITY}
                  </p>
                  <a
                    href={MAPS_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.14em] no-underline transition-colors hover:text-[#C78B3E] mb-light-link"
                  >
                    OTVORI U MAPAMA
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 3L9 9M9 3V9H3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-full">
            <iframe
              title="Kancelarija MB Law, Resavska 68, Beograd"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#171512] px-6 py-14 md:px-[72px] md:py-16 lg:py-20">
          <Image
            src="/mb/CTAsekcija.webp"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 z-[1] object-cover object-[72%_50%] md:object-[68%_45%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2] bg-[rgba(20,18,16,0.78)] md:hidden"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, rgba(20,18,16,0.82) 0%, rgba(20,18,16,0.7) 42%, rgba(20,18,16,0.78) 100%)",
            }}
          />

          <div className="relative z-[3] mb-section-shell">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-5">
                <div className="h-px w-16 bg-[#C78B3E]" />
                <span className="mt-6 block text-[10.5px] font-semibold tracking-[0.26em] text-[#C78B3E] md:text-[11px]">
                  {copy.formEyebrow}
                </span>
                <h2
                  className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.015em] text-[#F1EEE7] sm:text-[38px] md:text-[42px]"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {copy.formTitle}
                </h2>
              </div>
              <p className="max-w-[46ch] text-[16px] leading-[1.7] text-[#EDE9E1] lg:col-span-5 lg:col-start-8 md:text-[17px]">
                {copy.formLead}
              </p>
            </div>
            <MbLawContactForm areas={areas} />
          </div>
        </section>
      </main>

      <MbLawFooter />
    </>
  );
}
