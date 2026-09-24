import type { Dictionary } from "@/dictionaries/types";
import { legalSr } from "@/dictionaries/legal/sr";

const sr = {
  meta: {
    homeTitle: "MB Law - advokatska kancelarija Marković i Bogdanović",
    homeDescription:
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović iz Beograda pruža sveobuhvatne pravne usluge domaćim i inostranim klijentima.",
    practiceTitleSuffix: "advokat Beograd",
    aboutDescription:
      "MB Law je zajednička advokatska kancelarija Marković i Bogdanović iz Beograda. Saznajte ko vodi vaš predmet i kako radimo sa domaćim i stranim klijentima.",
    practiceAreasDescription:
      "Oblasti rada advokatske kancelarije MB Law u Beogradu: korporativno, krivično, građansko, radno i poresko pravo, nepokretnosti i prava stranaca.",
    teamDescription:
      "Partneri advokatske kancelarije MB Law u Beogradu: Dušan S. Marković, Milovan M. Bogdanović i Isidora V. Marković. Upoznajte advokate koji vode vaš predmet.",
    insightsDescription:
      "Analize propisa i sudske prakse advokatske kancelarije MB Law iz Beograda: privredno pravo, nepokretnosti, radno pravo i kazneno pravo.",
    contactDescription:
      "Kontakt advokatske kancelarije MB Law: Resavska 68, Beograd. Telefon 065 389 4111, e-mail office@mblaw.rs. Zakažite razgovor sa partnerom.",
    privacyDescription:
      "Politika privatnosti sajta MB Law: koji podaci se prikupljaju na mblaw.rs, kako se koriste i koja prava imate.",
    termsDescription:
      "Uslovi korišćenja sajta MB Law. Sajt nije pravni savet. Upit sa sajta nije automatski angažman kancelarije.",
    attorneyTitleSuffix: "advokat u Beogradu",
  },
  nav: {
    home: "Početna",
    about: "O nama",
    practiceAreas: "Oblasti rada",
    team: "Tim",
    insights: "Uvidi",
    contact: "Kontakt",
  },
  langSwitch: {
    label: "Jezik",
  },
  header: {
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
  },
  hero: {
    eyebrowLeft: "ADVOKATSKA KANCELARIJA",
    eyebrowRight: "BEOGRAD, SRBIJA",
    headingLine1: "Gde pravo postaje",
    headingLine2: "vaša prednost",
    paragraph:
      "Sveobuhvatna pravna podrška domaćim i međunarodnim klijentima - uz strateški pristup, razumevanje njihovih potreba i pouzdanu zaštitu poslovnih i ličnih interesa.",
    ctaPrimary: "ZAKAŽITE KONSULTACIJU",
    ctaSecondary: "ISTRAŽITE OBLASTI RADA",
  },
  about: {
    eyebrow: "O NAMA",
    heading: "Od pitanja do rešenja",
    paragraph1:
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža pravnu podršku domaćim i međunarodnim klijentima u korporativnim, građanskim i kaznenim pitanjima.",
    paragraph2:
      "Klijent od početka zna ko vodi njegov predmet, ko donosi ključne odluke i kome se obraća.",
    link: "SAZNAJTE VIŠE O NAMA",
    heroLead:
      "Pravna podrška domaćim i međunarodnim klijentima u korporativnim, građanskim i kaznenim pitanjima.",
    storyEyebrow: "O KANCELARIJI",
    storyTitle: "O nama",
    storyParagraphs: [
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža pravnu podršku domaćim i međunarodnim klijentima u korporativnim, građanskim i kaznenim pitanjima.",
      "Naš način rada je jednostavan: klijent od početka zna ko vodi njegov predmet, ko donosi ključne odluke i kome se obraća. Partneri su neposredno uključeni u vođenje predmeta, dok tim kancelarije obezbeđuje kapacitet za svakodnevni rad, analizu i realizaciju.",
      "Cilj nam je da predmet bude vođen brzo, jasno i sa konkretnom odgovornošću advokata koji ga preuzima.",
      "Pored partnera, kancelariju čini i širi tim internih saradnika, uz razvijenu mrežu saradnje sa advokatskim kancelarijama i pravnim profesionalcima širom Evrope i Bliskog istoka.",
    ],
    howEyebrow: "PRISTUP",
    howTitle: "Naš način rada je jednostavan.",
    howSteps: [
      {
        no: "01",
        title: "Ko vodi predmet.",
        text: "Klijent od početka zna ko vodi njegov predmet, ko donosi ključne odluke i kome se obraća.",
      },
      {
        no: "02",
        title: "Partneri vode, tim realizuje.",
        text: "Partneri su neposredno uključeni u vođenje predmeta, dok tim kancelarije obezbeđuje kapacitet za svakodnevni rad, analizu i realizaciju.",
      },
      {
        no: "03",
        title: "Brzo, jasno, sa odgovornošću.",
        text: "Cilj nam je da predmet bude vođen brzo, jasno i sa konkretnom odgovornošću advokata koji ga preuzima.",
      },
    ],
    stepLabel: "Korak",
    approachNavLabel: "Koraci vođenja predmeta",
  },
  practiceAreas: {
    eyebrow: "OBLASTI RADA",
    heading: "Ključne oblasti naše pravne prakse",
    details: "DETALJI",
    viewAll: "SVE OBLASTI RADA",
    menuAll: "SVE OBLASTI",
    indexLead: "Svaka celina okuplja srodne oblasti. Otvorite temu koja vas se tiče.",
    onThisPage: "NA OVOJ STRANICI",
    inThisGroup: "U OVOJ CELINI",
    tocLabel: "Sadržaj stranice",
    groupNavLabel: "Navigacija oblasti",
    pagerLabel: "Susedne oblasti",
    breadcrumbLabel: "Putanja",
    groupPrefix: "OBLASTI RADA",
    groups: {
      "korporativno-pravo": {
        title: "Korporativno pravo",
        navLine: "Osnivanje, M&A, ugovori i usklađenost",
      },
      "krivicno-i-prekrsajno-pravo": {
        title: "Krivično i prekršajno pravo",
        navLine: "Prekršaji, prestupi i krivična odbrana",
      },
      "gradjansko-pravo": {
        title: "Građansko pravo",
        navLine: "Imovina, ugovori, porodica i nasledstvo",
      },
      nepokretnosti: {
        title: "Nepokretnosti i građevinarstvo",
        navTitle: "Nepokretnosti",
        navLine: "Kupoprodaja, projekti i katastar",
      },
      "prava-stranaca": {
        title: "Prava stranaca",
        navLine: "Boravak, rad, ulaganja i državljanstvo",
      },
      "poresko-i-carinsko-pravo": {
        title: "Poresko i carinsko pravo",
        navTitle: "Poresko pravo",
        navLine: "Kontrola, žalbe, carina i upravni spor",
      },
      "ostale-oblasti-rada": {
        title: "Ostale oblasti rada",
        navLine: "Rad, naplata, šteta, uprava i podaci",
      },
    },
  },
  team: {
    eyebrow: "TIM",
    heading: "Upoznajte Vaš pravni tim",
    partnersLabel: "Partneri",
    moreAboutAttorney: "VIŠE O ADVOKATU",
    linkedIn: "LINKEDIN",
    comingSoon: "PROFIL USKORO",
    allPartners: "Svi partneri",
    networkEyebrow: "BEOGRAD, EVROPA, BLISKI ISTOK",
    networkHeading: "Izvan granica Srbije.",
    networkLead:
      "Pored partnera, kancelariju čini i širi tim internih saradnika, uz razvijenu mrežu saradnje sa advokatskim kancelarijama i pravnim profesionalcima širom Evrope i Bliskog istoka.",
    networkSupport:
      "Ovakva organizacija advokatskoj kancelariji omogućava da, kada priroda predmeta to zahteva, klijentima pruži koordinisanu pravnu podršku i izvan granica Srbije.",
    attorneys: {
      "dusan-s-markovic": {
        role: "Senior Partner",
        bio: "Praksa usmerena na korporativno i privredno pravo, radno pravo, rešavanje sporova, nepokretnosti, investicije i zastupanje u složenim postupcima.",
        detail:
          "Njegov pristup zasniva se na detaljnoj analizi pravnog i činjeničnog okvira, jasnoj strategiji i neposrednom radu sa klijentom tokom celog angažmana.",
        paragraphs: [
          "Dušan S. Marković je advokat i jedan od osnivača MB Law - Zajedničke advokatske kancelarije Marković i Bogdanović. Njegova praksa usmerena je na korporativno i privredno pravo, radno pravo, rešavanje sporova, nepokretnosti, investicije, kao i zastupanje klijenata u složenim sudskim i drugim postupcima.",
          "Tokom dosadašnje prakse savetovao je domaće i međunarodne privredne subjekte u vezi sa osnivanjem i poslovanjem u Srbiji, ugovornim odnosima, korporativnim promenama i investicionim pitanjima, dok značajan deo njegove prakse čini i zastupanje fizičkih i pravnih lica u građanskim, privrednim, odštetnim i drugim sporovima.",
          "Značajan deo njegove prakse čini zastupanje pred sudovima različite stvarne i mesne nadležnosti, u predmetima koji zahtevaju detaljnu procesnu strategiju, pažljivu analizu dokaza i kontinuirano vođenje postupka od njegovog pokretanja do pravnosnažnog okončanja.",
          "Pored advokatske prakse, redovno učestvuje u televizijskim emisijama na nacionalnim frekvencijama, gde kao pravni komentator govori o aktuelnim pravnim pitanjima i temama od šireg društvenog značaja. Kroz takve nastupe nastoji da složena pravna pitanja približi široj javnosti i doprinese boljem razumevanju prava, pravnih postupaka i njihovih praktičnih posledica.",
          "Njegov pristup zasniva se na detaljnoj analizi pravnog i činjeničnog okvira, jasnoj strategiji i neposrednom radu sa klijentom tokom celog angažmana.",
        ],
      },
      "milovan-m-bogdanovic": {
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
      },
      "isidora-markovic": {
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
      },
    },
  },
  insights: {
    eyebrow: "UVIDI",
    heading: "Najnovije analize i pravna praksa",
    prev: "Prethodni uvidi",
    next: "Sledeći uvidi",
    viewAll: "SVI UVIDI",
    readMore: "PROČITAJTE",
    indexLead: "Kratki tekstovi o propisima i praksi. Otvorite temu koja vas se tiče.",
    filterAll: "Sve",
    filterAriaLabel: "Filter uvida po oblasti",
    moreInsights: "JOŠ UVIDA",
    topics: {
      "privredno-pravo": "Privredno pravo",
      nekretnine: "Nekretnine",
      "radno-pravo": "Radno pravo",
      "kazneno-pravo": "Kazneno pravo",
    },
    posts: {
      "izmene-propisa-i-poslovanje": {
        tag: "PRIVREDNO PRAVO",
        title: "Izmene propisa i uticaj na poslovanje društava.",
        excerpt:
          "Kratak pregled najvažnijih promena i njihovog uticaja na poslovanje privrednih društava.",
        body: [
          "Kad se propis promeni, prvo pitanje nije šta piše u obrazloženju, nego šta to menja u konkretnom društvu: ugovore, rokove, prijave i odgovornost organa.",
          "Pregledamo šta je stupilo na snagu, šta tek stupa, i gde postoji prelazni režim. Tek tada se piše šta treba uraditi, i do kog datuma.",
          "Ako izmena dira vaš predmet, javite se. Partner kaže da li treba menjati akta, ugovore ili samo pratiti rok.",
        ],
      },
      "provera-pre-kupoprodaje-nepokretnosti": {
        tag: "NEKRETNINE",
        title: "Šta proveriti pre kupoprodaje nepokretnosti.",
        excerpt:
          "Šta je potrebno proveriti pre kupoprodaje i kako izbeći najčešće pravne rizike.",
        body: [
          "Kupoprodaja ne počinje kod notara. Počinje uvidom u stanje nepokretnosti: upis, tereti, dozvole i to da li prodavac uopšte može da prenese pravo.",
          "Najčešći rizik nije cena, nego rupa u dokumentaciji koja se vidi tek kad se spis otvori. Zato se provera radi pre avansa, ne posle.",
          "Ako kupujete ili prodajete, prvi korak je da vidimo spis. Od toga zavisi da li se ide dalje, i pod kojim uslovima.",
        ],
      },
      "izmene-internih-akata-i-ugovora-o-radu": {
        tag: "RADNO PRAVO",
        title: "Izmene internih akata i ugovora o radu.",
        excerpt:
          "Praktične smernice za poslodavce prilikom izmene internih akata i ugovora o radu.",
        body: [
          "Interni akt i ugovor o radu se ne menjaju preko noći. Izmena mora da prati zakon, postojeće ugovore i način na koji društvo stvarno radi.",
          "Poslodavac treba da zna šta menja, koga to pogađa, i kako se izmena dostavlja. Inače se spor ne vodi o sadržini, nego o postupku.",
          "Ako spremate izmenu pravilnika ili ugovora, prvo se vidi važeći tekst. Plan se piše posle toga.",
        ],
      },
      "prvi-koraci-u-odbrani": {
        tag: "KAZNENO PRAVO",
        title: "Prvi koraci u odbrani u postupku.",
        excerpt:
          "Kako pripremiti odbranu i koje korake preduzeti u ranoj fazi postupka.",
        body: [
          "U ranoj fazi se predmete često izgubi ili sačuva. Prvo se utvrdi gde je klijent u postupku, šta je već rekao, i koji su rokovi.",
          "Odbrana se ne piše pre činjenica. Sastanak, spis, pa plan. Ako je hitno, rad počinje od zadržavanja, ne od kancelarije narednog jutra.",
          "Ako ste pozvani, privedeni ili zadržani, javite se odmah. Partner preuzima razgovor i kaže šta sledi.",
        ],
      },
      "ugovori-koji-prate-rast-drustva": {
        tag: "PRIVREDNO PRAVO",
        title: "Ugovori koji prate rast društva.",
        excerpt:
          "Kad društvo raste, stari ugovori često ostaju. Šta pregledati pre nove runde poslova.",
        body: [
          "Rast menja odnos sa dobavljačima, zaposlenima i partnerima. Ugovor koji je radio na početku često ne pokriva novi obim, rokove ili odgovornost.",
          "Pregled kreće od onoga što društvo sada radi, ne od fascikle. Tek tada se vidi šta treba dopuniti, a šta ostaviti.",
          "Ako ulazite u novi posao ili krug pregovora, prvo se otvore važeći ugovori. Plan izmene dolazi posle toga.",
        ],
      },
      "upis-i-tereti-pre-avansa": {
        tag: "NEKRETNINE",
        title: "Upis i tereti pre avansa.",
        excerpt:
          "Šta mora da stoji u katastru pre nego što se uplati avans, i šta se dešava ako ne stoji.",
        body: [
          "Avans se često traži pre nego što je stanje upisa jasno. Ako teret ili zabeležba ispliva posle uplate, pregovor se vodi iz goreg položaja.",
          "Provera nije formalnost. Gleda se upis, tereti, i da li prodavac može da prenese pravo pod uslovima koji su rečeni.",
          "Ako spremate kupovinu, spis se otvara pre avansa. Od toga zavisi da li se uplaćuje, i pod kojim uslovom.",
        ],
      },
    },
  },
  cta: {
    eyebrow: "KONSULTACIJA",
    heading: "Prvi korak je razgovor",
    paragraph:
      "Zakažite inicijalni sastanak i dobijte jasan pregled opcija pre nego što donesete odluku. Diskretno, precizno i usmereno ka vašem cilju.",
    button: "ZAKAŽITE KONSULTACIJU",
    orContact: "Ili nas kontaktirajte direktno.",
    phoneLabel: "TELEFON",
    addressLabel: "ADRESA",
    emailLabel: "EMAIL",
    city: "Beograd",
  },
  footer: {
    tagline:
      "Sveobuhvatna pravna podrška domaćim i međunarodnim klijentima, uz strateški pristup i pouzdanu zaštitu poslovnih i ličnih interesa.",
    navHeading: "NAVIGACIJA",
    practiceHeading: "OBLASTI RADA",
    contactHeading: "KONTAKT",
    city: "Beograd",
    rights: "Sva prava zadržana.",
    privacyPolicy: "Politika privatnosti",
    termsOfUse: "Uslovi korišćenja",
  },
  mobileActions: {
    scrollTop: "Na vrh strane",
    openViber: "Otvori Viber",
    openWhatsapp: "Otvori WhatsApp",
    callOffice: "Pozovi kancelariju",
  },
  contactPage: {
    lead: "Nazovite, pišite ili pošaljite upit. Odgovaramo ko vodi predmet, i da li možemo da ga preuzmemo.",
    formEyebrow: "UPIT",
    formTitle: "Napišite nam.",
    formLead:
      "Kratko šta se desilo i šta vam treba. Nije potrebno da šaljete spise u prvom koraku.",
    openInMaps: "OTVORI U MAPAMA",
  },
  contactForm: {
    nameLabel: "IME I PREZIME",
    emailLabel: "EMAIL",
    phoneLabel: "TELEFON",
    areaLabel: "OBLAST, NIJE OBAVEZNO",
    areaPlaceholder: "Izaberite celinu rada",
    messageLabel: "UPIT",
    footnote:
      "Nije potrebno da šaljete spise u prvom koraku. Upit koristimo samo da vam odgovorimo.",
    submit: "POŠALJITE UPIT",
    sending: "ŠALJE SE",
    successTitle: "Upit je poslat.",
    successBody: "Odgovorićemo na adresu koju ste ostavili. Ako je hitno, pišite na",
    errorName: "Unesite ime i prezime.",
    errorEmail: "Unesite ispravnu email adresu.",
    errorMessage: "Napišite ukratko šta vam treba, bar dve rečenice.",
    errorSend: "Upit nije poslat. Pokušajte ponovo ili pišite na office@mblaw.rs.",
  },
  common: {
    firstStepCta: "Ako je ovo vaš predmet, prvi korak je razgovor.",
  },
  legal: legalSr,
} satisfies Dictionary;

export default sr;
