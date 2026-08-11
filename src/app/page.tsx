import { practiceAreas } from "@/lib/nav";
import MbLawHero from "@/components/MbLawHero";

export default function Home() {
  return (
    <>
      <MbLawHero />

      <section
        id="oblasti-prava"
        className="border-t border-neutral-200 bg-neutral-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900">
            Oblasti prava
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area) => (
              <div
                key={area.href}
                id={area.href.slice(1)}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="font-serif text-lg text-neutral-900">
                  {area.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nama" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-3xl text-neutral-900">O nama</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Sadržaj u pripremi.
        </p>
      </section>
    </>
  );
}
