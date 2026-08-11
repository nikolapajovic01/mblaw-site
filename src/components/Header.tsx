import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-tight text-neutral-900">
          MB Law
          <span className="ml-2 hidden text-sm font-sans font-normal text-neutral-500 sm:inline">
            Marković, Bogdanović i partneri
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 md:inline-block"
        >
          Zakažite konsultacije
        </a>
      </div>
    </header>
  );
}
