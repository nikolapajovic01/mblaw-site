"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type Founder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  detail: string;
  profileHref: string;
  linkedIn: string;
  /** Transparent PNG or WebP cutout, full figure, no background. */
  photo?: string;
  signature: React.ReactNode;
};

function SignatureMarkovic() {
  return (
    <svg
      viewBox="0 0 220 56"
      fill="none"
      aria-hidden="true"
      className="h-[30px] w-[124px] text-[#C78B3E] opacity-75 md:h-[34px] md:w-[140px]"
    >
      <path
        d="M8 38c18-22 34-28 52-26 12 1.5 18 8 16 16-2 10-14 16-28 14-8-.8-14-4-18-8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M62 34c8-12 18-18 30-16 10 1.6 16 8 14 17-2.5 12-16 18-30 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M118 28c14-2 28 2 38 14 6 8 4 18-6 22-12 5-28-2-34-14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M168 18c10 8 16 18 18 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SignatureBogdanovic() {
  return (
    <svg
      viewBox="0 0 220 56"
      fill="none"
      aria-hidden="true"
      className="h-[30px] w-[124px] text-[#C78B3E] opacity-75 md:h-[34px] md:w-[140px]"
    >
      <path
        d="M10 36c12-18 28-24 44-20 14 3.5 20 14 14 26-5 10-18 16-32 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M72 30c10-14 24-20 38-14 12 5 16 18 8 28-8 11-24 12-36 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M138 24c16 0 30 10 36 24"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M176 16v28M168 24h16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const founders: Founder[] = [
  {
    id: "founder-markovic",
    name: "Dušan S. Marković",
    role: "Osnivač",
    bio: "Specijalizovan za privredno i imovinsko pravo, sa fokusom na složene transakcije, restrukturiranje i dugoročnu zaštitu poslovnih interesa klijenata.",
    detail:
      "Lično vodi pregovore, due diligence i sporove visoke vrednosti za domaće i inostrane klijente u svakom predmetu.",
    profileHref: "/tim/dusan-s-markovic",
    linkedIn: "#",
    signature: <SignatureMarkovic />,
  },
  {
    id: "founder-bogdanovic",
    name: "Milovan M. Bogdanović",
    role: "Osnivač",
    bio: "Iskustvo u kaznenoj odbrani i radnim sporovima, uz praktičan pristup koji spaja preciznu analizu sa jasnom strategijom u svakom postupku.",
    detail:
      "Zastupa klijente pred sudovima i organima, uz diskretan pristup od prvog saveta do završetka predmeta u svakom slučaju.",
    profileHref: "/tim/milovan-m-bogdanovic",
    linkedIn: "#",
    signature: <SignatureBogdanovic />,
  },
];

function ProfileLink({ href, name }: { href: string; name: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-[12px] tracking-[0.14em] no-underline transition-colors hover:text-[#171512] mb-light-link"
      aria-label={`Profil advokata: ${name}`}
    >
      <span className="border-b border-[#C9C0AF] pb-1 leading-none transition-colors group-hover:border-[#C78B3E]">
        VIŠE O ADVOKATU
      </span>
      <svg
        width="11"
        height="11"
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
  );
}

function LinkedInMark({ href, name }: { href: string; name: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[10.5px] tracking-[0.14em] no-underline transition-colors hover:text-[#C78B3E] mb-light-muted"
      aria-label={`LinkedIn profil: ${name}`}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center border border-[#C9C0AF] transition-colors group-hover:border-[#C78B3E]/45"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23.5h-4V8.5zM8.5 8.5h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v9.35h-4v-8.28c0-1.97-.04-4.5-2.74-4.5-2.74 0-3.16 2.14-3.16 4.35v8.43h-4V8.5z" />
        </svg>
      </span>
      LINKEDIN
    </Link>
  );
}

function PortraitPlaceholder({ name }: { name: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end pb-2">
      <svg
        viewBox="0 0 120 280"
        fill="none"
        aria-hidden="true"
        className="h-[74%] w-auto text-[#C9C0AF]"
      >
        <ellipse cx="60" cy="248" rx="34" ry="6" fill="currentColor" opacity="0.45" />
        <path
          d="M60 34c-18 0-32 14-32 32v8c0 10 4 18 10 24-8 6-14 18-14 32v98c0 8 6 14 14 14h44c8 0 14-6 14-14V130c0-14-6-26-14-32 6-6 10-14 10-24v-8c0-18-14-32-32-32z"
          fill="currentColor"
        />
      </svg>
      <span className="absolute bottom-3 text-[9px] font-medium tracking-[0.2em] text-[#9A9184]">
        USKORO
      </span>
      <span className="sr-only">Fotografija uskoro: {name}</span>
    </div>
  );
}

function FounderCard({
  founder,
  index,
  visible,
}: {
  founder: Founder;
  index: number;
  visible: boolean;
}) {
  const reveal = (delay: number): CSSProperties =>
    visible
      ? { animation: `mbUp .9s cubic-bezier(.2,.7,.2,1) ${delay}s both` }
      : { opacity: 0 };

  return (
    <article className="flex h-full min-w-0 flex-col" style={reveal(0.12 + index * 0.1)}>
      <div className="relative mx-auto h-[220px] w-full max-w-[210px] sm:h-[240px] md:h-[260px] md:max-w-none lg:h-[270px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[12%] bottom-[8%] h-7 rounded-[100%] bg-[radial-gradient(ellipse,rgba(32,28,23,0.18)_0%,transparent_72%)] blur-md md:bottom-[6%]"
        />
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt=""
            fill
            sizes="(max-width: 768px) 260px, 50vw"
            className="object-contain object-bottom"
          />
        ) : (
          <PortraitPlaceholder name={founder.name} />
        )}
      </div>

      <div className="mt-4 flex flex-1 flex-col md:mt-4">
        <h3
          className="text-[22px] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[24px] lg:text-[26px] mb-light-heading"
          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
        >
          {founder.name}
        </h3>
        <p className="mt-2 text-[10.5px] font-semibold tracking-[0.22em] text-[#C78B3E]">
          {founder.role}
        </p>
        <p className="mt-3 text-[14px] leading-[1.6] md:min-h-[4.8em] md:text-[14.5px] mb-light-body">
          {founder.bio}
        </p>
        <p className="mt-3 text-[13.5px] leading-[1.6] md:min-h-[3.2em] md:text-[14px] mb-light-muted">
          {founder.detail}
        </p>

        <div className="mt-auto pt-5">
          <ProfileLink href={founder.profileHref} name={founder.name} />

          <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-[#C9C0AF]/80 pt-3.5">
            {founder.signature}
            <LinkedInMark href={founder.linkedIn} name={founder.name} />
          </div>
        </div>
      </div>
    </article>
  );
}

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
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#D5CDC0] px-6 py-12 md:px-[72px] md:py-14 lg:py-16 mb-light-section"
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
          <span className="mt-7 block text-[10.5px] tracking-[0.26em] md:text-[11px] mb-light-eyebrow">
            TIM
          </span>
          <h2
            className="mt-5 text-[29px] font-bold leading-[1.16] tracking-[-0.015em] sm:text-[35px] md:text-[40px] mb-light-heading"
            style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
          >
            Osnivački partneri.
          </h2>
          <p className="mt-3 max-w-[48ch] text-[14.5px] leading-[1.6] md:text-[15px] mb-light-muted">
            Dva osnivačka partnera vode svaki predmet lično, uz isti standard rada,
            pažnje i odgovornosti prema klijentu.
          </p>
        </header>

        <div
          className="mt-7 border-t border-[#C9C0AF]/80 pt-7 md:mt-8 md:pt-8"
          style={reveal(0.08)}
        >
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:items-stretch md:gap-x-10 lg:gap-x-12">
          {founders.map((founder, index) => (
            <div key={founder.id} className="relative flex min-w-0 flex-col">
              {index === 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-6 top-0 hidden h-full w-px bg-[#C9C0AF] md:block lg:-left-7"
                />
              ) : null}
              <FounderCard founder={founder} index={index} visible={visible} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
