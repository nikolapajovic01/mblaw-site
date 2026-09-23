import Link from "next/link";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import { intlTags, type Locale } from "@/i18n/config";
import type { LegalDocument } from "@/dictionaries/types";

export default function MbLawLegalDoc({
  locale,
  doc,
  otherHref,
}: {
  locale: Locale;
  doc: LegalDocument;
  otherHref: string;
}) {
  return (
    <>
      <MbLawSiteHeader locale={locale} />

      <main className="w-full bg-[#EDE9E1] mb-light-section">
        <article className="px-6 py-14 md:px-[72px] md:py-20">
          <div className="mb-section-shell max-w-[68ch]">
            <span className="block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
              {doc.eyebrow}
            </span>
            <h1
              className="mt-5 text-[32px] font-bold leading-[1.14] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {doc.title}
            </h1>
            <p className="mt-4 text-[13.5px] text-[#6B6459]">{doc.updated}</p>
            <p
              lang={intlTags[locale]}
              className="mt-8 text-[16px] leading-[1.75] md:text-[17px] mb-light-body mb-prose"
            >
              {doc.intro}
            </p>

            <div className="mt-12 flex flex-col gap-10">
              {doc.sections.map((section, index) => (
                <section key={section.heading}>
                  <h2
                    className="text-[22px] font-bold leading-[1.25] tracking-[-0.015em] md:text-[24px] mb-light-heading"
                    style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                  >
                    <span className="mr-3 text-[13px] font-semibold tracking-[0.12em] text-[#C78B3E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  <div
                    lang={intlTags[locale]}
                    className="mt-4 space-y-4 text-[16px] leading-[1.75] md:text-[17px] mb-light-body mb-prose"
                  >
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-14 border-t border-[#C9C0AF] pt-8 text-[14.5px] text-[#6B6459]">
              <Link
                href={otherHref}
                className="text-[#171512] no-underline underline-offset-4 transition-colors hover:text-[#C78B3E] hover:underline"
              >
                {doc.otherPage}
              </Link>
            </p>
          </div>
        </article>
      </main>

      <MbLawFooter locale={locale} />
    </>
  );
}
