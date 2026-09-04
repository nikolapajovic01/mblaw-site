"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "office@mblaw.rs";

const fieldClass =
  "w-full appearance-none rounded-none border-0 border-b border-[#4A453E] bg-transparent py-3 text-[16px] text-[#F1EEE7] outline-none transition-colors placeholder:text-[#5C574F] focus:border-[#C78B3E]";

type ContactArea = {
  slug: string;
  title: string;
};

export default function MbLawContactForm({
  areas,
}: {
  areas: ContactArea[];
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") ?? "").trim()) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const area = String(data.get("area") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) {
      setError("Unesite ime i prezime.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Unesite ispravnu email adresu.");
      return;
    }
    if (message.length < 20) {
      setError("Napišite ukratko šta vam treba, bar dve rečenice.");
      return;
    }

    const lines = [
      `Ime: ${name}`,
      `Email: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      area ? `Oblast: ${area}` : "",
      "",
      message,
    ].filter((line) => line !== "");

    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Upit sa sajta MB Law",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setError("");
    setStatus("sent");
    window.location.href = href;
  };

  if (status === "sent") {
    return (
      <div className="border-t border-[#4A453E]/60 pt-8" role="status">
        <p
          className="text-[24px] font-semibold leading-[1.2] tracking-[-0.015em] text-[#F1EEE7] md:text-[28px]"
          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
        >
          Otvoren je vaš program za poštu.
        </p>
        <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.7] text-[#D5CFC6]">
          Ako se prozor nije pojavio, pošaljite upit na{" "}
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
            IME I PREZIME
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
            EMAIL
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
            TELEFON
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
            OBLAST, NIJE OBAVEZNO
          </span>
          <span className="relative block">
            <select
              id="contact-area"
              name="area"
              defaultValue=""
              className={`${fieldClass} pr-8`}
            >
              <option value="">Izaberite celinu rada</option>
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
          UPIT
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
          Nije potrebno da šaljete spise u prvom koraku. Upit koristimo samo da
          vam odgovorimo.
        </p>
        <button
          type="submit"
          className="inline-flex h-[54px] w-full shrink-0 items-center justify-center bg-[#C78B3E] px-10 text-[12px] font-semibold tracking-[0.16em] text-[#171512] transition-colors hover:bg-[#D89B4C] sm:w-auto"
        >
          POŠALJITE UPIT
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
