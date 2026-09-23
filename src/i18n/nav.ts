import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";
import type { PracticeMenuGroup } from "@/data/practice-areas";

export type NavKey = "home" | "about" | "practiceAreas" | "team" | "insights" | "contact";

const navPaths: Record<NavKey, string> = {
  home: "",
  about: "/o-nama",
  practiceAreas: "/oblasti-rada",
  team: "/tim",
  insights: "/uvidi",
  contact: "/kontakt",
};

export const navKeys = Object.keys(navPaths) as NavKey[];

export const legalPaths = {
  privacy: "/politika-privatnosti",
  terms: "/uslovi-koriscenja",
} as const;

export type LegalKey = keyof typeof legalPaths;

export function getNavHref(key: NavKey, locale: Locale): string {
  return `/${locale}${navPaths[key]}`;
}

export function getLegalHref(key: LegalKey, locale: Locale): string {
  return `/${locale}${legalPaths[key]}`;
}

export function getPracticeGroupHref(group: PracticeMenuGroup, locale: Locale): string {
  const base = getNavHref("practiceAreas", locale);
  return group.areaSlugs.length === 1
    ? `${base}/${group.areaSlugs[0]}`
    : `${base}/${group.slug}`;
}

export function getNavItems(dict: Dictionary, locale: Locale) {
  return navKeys.map((key) => ({
    key,
    label: dict.nav[key],
    href: getNavHref(key, locale),
  }));
}
