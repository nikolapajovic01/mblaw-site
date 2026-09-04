import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import { getAttorney, getPublishedAttorneys, type AttorneyAppearance } from "@/data/team";

export function generateStaticParams() {
  return getPublishedAttorneys().map((attorney) => ({ slug: attorney.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tim/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorney(slug);
  if (!attorney) return {};

  return {
    title: `${attorney.name} | MB Law - Marković, Bogdanović & Partners`,
    description: attorney.bio,
  };
}

function revealUp(delay: number): CSSProperties {
  return {
    animation: `mbUp .9s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
  };
}

function revealFade(delay: number): CSSProperties {
  return {
    animation: `mbFade .9s ease ${delay}s both`,
  };
}

function AppearanceCard({ appearance }: { appearance: AttorneyAppearance }) {
  const className = "group block h-full no-underline";
  const label = `${appearance.title}, ${appearance.outlet}, ${appearance.year}`;
  const body = (
    <>
      <span className="relative block aspect-video overflow-hidden bg-[#141210]">
        {appearance.image ? (
          <Image
            src={appearance.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: appearance.imagePosition ?? "50% 50%" }}
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,#1E1B17_0%,#141210_55%,#1A1714_100%)]"
          />
        )}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.55)_0%,rgba(20,18,16,0.08)_42%,rgba(20,18,16,0.18)_100%)]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center border border-[#F1EEE7]/75 bg-[#171512]/40 text-[#F1EEE7] transition-colors group-hover:border-[#C78B3E] group-hover:text-[#C78B3E]">
            <svg width="12" height="13" viewBox="0 0 9 10" fill="currentColor">
              <path d="M1 0.8v8.4L8.2 5 1 .8z" />
            </svg>
          </span>
        </span>
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 py-3.5 md:px-5">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C78B3E]">
            {appearance.outlet}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#EDE9E1]/80">
            {appearance.year}
          </span>
        </span>
      </span>
      <span
        className="mt-4 block text-[18px] font-semibold leading-[1.28] tracking-[-0.01em] mb-light-heading md:text-[20px]"
        style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
      >
        {appearance.title}
      </span>
      <span className="mt-3 inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-[0.14em] mb-light-muted transition-colors group-hover:text-[#C78B3E]">
        POGLEDAJTE
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path
            d="M3 3L9 9M9 3V9H3"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  if (!appearance.href) {
    return <div className={className}>{body}</div>;
  }

  return (
    <Link
      href={appearance.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {body}
    </Link>
  );
}

function Portrait({ name, photo }: { name: string; photo?: string }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#C9C0AF]/40">
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[50%_8%]"
          priority
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-end pb-5">
          <span className="text-[9px] font-medium tracking-[0.2em] text-[#9A9184]">
            USKORO
          </span>
          <span className="sr-only">Fotografija uskoro: {name}</span>
        </div>
      )}
    </div>
  );
}

export default async function AttorneyPage({
  params,
}: PageProps<"/tim/[slug]">) {
  const { slug } = await params;
  const attorney = getAttorney(slug);
  if (!attorney) notFound();

  const published = getPublishedAttorneys();
  const index = published.findIndex((item) => item.slug === attorney.slug);
  const other = published[(index + 1) % published.length];

  return (
    <>
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
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(199,139,62,0.1),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#171512]/22 to-transparent md:h-32"
          />

          <div className="relative mb-section-shell">
            <Link
              href="/tim"
              className="mb-about-animate inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
              style={revealFade(0)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
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
              TIM
            </Link>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-x-[72px]">
              <div className="min-w-0">
                <div
                  className="mb-about-animate h-px w-16 origin-left bg-[#C78B3E]"
                  style={{
                    animation: "mbLineDraw .9s cubic-bezier(.16,1,.3,1) .08s both",
                  }}
                />
                <div className="mb-about-animate" style={revealUp(0.16)}>
                <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
                  {attorney.role.toUpperCase()}
                </span>
                <h1
                  className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[40px] md:text-[46px] mb-light-heading"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {attorney.name}
                </h1>

                <div className="mt-8 lg:hidden">
                  <Portrait name={attorney.name} photo={attorney.photo} />
                </div>

                {attorney.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 28)}
                    className="mt-5 max-w-[54ch] text-[16px] leading-[1.75] first:mt-6 md:text-[17px] mb-light-body"
                  >
                    {paragraph}
                  </p>
                ))}

                {attorney.focus.length > 0 ? (
                  <div className="mt-10 max-w-[54ch] border-t border-[#C9C0AF] pt-8">
                    <span className="block text-[10.5px] font-semibold tracking-[0.22em] mb-light-eyebrow">
                      OBLASTI RADA
                    </span>
                    <ul className="mt-5 flex flex-col gap-3.5">
                      {attorney.focus.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="group inline-flex items-center gap-2.5 text-[15px] no-underline transition-colors hover:text-[#C78B3E] mb-light-heading"
                          >
                            <span
                              aria-hidden="true"
                              className="h-1 w-1 shrink-0 bg-[#C78B3E]"
                            />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-10">
                  <Link
                    href="/kontakt"
                    className="inline-flex h-[50px] items-center bg-[#C78B3E] px-8 text-[11px] font-semibold tracking-[0.17em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C] sm:h-[52px]"
                  >
                    ZAKAŽITE KONSULTACIJU
                  </Link>
                </div>
                </div>
              </div>

              <div
                className="mb-about-animate hidden lg:block"
                style={revealFade(0.22)}
              >
                <Portrait name={attorney.name} photo={attorney.photo} />
              </div>
            </div>

            {attorney.appearances && attorney.appearances.length > 0 ? (
              <div className="relative mt-14 border-t border-[#C9C0AF] pt-10 md:mt-16 md:pt-12">
                <span className="block text-[10.5px] font-semibold tracking-[0.22em] mb-light-eyebrow">
                  GOSTOVANJA
                </span>
                <ul className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-x-[72px] sm:gap-y-10">
                  {attorney.appearances.map((appearance) => (
                    <li key={`${appearance.outlet}-${appearance.year}-${appearance.title}`}>
                      <AppearanceCard appearance={appearance} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        {other ? (
          <section className="relative border-t border-[#C9C0AF] px-6 py-8 md:px-[72px] mb-light-section">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(165deg, #CEC5B8 0%, #DAD2C6 42%, #D0C8BC 100%)",
              }}
            />
            <div className="relative flex items-center justify-between gap-6 text-[14.5px]">
              <Link
                href="/tim"
                className="no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
              >
                Svi osnivači
              </Link>
              <Link
                href={`/tim/${other.slug}`}
                className="group inline-flex min-w-0 items-center gap-2 text-right no-underline transition-colors hover:text-[#C78B3E] mb-light-heading"
              >
                <span className="truncate">{other.name}</span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="shrink-0"
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
            </div>
          </section>
        ) : null}
      </main>

      <MbLawFooter />
    </>
  );
}
