import type { Metadata } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "MB Law – Marković, Bogdanović & Partners | Advokatska kancelarija Beograd",
  description:
    "MB Law – Marković, Bogdanović & Partners je advokatska kancelarija iz Beograda koja pruža sveobuhvatne pravne usluge domaćim i inostranim klijentima.",
};

// suppressHydrationWarning: the intro bootstrap script sets data-mb-intro on
// <html> before hydration, which React would otherwise report as a mismatch.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${newsreader.variable} ${instrumentSans.variable} flex min-h-dvh flex-col bg-[#1B1916]`}
        style={{ fontFamily: "var(--font-mb-sans), Helvetica, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
