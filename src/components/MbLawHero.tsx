import Image from "next/image";
import { Source_Serif_4, Manrope } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-mb-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mb-sans",
  display: "swap",
});

const navItems = [
  { label: "O NAMA", active: true },
  { label: "OBLASTI PRAKSE" },
  { label: "TIM" },
  { label: "UVIDI" },
  { label: "KONTAKT" },
];

export default function MbLawHero() {
  return (
    <section
      className={`${sourceSerif.variable} ${manrope.variable} relative flex min-h-[760px] w-full flex-col overflow-hidden bg-[#1B1916] md:h-[960px]`}
      style={{ fontFamily: "var(--font-mb-sans), Helvetica, sans-serif" }}
    >
      {/* background photo */}
      <Image
        src="/mb/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="mb-hero-photo pointer-events-none absolute inset-0 z-[1] object-cover object-[75%_center] md:object-center"
      />

      {/* readability scrim */}
      <div
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(23,21,18,0.94) 0%, rgba(23,21,18,0.7) 30%, rgba(23,21,18,0.55) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[4] hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(23,21,18,0.94) 0%, rgba(23,21,18,0.86) 24%, rgba(23,21,18,0.42) 46%, rgba(23,21,18,0) 62%)",
        }}
      />

      {/* header */}
      <header className="relative z-40 flex items-center justify-between px-6 pt-6 md:px-[72px] md:pt-[30px]">
        <div className="flex items-center gap-3">
          <Image
            src="/mb/mb-logo.png"
            alt="Marković Bogdanović"
            width={63}
            height={63}
            className="block h-11 w-11 object-contain md:h-[63px] md:w-[63px]"
          />
          <span className="hidden h-10 w-px bg-[#2A2723] sm:block" />
          <div className="hidden flex-col gap-1 sm:flex">
            <span className="text-[13px] font-semibold leading-[1.32] tracking-[0.13em] text-[#EDE9E1]">
              MARKOVIĆ
              <br />
              BOGDANOVIĆ
            </span>
            <span className="text-[8.5px] font-medium tracking-[0.21em] text-[#89837A]">
              ADVOKATSKA KANCELARIJA
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-xs font-semibold tracking-[0.13em] lg:gap-9">
          <div className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group relative inline-flex items-center gap-2 pb-1.5 no-underline transition-colors ${
                  item.active ? "text-[#F1EEE7]" : "text-[#C2BCB2] hover:text-[#C78B3E]"
                }`}
              >
                {item.active && <span className="h-1 w-1 bg-[#C78B3E]" />}
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#C78B3E] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="inline-flex h-7 items-center gap-2 border border-[#363129] px-2.5 text-[11px] font-semibold tracking-[0.12em]">
            <span className="text-[#F1EEE7]">SR</span>
            <span className="h-[11px] w-px rotate-[18deg] bg-[#3E382F]" />
            <a href="#" className="text-[#77726A] no-underline transition-colors hover:text-[#F1EEE7]">
              EN
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-30 mx-6 mt-6 hidden h-px bg-[#2A2723] md:mx-[72px] md:block" />

      {/* content */}
      <div className="relative z-20 flex flex-1 flex-col justify-center px-6 py-16 md:absolute md:left-[72px] md:top-[322px] md:w-[620px] md:flex-none md:px-0 md:py-0">
        <div className="flex flex-wrap items-center gap-3 text-[11.5px] font-semibold tracking-[0.2em] text-[#C0B9AE] sm:gap-4">
          <span>ADVOKATSKA KANCELARIJA</span>
          <span className="h-[13px] w-px bg-[#4A443C]" />
          <span className="text-[#8C877D]">BEOGRAD, SRBIJA</span>
        </div>

        <h1
          className="mt-6 text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F1EEE7] sm:text-[52px] md:mt-[30px] md:whitespace-nowrap md:text-[74px] md:leading-[1.04]"
          style={{ fontFamily: "var(--font-mb-serif), Georgia, serif" }}
        >
          Gde pravo postaje
          <br />
          vaša prednost.
        </h1>

        <p className="mt-6 max-w-[520px] text-[15px] font-normal leading-[1.72] text-[#ACA69D] md:mt-[30px] md:text-[16.5px]">
          Sveobuhvatna pravna podrška domaćim i međunarodnim klijentima - uz
          strateški pristup, razumevanje njihovih potreba i pouzdanu zaštitu
          poslovnih i ličnih interesa.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5 md:mt-11 md:gap-6">
          <a
            href="#"
            className="inline-flex h-[52px] items-center bg-[#C78B3E] px-8 text-[11px] font-semibold tracking-[0.17em] text-[#120F0A] no-underline transition-colors hover:bg-[#D89B4C]"
          >
            ZAKAŽITE KONSULTACIJU
          </a>
          <a
            href="#"
            className="inline-block border-b border-[#3A3831] pb-1.5 text-[12.5px] font-medium leading-none tracking-[0.15em] text-[#CFC9BF] no-underline transition-colors hover:border-[#C78B3E] hover:text-[#F1EEE7]"
          >
            ISTRAŽITE OBLASTI PRAKSE ↘
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 h-px bg-[#2A2723]" />
    </section>
  );
}
