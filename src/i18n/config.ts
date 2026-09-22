export const locales = ["sr", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** BCP 47 tags used for Intl formatting (dates, numbers). Latin-script Serbian. */
export const intlTags: Record<Locale, string> = {
  sr: "sr-Latn-RS",
  en: "en-GB",
  ru: "ru-RU",
};

export const htmlLang: Record<Locale, string> = {
  sr: "sr-Latn",
  en: "en",
  ru: "ru",
};
