"use client";

import { useEffect, useState } from "react";

const PHONE = "+381112223344";
const VIBER_HREF = "viber://chat?number=%2B381112223344";
const WHATSAPP_HREF = "https://wa.me/381112223344";

const circle =
  "pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2723] bg-[#171512] text-[#EDE9E1] shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-colors hover:border-[#C78B3E] hover:text-[#F1EEE7]";

export default function MbLawMobileActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShowTop(y > 360);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed right-4 z-20 flex flex-col items-center gap-2.5 print:hidden lg:hidden"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      {showTop ? (
        <button
          type="button"
          aria-label="Na vrh strane"
          onClick={() => {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
          }}
          className={circle}
        >
          <svg width="15" height="15" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M6 10V2M2.5 5.5 6 2l3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : null}

      <a href={VIBER_HREF} aria-label="Otvori Viber" className={circle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.75" y="2.6" width="14.5" height="18.8" rx="4.4" stroke="currentColor" strokeWidth="1.55" />
          <path
            d="M8.7 8.4c0-.55.45-1 1-1H11l1 2.4-1.2.8a5.2 5.2 0 0 0 2.6 2.6l.8-1.2 2.4 1v1.3c0 .55-.45 1-1 1C11.8 15.3 8.7 12.2 8.7 8.4Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href={WHATSAPP_HREF}
        aria-label="Otvori WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className={circle}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.15 6.13 2.15 11.22c0 2.08.78 3.99 2.08 5.5L3 22l5.5-1.72c1.37.57 2.9.88 4.5.88 5.46 0 9.89-4.13 9.89-9.22S17.5 2 12.04 2zm5.73 14.4c-.24.68-1.4 1.25-1.93 1.33-.49.07-1.12.1-1.81-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.18-4.93-4.38-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.38.26-.29.57-.36.76-.36h.55c.17 0 .4-.07.63.48.24.56.82 2.01.89 2.16.07.15.12.32.02.51-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.77 1.27 1.65 2.06 1.13 1.01 2.09 1.33 2.38 1.48.29.15.46.13.63-.08.17-.2.74-.86.94-1.16.2-.29.4-.24.67-.15.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.12.07.68-.17 1.36z" />
        </svg>
      </a>

      <a
        href={`tel:${PHONE}`}
        aria-label="Pozovi kancelariju"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C78B3E] text-[#120F0A] shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-colors hover:bg-[#D49A4A]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3.5 5.5c0-1.1.9-2 2-2H8l2 5-2.4 1.6a11 11 0 0 0 5.3 5.3L14.5 13l5 2v2.5c0 1.1-.9 2-2 2C9.4 19.5 3.5 13.6 3.5 5.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
