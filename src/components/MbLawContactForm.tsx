"use client";

import { useState, type FormEvent } from "react";
import { defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";

const EMAIL = "office@mblaw.rs";

const fieldClass =
  "w-full appearance-none rounded-none border-0 border-b border-[#4A453E] bg-transparent py-3 text-[16px] text-[#F1EEE7] outline-none transition-colors placeholder:text-[#5C574F] focus:border-[#C78B3E]";

type ContactArea = {
  slug: string;
  title: string;
};

export default function MbLawContactForm({
  areas,
  locale = defaultLocale,
}: {
  areas: ContactArea[];
  locale?: Locale;
}) {
  const dict = getDictionary(locale).contactForm;
  const [status, setStatus] = useState<"idle" | "sent" | "sending">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const area = String(data.get("area") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (name.length < 2) {
      setError(dict.errorName);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(dict.errorEmail);
      return;
    }
    if (message.length < 20) {
      setError(dict.errorMessage);
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, area, message, website }),
      });
      if (!response.ok) {
        setStatus("idle");
        setError(dict.errorSend);
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(dict.errorSend);
    }
  };

  if (status === "sent") {
    return (
      <div className="border-t border-[#4A453E]/60 pt-8" role="status">
        <p
          className="text-[24px] font-semibold leading-[1.2] tracking-[-0.015em] text-[#F1EEE7] md:text-[28px]"
          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
        >
          {dict.successTitle}
        </p>
        <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.7] text-[#D5CFC6]">
          {dict.successBody}{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#F1EEE7] underline decoration-[#C78B3E]/50 underline-offset-4 transition-colors hover:text-[#C78B3E]"
          >
            {EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative mt-10 mb-contact-form md:mt-12">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        <label className="block">
          <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
            {dict.nameLabel}
          </span>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
            {dict.emailLabel}
          </span>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
            {dict.phoneLabel}
          </span>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
            {dict.areaLabel}
          </span>
          <span className="relative block">
            <select
              id="contact-area"
              name="area"
              defaultValue=""
              className={`${fieldClass} pr-8`}
            >
              <option value="">{dict.areaPlaceholder}</option>
              {areas.map((area) => (
                <option key={area.slug} value={area.title}>
                  {area.title}
                </option>
              ))}
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#8C877D]"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </label>
      </div>

      <label className="mt-8 block">
        <span className="block text-[10px] font-semibold tracking-[0.22em] text-[#8C877D]">
          {dict.messageLabel}
        </span>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-[52ch] text-[13px] leading-[1.6] text-[#A39E94]">
          {dict.footnote}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-[54px] w-full shrink-0 items-center justify-center bg-[#C78B3E] px-10 text-[12px] font-semibold tracking-[0.16em] text-[#171512] transition-colors hover:bg-[#D89B4C] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? dict.sending : dict.submit}
        </button>
      </div>

      {error ? (
        <p className="mt-4 text-[14px] text-[#D4A574]" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
