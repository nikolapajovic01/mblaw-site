import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import { getAttorney, getPublishedAttorneys } from "@/data/team";

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
    title: `${attorney.name} | MB Law - Zajednička advokatska kancelarija Marković i Bogdanović`,
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

function PortraitPlaceholder({ name }: { name: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end pb-2">
      <svg
        viewBox="0 0 120 280"
        fill="none"
        aria-hidden="true"
        className="h-[74%] w-auto text-[#C9C0AF]"
      >
        <ellipse cx="60" cy="248" rx="34" ry="6" fill="currentColor" opacity="0.45" />
        <path
          d="M60 34c-18 0-32 14-32 32v8c0 10 4 18 10 24-8 6-14 18-14 32v98c0 8 6 14 14 14h44c8 0 14-6 14-14V130c0-14-6-26-14-32 6-6 10-14 10-24v-8c0-18-14-32-32-32z"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only">Fotografija: {name}</span>
    </div>
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
          className="object-cover object-[50%_18%]"
          priority
        />
      ) : (
        <PortraitPlaceholder name={name} />
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
                <span className="mt-7 block text-[13px] font-semibold tracking-[0.12em] text-[#C78B3E]">
                  {attorney.role}
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
                Svi partneri
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
