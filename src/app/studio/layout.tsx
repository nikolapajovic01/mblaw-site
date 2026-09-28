// The site's own root layout lives under [locale], so the Studio needs its own
// <html>/<body> root layout, without the site header, fonts or styles.
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
