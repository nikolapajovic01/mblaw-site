"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const navLinks = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "#" },
  { label: "Oblasti rada", href: "#" },
  { label: "Tim", href: "#" },
  { label: "Uvidi", href: "#" },
  { label: "Kontakt", href: "#" },
];

const practiceLinks = [
  { label: "Privredno pravo", href: "#" },
  { label: "Nekretnine", href: "#" },
  { label: "Radno pravo", href: "#" },
  { label: "Kazneno pravo", href: "#" },
];

const legalLinks = [
  { label: "Politika privatnosti", href: "#" },
  { label: "Uslovi korišćenja", href: "#" },
];

export default function MbLawFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: number): CSSProperties =>
    visible
      ? { animation: `mbUp .9s cubic-bezier(.2,.7,.2,1) ${delay}s both` }
      : { opacity: 0 };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#171512] px-6 pt-16 md:px-[72px] md:pt-20"
    >
      <div className="mb-section-shell">
        <div className="grid gap-14 md:grid-cols-12 md:gap-x-16 lg:gap-x-20">
          {/* brand */}
          <div className="md:col-span-4" style={reveal(0)}>
            <Link
              href="/"
              aria-label="MB Law – Marković, Bogdanović & Partners, početna strana"
              className="flex items-center gap-2 no-underline sm:gap-3"
            >
              <div className="inline-flex w-11 flex-col items-stretch md:w-[52px]">
                <Image
                  src="/mb/mb-logo.webp"
                  alt="MB Law – Marković, Bogdanović & Partners"
                  width={52}
                  height={52}
                  className="block h-11 w-full object-contain md:h-[52px]"
                />
                <div
                  className="-mt-1 flex w-full justify-between text-[17.5px] font-bold uppercase leading-none text-[#EDE9E1] md:-mt-1.5 md:text-[18px]"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                  aria-hidden="true"
                >
                  <span>L</span>
                  <span>A</span>
                  <span>W</span>
                </div>
              </div>
              <span className="h-11 w-px shrink-0 bg-[#2A2723] md:h-14" />
              <div className="flex min-w-0 max-w-[180px] flex-col gap-0.5">
                <span className="text-[13px] font-semibold leading-[1.2] tracking-[0.06em] text-[#EDE9E1] md:text-[14px]">
                  MARKOVIĆ I BOGDANOVIĆ
                </span>
                <span className="text-[8.5px] font-medium leading-normal tracking-[0.15em] text-[#77726A] md:text-[9px]">
                  ZAJEDNIČKA ADVOKATSKA KANCELARIJA
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-[320px] text-[14.5px] leading-[1.7] text-[#8C877D]">
              Sveobuhvatna pravna podrška domaćim i međunarodnim klijentima, uz
              strateški pristup i pouzdanu zaštitu poslovnih i ličnih interesa.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-[#2A2723] text-[#8C877D] no-underline transition-colors hover:border-[#C78B3E] hover:text-[#C78B3E]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-[#2A2723] text-[#8C877D] no-underline transition-colors hover:border-[#C78B3E] hover:text-[#C78B3E]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* navigacija */}
          <div className="md:col-span-2 md:col-start-6" style={reveal(0.1)}>
            <span className="block text-[10.5px] font-semibold tracking-[0.26em] text-[#6B6459]">
              NAVIGACIJA
            </span>
            <ul className="mt-6 flex flex-col gap-3.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14.5px] text-[#ACA69D] no-underline transition-colors hover:text-[#C78B3E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* oblasti rada */}
          <div className="md:col-span-2" style={reveal(0.18)}>
            <span className="block text-[10.5px] font-semibold tracking-[0.26em] text-[#6B6459]">
              OBLASTI RADA
            </span>
            <ul className="mt-6 flex flex-col gap-3.5">
              {practiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14.5px] text-[#ACA69D] no-underline transition-colors hover:text-[#C78B3E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* kontakt */}
          <div className="md:col-span-3" style={reveal(0.26)}>
            <span className="block text-[10.5px] font-semibold tracking-[0.26em] text-[#6B6459]">
              KONTAKT
            </span>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C78B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                  <path d="M20 10.5c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10.5" r="2.8" />
                </svg>
                <span className="text-[14.5px] leading-[1.6] text-[#ACA69D]">
                  Resavska 68,
                  <br />
                  Beograd
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C78B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                  <path d="M3.5 5.5c0-1.1.9-2 2-2H8l2 5-2.4 1.6a11 11 0 0 0 5.3 5.3L14.5 13l5 2v2.5c0 1.1-.9 2-2 2C9.4 19.5 3.5 13.6 3.5 5.5Z" />
                </svg>
                <a href="tel:+381112223344" className="text-[14.5px] text-[#ACA69D] no-underline transition-colors hover:text-[#C78B3E]">
                  +381 11 222 3344
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C78B3E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 6.5 8 6.5 8-6.5" />
                </svg>
                <a href="mailto:office@mblaw.rs" className="text-[14.5px] text-[#ACA69D] no-underline transition-colors hover:text-[#C78B3E]">
                  office@mblaw.rs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 h-px w-full origin-left bg-[#2A2723] md:mt-16"
          style={
            visible
              ? { animation: "mbLineDraw .9s cubic-bezier(.16,1,.3,1) .34s both" }
              : { transform: "scaleX(0)" }
          }
        />

        {/* bottom bar */}
        <div
          className="flex flex-col gap-4 py-7 text-[12.5px] text-[#6B6459] sm:flex-row sm:items-center sm:justify-between"
          style={reveal(0.42)}
        >
          <span>
            © {new Date().getFullYear()} MB Law – Marković, Bogdanović & Partners. Sva
            prava zadržana.
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#6B6459] no-underline transition-colors hover:text-[#C78B3E]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
