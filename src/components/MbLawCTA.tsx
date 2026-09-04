"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function MbLawCTA() {
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
    <section
      ref={sectionRef}
      className="relative flex min-h-[380px] w-full items-center overflow-hidden bg-[#171512] px-6 py-14 md:min-h-[420px] md:px-[72px] md:py-16 lg:min-h-[460px] lg:py-20"
    >
      <Image
        src="/mb/CTAsekcija.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-[1] object-cover object-[72%_50%] md:object-[68%_45%]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-[rgba(20,18,16,0.78)] md:hidden"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(20,18,16,0.82) 0%, rgba(20,18,16,0.52) 42%, rgba(20,18,16,0.15) 62%, transparent 78%)",
        }}
      />

      <div className="relative z-[3] mb-section-shell">
        <div className="max-w-[620px]" style={reveal(0)}>
          <div
            className="h-px w-14 origin-left bg-[#C78B3E]"
            style={
              visible
                ? { animation: "mbLineDraw .9s cubic-bezier(.16,1,.3,1) both" }
                : { transform: "scaleX(0)" }
            }
          />
          <span className="mt-6 block text-[11px] font-semibold tracking-[0.24em] text-[#C78B3E]">
            KONSULTACIJA
          </span>
          <h2
            className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.015em] text-[#F1EEE7] sm:text-[38px] md:text-[42px]"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            Prvi korak je razgovor.
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.7] text-[#EDE9E1] md:text-[18px]">
            Zakažite inicijalni sastanak i dobijte jasan pregled opcija pre nego što
            donesete odluku. Diskretno, precizno i usmereno ka vašem cilju.
          </p>

          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex h-[54px] w-full items-center justify-center bg-[#C78B3E] px-10 text-[12px] font-semibold tracking-[0.16em] text-[#171512] no-underline transition-colors hover:bg-[#D89B4C] sm:w-auto"
            >
              ZAKAŽITE KONSULTACIJU
            </Link>

            <div className="mt-8 border-t border-[#4A453E]/60 pt-7">
              <p className="text-[13px] leading-[1.6] text-[#A39E94] md:text-[14px]">
                Ili nas kontaktirajte direktno.
              </p>

              <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-start lg:flex-nowrap lg:gap-0">
                <div className="sm:pr-8 lg:pr-10">
                  <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
                    TELEFON
                  </span>
                  <a
                    href="tel:+381112223344"
                    className="group mt-2 inline-block no-underline"
                  >
                    <span className="border-b border-[#F1EEE7]/20 pb-0.5 text-[16px] font-medium tracking-[0.03em] text-[#F1EEE7] transition-colors group-hover:border-[#C78B3E] group-hover:text-[#EDE9E1] md:text-[17px]">
                      +381 11 222 3344
                    </span>
                  </a>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden w-px self-stretch bg-[#3A3530] sm:block"
                />

                <div className="sm:px-8 lg:px-10">
                  <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
                    ADRESA
                  </span>
                  <p className="mt-2 text-[16px] font-medium leading-[1.45] tracking-[0.01em] text-[#F1EEE7] md:text-[17px]">
                    Resavska 68,
                    <br />
                    Beograd
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden w-px self-stretch bg-[#3A3530] sm:block"
                />

                <div className="sm:pl-8 lg:pl-10">
                  <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
                    EMAIL
                  </span>
                  <a
                    href="mailto:office@mblaw.rs"
                    className="group mt-2 inline-block no-underline"
                  >
                    <span className="border-b border-[#F1EEE7]/20 pb-0.5 text-[16px] font-medium tracking-[0.02em] text-[#F1EEE7] transition-colors group-hover:border-[#C78B3E] group-hover:text-[#EDE9E1] md:text-[17px]">
                      office@mblaw.rs
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
