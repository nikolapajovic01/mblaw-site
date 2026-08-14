"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const SESSION_KEY = "mb-intro-seen";

/** Earliest the curtain may lift: the wordmark settles at 1740ms, then a beat. */
const MIN_LIFT_START = 2250;
/** Latest the curtain may lift, keeping the whole intro inside 3270ms. */
const MAX_LIFT_START = 2750;
const LIFT_DURATION = 520;
/** Must outlast the mbIntroLiftHold timeline in globals.css. */
const SAFETY_EXIT = 3400;

/**
 * Runs synchronously while the document is still parsing, before the overlay
 * below it is painted. That is what keeps a returning visitor from seeing a
 * flash of the curtain, which no effect-based check could prevent.
 */
const BOOTSTRAP = `(function(){var d=document.documentElement;function done(){d.setAttribute('data-mb-intro','done')}try{if(d.hasAttribute('data-mb-intro'))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){done();return}if(sessionStorage.getItem('${SESSION_KEY}')==='1'){done();return}sessionStorage.setItem('${SESSION_KEY}','1');d.setAttribute('data-mb-intro','active');window.setTimeout(function(){if(d.getAttribute('data-mb-intro')!=='done')done()},${SAFETY_EXIT})}catch(e){done()}})();`;

async function whenAssetsReady(imageSelector: string): Promise<void> {
  const tasks: Promise<unknown>[] = [];

  if (document.fonts) tasks.push(document.fonts.ready);

  const image = document.querySelector<HTMLImageElement>(imageSelector);
  if (image && !image.complete) {
    tasks.push(
      new Promise<void>((resolve) => {
        const settle = () => resolve();
        image.addEventListener("load", settle, { once: true });
        image.addEventListener("error", settle, { once: true });
      })
    );
  }

  await Promise.all(tasks);
}

type MbLawIntroProps = {
  /** Element whose load gates the reveal. Defaults to the hero photograph. */
  imageSelector?: string;
};

export default function MbLawIntro({
  imageSelector = "img.mb-hero-photo",
}: MbLawIntroProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    // Returning visits and reduced motion are already settled by the bootstrap
    // script, and the overlay stays hidden by CSS.
    if (root.getAttribute("data-mb-intro") !== "active") return;

    let cancelled = false;
    const timers: number[] = [];

    /**
     * Read the clock off the panel's own animation rather than this effect:
     * the curtain starts animating at first paint, which is earlier than
     * hydration, and the 2 second ceiling has to be measured from there.
     */
    const elapsed = () => {
      const current = panelRef.current?.getAnimations?.()[0]?.currentTime;
      return typeof current === "number" ? current : 0;
    };

    const finish = () => root.setAttribute("data-mb-intro", "done");

    const lift = () => {
      if (cancelled) return;
      if (root.getAttribute("data-mb-intro") !== "active") return;
      root.setAttribute("data-mb-intro", "leaving");
      timers.push(window.setTimeout(finish, LIFT_DURATION));
    };

    timers.push(window.setTimeout(lift, Math.max(0, MAX_LIFT_START - elapsed())));

    void whenAssetsReady(imageSelector).then(() => {
      if (cancelled) return;
      timers.push(window.setTimeout(lift, Math.max(0, MIN_LIFT_START - elapsed())));
    });

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [imageSelector]);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: BOOTSTRAP }} />

      <div data-mb-intro-ui="" aria-hidden="true">
        <div
          ref={panelRef}
          data-mb-intro-panel=""
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#1B1916] will-change-transform"
        >
          <div style={{ animation: "mbUp .62s cubic-bezier(.16,1,.3,1) .08s both" }}>
            <div className="inline-flex w-[96px] flex-col items-stretch md:w-[132px]">
              <Image
                src="/mb/mb-logo.webp"
                alt=""
                width={132}
                height={132}
                priority
                className="block h-[96px] w-full object-contain md:h-[132px]"
              />
              <div
                className="-mt-2 flex w-full justify-between text-[34px] font-bold uppercase leading-none text-[#EDE9E1] md:-mt-3 md:text-[46px]"
                style={{
                  fontFamily: "var(--font-mb-serif), Georgia, serif",
                  animation: "mbClipReveal .52s cubic-bezier(.16,1,.3,1) .38s both",
                }}
              >
                <span>L</span>
                <span>A</span>
                <span>W</span>
              </div>
            </div>
          </div>

          {/* items-stretch ties the divider to the width of the wordmark below
              it, so the rule always spans the lockup exactly. */}
          <div className="mt-9 flex flex-col items-stretch px-6 md:mt-12">
            {/* The header separates monogram from wordmark with a vertical
                hairline; here the same divider lies down. */}
            <div
              className="h-px origin-left bg-[#C78B3E]"
              style={{ animation: "mbLineDraw .52s cubic-bezier(.16,1,.3,1) .8s both" }}
            />

            <div
              className="mt-9 flex flex-col items-center gap-2 text-center md:mt-12 md:gap-2.5"
              style={{ animation: "mbUp .56s cubic-bezier(.2,.7,.2,1) 1.18s both" }}
            >
              <span
                className="text-[18px] font-medium leading-[1.15] tracking-[0.06em] text-[#EDE9E1] md:text-[24px] md:tracking-[0.07em]"
                style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
              >
                MARKOVIĆ I BOGDANOVIĆ
              </span>
              <span className="text-[10px] font-medium leading-[1.3] tracking-[0.18em] text-[#89837A] md:text-[12px] md:tracking-[0.22em]">
                ZAJEDNIČKA ADVOKATSKA KANCELARIJA
              </span>
            </div>
          </div>

          <span className="absolute inset-x-0 bottom-0 h-px bg-[#2A2723]" />
        </div>
      </div>
    </>
  );
}
