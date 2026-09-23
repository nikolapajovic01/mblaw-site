import type { MetadataRoute } from "next";
import { locales, defaultLocale, htmlLang } from "@/i18n/config";
import { absoluteUrl, localePath } from "@/lib/seo";
import { getSiteRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSiteRoutes().flatMap((route) => {
    const languages = {
      ...Object.fromEntries(locales.map((l) => [htmlLang[l], absoluteUrl(localePath(l, route.path))])),
      "x-default": absoluteUrl(localePath(defaultLocale, route.path)),
    };
    return locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, route.path)),
      ...(route.lastModified ? { lastModified: route.lastModified } : {}),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }));
  });
}
