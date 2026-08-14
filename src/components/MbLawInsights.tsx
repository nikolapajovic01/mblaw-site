"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type Insight = {
  tag: string;
  title: string;
  excerpt: string;
  day: string;
  month: string;
  year: string;
  isoDate: string;
  image?: string;
};

const insights: Insight[] = [
  {
    tag: "PRIVREDNO PRAVO",
    title: "Naslov članka o izmenama propisa",
    excerpt:
      "Kratak pregled najvažnijih promena i njihovog uticaja na poslovanje privrednih društava.",
    day: "12",
    month: "AVGUST",
    year: "2026",
    isoDate: "2026-08-12",
  },
  {
    tag: "NEKRETNINE",
    title: "Naslov članka o prometu nepokretnosti",
    excerpt:
      "Šta je potrebno proveriti pre kupoprodaje i kako izbeći najčešće pravne rizike.",
    day: "28",
    month: "JUL",
    year: "2026",
    isoDate: "2026-07-28",
  },
  {
    tag: "RADNO PRAVO",
    title: "Naslov članka o radnim odnosima",
    excerpt:
      "Praktične smernice za poslodavce prilikom izmene internih akata i ugovora o radu.",
    day: "19",
    month: "JUL",
    year: "2026",
    isoDate: "2026-07-19",
  },
  {
    tag: "KAZNENO PRAVO",
    title: "Naslov članka o odbrani u postupku",
    excerpt:
      "Kako pripremiti odbranu i koje korake preduzeti u ranoj fazi postupka.",
    day: "03",
    month: "JUN",
    year: "2026",
    isoDate: "2026-06-03",
  },
];

function NavArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const label = direction === "prev" ? "Prethodni uvidi" : "Sledeći uvidi";

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center border border-[#3A3530] text-[#CFC9BF] transition-colors hover:border-[#C78B3E]/50 hover:text-[#F1EEE7] disabled:pointer-events-none disabled:opacity-30"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function DateStamp({ day, month, year, isoDate }: Pick<Insight, "day" | "month" | "year" | "isoDate">) {
  return (
    <time dateTime={isoDate} className="border-l-2 border-[#C78B3E] pl-3">
      <span
        className="block text-[30px] font-bold leading-none text-[#F1EEE7] md:text-[34px]"
        style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
      >
        {day}
      </span>
      <span className="mt-1.5 block text-[10px] font-semibold tracking-[0.2em] text-[#C78B3E]">
        {month} {year}
      </span>
    </time>
  );
}

