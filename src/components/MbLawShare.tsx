"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";

type Network = "telegram" | "viber" | "whatsapp" | "linkedin";

// Each audience shares where it actually talks: Russians in Serbia on Telegram,
// Serbian readers on Viber, English-speaking employers and HR on LinkedIn.
const ORDER: Record<Locale, Network[]> = {
  sr: ["viber", "whatsapp", "telegram", "linkedin"],
  ru: ["telegram", "whatsapp", "viber", "linkedin"],
  en: ["linkedin", "whatsapp", "telegram", "viber"],
};

const LABELS: Record<Network, string> = {
  telegram: "Telegram",
  viber: "Viber",
  whatsapp: "WhatsApp",
  linkedin: "LinkedIn",
};

function shareHref(network: Network, url: string, title: string) {
  const u = encodeURIComponent(url);
  const withTitle = encodeURIComponent(`${title} ${url}`);
  switch (network) {
    case "telegram":
      return `https://t.me/share/url?url=${u}&text=${encodeURIComponent(title)}`;
    case "viber":
      return `viber://forward?text=${withTitle}`;
    case "whatsapp":
      return `https://wa.me/?text=${withTitle}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
  }
}

const itemClass =
  "inline-flex h-9 items-center border border-[#4A4034] px-4 text-[11px] font-semibold tracking-[0.12em] text-[#CFC9BF] no-underline transition-colors hover:border-[#C78B3E] hover:text-[#C78B3E]";

export default function MbLawShare({
  url,
  title,
  locale,
  label,
  copyLabel,
  copiedLabel,
}: {
  url: string;
  title: string;
  locale: Locale;
  label: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (insecure context, denied permission); the
      // network links still work, so there is nothing else to do.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="mr-1 text-[10px] font-semibold tracking-[0.2em] text-[#77726A]">{label}</span>
      {ORDER[locale].map((network) => (
        <a
          key={network}
          href={shareHref(network, url, title)}
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
        >
          {LABELS[network]}
        </a>
      ))}
      <button type="button" onClick={copy} className={itemClass} aria-live="polite">
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
