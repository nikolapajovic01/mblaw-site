import { practiceAreas } from "@/lib/nav";

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-neutral-900">MB Law</p>
            <p className="mt-1 text-sm text-neutral-500">
              Marković, Bogdanović i partneri
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-600">
              Advokatska kancelarija u Beogradu koja pruža pravnu podršku
              domaćim i međunarodnim klijentima.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-neutral-900">Oblasti prava</p>
            <ul className="mt-4 space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.href}>
                  <a
                    href={area.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-neutral-900">Kontakt</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>Knez Mihailova bb, 11000 Beograd</li>
              <li>
                <a href="tel:+381113334455" className="hover:text-neutral-900">
                  +381 11 333 4455
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@mblaw.rs"
                  className="hover:text-neutral-900"
                >
                  office@mblaw.rs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} MB Law – Marković, Bogdanović i
          partneri. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
