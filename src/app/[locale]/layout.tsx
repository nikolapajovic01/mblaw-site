import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Newsreader, Instrument_Sans, Lora, Manrope } from "next/font/google";
import MbLawMobileActions from "@/components/MbLawMobileActions";
import { locales, htmlLang, isLocale } from "@/i18n/config";
import { getDictionary } from "@/dictionaries";
import { FIRM, OG_IMAGE, SITE_URL, jsonLdString, organizationJsonLd } from "@/lib/seo";
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
// preload: false keeps /sr and /en from downloading Cyrillic fonts they never use.
const lora = Lora({
  subsets: ["latin", "latin-ext", "cyrillic"],
  preload: false,
  weight: ["400", "600", "700"],
  variable: "--font-mb-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  preload: false,
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

  // Page-level metadata (canonical, hreflang, Open Graph) comes from pageMetadata()
  // in each page; these are only the defaults every page inherits.
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.homeTitle,
      template: `%s | ${FIRM.shortName}`,
    },
    description: dict.meta.homeDescription,
    applicationName: FIRM.shortName,
    authors: [{ name: FIRM.name, url: SITE_URL }],
    creator: FIRM.name,
    publisher: FIRM.name,
    formatDetection: { telephone: false, email: false, address: false },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      siteName: FIRM.shortName,
      type: "website",
      images: [OG_IMAGE],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : undefined,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1B1916",
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString(organizationJsonLd(locale, getDictionary(locale).meta.homeDescription)),
          }}
        />
        {children}
        <MbLawMobileActions locale={locale} />
      </body>
    </html>
  );
}
