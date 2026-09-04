"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getPracticeGroupHref, practiceMenuGroups } from "@/data/practice-areas";

export function usePracticeAreasHover(openDelay = 80, closeDelay = 180) {
  const [open, setOpen] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  function clearTimers() {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  }

  function onEnter() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    openTimer.current = window.setTimeout(() => setOpen(true), openDelay);
  }

  function onLeave() {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    closeTimer.current = window.setTimeout(() => setOpen(false), closeDelay);
  }

  useEffect(() => () => clearTimers(), []);

  return { open, onEnter, onLeave };
}

export function PracticeAreasTrigger({
  href,
  isActive,
  open,
  onEnter,
  onLeave,
}: {
  href: string;
  isActive?: boolean;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={href}
        aria-haspopup="true"
        aria-expanded={open}
        className={`group relative inline-flex items-center gap-1.5 pb-1.5 no-underline transition-colors ${
          isActive ? "text-[#F1EEE7]" : "text-[#C2BCB2] hover:text-[#C78B3E]"
        }`}
      >
        {isActive ? <span className="h-1 w-1 bg-[#C78B3E]" /> : null}
        OBLASTI RADA
        <svg
          width="9"
          height="9"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-300 ${open ? "-rotate-180" : ""}`}
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#C78B3E] transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </Link>

      <div
        className={`absolute left-1/2 top-full z-50 hidden w-[360px] -translate-x-1/2 pt-3 lg:block ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`mb-practice-menu overflow-hidden bg-[#141210] shadow-[0_22px_48px_rgba(0,0,0,0.38)] ${
            open ? "is-open" : ""
          }`}
        >
          <span
            aria-hidden="true"
            className="mx-5 mt-4 block h-px w-12 origin-left bg-[#C78B3E]"
            style={
              open
                ? { animation: "mbLineDraw .8s cubic-bezier(.16,1,.3,1) .08s both" }
                : { transform: "scaleX(0)" }
            }
          />

          <ul className="mt-3 pb-1">
            {practiceMenuGroups.map((group, index) => (
              <li key={group.slug}>
                <Link
                  href={getPracticeGroupHref(group)}
                  tabIndex={open ? 0 : -1}
                  className="mb-practice-menu-item group/item relative grid grid-cols-[32px_minmax(0,1fr)] items-start px-5 py-2.5 no-underline"
                  style={{ transitionDelay: open ? `${90 + index * 55}ms` : "0ms" }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-1.5 left-0 w-px origin-top scale-y-0 bg-[#C78B3E] transition-transform duration-300 ease-out group-hover/item:scale-y-100"
                  />
                  <span className="pt-0.5 text-[10.5px] font-semibold tracking-[0.14em] text-[#C78B3E] transition-transform duration-300 group-hover/item:translate-x-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 transition-transform duration-300 group-hover/item:translate-x-0.5">
                    <span
                      className="block text-[14.5px] font-semibold normal-case leading-[1.22] tracking-[-0.01em] text-[#EDE9E1] transition-colors duration-200 group-hover/item:text-[#C78B3E]"
                      style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                    >
                      {group.title}
                    </span>
                    <span className="mt-0.5 block text-[12px] font-normal normal-case leading-snug tracking-normal text-[#7A746B] transition-colors duration-200 group-hover/item:text-[#A39E94]">
                      {group.navLine}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/oblasti-rada"
            tabIndex={open ? 0 : -1}
            className="mb-practice-menu-item group/all mt-1 flex items-center justify-between border-t border-[#2A2723] px-5 py-3 no-underline"
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
          >
            <span className="text-[11px] font-semibold tracking-[0.16em] text-[#7A746B] transition-colors duration-200 group-hover/all:text-[#C78B3E]">
              SVE OBLASTI
            </span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="text-[#7A746B] transition-all duration-300 group-hover/all:translate-x-0.5 group-hover/all:text-[#C78B3E]"
            >
              <path
                d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
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
  );
}

export function PracticeAreasMobile({
  isActive,
  onNavigate,
}: {
  isActive?: boolean;
  onNavigate: () => void;
}) {
  return (
    <div className="w-full">
      <Link
        href="/oblasti-rada"
        onClick={onNavigate}
        className={`text-2xl font-semibold tracking-wide no-underline ${
          isActive ? "text-[#F1EEE7]" : "text-[#C2BCB2]"
        }`}
        style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
      >
        OBLASTI RADA
      </Link>

      <div className="mt-5 flex flex-col">
        {practiceMenuGroups.map((group, index) => (
          <Link
            key={group.slug}
            href={getPracticeGroupHref(group)}
            onClick={onNavigate}
            className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-0 border-b border-[#2A2723] py-3 no-underline"
          >
            <span className="text-[10px] font-semibold tracking-[0.12em] text-[#C78B3E]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span
                className="block text-[15px] font-semibold leading-snug text-[#EDE9E1]"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                {group.title}
              </span>
              <span className="mt-0.5 block text-[12.5px] text-[#7A746B]">
                {group.navLine}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
