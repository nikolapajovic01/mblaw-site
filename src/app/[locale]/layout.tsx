import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Newsreader, Instrument_Sans, Lora, Manrope } from "next/font/google";
import MbLawMobileActions from "@/components/MbLawMobileActions";
import { locales, htmlLang, isLocale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";
import "../globals.css";

// latin-ext covers the Serbian diacritics (ć č š ž đ); plain latin does not.
const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-mb-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mb-sans",
  display: "swap",
});

// Newsreader and Instrument Sans ship no Cyrillic glyphs, so Russian pages use
// this visually close pair instead (same CSS variables, picked per-locale below).
const lora = Lora({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "600", "700"],
  variable: "--font-mb-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-mb-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

// suppressHydrationWarning: the intro bootstrap script sets data-mb-intro on
// <html> before hydration, which React would otherwise report as a mismatch.
export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const fontVariables =
    locale === "ru" ? `${lora.variable} ${manrope.variable}` : `${newsreader.variable} ${instrumentSans.variable}`;

  return (
    <html lang={htmlLang[locale]} className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${fontVariables} flex min-h-dvh flex-col bg-[#1B1916]`}
        style={{ fontFamily: "var(--font-mb-sans), Helvetica, sans-serif" }}
      >
        {children}
        <MbLawMobileActions locale={locale} />
      </body>
    </html>
  );
}
