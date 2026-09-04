import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/data/insights";

function DateStamp({
  day,
  month,
  year,
  isoDate,
}: Pick<Insight, "day" | "month" | "year" | "isoDate">) {
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

export default function MbLawInsightCard({
  post,
  active = true,
  sizes = "(max-width: 768px) 82vw, 360px",
  variant = "slide",
}: {
  post: Insight;
  active?: boolean;
  sizes?: string;
  variant?: "slide" | "grid";
}) {
  return (
    <Link
      href={`/uvidi/${post.slug}`}
      draggable={false}
      className={`group relative flex flex-col overflow-hidden border no-underline transition-[border-color,opacity] duration-500 motion-reduce:transition-none ${
        variant === "slide" ? "h-[390px] md:h-[410px]" : "h-full min-h-[390px]"
      } ${
        active
          ? "border-[#C78B3E]/60 opacity-100"
          : "border-[#4A4034] opacity-[0.72] hover:opacity-90"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 z-[1] h-px origin-left bg-[#C78B3E] transition-transform duration-500 motion-reduce:transition-none ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />

      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#141210]">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            draggable={false}
            sizes={sizes}
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
          <DateStamp
            day={post.day}
            month={post.month}
            year={post.year}
            isoDate={post.isoDate}
          />
        </div>
      </div>

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
  );
}
