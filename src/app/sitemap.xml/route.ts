import { locales, defaultLocale, htmlLang } from "@/i18n/config";
import { absoluteUrl, localePath } from "@/lib/seo";
import { getSiteRoutes } from "@/lib/routes";
import { getAllInsights } from "@/data/insights";

// Rebuilt every minute (matching INSIGHTS_REVALIDATE) so newly published articles are
// listed without a redeploy.
export const revalidate = 60;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const defaultUrl = (path: string) => absoluteUrl(localePath(defaultLocale, path));
  const languageLinks = (path: string) =>
    [
      ...locales.map((locale) => [htmlLang[locale], absoluteUrl(localePath(locale, path))] as const),
      ["x-default", defaultUrl(path)] as const,
    ]
      .map(
        ([lang, href]) =>
          `    <xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href)}" />`
      )
      .join("\n");

  const entries = getSiteRoutes().flatMap((route) => {
    const links = languageLinks(route.path);
    const lastmod = route.lastModified ? `\n    <lastmod>${escapeXml(route.lastModified)}</lastmod>` : "";

    return locales.map((locale) => {
      const loc = absoluteUrl(localePath(locale, route.path));
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
${links}${lastmod}
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
    });
  });

  // One entry per article per language it exists in, with hreflang links to its
  // other language versions only (never to a translation that doesn't exist).
  const posts = await getAllInsights();
  const postEntries = posts.map((post) => {
    const loc = absoluteUrl(localePath(post.language, `/blog/${post.slug}`));
    const versions = locales
      .map((code) => post.translations.find((translation) => translation.language === code))
      .filter((translation) => translation !== undefined);
    const fallback = versions.find((translation) => translation.language === defaultLocale) ?? versions[0];
    const links =
      versions.length > 1
        ? "\n" +
          [
            ...versions.map(
              (translation) =>
                [htmlLang[translation.language], absoluteUrl(localePath(translation.language, `/blog/${translation.slug}`))] as const
            ),
            ["x-default", absoluteUrl(localePath(fallback.language, `/blog/${fallback.slug}`))] as const,
          ]
            .map(
              ([lang, href]) =>
                `    <xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(href)}" />`
            )
            .join("\n")
        : "";
    return `  <url>
    <loc>${escapeXml(loc)}</loc>${links}
    <lastmod>${escapeXml(post.publishedAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...entries, ...postEntries].join("\n")}
</urlset>
`;

  // No Cache-Control here: Next derives it from `revalidate`. A hand-set s-maxage made
  // Vercel's CDN hold the sitemap far past the 60s window, so new articles never showed.
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
