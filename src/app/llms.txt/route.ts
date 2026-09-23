import { practiceAreas } from "@/data/practice-areas";
import { getPublishedAttorneys } from "@/data/team";
import { insights } from "@/data/insights";
import { getDictionary, getPracticeContent } from "@/dictionaries";
import { FIRM, absoluteUrl, localePath } from "@/lib/seo";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain-language map of the site for AI assistants,
// written in English with links to the English pages and a pointer to the Serbian ones.
export function GET() {
  const en = getDictionary("en");
  const enPractice = getPracticeContent("en");
  const link = (path: string) => absoluteUrl(localePath("en", path));

  const lines = [
    `# ${FIRM.shortName} - Marković & Bogdanović Joint Law Office`,
    "",
    `> ${en.meta.homeDescription}`,
    "",
    `Serbian name: ${FIRM.name}.`,
    `Address: ${FIRM.street}, 11000 Belgrade, Serbia. Phone: +381 65 389 4111. Email: ${FIRM.email}.`,
    "Languages: Serbian, English, Russian. The site is available in all three:",
    `${absoluteUrl("/sr")} (Serbian, primary), ${absoluteUrl("/en")} (English), ${absoluteUrl("/ru")} (Russian).`,
    "",
    "## Firm",
    "",
    `- [About the firm](${link("/o-nama")}): ${en.meta.aboutDescription}`,
    `- [Contact](${link("/kontakt")}): ${en.meta.contactDescription}`,
    "",
    "## Practice areas",
    "",
    ...practiceAreas.map((area) => {
      const t = enPractice?.areas[area.slug];
      return `- [${t?.title ?? area.title}](${link(`/oblasti-rada/${area.slug}`)}): ${t?.summary ?? area.summary}`;
    }),
    "",
    "## Partners",
    "",
    ...getPublishedAttorneys().map((attorney) => {
      const t = en.team.attorneys[attorney.slug];
      return `- [${attorney.name}, ${t?.role ?? attorney.role}](${link(`/tim/${attorney.slug}`)}): ${t?.bio ?? attorney.bio}`;
    }),
    "",
    "## Insights",
    "",
    ...insights.map((post) => {
      const t = en.insights.posts[post.slug];
      return `- [${t?.title ?? post.title}](${link(`/uvidi/${post.slug}`)}): ${t?.excerpt ?? post.excerpt}`;
    }),
    "",
    "## Optional",
    "",
    `- [Sitemap](${absoluteUrl("/sitemap.xml")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