function CardMedia({ post }: { post: Insight }) {
  return (
    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#141210]">
      {post.image ? (
        <Image
          src={post.image}
          alt=""
          fill
          draggable={false}
          sizes="(max-width: 768px) 82vw, 360px"
          className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,#1E1B17_0%,#141210_55%,#1A1714_100%)]"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.88)_0%,rgba(20,18,16,0.2)_55%,rgba(20,18,16,0.35)_100%)]"
      />

      <div className="absolute bottom-0 left-0 p-4 md:p-5">
        <DateStamp day={post.day} month={post.month} year={post.year} isoDate={post.isoDate} />
      </div>
    </div>
  );
}

export default function MbLawInsights() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragMovedRef = useRef(0);
  const isDraggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

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

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const snapToNearest = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let closest = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      const slide = slideRefs.current[closest];
      if (!slide) return;

      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({
        left: track.scrollLeft + slide.getBoundingClientRect().left - trackLeft,
        behavior: smooth ? "smooth" : "auto",
      });
    };

    const endDrag = (pointerId: number) => {
      if (!isDraggingRef.current || pointerIdRef.current !== pointerId) return;

      const didDrag = dragMovedRef.current > 6;
      isDraggingRef.current = false;
      pointerIdRef.current = null;
      setIsDragging(false);
      track.style.scrollSnapType = "";
      if (track.hasPointerCapture(pointerId)) {
        track.releasePointerCapture(pointerId);
      }
      if (didDrag) snapToNearest();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;

      event.preventDefault();
      isDraggingRef.current = true;
      dragMovedRef.current = 0;
      pointerIdRef.current = event.pointerId;
      startXRef.current = event.clientX;
      scrollLeftRef.current = track.scrollLeft;
      setIsDragging(true);
      track.style.scrollSnapType = "none";
      track.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current || event.pointerId !== pointerIdRef.current) return;

      event.preventDefault();
      const delta = event.clientX - startXRef.current;
      dragMovedRef.current = Math.max(dragMovedRef.current, Math.abs(delta));
      track.scrollLeft = scrollLeftRef.current - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      endDrag(event.pointerId);
    };

    const onClick = (event: MouseEvent) => {
      if (dragMovedRef.current > 6) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const onDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    track.addEventListener("pointerdown", onPointerDown, { capture: true });
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);
    track.addEventListener("dragstart", onDragStart, { capture: true });
    track.addEventListener("click", onClick, true);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown, { capture: true });
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
      track.removeEventListener("dragstart", onDragStart, { capture: true });
      track.removeEventListener("click", onClick, true);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;

    const targetScroll =
      track.scrollLeft + slide.getBoundingClientRect().left - track.getBoundingClientRect().left;

    track.scrollTo({
      left: targetScroll,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const reveal = (delay: number): CSSProperties =>
    visible
      ? { animation: `mbUp .9s cubic-bezier(.2,.7,.2,1) ${delay}s both` }
      : { opacity: 0 };

  const progress = ((activeIndex + 1) / insights.length) * 100;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#2A231C] px-6 py-16 md:px-[72px] md:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(199,139,62,0.14),transparent_52%),radial-gradient(ellipse_at_82%_100%,rgba(199,139,62,0.1),transparent_48%)]"
      />
      <div className="relative mb-section-shell">
        <div
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          style={reveal(0)}
        >
          <header className="max-w-[520px]">
            <div
              className="h-px w-12 origin-left bg-[#C78B3E]"
              style={
                visible
                  ? { animation: "mbLineDraw .9s cubic-bezier(.16,1,.3,1) both" }
                  : { transform: "scaleX(0)" }
              }
            />
            <span className="mt-5 block text-[10.5px] font-semibold tracking-[0.26em] text-[#77726A]">
              UVIDI
            </span>
            <h2
              className="mt-3 text-[26px] font-bold leading-[1.16] tracking-[-0.015em] text-[#F1EEE7] sm:text-[30px] md:text-[34px]"
              style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
            >
              Najnovije analize i pravna praksa.
            </h2>
          </header>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <div className="flex items-center gap-3">
              <NavArrow
                direction="prev"
                disabled={activeIndex === 0}
                onClick={() => scrollToIndex(activeIndex - 1)}
              />
              <span
                className="min-w-[72px] text-center text-[11px] font-semibold tracking-[0.18em] text-[#8C877D]"
                aria-live="polite"
              >
                <span className="text-[#F1EEE7]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-1.5 text-[#4A443C]">/</span>
                {String(insights.length).padStart(2, "0")}
              </span>
              <NavArrow
                direction="next"
                disabled={activeIndex === insights.length - 1}
                onClick={() => scrollToIndex(activeIndex + 1)}
              />
            </div>

            <Link
              href="#"
              className="group inline-flex items-center gap-1.5 text-[11.5px] font-medium tracking-[0.15em] text-[#CFC9BF] no-underline transition-colors hover:text-[#F1EEE7]"
            >
              <span className="border-b border-[#3A3831] pb-1 leading-none transition-colors group-hover:border-[#C78B3E]">
                SVI UVIDI
              </span>
              <svg
                width="10"
                height="10"
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

        <div className="relative mt-10 overflow-hidden md:mt-12" style={reveal(0.1)}>
          {activeIndex > 0 ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-gradient-to-r from-[#2A231C] to-transparent md:w-14"
            />
          ) : null}
          {activeIndex < insights.length - 1 ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-gradient-to-l from-[#2A231C] to-transparent md:w-14"
            />
          ) : null}

          <div
            ref={trackRef}
            className={`snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{ touchAction: "pan-x" }}
          >
            <ul className="flex w-max gap-4 md:gap-5">
              {insights.map((post, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={post.title}
                    ref={(node) => {
                      slideRefs.current[index] = node;
                    }}
                    className="w-[min(82vw,320px)] shrink-0 snap-start sm:w-[300px] md:w-[340px]"
                  >
                    <Link
                      href="#"
                      draggable={false}
                      onDragStart={(event) => event.preventDefault()}
                      className={`group relative flex h-[390px] flex-col overflow-hidden border no-underline transition-[border-color,opacity] duration-500 md:h-[410px] motion-reduce:transition-none ${
                        isActive
                          ? "border-[#C78B3E]/60 opacity-100"
                          : "border-[#4A4034] opacity-[0.72] hover:opacity-90"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 top-0 z-[1] h-px origin-left bg-[#C78B3E] transition-transform duration-500 motion-reduce:transition-none ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />

                      <CardMedia post={post} />

                      <div className="relative flex flex-1 flex-col bg-[#241E18] p-5 md:p-6">
                        <span className="text-[10px] font-semibold tracking-[0.14em] text-[#C78B3E]">
                          {post.tag}
                        </span>

                        <h3
                          className="mt-3 text-[18px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#F1EEE7] transition-colors group-hover:text-[#EDE9E1] md:text-[20px]"
                          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                        >
                          {post.title}
                        </h3>

                        <p className="mt-2.5 line-clamp-3 flex-1 text-[13.5px] leading-[1.65] text-[#8C877D]">
                          {post.excerpt}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-[0.12em] text-[#CFC9BF] transition-colors group-hover:text-[#C78B3E]">
                          PROČITAJTE
                          <svg
                            width="10"
                            height="10"
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
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-8 h-px w-full bg-[#4A4034]">
            <div
              className="h-full origin-left bg-[#C78B3E] transition-[width] duration-500 motion-reduce:transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
