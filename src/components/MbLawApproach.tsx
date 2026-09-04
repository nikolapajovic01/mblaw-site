"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ApproachStep = {
  no: string;
  title: string;
  text: string;
};

type MbLawApproachProps = {
  eyebrow: string;
  title: string;
  lead: string;
  steps: ApproachStep[];
};

function pinEnabled() {
  return (
    window.matchMedia("(min-width: 1024px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function MbLawApproach({
  eyebrow,
  title,
  lead,
  steps,
}: MbLawApproachProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const railFillRef = useRef<HTMLSpanElement>(null);
  const snapRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  const applyProgress = useCallback(
    (progress: number) => {
      const p = Math.min(1, Math.max(0, progress));
      const fill = fillRef.current;
      const rail = railFillRef.current;
      if (fill) fill.style.transform = `scaleX(${p})`;
      if (rail) rail.style.transform = `scaleY(${p})`;

      const next = Math.min(
        steps.length - 1,
        Math.floor(p * steps.length + 0.001),
      );
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    },
    [steps.length],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;

    const update = () => {
      if (!pinEnabled()) return;
      const rect = track.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      applyProgress(-rect.top / total);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [applyProgress]);

  const goToStep = (index: number) => {
    const track = trackRef.current;
    if (!track || !pinEnabled()) {
      const panel = snapRef.current?.querySelector<HTMLElement>(
        `[data-approach-panel="${index}"]`,
      );
      panel?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      return;
    }
    const total = Math.max(1, track.offsetHeight - window.innerHeight);
    const top = window.scrollY + track.getBoundingClientRect().top;
    window.scrollTo({
      top: top + (index / steps.length) * total + 2,
      behavior: "smooth",
    });
  };

  const onSnapScroll = () => {
    const rail = snapRef.current;
    if (!rail || rail.clientWidth === 0) return;
    const next = Math.round(rail.scrollLeft / rail.clientWidth);
    const clamped = Math.min(steps.length - 1, Math.max(0, next));
    if (clamped !== activeRef.current) {
      activeRef.current = clamped;
      setActive(clamped);
    }
  };

  return (
    <section className="relative w-full bg-[#171512]">
      <div className="mb-approach-stack px-6 py-14 md:px-[72px] md:py-16 lg:hidden">
        <ApproachIntro eyebrow={eyebrow} title={title} lead={lead} />

        <div
          ref={snapRef}
          className="mb-approach-snap mt-10 -mx-6 flex snap-x snap-mandatory overflow-x-auto md:-mx-[72px]"
          onScroll={onSnapScroll}
        >
          {steps.map((step, index) => (
            <article
              key={step.no}
              data-approach-panel={index}
              className="relative flex min-h-[56dvh] w-full shrink-0 snap-start flex-col justify-end px-6 pb-2 md:px-[72px]"
            >
              <p
                aria-hidden="true"
                className="pointer-events-none select-none text-[120px] font-bold leading-[0.72] tracking-[-0.06em] text-[#C78B3E]/22 sm:text-[160px]"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {step.no}
              </p>
              <h3
                className="-mt-5 max-w-[22ch] text-[28px] font-semibold leading-[1.16] tracking-[-0.015em] text-[#F1EEE7] sm:text-[34px]"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {step.title}
              </h3>
              <p className="mt-4 max-w-[38ch] text-[15.5px] leading-[1.7] text-[#ACA69D]">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.no}
              type="button"
              aria-label={`Korak ${step.no}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goToStep(index)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                index === active
                  ? "w-8 bg-[#C78B3E]"
                  : "w-1.5 bg-[#3A3530]"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="mb-approach-track relative hidden h-[280vh] lg:block"
      >
        <div className="mb-approach-sticky sticky top-0 h-dvh overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-[#2A2723]"
          >
            <span
              ref={fillRef}
              className="absolute inset-y-0 left-0 w-full origin-left bg-[#C78B3E]"
              style={{ transform: "scaleX(0)" }}
            />
          </span>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_58%,rgba(199,139,62,0.16),transparent_46%)]"
          />

          <div className="relative z-10 grid h-full grid-cols-[minmax(0,0.9fr)_1px_minmax(0,1.15fr)] px-[72px] py-14 xl:px-20">
            <div className="flex min-w-0 flex-col justify-center py-2 pr-12 xl:pr-16">
              <ApproachIntro
                eyebrow={eyebrow}
                title={title}
                lead={lead}
                quiet
              />
            </div>

            <span
              aria-hidden="true"
              className="relative my-6 w-px bg-[#2A2723]"
            >
              <span
                ref={railFillRef}
                className="absolute inset-x-0 top-0 h-full origin-top bg-[#C78B3E]"
                style={{ transform: "scaleY(0)" }}
              />
            </span>

            <div className="relative min-w-0 pl-12 xl:pl-16">
              {steps.map((step, index) => (
                <p
                  key={step.no}
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-6 top-[8%] select-none text-[min(28vw,340px)] font-bold leading-none tracking-[-0.08em] text-[#C78B3E] transition-opacity duration-500 xl:text-[min(26vw,380px)] ${
                    index === active ? "opacity-[0.18]" : "opacity-0"
                  }`}
                  style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                >
                  {step.no}
                </p>
              ))}

              <nav
                aria-label="Koraci vođenja predmeta"
                className="relative z-10 flex h-full flex-col justify-center"
              >
                {steps.map((step, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={step.no}
                      type="button"
                      aria-current={isActive ? "step" : undefined}
                      onClick={() => goToStep(index)}
                      className={`group grid grid-cols-[3.25rem_minmax(0,1fr)] items-start border-t border-[#2A2723] py-7 text-left transition-colors last:border-b ${
                        isActive ? "border-[#C78B3E]/35" : "hover:border-[#3A3530]"
                      }`}
                    >
                      <span
                        className={`pt-1.5 text-[12px] font-semibold tracking-[0.18em] transition-colors ${
                          isActive
                            ? "text-[#C78B3E]"
                            : "text-[#5C574F] group-hover:text-[#C0B9AE]"
                        }`}
                      >
                        {step.no}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-[22px] font-semibold leading-[1.2] tracking-[-0.015em] transition-colors xl:text-[26px] ${
                            isActive
                              ? "text-[#F1EEE7]"
                              : "text-[#6B6459] group-hover:text-[#C0B9AE]"
                          }`}
                          style={{
                            fontFamily: "var(--font-mb-serif), Georgia, serif",
                          }}
                        >
                          {step.title}
                        </span>
                        {isActive ? (
                          <span
                            key={step.no}
                            className="mb-approach-step mt-3 block max-w-[42ch] text-[15.5px] font-normal leading-[1.7] tracking-normal text-[#D5CFC6]"
                            style={{
                              fontFamily:
                                "var(--font-mb-sans), Helvetica, sans-serif",
                            }}
                            aria-live="polite"
                          >
                            {step.text}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {active < steps.length - 1 ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex justify-center"
            >
              <div className="relative h-9 w-px overflow-hidden bg-[#3A3831]/70">
                <span
                  className="absolute inset-x-0 top-0 h-1/2 bg-[#C78B3E]"
                  style={{ animation: "mbScrollCue 2.4s ease-in-out infinite" }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ApproachIntro({
  eyebrow,
  title,
  lead,
  quiet = false,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  quiet?: boolean;
}) {
  return (
    <div className="max-w-[520px]">
      <div className="h-px w-16 bg-[#C78B3E]" />
      <span className="mt-6 block text-[10.5px] font-semibold tracking-[0.26em] text-[#77726A] md:text-[11px]">
        {eyebrow}
      </span>
      <h2
        className={
          quiet
            ? "mt-5 text-[28px] font-semibold leading-[1.2] tracking-[-0.015em] text-[#EDE9E1] xl:text-[32px]"
            : "mt-5 text-[29px] font-bold leading-[1.16] tracking-[-0.015em] text-[#F1EEE7] sm:text-[35px] md:text-[40px]"
        }
        style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
      >
        {title}
      </h2>
      <p
        className={
          quiet
            ? "mt-5 max-w-[38ch] text-[15.5px] leading-[1.75] text-[#A39E94]"
            : "mt-6 text-[16px] leading-[1.75] text-[#D5CFC6] md:text-[17px]"
        }
      >
        {lead}
      </p>
    </div>
  );
}
