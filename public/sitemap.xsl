<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sm xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="sr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sitemap - MB Law</title>
        <style>
          :root { color-scheme: light; }
          body {
            margin: 0;
            background: #EDE9E1;
            color: #171512;
            font-family: Georgia, "Times New Roman", serif;
          }
          main {
            max-width: 1080px;
            margin: 0 auto;
            padding: 40px 24px 72px;
          }
          p.kicker {
            margin: 0 0 8px;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #C78B3E;
          }
          h1 {
            margin: 0 0 10px;
            font-size: 34px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          .lead {
            margin: 0 0 28px;
            max-width: 42em;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 15px;
            line-height: 1.55;
            color: #5C574E;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #F6F2EA;
          }
          th, td {
            padding: 14px 16px;
            text-align: left;
            vertical-align: top;
            border-bottom: 1px solid #C9C0AF;
          }
          th {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #8C877D;
            background: #D5CDC0;
          }
          td.path {
            width: 34%;
            font-size: 16px;
          }
          td.langs, td.meta {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 13px;
          }
          td.meta {
            width: 88px;
            color: #5C574E;
            white-space: nowrap;
          }
          a {
            color: #171512;
            text-decoration: none;
            border-bottom: 1px solid #C9C0AF;
          }
          a:hover { border-bottom-color: #C78B3E; }
          .lang-row {
            display: flex;
            gap: 10px;
            align-items: baseline;
            margin: 0 0 6px;
          }
          .lang-row:last-child { margin-bottom: 0; }
          .lang-row span {
            flex: 0 0 28px;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            color: #8C877D;
          }
        </style>
      </head>
      <body>
        <main>
          <p class="kicker">MB Law</p>
          <h1>Mapa sajta</h1>
          <p class="lead">
            Pregled stranica. U XML-u koji čitaju Google i AI, svaki jezik ima svoj poseban url.
          </p>
          <table>
            <thead>
              <tr>
                <th>Stranica</th>
                <th>Adrese po jeziku</th>
                <th>Prioritet</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url[contains(sm:loc, '/sr')]">
                <tr>
                  <td class="path">
                    <xsl:choose>
                      <xsl:when test="contains(sm:loc, '/sr/')">
                        /<xsl:value-of select="substring-after(sm:loc, '/sr/')" />
                      </xsl:when>
                      <xsl:otherwise>/</xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="langs">
                    <xsl:for-each select="xhtml:link[@hreflang != 'x-default']">
                      <div class="lang-row">
                        <span>
                          <xsl:choose>
                            <xsl:when test="@hreflang = 'sr-Latn'">SR</xsl:when>
                            <xsl:when test="@hreflang = 'en'">EN</xsl:when>
                            <xsl:when test="@hreflang = 'ru'">RU</xsl:when>
                            <xsl:otherwise>
                              <xsl:value-of select="@hreflang" />
                            </xsl:otherwise>
                          </xsl:choose>
                        </span>
                        <a href="{@href}">
                          <xsl:value-of select="@href" />
                        </a>
                      </div>
                    </xsl:for-each>
                  </td>
                  <td class="meta">
                    <xsl:value-of select="sm:priority" />
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
