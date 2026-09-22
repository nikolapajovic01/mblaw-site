export type AttorneyFocus = {
  label: string;
  href: string;
};

export type Attorney = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  detail: string;
  paragraphs: string[];
  focus: AttorneyFocus[];
  linkedIn: string;
  photo?: string;
  comingSoon?: boolean;
  founder?: boolean;
};

export const TEAM_HEADING = "Upoznajte Vaš pravni tim.";
export const TEAM_PARTNERS_LABEL = "Partneri";
export const TEAM_NETWORK_LEAD =
  "Pored partnera, kancelariju čini i širi tim internih saradnika, uz razvijenu mrežu saradnje sa advokatskim kancelarijama i pravnim profesionalcima širom Evrope i Bliskog istoka.";
export const TEAM_NETWORK_SUPPORT =
  "Ovakva organizacija advokatskoj kancelariji omogućava da, kada priroda predmeta to zahteva, klijentima pruži koordinisanu pravnu podršku i izvan granica Srbije.";
export const TEAM_NETWORK_COPY = `${TEAM_NETWORK_LEAD} ${TEAM_NETWORK_SUPPORT}`;

export const attorneys: Attorney[] = [
  {
    slug: "dusan-s-markovic",
    name: "Dušan S. Marković",
    role: "Senior Partner",
    bio: "Praksa usmerena na korporativno i privredno pravo, radno pravo, rešavanje sporova, nepokretnosti, investicije, prekršajno pravo i zastupanje u složenim postupcima.",
    detail:
      "Njegov pristup zasniva se na detaljnoj analizi pravnog i činjeničnog okvira, jasnoj strategiji i neposrednom radu sa klijentom tokom celog angažmana.",
    paragraphs: [
      "Dušan S. Marković je advokat i jedan od osnivača MB Law - Zajedničke advokatske kancelarije Marković i Bogdanović. Njegova praksa usmerena je na korporativno i privredno pravo, radno pravo, rešavanje sporova, nepokretnosti, investicije, prekršajno pravo, kao i zastupanje klijenata u složenim sudskim i drugim postupcima.",
      "Tokom dosadašnje prakse savetovao je domaće i međunarodne privredne subjekte u vezi sa osnivanjem i poslovanjem u Srbiji, ugovornim odnosima, korporativnim promenama i investicionim pitanjima, dok značajan deo njegove prakse čini i zastupanje fizičkih i pravnih lica u građanskim, privrednim, odštetnim i drugim sporovima.",
      "Značajan deo njegove prakse čini zastupanje pred sudovima različite stvarne i mesne nadležnosti, u predmetima koji zahtevaju detaljnu procesnu strategiju, pažljivu analizu dokaza i kontinuirano vođenje postupka od njegovog pokretanja do pravnosnažnog okončanja.",
      "Pored advokatske prakse, redovno učestvuje u televizijskim emisijama na nacionalnim frekvencijama, gde kao pravni komentator govori o aktuelnim pravnim pitanjima i temama od šireg društvenog značaja. Kroz takve nastupe nastoji da složena pravna pitanja približi široj javnosti i doprinese boljem razumevanju prava, pravnih postupaka i njihovih praktičnih posledica.",
      "Njegov pristup zasniva se na detaljnoj analizi pravnog i činjeničnog okvira, jasnoj strategiji i neposrednom radu sa klijentom tokom celog angažmana.",
    ],
    focus: [
      { label: "Korporativno pravo", href: "/oblasti-rada/korporativno-pravo" },
      { label: "Radno pravo", href: "/oblasti-rada/radno-pravo" },
      { label: "Nepokretnosti i građevinarstvo", href: "/oblasti-rada/nepokretnosti" },
      { label: "Građansko pravo", href: "/oblasti-rada/gradjansko-pravo" },
    ],
    linkedIn: "#",
    photo: "/slike jpg/IMG_7277.webp",
    founder: true,
  },
  {
    slug: "milovan-m-bogdanovic",
    name: "Milovan M. Bogdanović",
    role: "Senior Partner",
    bio: "Praksa usmerena na korporativno i privredno pravo, finansijsko pravo, pravnu podršku privrednim subjektima, nepokretnosti, građansko pravo i prava stranaca.",
    detail:
      "Njegov pristup zasniva se na povezivanju pravne analize sa poslovnim ciljevima klijenta, uz fokus na jasno strukturirana, praktična i dugoročno održiva pravna rešenja.",
    paragraphs: [
      "Milovan M. Bogdanović je advokat i jedan od osnivača MB Law - Zajednička advokatska kancelarija Marković i Bogdanović. Njegova praksa prvenstveno je usmerena na korporativno i privredno pravo, finansijsko pravo, pravnu podršku privrednim subjektima, kao i na oblasti nepokretnosti i građevinarstva, građanskog prava i prava stranaca.",
      "Pre osnivanja zajedničke advokatske kancelarije, sarađivao je sa međunarodnom advokatskom kancelarijom, gde je stekao iskustvo u radu na složenim korporativnim pitanjima, poslovnim transakcijama i pravnom savetovanju domaćih i međunarodnih klijenata.",
      "Značajan deo njegove prakse obuhvata pravne due diligence procese, korporativno strukturiranje, pripremu i analizu ugovora, kao i savetovanje u vezi sa poslovnim transakcijama, promenama vlasničke strukture i investicionim projektima.",
      "Posebno iskustvo ima u pravnim pitanjima vezanim za nepokretnosti i građevinarstvo, uključujući pravnu proveru nepokretnosti, ugovorno strukturiranje projekata, investicione transakcije i rešavanje imovinskopravnih pitanja povezanih sa razvojem i korišćenjem nepokretnosti.",
      "Njegov pristup zasniva se na povezivanju pravne analize sa poslovnim ciljevima klijenta, uz fokus na jasno strukturirana, praktična i dugoročno održiva pravna rešenja.",
    ],
    focus: [
      { label: "Korporativno pravo", href: "/oblasti-rada/korporativno-pravo" },
      { label: "Nepokretnosti i građevinarstvo", href: "/oblasti-rada/nepokretnosti" },
      { label: "Građansko pravo", href: "/oblasti-rada/gradjansko-pravo" },
      { label: "Prava stranaca", href: "/oblasti-rada/prava-stranaca" },
    ],
    linkedIn: "#",
    photo: "/slike jpg/IMG_7276.webp",
    founder: true,
  },
  {
    slug: "isidora-markovic",
    name: "Isidora V. Marković",
    role: "Partner",
    bio: "Praksa usmerena na građansko pravo, rešavanje sporova, naknadu štete, osiguranje i zastupanje pred sudovima.",
    detail:
      "Njen pristup zasniva se na detaljnoj analizi činjenica i dokaza, jasnoj procesnoj strategiji i neposrednoj komunikaciji sa klijentom tokom čitavog postupka.",
    paragraphs: [
      "Isidora V. Marković je advokat i partner u MB Law - Zajednička advokatska kancelarija Marković i Bogdanović. Njena praksa prvenstveno je usmerena na građansko pravo, rešavanje sporova, naknadu štete, osiguranje i druga pitanja koja zahtevaju zastupanje pred sudovima i pažljivo vođenje parničnog postupka.",
      "Tokom dosadašnje prakse stekla je značajno iskustvo u zastupanju fizičkih i pravnih lica u širokom spektru parničnih i drugih građanskopravnih postupaka pred sudovima i drugim nadležnim organima.",
      "Poseban deo njene prakse čine predmeti naknade materijalne i nematerijalne štete, uključujući sporove sa društvima za osiguranje, kao i druga pitanja koja zahtevaju pažljivu pravnu analizu i zastupanje interesa klijenta.",
      "Pored zastupanja u sporovima, bavi se i savetovanjem klijenata u vezi sa različitim pitanjima iz oblasti građanskog prava, sa ciljem da se pravni rizici prepoznaju i reše pre nego što prerastu u spor.",
      "Njen pristup zasniva se na detaljnoj analizi činjenica i dokaza, jasnoj procesnoj strategiji i neposrednoj komunikaciji sa klijentom tokom čitavog postupka.",
    ],
    focus: [
      { label: "Građansko pravo", href: "/oblasti-rada/gradjansko-pravo" },
      {
        label: "Naknada štete i prava iz osiguranja",
        href: "/oblasti-rada/naknada-stete",
      },
    ],
    linkedIn: "#",
    photo: "/slike jpg/IsidoraNovaSlika.webp",
  },
];

export function getAttorney(slug: string): Attorney | undefined {
  return attorneys.find((attorney) => attorney.slug === slug && !attorney.comingSoon);
}

export function getPublishedAttorneys(): Attorney[] {
  return attorneys.filter((attorney) => !attorney.comingSoon);
}
