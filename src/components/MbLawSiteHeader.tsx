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
  { label: "POČETNA", href: "/" },
  { label: "O NAMA", href: "/o-nama" },
  { label: "OBLASTI RADA", href: "/oblasti-rada" },
  { label: "TIM", href: "/tim" },
  { label: "UVIDI", href: "/uvidi" },
  { label: "KONTAKT", href: "/kontakt" },
];

export default function MbLawSiteHeader({
  active,
  overlay = false,
}: {
  active?: string;
  overlay?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const areas = usePracticeAreasHover();

  return (
    <header className={`relative z-40 w-full ${overlay ? "" : "bg-[#1B1916]"}`}>
      <div
        className={`relative z-40 flex items-center justify-between px-6 md:px-[72px] ${
          overlay ? "py-6 md:pt-[30px] md:pb-0" : "py-6 md:py-[30px]"
        }`}
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
              const isActive = item.label === active;

              if (item.label === "OBLASTI RADA") {
                return (
                  <PracticeAreasTrigger
                    key={item.label}
                    href={item.href}
                    isActive={isActive}
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
                    isActive ? "text-[#F1EEE7]" : "text-[#C2BCB2] hover:text-[#C78B3E]"
                  }`}
                >
                  {isActive && <span className="h-1 w-1 bg-[#C78B3E]" />}
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
      </div>

      {overlay ? null : <div className="h-px w-full bg-[#2A2723]" />}

      <div
        className={`z-30 flex flex-col items-start gap-7 overflow-y-auto bg-[#171512] px-6 py-10 transition-opacity duration-300 lg:hidden ${
          overlay
            ? "fixed inset-0 pt-28"
            : "fixed inset-x-0 top-[72px] bottom-0"
        } ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {navItems.map((item) => {
          if (item.label === "OBLASTI RADA") {
            return (
              <PracticeAreasMobile
                key={item.label}
                isActive={item.label === active}
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
                item.label === active ? "text-[#F1EEE7]" : "text-[#C2BCB2]"
              }`}
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
