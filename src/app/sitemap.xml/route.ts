import { locales, defaultLocale, htmlLang } from "@/i18n/config";
import { absoluteUrl, localePath } from "@/lib/seo";
import { getSiteRoutes } from "@/lib/routes";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
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

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
