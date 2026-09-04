"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import MbLawTeamCards from "@/components/MbLawTeamCards";

export default function MbLawTeam() {
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
      { threshold: 0.12 }
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
      id="tim"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#D5CDC0] px-6 py-12 md:px-[72px] md:py-8 lg:py-9 mb-light-section"
    >
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
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(32,28,23,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 88px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_100%,rgba(199,139,62,0.11),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_18%,rgba(32,28,23,0.06),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#171512]/28 via-[#171512]/10 to-transparent md:h-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#2A231C]/16 via-[#2A231C]/6 to-transparent md:h-36"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-[#B8AFA3]/80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-24 z-[1] h-px bg-[#C9C0AF]/70 md:inset-x-[72px] md:top-28"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-[#B8AFA3]/80"
      />

      <div className="relative z-[2] mb-section-shell">
        <header className="max-w-[640px]" style={reveal(0)}>
          <div
            className="h-px w-16 origin-left bg-[#C78B3E]"
            style={
              visible
                ? { animation: "mbLineDraw .9s cubic-bezier(.16,1,.3,1) both" }
                : { transform: "scaleX(0)" }
            }
          />
          <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:mt-3 md:text-[11px] mb-light-eyebrow">
            TIM
          </span>
          <h2
            className="mt-5 text-[29px] font-bold leading-[1.16] tracking-[-0.015em] sm:text-[35px] md:mt-2.5 md:text-[30px] mb-light-heading"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            Osnivački partneri.
          </h2>
          <p className="mt-3 max-w-[48ch] text-[14.5px] leading-[1.6] md:mt-1.5 md:text-[14px] mb-light-muted">
            Osnivački partneri vode svaki predmet lično, uz isti standard rada,
            pažnje i odgovornosti prema klijentu.
          </p>
        </header>

        <div
          className="mt-7 border-t border-[#C9C0AF]/80 pt-7 md:mt-4 md:pt-4"
          style={reveal(0.08)}
        >
          <MbLawTeamCards visible={visible} />
        </div>
      </div>
    </section>
  );
}
