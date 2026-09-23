import type { Metadata } from "next";
import Image from "next/image";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import MbLawContactForm from "@/components/MbLawContactForm";
import { practiceMenuGroups } from "@/data/practice-areas";
import { isLocale, defaultLocale, htmlLang, type Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/dictionaries";
import {
  FIRM,
  ORGANIZATION_ID,
  WEBSITE_ID,
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdString,
  localePath,
  pageMetadata,
} from "@/lib/seo";

const FIRM_EMAIL = FIRM.email;
const FIRM_PHONE = FIRM.phone;
const FIRM_PHONE_DISPLAY = "065 389 4111";
const FIRM_STREET = FIRM.street;
const MAPS_QUERY = "Resavska 68, Beograd";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const PATH = "/kontakt";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/kontakt">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: PATH,
    title: dict.nav.contact,
    description: dict.meta.contactDescription,
  });
}

function buildJsonLd(locale: Locale, dict: Dictionary) {
  const url = absoluteUrl(localePath(locale, PATH));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${url}#page`,
        url,
        name: `${dict.nav.contact} | ${FIRM.shortName}`,
        description: dict.meta.contactDescription,
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        mainEntity: { "@id": ORGANIZATION_ID },
      },
      breadcrumbJsonLd([
        { name: dict.nav.home, path: localePath(locale) },
        { name: dict.nav.contact, path: localePath(locale, PATH) },
      ]),
    ],
  };
}

export default async function ContactPage({ params }: PageProps<"/[locale]/kontakt">) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const jsonLd = buildJsonLd(locale, dict);
  const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&hl=${locale}&z=16&output=embed`;
  const areas = practiceMenuGroups.map((group) => ({
    slug: group.slug,
    title: dict.practiceAreas.groups[group.slug]?.title ?? group.title,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(jsonLd),
        }}
      />

      <MbLawSiteHeader active="contact" locale={locale} />

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
                {dict.footer.contactHeading}
              </span>
              <h1
                className="mt-5 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {dict.cta.heading}
              </h1>
              <p className="mt-5 text-[16px] leading-[1.75] md:text-[17px] mb-light-body mb-prose">
                {dict.contactPage.lead}
              </p>

              <ul className="mt-8 flex flex-col border-t border-[#C9C0AF]">
                <li className="border-b border-[#C9C0AF] py-5">
                  <span className="block text-[10px] font-semibold tracking-[0.22em] mb-light-eyebrow">
                    {dict.cta.phoneLabel}
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
                    {dict.cta.emailLabel}
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
                    {dict.cta.addressLabel}
                  </span>
                  <p
                    className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.015em] mb-light-heading md:text-[22px]"
                    style={{
                      fontFamily: "var(--font-mb-serif), Georgia, serif",
                    }}
                  >
                    {FIRM_STREET}, {dict.cta.city}
                  </p>
                  <a
                    href={MAPS_HREF}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.14em] no-underline transition-colors hover:text-[#C78B3E] mb-light-link"
                  >
                    {dict.contactPage.openInMaps}
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
              src={mapsEmbed}
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
                  {dict.contactPage.formEyebrow}
                </span>
                <h2
                  className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.015em] text-[#F1EEE7] sm:text-[38px] md:text-[42px]"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {dict.contactPage.formTitle}
                </h2>
              </div>
              <p className="max-w-[46ch] text-[16px] leading-[1.7] text-[#EDE9E1] lg:col-span-5 lg:col-start-8 md:text-[17px] mb-prose">
                {dict.contactPage.formLead}
              </p>
            </div>
            <MbLawContactForm areas={areas} locale={locale} />
          </div>
        </section>
      </main>

      <MbLawFooter locale={locale} />
    </>
  );
}
