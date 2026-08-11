import { practiceAreas } from "@/lib/nav";

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 pb-24 pt-20 md:pt-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Advokatska kancelarija · Beograd
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-neutral-900 md:text-6xl md:leading-tight">
          Pravna podrška na kojoj počivaju najvažnije odluke vaše kompanije.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-neutral-600">
          MB Law – Marković, Bogdanović i partneri okuplja tim advokata sa
          višegodišnjim iskustvom u privrednom pravu, nekretninama, radnim
          odnosima i krivičnoj odbrani.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Zakažite konsultacije
          </a>
          <a
            href="#oblasti-prava"
            className="rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
          >
            Oblasti prava
          </a>
        </div>
      </section>

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
