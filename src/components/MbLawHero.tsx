"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MbLawLangSwitch from "@/components/MbLawLangSwitch";
import {
  PracticeAreasMobile,
  PracticeAreasTrigger,
  usePracticeAreasHover,
} from "@/components/MbLawPracticeAreasMenu";

const navItems = [
  { label: "POČETNA", href: "/", active: true },
  { label: "O NAMA", href: "/o-nama" },
  { label: "OBLASTI RADA", href: "/oblasti-rada" },
  { label: "TIM", href: "/tim" },
  { label: "UVIDI", href: "/uvidi" },
  { label: "KONTAKT", href: "/kontakt" },
];

export default function MbLawHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const areas = usePracticeAreasHover();

  return (
    <section className="relative flex h-dvh max-h-[860px] min-h-[600px] w-full flex-col overflow-hidden bg-[#1B1916]">
      {/* background photo */}
      <div
        aria-hidden="true"
        className="mb-hero-photo pointer-events-none absolute inset-0 z-[1] bg-[#1B1916] bg-cover bg-[50%_42%] bg-no-repeat brightness-[1.08] contrast-[1.04] saturate-[1.06]"
        style={{ backgroundImage: "url(/mb/mwlawfirma.webp)" }}
      />

      {/* light sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] mix-blend-soft-light opacity-60"
        style={{
          background:
            "linear-gradient(115deg, transparent 38%, rgba(199,139,62,0.28) 48%, rgba(255,229,186,0.14) 52%, transparent 62%)",
          backgroundSize: "260% 260%",
          animation: "mbLightSweep 11s ease-in-out 2.4s infinite",
        }}
      />

      {/* readability scrim: lighter for dark library photo */}
      <div
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(23,21,18,0.62) 0%, rgba(23,21,18,0.28) 22%, rgba(23,21,18,0.12) 48%, rgba(23,21,18,0.32) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,13,11,0.18) 0%, rgba(15,13,11,0.28) 50%, rgba(15,13,11,0.52) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(23,21,18,0.72) 0%, rgba(23,21,18,0.48) 28%, rgba(23,21,18,0.14) 50%, transparent 68%)",
        }}
      />

      {/* header */}
      <header
        className="relative z-40 flex items-center justify-between px-6 pt-6 md:px-[72px] md:pt-[30px]"
        style={{ animation: "mbFade 1s ease-out .1s both" }}
      >
        <Link
          href="/"
          aria-label="MB Law – Marković, Bogdanović & Partners, početna strana"
          className="flex items-center gap-2 no-underline sm:gap-3"
        >
          <div className="inline-flex w-11 flex-col items-stretch md:w-[63px]">
            <Image
              src="/mb/mb-logo.webp"
              alt="MB Law – Marković, Bogdanović & Partners"
              width={63}
              height={63}
              className="block h-11 w-full object-contain md:h-[63px]"
            />
            <div
              className="-mt-1 flex w-full justify-between text-[17.5px] font-bold uppercase leading-none text-[#EDE9E1] md:-mt-1.5 md:text-[21.5px]"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              aria-hidden="true"
            >
              <span>L</span>
              <span>A</span>
              <span>W</span>
            </div>
          </div>
          <span className="h-11 w-px shrink-0 bg-[#2A2723] md:h-14" />
          <div className="flex min-w-0 max-w-[128px] flex-col gap-0.5 sm:max-w-none">
            <span className="text-[10.5px] font-semibold leading-[1.15] tracking-[0.03em] text-[#EDE9E1] sm:text-[14px] sm:leading-[1.2] sm:tracking-[0.09em] md:text-[15px]">
              MARKOVIĆ I BOGDANOVIĆ
            </span>
            <span className="text-[7px] font-medium leading-[1.35] tracking-[0.06em] text-[#89837A] sm:text-[9px] sm:leading-normal sm:tracking-[0.21em]">
              ZAJEDNIČKA ADVOKATSKA KANCELARIJA
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-xs font-semibold tracking-[0.13em] sm:gap-6 lg:gap-9">
          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              if (item.label === "OBLASTI RADA") {
                return (
                  <PracticeAreasTrigger
                    key={item.label}
                    href={item.href}
                    isActive={item.active}
                    open={areas.open}
                    onEnter={areas.onEnter}
                    onLeave={areas.onLeave}
                  />
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative inline-flex items-center gap-2 pb-1.5 no-underline transition-colors ${
                    item.active ? "text-[#F1EEE7]" : "text-[#C2BCB2] hover:text-[#C78B3E]"
                  }`}
                >
                  {item.active && <span className="h-1 w-1 bg-[#C78B3E]" />}
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#C78B3E] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              );
            })}
          </div>

          <MbLawLangSwitch />

          <button
            type="button"
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-7 w-7 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-px w-5 bg-[#F1EEE7] transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-[#F1EEE7] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className="relative z-30 mx-6 mt-6 hidden h-px origin-left bg-[#2A2723] md:mx-[72px] md:block"
        style={{ animation: "mbLineDraw 1.1s cubic-bezier(.16,1,.3,1) .9s both" }}
      />

      {/* mobile menu overlay */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-start justify-start gap-7 overflow-y-auto bg-[#171512] px-6 pb-12 pt-28 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navItems.map((item) => {
          if (item.label === "OBLASTI RADA") {
            return (
              <PracticeAreasMobile
                key={item.label}
                isActive={item.active}
                onNavigate={() => setMenuOpen(false)}
              />
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold tracking-wide no-underline ${
                item.active ? "text-[#F1EEE7]" : "text-[#C2BCB2]"
              }`}
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* content */}
      <div className="relative z-20 flex flex-1 flex-col justify-center px-6 py-6 md:w-[620px] md:px-[72px] md:py-0">
        <div
          className="flex flex-nowrap items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-[#C0B9AE] sm:gap-4 sm:text-[11.5px] sm:tracking-[0.2em]"
          style={{ animation: "mbUp .9s cubic-bezier(.2,.7,.2,1) .25s both" }}
        >
          <span className="whitespace-nowrap">ADVOKATSKA KANCELARIJA</span>
          <span className="h-[13px] w-px shrink-0 bg-[#4A443C]" />
          <span className="whitespace-nowrap text-[#8C877D]">BEOGRAD, SRBIJA</span>
        </div>

        <h1
          className="mt-4 text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F1EEE7] sm:text-[48px] md:mt-6 md:text-[64px] md:leading-[1.06] lg:text-[74px]"
          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
        >
          <span
            className="inline-block md:whitespace-nowrap"
            style={{ animation: "mbClipReveal 1s cubic-bezier(.16,1,.3,1) .32s both" }}
          >
            Gde pravo postaje
          </span>
          <br />
          <span
            className="inline-block md:whitespace-nowrap"
            style={{ animation: "mbClipReveal 1s cubic-bezier(.16,1,.3,1) .48s both" }}
          >
            vaša prednost.
          </span>
        </h1>

        <p
          className="mt-4 max-w-[520px] text-[16px] font-medium leading-[1.6] text-[#ACA69D] md:mt-6 md:text-[16.5px] md:font-normal md:leading-[1.72]"
          style={{ animation: "mbUp 1s cubic-bezier(.2,.7,.2,1) .56s both" }}
        >
          Sveobuhvatna pravna podrška domaćim i međunarodnim klijentima - uz
          strateški pristup, razumevanje njihovih potreba i pouzdanu zaštitu
          poslovnih i ličnih interesa.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-[26px] sm:gap-5 md:mt-9 md:flex-nowrap md:gap-6"
          style={{ animation: "mbUp 1s cubic-bezier(.2,.7,.2,1) .72s both" }}
        >
          <Link
            href="/kontakt"
            className="inline-flex h-[50px] shrink-0 items-center whitespace-nowrap bg-[#C78B3E] px-4 text-[11px] font-semibold tracking-[0.08em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C] sm:h-[52px] sm:px-8 sm:text-[11px] sm:tracking-[0.17em]"
          >
            ZAKAŽITE KONSULTACIJU
          </Link>
          <Link
            href="/oblasti-rada"
            className="group inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap text-[10.5px] font-semibold tracking-[0.06em] text-[#CFC9BF] no-underline transition-colors hover:text-[#F1EEE7] sm:min-h-0 sm:text-[12.5px] sm:font-medium sm:tracking-[0.15em]"
          >
            <span className="inline-flex items-center gap-1.5 border-b border-[#3A3831] pb-1.5 leading-none transition-colors group-hover:border-[#C78B3E]">
              ISTRAŽITE OBLASTI RADA
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className="shrink-0"
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
            </span>
          </Link>
        </div>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-8 z-20 hidden justify-center md:flex"
        style={{ animation: "mbFade 1s ease-out 1.8s both" }}
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
  );
}
