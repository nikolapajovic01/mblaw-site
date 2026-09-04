import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MbLawSiteHeader from "@/components/MbLawSiteHeader";
import MbLawFooter from "@/components/MbLawFooter";
import {
  getPracticeArea,
  getPracticeAreaTag,
  getPracticeGroupHref,
  practiceMenuGroups,
} from "@/data/practice-areas";

export const metadata: Metadata = {
  title: "Oblasti rada | MB Law – Marković, Bogdanović & Partners",
  description:
    "Šest celina rada advokatske kancelarije MB Law u Beogradu: poslovanje, sporovi, krivično pravo, strani klijenti, nekretnine i privatni klijenti.",
};

export default function PracticeAreasIndexPage() {
  return (
    <>
      <section className="relative flex h-[50dvh] min-h-[380px] w-full flex-col overflow-hidden bg-[#1B1916] md:min-h-[440px]">
        <Image
          src="/mb/pravnaSekcija.webp"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 z-[1] object-cover object-[62%_38%] md:object-[50%_42%]"
          priority
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,21,18,0.62) 0%, rgba(23,21,18,0.28) 22%, rgba(23,21,18,0.12) 48%, rgba(23,21,18,0.38) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,13,11,0.28) 0%, rgba(15,13,11,0.38) 50%, rgba(15,13,11,0.62) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
          style={{
            background:
              "linear-gradient(to right, rgba(23,21,18,0.78) 0%, rgba(23,21,18,0.52) 28%, rgba(23,21,18,0.16) 52%, transparent 70%)",
          }}
        />

        <MbLawSiteHeader active="OBLASTI RADA" overlay />

        <div className="relative z-30 mx-6 mt-6 hidden h-px bg-[#2A2723] md:mx-[72px] md:block" />

        <div className="relative z-20 flex flex-1 flex-col justify-center px-6 py-5 md:w-[640px] md:px-[72px] md:py-0">
          <div className="flex flex-nowrap items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-[#C0B9AE] sm:gap-4 sm:text-[11.5px] sm:tracking-[0.2em]">
            <span className="whitespace-nowrap">OBLASTI RADA</span>
            <span className="h-[13px] w-px shrink-0 bg-[#4A443C]" />
            <span className="whitespace-nowrap text-[#8C877D]">BEOGRAD, SRBIJA</span>
          </div>
          <h1
            className="mt-3 text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#F1EEE7] sm:text-[40px] md:mt-4 md:text-[48px] md:leading-[1.08] lg:text-[54px]"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            Šest celina u kojima vodimo predmete.
          </h1>
          <p className="mt-3 max-w-[46ch] text-[15.5px] font-medium leading-[1.6] text-[#ACA69D] md:mt-4 md:text-[16.5px] md:font-normal md:leading-[1.7]">
            Svaka celina okuplja srodne oblasti. Otvorite temu koja vas se tiče.
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
        <section className="px-6 py-16 md:px-[72px] md:py-20">
          <ol className="grid border-t border-l border-[#2A2723] md:grid-cols-2 xl:grid-cols-3">
            {practiceMenuGroups.map((group, index) => (
              <li
                key={group.slug}
                id={group.slug}
                className="group relative scroll-mt-10 border-b border-r border-[#2A2723]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#C78B3E] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none motion-reduce:group-hover:scale-x-0"
                />
                <div className="flex h-full flex-col px-5 py-7 md:px-7 md:py-8">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C78B3E]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="mt-4 text-[22px] font-semibold leading-[1.18] tracking-[-0.01em] md:text-[24px]"
                    style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                  >
                    <Link
                      href={getPracticeGroupHref(group)}
                      className="text-[#EDE9E1] no-underline transition-colors hover:text-[#C78B3E]"
                    >
                      {group.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[13.5px] leading-[1.55] text-[#8C877D]">
                    {group.navLine}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-x-1 gap-y-1.5 pt-6">
                    {group.areaSlugs.map((slug, i) => {
                      const area = getPracticeArea(slug);
                      if (!area) return null;
                      return (
                        <li key={area.slug} className="inline-flex items-center">
                          {i > 0 ? (
                            <span aria-hidden="true" className="mr-1 text-[#3A3530]">
                              ·
                            </span>
                          ) : null}
                          <Link
                            href={`/oblasti-rada/${area.slug}`}
                            className="text-[12.5px] text-[#C2BCB2] no-underline transition-colors hover:text-[#C78B3E]"
                          >
                            {getPracticeAreaTag(area)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <MbLawFooter />
    </>
  );
}
