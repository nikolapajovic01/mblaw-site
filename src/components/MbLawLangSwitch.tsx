"use client";

import { useEffect, useId, useRef, useState } from "react";

const languages = [
  { code: "SR", name: "Srpski", lang: "sr", href: null, current: true },
  { code: "EN", name: "English", lang: "en", href: "#", current: false },
] as const;

export default function MbLawLangSwitch() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
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
    openTimer.current = window.setTimeout(() => setOpen(true), 80);
  }

  function onLeave() {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    closeTimer.current = window.setTimeout(() => setOpen(false), 180);
  }

  function onClick() {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    setOpen((value) => !value);
  }

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        aria-label="Jezik"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={onClick}
        className={`group relative inline-flex items-center gap-1.5 pb-1.5 text-[11px] font-semibold tracking-[0.16em] transition-colors ${
          open ? "text-[#F1EEE7]" : "text-[#C2BCB2] hover:text-[#C78B3E]"
        }`}
      >
        SR
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
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-[196px] -translate-x-1/2 pt-3 ${
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
            className="mx-4 mt-4 block h-px w-10 origin-left bg-[#C78B3E]"
            style={
              open
                ? { animation: "mbLineDraw .8s cubic-bezier(.16,1,.3,1) .08s both" }
                : { transform: "scaleX(0)" }
            }
          />

          <ul id={menuId} role="menu" aria-label="Jezik" className="mt-2 pb-2">
            {languages.map((language, index) => {
              const className = `mb-practice-menu-item group/item relative flex items-baseline gap-3 px-4 py-2.5 no-underline ${
                language.current ? "cursor-default" : ""
              }`;
              const style = { transitionDelay: open ? `${90 + index * 55}ms` : "0ms" };
              const body = (
                <>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-1.5 left-0 w-px origin-top bg-[#C78B3E] transition-transform duration-300 ease-out ${
                      language.current ? "scale-y-100" : "scale-y-0 group-hover/item:scale-y-100"
                    }`}
                  />
                  <span className="w-6 shrink-0 text-[10.5px] font-semibold tracking-[0.14em] text-[#C78B3E] transition-transform duration-300 group-hover/item:translate-x-0.5">
                    {language.code}
                  </span>
                  <span
                    lang={language.lang}
                    className={`text-[14.5px] font-semibold normal-case leading-[1.22] tracking-[-0.01em] transition-colors duration-200 ${
                      language.current
                        ? "text-[#F1EEE7]"
                        : "text-[#A39E94] group-hover/item:text-[#C78B3E]"
                    }`}
                    style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
                  >
                    {language.name}
                  </span>
                </>
              );

              return (
                <li key={language.code} role="none">
                  {language.href ? (
                    <a
                      href={language.href}
                      lang={language.lang}
                      hrefLang={language.lang}
                      role="menuitem"
                      tabIndex={open ? 0 : -1}
                      className={className}
                      style={style}
                      onClick={(event) => {
                        event.preventDefault();
                        setOpen(false);
                      }}
                    >
                      {body}
                    </a>
                  ) : (
                    <span
                      role="menuitem"
                      aria-current="true"
                      tabIndex={open ? 0 : -1}
                      className={className}
                      style={style}
                    >
                      {body}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
