export type PracticeAreaTranslation = {
  title: string;
  summary: string;
  intro: string[];
  sections: {
    heading?: string;
    intro?: string[];
    items?: { label?: string; desc: string }[];
  }[];
  closing?: string;
};

/**
 * Full translation overlay for the practice-area detail pages. Serbian stays
 * the source of truth in @/data/practice-areas; this covers EN/RU only.
 *
 * - areas: keyed by PracticeArea.slug (all 14 must be present)
 * - groupSummaries: keyed by PracticeMenuGroup.slug (all 7 must be present)
 * - areaTags: keyed by the area slugs that have a custom short tag in
 *   data/practice-areas.ts's areaTags map (7 entries)
 */
export type PracticeContentTranslation = {
  areas: Record<string, PracticeAreaTranslation>;
  groupSummaries: Record<string, string>;
  areaTags: Record<string, string>;
};
