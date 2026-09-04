"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  getPracticeGroupHref,
  practiceMenuGroups,
} from "@/data/practice-areas";

export default function MbLawPracticeAreas() {
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
      className="relative w-full overflow-hidden bg-[#171512] px-6 py-12 md:px-[72px] md:py-14 lg:py-16"
    >
      <Image
        src="/mb/pravnaSekcija.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-[1] object-cover object-[62%_38%] md:object-[50%_42%]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(23,21,18,0.92) 0%, rgba(23,21,18,0.78) 28%, rgba(23,21,18,0.72) 55%, rgba(23,21,18,0.88) 100%)",
        }}
      />

      <div className="relative z-[3] mb-section-shell">
        <header className="max-w-[640px]" style={reveal(0)}>
          <div
            className="h-px w-16 origin-left bg-[#C78B3E]"
            style={
              visible
                ? { animation: "mbLineDraw .9s cubic-bezier(.16,1,.3,1) both" }
                : { transform: "scaleX(0)" }
            }
          />
          <span className="mt-5 block text-[10.5px] font-semibold tracking-[0.26em] text-[#77726A] md:text-[11px]">
            OBLASTI RADA
          </span>
          <h2
            className="mt-3 text-[26px] font-bold leading-[1.14] tracking-[-0.015em] text-[#F1EEE7] sm:text-[30px] md:text-[34px]"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            Šest celina u kojima vodimo predmete.
          </h2>
        </header>

        <ul className="mt-7 border-t border-[#2A2723] md:mt-8">
          {practiceMenuGroups.map((group, i) => (
            <li key={group.slug} style={reveal(0.12 + i * 0.08)}>
              <Link
                href={getPracticeGroupHref(group)}
                className="group relative grid grid-cols-1 gap-3 border-b border-[#2A2723] py-3.5 no-underline transition-colors hover:border-[#3A3530] md:grid-cols-12 md:items-center md:gap-x-6 md:py-5 lg:gap-x-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-[#C78B3E] transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none motion-reduce:group-hover:scale-y-0"
                />

                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C78B3E] md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className="text-[20px] font-semibold leading-[1.12] tracking-[-0.01em] text-[#EDE9E1] transition-colors group-hover:text-[#F1EEE7] sm:text-[22px] md:col-span-4 lg:text-[24px]"
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {group.title}
                </span>

                <span className="text-[13.5px] leading-[1.55] text-[#8C877D] transition-colors group-hover:text-[#A39E94] md:col-span-6 lg:col-span-5">
                  {group.navLine}
                </span>

                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-[0.12em] text-[#7A746B] transition-colors group-hover:text-[#C78B3E] md:col-span-1 md:justify-end">
                  <span className="hidden sm:inline">DETALJI</span>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
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
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 md:mt-7" style={reveal(0.62)}>
          <Link
            href="/oblasti-rada"
            className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium tracking-[0.15em] text-[#CFC9BF] no-underline transition-colors hover:text-[#F1EEE7]"
          >
            <span className="border-b border-[#3A3831] pb-1.5 leading-none transition-colors group-hover:border-[#C78B3E]">
              SVE OBLASTI RADA
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
    </section>
  );
}
