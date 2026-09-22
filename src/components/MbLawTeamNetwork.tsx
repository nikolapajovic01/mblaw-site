import { defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";

export default function MbLawTeamNetwork({
  locale = defaultLocale,
}: {
  locale?: Locale;
}) {
  const dict = getDictionary(locale).team;

  return (
    <section className="relative overflow-hidden bg-[#D5CDC0] px-6 py-16 md:px-[72px] md:py-20 lg:py-24 mb-light-section">
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
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#171512]/16 to-transparent md:h-32"
      />

      <div className="relative z-[2] mb-section-shell">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-x-[72px]">
          <div>
            <div className="h-px w-16 bg-[#C78B3E]" />
            <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
              {dict.networkEyebrow}
            </span>
            <h2
              className="mt-5 whitespace-nowrap text-[26px] font-bold leading-[1.16] tracking-[-0.015em] sm:text-[32px] md:text-[36px] mb-light-heading"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {dict.networkHeading}
            </h2>
          </div>

          <div className="lg:border-l lg:border-[#C9C0AF] lg:pl-[72px]">
            <p className="text-[17px] leading-[1.75] md:text-[18px] mb-light-body mb-prose">
              {dict.networkLead}
            </p>
            <p className="mt-5 text-[16px] leading-[1.75] md:text-[17px] mb-light-muted mb-prose">
              {dict.networkSupport}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
