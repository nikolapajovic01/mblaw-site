"use client";

import { useState } from "react";
import Image from "next/image";
import { Source_Serif_4, Manrope } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-mb-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mb-sans",
  display: "swap",
});

const navItems = [
  { label: "POČETNA", active: true },
  { label: "O NAMA" },
  { label: "OBLASTI RADA" },
  { label: "TIM" },
  { label: "UVIDI" },
  { label: "KONTAKT" },
];

export default function MbLawHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className={`${sourceSerif.variable} ${manrope.variable} relative flex h-dvh max-h-[860px] min-h-[600px] w-full flex-col overflow-hidden bg-[#1B1916]`}
      style={{ fontFamily: "var(--font-mb-sans), Helvetica, sans-serif" }}
    >
      {/* background photo */}
      <Image
        src="/mb/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="mb-hero-photo pointer-events-none absolute inset-0 z-[1] object-cover object-[78%_0%] md:object-[55%_0%]"
        style={{ animation: "mbFade 1.6s ease-out both, mbZoom 26s ease-out both" }}
      />

      {/* readability scrim */}
      <div
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(23,21,18,0.9) 0%, rgba(23,21,18,0.6) 20%, rgba(23,21,18,0.42) 40%, rgba(23,21,18,0.42) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,13,11,0.35) 0%, rgba(15,13,11,0.5) 45%, rgba(15,13,11,0.68) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(23,21,18,0.94) 0%, rgba(23,21,18,0.86) 24%, rgba(23,21,18,0.42) 46%, rgba(23,21,18,0) 62%)",
        }}
      />

      {/* header */}
      <header
        className="relative z-40 flex items-center justify-between px-6 pt-6 md:px-[72px] md:pt-[30px]"
        style={{ animation: "mbFade 1s ease-out .1s both" }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/mb/mb-logo.png"
            alt="Marković Bogdanović"
            width={63}
            height={63}
            className="block h-11 w-11 object-contain md:h-[63px] md:w-[63px]"
          />
          <span className="hidden h-10 w-px bg-[#2A2723] sm:block" />
          <div className="hidden flex-col gap-1 sm:flex">
            <span className="text-[13px] font-semibold leading-[1.32] tracking-[0.13em] text-[#EDE9E1]">
              MARKOVIĆ
              <br />
              BOGDANOVIĆ
            </span>
            <span className="text-[8.5px] font-medium tracking-[0.21em] text-[#89837A]">
              ADVOKATSKA KANCELARIJA
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-xs font-semibold tracking-[0.13em] sm:gap-6 lg:gap-9">
          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group relative inline-flex items-center gap-2 pb-1.5 no-underline transition-colors ${
                  item.active ? "text-[#F1EEE7]" : "text-[#C2BCB2] hover:text-[#C78B3E]"
                }`}
              >
                {item.active && <span className="h-1 w-1 bg-[#C78B3E]" />}
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#C78B3E] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="inline-flex h-7 items-center gap-2 border border-[#363129] px-2.5 text-[11px] font-semibold tracking-[0.12em]">
            <span className="text-[#F1EEE7]">SR</span>
            <span className="h-[11px] w-px rotate-[18deg] bg-[#3E382F]" />
            <a href="#" className="text-[#77726A] no-underline transition-colors hover:text-[#F1EEE7]">
              EN
            </a>
          </div>

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

      <div className="relative z-30 mx-6 mt-6 hidden h-px bg-[#2A2723] md:mx-[72px] md:block" />

      {/* mobile menu overlay */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-start justify-center gap-7 bg-[#171512] px-6 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold tracking-wide no-underline ${
              item.active ? "text-[#F1EEE7]" : "text-[#C2BCB2]"
            }`}
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            {item.label}
          </a>
        ))}
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
          className="mt-4 text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F1EEE7] sm:text-[48px] md:mt-6 md:whitespace-nowrap md:text-[64px] md:leading-[1.06] lg:text-[74px]"
          style={{
            fontFamily: "var(--font-mb-serif), Georgia, serif",
            animation: "mbUp 1.05s cubic-bezier(.2,.7,.2,1) .38s both",
          }}
        >
          Gde pravo postaje
          <br />
          vaša prednost.
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
          className="mt-6 flex flex-wrap items-center gap-4 sm:gap-5 md:mt-9 md:flex-nowrap md:gap-6"
          style={{ animation: "mbUp 1s cubic-bezier(.2,.7,.2,1) .72s both" }}
        >
          <a
            href="#"
            className="inline-flex h-[44px] shrink-0 items-center whitespace-nowrap bg-[#C78B3E] px-4 text-[11px] font-semibold tracking-[0.08em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C] sm:h-[52px] sm:px-8 sm:text-[11px] sm:tracking-[0.17em]"
          >
            ZAKAŽITE KONSULTACIJU
          </a>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap border-b border-[#3A3831] pb-1.5 text-[10.5px] font-semibold leading-none tracking-[0.06em] text-[#CFC9BF] no-underline transition-colors hover:border-[#C78B3E] hover:text-[#F1EEE7] sm:text-[12.5px] sm:font-medium sm:tracking-[0.15em]"
          >
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
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 h-px bg-[#2A2723]" />
    </section>
  );
}
