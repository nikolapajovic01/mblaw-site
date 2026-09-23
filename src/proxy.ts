import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let static assets (public/, files with an extension) pass through untouched.
  if (pathname.includes(".")) return;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  // Permanent: the locale is never negotiated, so search engines should index /sr directly.
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
