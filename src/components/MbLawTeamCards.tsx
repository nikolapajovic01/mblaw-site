import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { attorneys, type Attorney } from "@/data/team";

function SignatureMarkovic() {
  return (
    <svg
      viewBox="0 0 220 56"
      fill="none"
      aria-hidden="true"
      className="h-[26px] w-[108px] text-[#C78B3E] opacity-75 md:h-[28px] md:w-[116px]"
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
      className="h-[26px] w-[108px] text-[#C78B3E] opacity-75 md:h-[28px] md:w-[116px]"
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

const signatures: Record<string, ReactNode> = {
  "dusan-s-markovic": <SignatureMarkovic />,
  "milovan-m-bogdanovic": <SignatureBogdanovic />,
};

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

function TeamMemberCard({
  attorney,
  index,
  visible,
}: {
  attorney: Attorney;
  index: number;
  visible: boolean;
}) {
  const reveal = (delay: number): CSSProperties =>
    visible
      ? { animation: `mbUp .9s cubic-bezier(.2,.7,.2,1) ${delay}s both` }
      : { opacity: 0 };

  return (
    <article className="flex h-full min-w-0 flex-col" style={reveal(0.12 + index * 0.1)}>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#C9C0AF]/40 lg:aspect-[10/11]">
        {attorney.photo ? (
          <Image
            src={attorney.photo}
            alt={attorney.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover object-[50%_8%]"
          />
        ) : (
          <PortraitPlaceholder name={attorney.name} />
        )}
      </div>

      <div className="mt-3 flex flex-1 flex-col md:mt-2.5">
        <h3
          className="text-[20px] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[22px] lg:text-[23px] mb-light-heading"
          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
        >
          {attorney.name}
        </h3>
        <p className="mt-1.5 text-[10px] font-semibold tracking-[0.22em] text-[#C78B3E]">
          {attorney.role}
        </p>
        <p className="mt-2 text-[13.5px] leading-[1.45] md:text-[14px] mb-light-body">
          {attorney.bio}
        </p>
        <p className="mt-2 text-[13px] leading-[1.45] md:text-[13.5px] mb-light-muted">
          {attorney.detail}
        </p>

        <div className="mt-auto pt-3">
          {attorney.comingSoon ? (
            <span className="inline-block text-[12px] tracking-[0.14em] mb-light-muted">
              PROFIL USKORO
            </span>
          ) : (
            <ProfileLink href={`/tim/${attorney.slug}`} name={attorney.name} />
          )}

          <div className="mt-3 flex flex-wrap items-end justify-between gap-3 border-t border-[#C9C0AF]/80 pt-2.5">
            {signatures[attorney.slug] ?? <span className="h-[26px] md:h-[28px]" />}
            {attorney.comingSoon ? (
              <span className="text-[10.5px] tracking-[0.14em] mb-light-muted">
                LINKEDIN
              </span>
            ) : (
              <LinkedInMark href={attorney.linkedIn} name={attorney.name} />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MbLawTeamCards({ visible = true }: { visible?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:items-stretch md:gap-x-8 md:gap-y-6 lg:grid-cols-3 lg:gap-x-10">
      {attorneys.map((attorney, index) => (
        <div key={attorney.slug} className="relative flex min-w-0 flex-col">
          {index > 0 ? (
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute top-0 hidden h-full w-px bg-[#C9C0AF] ${
                index === 1 ? "-left-4 md:block lg:-left-5" : "-left-5 hidden lg:block"
              }`}
            />
          ) : null}
          <TeamMemberCard attorney={attorney} index={index} visible={visible} />
        </div>
      ))}
    </div>
  );
}
