export const insightTopics = [
  { slug: "privredno-pravo", label: "Privredno pravo", tag: "PRIVREDNO PRAVO" },
  { slug: "nekretnine", label: "Nekretnine", tag: "NEKRETNINE" },
  { slug: "radno-pravo", label: "Radno pravo", tag: "RADNO PRAVO" },
  { slug: "kazneno-pravo", label: "Kazneno pravo", tag: "KAZNENO PRAVO" },
] as const;

export type InsightTopicSlug = (typeof insightTopics)[number]["slug"];

export type Insight = {
  slug: string;
  topic: InsightTopicSlug;
  tag: string;
  title: string;
  excerpt: string;
  day: string;
  month: string;
  year: string;
  isoDate: string;
  image?: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "izmene-propisa-i-poslovanje",
    topic: "privredno-pravo",
    tag: "PRIVREDNO PRAVO",
    title: "Izmene propisa i uticaj na poslovanje društava.",
    excerpt:
      "Kratak pregled najvažnijih promena i njihovog uticaja na poslovanje privrednih društava.",
    day: "12",
    month: "AVGUST",
    year: "2026",
    isoDate: "2026-08-12",
    body: [
      "Kad se propis promeni, prvo pitanje nije šta piše u obrazloženju, nego šta to menja u konkretnom društvu: ugovore, rokove, prijave i odgovornost organa.",
      "Pregledamo šta je stupilo na snagu, šta tek stupa, i gde postoji prelazni režim. Tek tada se piše šta treba uraditi, i do kog datuma.",
      "Ako izmena dira vaš predmet, javite se. Partner kaže da li treba menjati akta, ugovore ili samo pratiti rok.",
    ],
  },
  {
    slug: "provera-pre-kupoprodaje-nepokretnosti",
    topic: "nekretnine",
    tag: "NEKRETNINE",
    title: "Šta proveriti pre kupoprodaje nepokretnosti.",
    excerpt:
      "Šta je potrebno proveriti pre kupoprodaje i kako izbeći najčešće pravne rizike.",
    day: "28",
    month: "JUL",
    year: "2026",
    isoDate: "2026-07-28",
    body: [
      "Kupoprodaja ne počinje kod notara. Počinje uvidom u stanje nepokretnosti: upis, tereti, dozvole i to da li prodavac uopšte može da prenese pravo.",
      "Najčešći rizik nije cena, nego rupa u dokumentaciji koja se vidi tek kad se spis otvori. Zato se provera radi pre avansa, ne posle.",
      "Ako kupujete ili prodajete, prvi korak je da vidimo spis. Od toga zavisi da li se ide dalje, i pod kojim uslovima.",
    ],
  },
  {
    slug: "izmene-internih-akata-i-ugovora-o-radu",
    topic: "radno-pravo",
    tag: "RADNO PRAVO",
    title: "Izmene internih akata i ugovora o radu.",
    excerpt:
      "Praktične smernice za poslodavce prilikom izmene internih akata i ugovora o radu.",
    day: "19",
    month: "JUL",
    year: "2026",
    isoDate: "2026-07-19",
    body: [
      "Interni akt i ugovor o radu se ne menjaju preko noći. Izmena mora da prati zakon, postojeće ugovore i način na koji društvo stvarno radi.",
      "Poslodavac treba da zna šta menja, koga to pogađa, i kako se izmena dostavlja. Inače se spor ne vodi o sadržini, nego o postupku.",
      "Ako spremate izmenu pravilnika ili ugovora, prvo se vidi važeći tekst. Plan se piše posle toga.",
    ],
  },
  {
    slug: "prvi-koraci-u-odbrani",
    topic: "kazneno-pravo",
    tag: "KAZNENO PRAVO",
    title: "Prvi koraci u odbrani u postupku.",
    excerpt:
      "Kako pripremiti odbranu i koje korake preduzeti u ranoj fazi postupka.",
    day: "03",
    month: "JUN",
    year: "2026",
    isoDate: "2026-06-03",
    body: [
      "U ranoj fazi se predmete često izgubi ili sačuva. Prvo se utvrdi gde je klijent u postupku, šta je već rekao, i koji su rokovi.",
      "Odbrana se ne piše pre činjenica. Sastanak, spis, pa plan. Ako je hitno, rad počinje od zadržavanja, ne od kancelarije narednog jutra.",
      "Ako ste pozvani, privedeni ili zadržani, javite se odmah. Partner preuzima razgovor i kaže šta sledi.",
    ],
  },
  {
    slug: "ugovori-koji-prate-rast-drustva",
    topic: "privredno-pravo",
    tag: "PRIVREDNO PRAVO",
    title: "Ugovori koji prate rast društva.",
    excerpt:
      "Kad društvo raste, stari ugovori često ostaju. Šta pregledati pre nove runde poslova.",
    day: "21",
    month: "MAJ",
    year: "2026",
    isoDate: "2026-05-21",
    body: [
      "Rast menja odnos sa dobavljačima, zaposlenima i partnerima. Ugovor koji je radio na početku često ne pokriva novi obim, rokove ili odgovornost.",
      "Pregled kreće od onoga što društvo sada radi, ne od fascikle. Tek tada se vidi šta treba dopuniti, a šta ostaviti.",
      "Ako ulazite u novi posao ili krug pregovora, prvo se otvore važeći ugovori. Plan izmene dolazi posle toga.",
    ],
  },
  {
    slug: "upis-i-tereti-pre-avansa",
    topic: "nekretnine",
    tag: "NEKRETNINE",
    title: "Upis i tereti pre avansa.",
    excerpt:
      "Šta mora da stoji u katastru pre nego što se uplati avans, i šta se dešava ako ne stoji.",
    day: "09",
    month: "APRIL",
    year: "2026",
    isoDate: "2026-04-09",
    body: [
      "Avans se često traži pre nego što je stanje upisa jasno. Ako teret ili zabeležba ispliva posle uplate, pregovor se vodi iz goreg položaja.",
      "Provera nije formalnost. Gleda se upis, tereti, i da li prodavac može da prenese pravo pod uslovima koji su rečeni.",
      "Ako spremate kupovinu, spis se otvara pre avansa. Od toga zavisi da li se uplaćuje, i pod kojim uslovom.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}

export function getInsightTopic(slug?: string) {
  if (!slug) return undefined;
  return insightTopics.find((topic) => topic.slug === slug);
}

export function getInsightsByTopic(slug?: string) {
  const topic = getInsightTopic(slug);
  if (!topic) return insights;
  return insights.filter((item) => item.topic === topic.slug);
}
