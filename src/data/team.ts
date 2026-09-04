export type AttorneyFocus = {
  label: string;
  href: string;
};

export type AttorneyAppearance = {
  outlet: string;
  title: string;
  year: string;
  href: string;
  image?: string;
  imagePosition?: string;
};

export type Attorney = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  detail: string;
  paragraphs: string[];
  focus: AttorneyFocus[];
  appearances?: AttorneyAppearance[];
  linkedIn: string;
  photo?: string;
  comingSoon?: boolean;
};

export const attorneys: Attorney[] = [
  {
    slug: "dusan-s-markovic",
    name: "Dušan S. Marković",
    role: "Osnivač",
    bio: "Specijalizovan za privredno i imovinsko pravo, sa fokusom na složene transakcije, restrukturiranje i dugoročnu zaštitu poslovnih interesa klijenata.",
    detail:
      "Lično vodi pregovore, due diligence i sporove visoke vrednosti za domaće i inostrane klijente u svakom predmetu.",
    paragraphs: [
      "Advokat Dušan S. Marković je osnivač kancelarije MB Law - Marković, Bogdanović & Partners. Specijalizovan je za privredno i imovinsko pravo, sa fokusom na složene transakcije, restrukturiranje i dugoročnu zaštitu poslovnih interesa klijenata.",
      "Lično vodi pregovore, due diligence i sporove visoke vrednosti za domaće i inostrane klijente. Rad na predmetu počinje od strukture posla i procene rizika, a ne od šablona, kako bi strategija odgovarala konkretnom cilju klijenta.",
      "U korporativnim i imovinskim pitanjima insistira na jasnoj dokumentaciji, predvidivim koracima i odgovornosti koja ostaje na advokatu koji vodi predmet, od prvog saveta do zatvaranja transakcije ili okončanja spora.",
    ],
    focus: [
      { label: "Privredno pravo", href: "/oblasti-rada/privredno-pravo" },
      { label: "Stečaj i restrukturiranje", href: "/oblasti-rada/stecaj-i-restrukturiranje" },
      { label: "Nekretnine i građevinarstvo", href: "/oblasti-rada/nekretnine-i-gradjevinarstvo" },
    ],
    appearances: [
      {
        outlet: "PRVA",
        title: "Da li poslodavci smeju da vas nadziru.",
        year: "2022",
        href: "https://www.youtube.com/watch?v=cGSk1RZlgXE&t=83s",
        image: "/mb/dusan-prva-video-nadzor.webp",
      },
      {
        outlet: "PRVA",
        title: "Koja su prava putnika nakon otkazanog ili pomerenog avionskog leta.",
        year: "2022",
        href: "https://www.youtube.com/watch?v=_XifLeC-m6I&t=332s",
        image: "/mb/dusan-prva-prava-putnika.webp",
      },
    ],
    linkedIn: "#",
    photo: "/mb/dusan-s-markovic.webp",
  },
  {
    slug: "milovan-m-bogdanovic",
    name: "Milovan M. Bogdanović",
    role: "Osnivač",
    bio: "Iskustvo u kaznenoj odbrani i radnim sporovima, uz praktičan pristup koji spaja preciznu analizu sa jasnom strategijom u svakom postupku.",
    detail:
      "Zastupa klijente pred sudovima i organima, uz diskretan pristup od prvog saveta do završetka predmeta u svakom slučaju.",
    paragraphs: [
      "Advokat Milovan M. Bogdanović je osnivač kancelarije MB Law - Marković, Bogdanović & Partners. Iskustvo gradi u kaznenoj odbrani i radnim sporovima, uz pristup koji spaja preciznu analizu sa jasnom strategijom u svakom postupku.",
      "Zastupa klijente pred sudovima i organima od prvog saveta do završetka predmeta. U hitnim situacijama, kao i u postupcima koji zahtevaju diskreciju, rad se vodi lično, sa fokusom na rokove, dokaze i zaštitu prava klijenta.",
      "U radnim i kaznenim predmetima insistira na mirnoj proceni činjenica pre svake radnje, kako bi odbrana ili spor bili vođeni ciljano, bez nepotrebnog širenja postupka i uz punu odgovornost prema klijentu.",
    ],
    focus: [
      { label: "Kazneno pravo", href: "/oblasti-rada/kazneno-pravo" },
      { label: "Radno pravo", href: "/oblasti-rada/radno-pravo" },
      { label: "Rešavanje sporova i arbitraža", href: "/oblasti-rada/resavanje-sporova-i-arbitraza" },
    ],
    linkedIn: "#",
    photo: "/mb/milovan-m-bogdanovic.webp",
  },
  {
    slug: "treci-partner",
    name: "Partner",
    role: "Uskoro",
    bio: "Treći član tima pridružuje se kancelariji. Profil, fotografija i oblasti rada biće objavljeni ovde.",
    detail:
      "Do tada, osnivački partneri vode predmete lično, uz isti standard pažnje i odgovornosti prema klijentu.",
    paragraphs: [],
    focus: [],
    linkedIn: "#",
    comingSoon: true,
  },
];

export function getAttorney(slug: string): Attorney | undefined {
  return attorneys.find((attorney) => attorney.slug === slug && !attorney.comingSoon);
}

export function getPublishedAttorneys(): Attorney[] {
  return attorneys.filter((attorney) => !attorney.comingSoon);
}
