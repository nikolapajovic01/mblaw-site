import { locales, type Locale } from "@/i18n/config";

/** Strips a leading /sr, /en or /ru segment off a pathname, e.g. "/en/o-nama" -> "/o-nama". */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

/** Builds a same-page href for a different locale, e.g. ("/en/o-nama", "ru") -> "/ru/o-nama". */
export function withLocale(pathname: string, locale: Locale): string {
  const rest = stripLocale(pathname);
  return rest === "/" ? `/${locale}` : `/${locale}${rest}`;
}
