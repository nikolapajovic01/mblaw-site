import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/dictionaries/types";
import sr from "@/dictionaries/sr";
import en from "@/dictionaries/en";
import ru from "@/dictionaries/ru";
import type { PracticeContentTranslation } from "@/dictionaries/practice-content/types";
import practiceContentEn from "@/dictionaries/practice-content/en";
import practiceContentRu from "@/dictionaries/practice-content/ru";

const dictionaries: Record<Locale, Dictionary> = { sr, en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

const practiceContent: Partial<Record<Locale, PracticeContentTranslation>> = {
  en: practiceContentEn,
  ru: practiceContentRu,
};

/** Returns undefined for sr — Serbian stays the source of truth in @/data/practice-areas. */
export function getPracticeContent(locale: Locale): PracticeContentTranslation | undefined {
  return practiceContent[locale];
}

export type { Dictionary };
