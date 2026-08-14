"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function MbLawAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: number): CSSProperties =>
    visible
      ? {
          animation: `mbAboutIn 1s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
        }
      : { opacity: 0 };

  return (
    <section
      ref={sectionRef}
      className="relative grid w-full overflow-hidden bg-[#D5CDC0] lg:min-h-[460px] lg:grid-cols-2 mb-light-section"
    >
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

        <div className="relative max-w-[560px]">
          <div
            className="mb-about-animate h-px w-16 origin-left bg-[#C78B3E]"
            style={
              visible
                ? { animation: "mbLineDraw 1s cubic-bezier(.16,1,.3,1) .05s both" }
                : { transform: "scaleX(0)" }
            }
          />
          <span
            className="mb-about-animate mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow"
            style={reveal(0.12)}
          >
            O NAMA
          </span>
          <h2
            className="mb-about-animate mt-5 text-[29px] font-bold leading-[1.16] tracking-[-0.015em] sm:text-[35px] md:text-[40px] mb-light-heading"
            style={{
              fontFamily: "var(--font-mb-serif), Georgia, serif",
              ...reveal(0.2),
            }}
          >
            Od pitanja do rešenja.
          </h2>
          <p
            className="mb-about-animate mt-6 text-[16px] leading-[1.75] md:text-[17px] mb-light-body"
            style={reveal(0.32)}
          >
            MB Law – Marković, Bogdanović & Partners pruža najviši nivo pravnih usluga
            na tržištu Srbije, uz individualizovan pristup i zaštitu interesa domaćih i
            inostranih pravnih i fizičkih lica.
          </p>
          <p
            className="mb-about-animate mt-4 text-[15px] leading-[1.7] md:text-[15.5px] mb-light-muted"
            style={reveal(0.4)}
          >
            Profesionalnost, etičnost i predanost u svakom predmetu.
          </p>
          <div className="mb-about-animate mt-8" style={reveal(0.48)}>
            <Link
              href="#"
              className="group inline-flex items-center gap-1.5 text-[12.5px] tracking-[0.15em] no-underline transition-colors hover:text-[#171512] mb-light-link"
            >
              <span className="border-b border-[#C9C0AF] pb-1.5 leading-none transition-colors group-hover:border-[#C78B3E]">
                SAZNAJTE VIŠE O NAMA
              </span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
            </Link>
          </div>
        </div>
      </div>

      <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] lg:min-h-full">
        <Image
          src="/mb/kancelarijaSlika1.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="mb-about-animate object-cover object-[72%_40%]"
          style={
            visible
              ? { animation: "mbAboutPhotoIn 1.4s ease-out .15s both" }
              : { opacity: 0 }
          }
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_right,rgba(206,197,184,0.72),transparent_28%)] lg:bg-[linear-gradient(to_right,rgba(206,197,184,0.82),transparent_22%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-16 bg-gradient-to-b from-[#CEC5B8]/80 to-transparent lg:hidden"
        />
      </div>
    </section>
  );
}
