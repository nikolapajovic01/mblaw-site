import { practiceAreas, practiceMenuGroups } from "@/data/practice-areas";
import { getPublishedAttorneys } from "@/data/team";
import { insights } from "@/data/insights";

export type SiteRoute = {
  /** Locale-less path, e.g. "/o-nama". */
  path: string;
  lastModified?: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

/** Every indexable page, once per locale. Single-area menu groups redirect, so they are left out. */
export function getSiteRoutes(): SiteRoute[] {
  const areaSlugs = new Set(practiceAreas.map((area) => area.slug));
  const newestInsight = insights.map((post) => post.isoDate).sort().at(-1);

  return [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/o-nama", changeFrequency: "yearly", priority: 0.8 },
    { path: "/oblasti-rada", changeFrequency: "monthly", priority: 0.9 },
    ...practiceMenuGroups
      .filter((group) => group.areaSlugs.length > 1 && !areaSlugs.has(group.slug))
      .map((group) => ({
        path: `/oblasti-rada/${group.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ...practiceAreas.map((area) => ({
      path: `/oblasti-rada/${area.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { path: "/tim", changeFrequency: "yearly", priority: 0.7 },
    ...getPublishedAttorneys().map((attorney) => ({
      path: `/tim/${attorney.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { path: "/uvidi", lastModified: newestInsight, changeFrequency: "weekly", priority: 0.6 },
    ...insights.map((post) => ({
      path: `/uvidi/${post.slug}`,
      lastModified: post.isoDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    { path: "/kontakt", changeFrequency: "yearly", priority: 0.8 },
  ];
}
