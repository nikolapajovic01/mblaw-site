export type PracticeAreaItem = {
  label?: string;
  desc: string;
};

export type PracticeAreaSection = {
  heading?: string;
  intro?: string[];
  items?: PracticeAreaItem[];
};

export type PracticeArea = {
  slug: string;
  no: string;
  title: string;
  summary: string;
  intro: string[];
  sections: PracticeAreaSection[];
  closing?: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "korporativno-pravo",
    no: "01",
    title: "Korporativno pravo",
    summary:
      "Osnivanje i registracija društava, vlasnička struktura, ugovori, M&A, due diligence i korporativno upravljanje.",
    intro: [
      "Savetujemo pri izboru forme i strukture društva, kroz osnivanje, vlasničke i statusne promene, ugovore, transakcije i usklađenost poslovanja.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Izbor pravne forme i korporativne strukture",
            desc: "Savetovanje pri izboru optimalne pravne forme i načina organizovanja poslovanja prema ciljevima i potrebama klijenta.",
          },
          {
            label: "Osnivanje i registracija",
            desc: "Kompletna pravna podrška pri osnivanju i registraciji privrednih društava, uključujući pripremu osnivačkih i drugih potrebnih akata i dokumentacije.",
          },
          {
            label: "Promena vlasničke strukture",
            desc: "Savetovanje i pravna podrška pri prenosu udela i akcija, pristupanju novih članova, istupanju postojećih članova i drugim promenama vlasničke strukture društva.",
          },
          {
            label: "Zakonska usklađenost",
            desc: "Savetovanje u vezi sa usklađenošću poslovanja sa važećim propisima i pravovremeno prilagođavanje poslovanja regulatornim promenama.",
          },
          {
            label: "Savetovanje pri donošenju odluka",
            desc: "Pravna analiza, mišljenja i preporuke prilikom donošenja važnih korporativnih i poslovnih odluka.",
          },
          {
            label: "Ugovori i sporazumi",
            desc: "Izrada, pregovaranje i tumačenje ugovora i drugih poslovnih sporazuma, uz poseban fokus na zaštitu pravnih i komercijalnih interesa klijenta.",
          },
          {
            label: "Statusne promene i reorganizacije",
            desc: "Pravna podrška pri pripajanju, spajanju, podeli i izdvajanju, kao i promeni pravne forme i drugim oblicima korporativne reorganizacije.",
          },
          {
            label: "Spajanja i preuzimanja (M&A)",
            desc: "Pravna podrška u svim fazama transakcije - od pisma o namerama i pravne analize, preko pregovaranja i izrade transakcione dokumentacije, do zatvaranja transakcije i posttransakcionog postupanja.",
          },
          {
            label: "Pravni due diligence",
            desc: "Sprovođenje sveobuhvatne pravne analize privrednog subjekta pred transakciju, finansiranje ili ulazak novog investitora, uz izradu izveštaja sa identifikacijom i procenom utvrđenih pravnih rizika.",
          },
          {
            label: "Korporativno upravljanje",
            desc: "Savetovanje o odnosima između organa društva, odnosima između članova društva, izradi internih i korporativnih akata, kao i o odgovornosti zakonskih zastupnika i članova organa društva.",
          },
          {
            label: "Usklađenost i sprečavanje pranja novca",
            desc: "Izrada internih procedura, politika poznavanja klijenta (KYC) i programa usklađenosti, uključujući postupanje u vezi sa propisima o sprečavanju pranja novca i finansiranja terorizma, stvarnim vlasnicima i primenjivim međunarodnim restriktivnim merama.",
          },
          {
            label: "Likvidacija i prestanak društva",
            desc: "Pravna podrška i vođenje postupka dobrovoljne likvidacije, uređenje odnosa sa poveriocima i sprovođenje potrebnih korporativnih i registracionih radnji do brisanja društva iz registra.",
          },
        ],
      },
    ],
  },
  {
    slug: "poresko-i-carinsko-pravo",
    no: "03",
    title: "Poresko i carinsko pravo",
    summary:
      "Poreska kontrola, pravna sredstva, transferne cene, carinski postupci i upravni spor pred Upravnim sudom.",
    intro: [
      "Poreski i carinski postupci pripadaju oblastima u kojima se greška učinjena u ranoj fazi kasnije teško ispravlja. MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža pravnu pomoć klijentima od trenutka pokretanja kontrole, preko prvostepenog i drugostepenog poreskog ili carinskog postupka, do vođenja upravnog spora pred Upravnim sudom.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Poreska kontrola i inspekcijski nadzor",
            desc: "Zastupanje i savetovanje tokom postupka kontrole, priprema dokumentacije i komunikacija s poreskim organima, uključujući pravnu analizu nalaza kontrole i pravovremeno reagovanje na utvrđene nepravilnosti.",
          },
          {
            label: "Pravna sredstva u poreskom postupku",
            desc: "Izrada primedbi na zapisnik o kontroli, žalbi na poreska rešenja i tužbi u upravnom sporu pred Upravnim sudom, kao i zastupanje u postupcima po drugim raspoloživim pravnim sredstvima.",
          },
          {
            label: "Poreski tretman transakcija",
            desc: "Pravna mišljenja o poreskom tretmanu konkretnih poslovnih odnosa, uz savetovanje pri strukturiranju transakcija s fokusom na poštovanje važećih poreskih propisa i pravnu predvidivost poslovne odluke.",
          },
          {
            label: "Transferne cene i međunarodno poresko pravo",
            desc: "Savetovanje o primeni ugovora o izbegavanju dvostrukog oporezivanja i o dokumentacionim obavezama u vezi sa transakcijama između povezanih lica.",
          },
          {
            label: "Carinski postupci",
            desc: "Zastupanje u postupcima uvoza, izvoza i drugim carinskim postupcima, uključujući pitanja tarifnog svrstavanja robe, određivanja carinske vrednosti i porekla robe.",
          },
          {
            label: "Carinski prekršaji",
            desc: "Odbrana fizičkih i pravnih lica, kao i odgovornih lica u pravnim licima, u prekršajnim postupcima koji proizlaze iz povreda carinskih propisa.",
          },
          {
            label: "Naknadna naplata carinskih dažbina",
            desc: "Zastupanje u postupcima u kojima carinski organ naknadno utvrđuje carinski dug ili druga uvozna davanja, uključujući osporavanje činjeničnog i pravnog osnova donetih odluka.",
          },
          {
            label: "Poreklo i carinska vrednost robe",
            desc: "Pravna pomoć u sporovima koji se odnose na dokazivanje porekla robe, primenu preferencijalnog tretmana i način utvrđivanja carinske vrednosti.",
          },
        ],
      },
    ],
  },
  {
    slug: "prekrsajno-pravo",
    no: "02",
    title: "Prekršajno pravo",
    summary:
      "Odbrana u prekršajnom postupku, nalog, zastarelost, žalba i odgovornost pravnih i odgovornih lica.",
    intro: [
      "Zastupanje u prekršajnim postupcima, od prvog kontakta sa nadležnim organom do pravnosnažnog okončanja postupka.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Prekršajni postupci",
            desc: "Odbrana fizičkih lica, preduzetnika, pravnih lica i odgovornih lica u pravnim licima u svim fazama prekršajnog postupka, bez obzira na to da li je postupak iniciran zahtevom za pokretanje prekršajnog postupka ili izdavanjem prekršajnog naloga. Pravna pomoć obuhvata analizu predmeta, pripremu pisane odbrane, zastupanje pred sudom, predlaganje i osporavanje dokaza, kao i sastavljanje žalbi i drugih pravnih sredstava.",
          },
          {
            label: "Prekršajni nalog i zahtev za sudsko odlučivanje",
            desc: "Posebnu pažnju posvećujemo predmetima započetim izdavanjem prekršajnog naloga. Lice koje ne prihvata odgovornost ima rok od osam dana od prijema naloga da podnese zahtev za sudsko odlučivanje. Već u ovoj fazi analiziramo činjenični opis, pravnu kvalifikaciju i raspoložive dokaze i, kada okolnosti predmeta to opravdavaju, uz zahtev pripremamo i pisanu odbranu i predlažemo dokaze.",
          },
          {
            label: "Zastarelost prekršajnog gonjenja i izvršenja",
            desc: "Praćenje rokova predstavlja sastavni deo naše odbrane. U svakom predmetu posebno analiziramo relativnu i apsolutnu zastarelost pokretanja i vođenja postupka, kao i zastarelost izvršenja izrečenih sankcija.",
          },
          {
            label: "Žalbeni postupak",
            desc: "Sastavljamo žalbe protiv prvostepenih prekršajnih odluka i zastupamo klijente u postupku pred Prekršajnim apelacionim sudom, sa posebnim fokusom na bitne povrede postupka, pogrešnu primenu materijalnog prava i nedostatke u utvrđenom činjeničnom stanju.",
          },
          {
            label: "Pravna lica i odgovorna lica",
            desc: "Posebnu pažnju posvećujemo prekršajnoj odgovornosti privrednih društava, preduzetnika i odgovornih lica, naročito kada vođenje postupka ili izrečene sankcije mogu imati neposredne posledice na poslovanje klijenta.",
          },
        ],
      },
    ],
  },
  {
    slug: "privredni-prestupi",
    no: "02",
    title: "Privredni prestupi",
    summary:
      "Zastupanje pravnih i odgovornih lica, analiza dokumentacije i preventiva u postupcima za privredne prestupe.",
    intro: [
      "Zastupanje u postupcima za privredne prestupe, od prvog kontakta sa nadležnim organom do pravnosnažnog okončanja postupka.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Odbrana pravnih i odgovornih lica",
            desc: "Zastupanje pravnih lica i odgovornih lica u postupcima za privredne prestupe, od pokretanja postupka do njegovog pravnosnažnog okončanja.",
          },
          {
            label: "Analiza poslovne dokumentacije",
            desc: "U predmetima koji proizlaze iz poslovanja privrednih subjekata analiziramo relevantnu poslovnu, računovodstvenu i drugu dokumentaciju radi utvrđivanja činjeničnog i pravnog osnova odgovornosti.",
          },
          {
            label: "Strategija odbrane i zastupanje pred sudom",
            desc: "Pripremamo pisane odbrane, dokazne predloge i pravne lekove i zastupamo klijente pred nadležnim sudovima tokom čitavog postupka.",
          },
          {
            label: "Preventivno savetovanje",
            desc: "Pružamo pravnu podršku privrednim subjektima radi usklađivanja poslovanja sa važećim propisima i smanjenja rizika od odgovornosti za privredne prestupe.",
          },
        ],
      },
    ],
  },
  {
    slug: "krivicno-pravo",
    no: "02",
    title: "Krivično pravo",
    summary:
      "Odbrana u krivičnom postupku, posebna nadležnost, pritvor, oštećeni, privredni kriminal, oduzimanje imovine i ekstradicija.",
    intro: [
      "Zastupanje u krivičnim postupcima, od prvog kontakta sa nadležnim organom do pravnosnažnog okončanja postupka.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Odbrana u krivičnim postupcima",
            desc: "Zastupanje osumnjičenih, okrivljenih i optuženih tokom predistražnog postupka, istrage, optuženja i glavnog pretresa, kao i u postupcima po redovnim i vanrednim pravnim lekovima. Posebnu pažnju posvećujemo složenim predmetima i odbranama u postupcima za najteža krivična dela.",
          },
          {
            label: "Postupci posebne nadležnosti",
            desc: "Odbrana i zastupanje u postupcima iz oblasti organizovanog kriminala, ratnih zločina, suzbijanja korupcije i visokotehnološkog kriminala, pred nadležnim javnim tužilaštvima i sudovima.",
          },
          {
            label: "Zadržavanje do 48 časova i pritvor",
            desc: "Kancelarija pruža pravnu pomoć od trenutka lišenja slobode i zadržavanja, tokom saslušanja pred javnim tužiocem, kao i u postupku odlučivanja o određivanju, produženju, ukidanju ili zameni pritvora blažom merom.",
          },
          {
            label: "Zastupanje oštećenih lica",
            desc: "Pored odbrane okrivljenih, zastupamo i lica oštećena krivičnim delom, uključujući sastavljanje krivičnih prijava, zastupanje tokom postupka i ostvarivanje imovinskopravnih zahteva radi naknade štete.",
          },
          {
            label: "Privredni i finansijski kriminal",
            desc: "Zastupanje fizičkih i pravnih lica u postupcima za krivična dela protiv privrede, službene dužnosti, platnog prometa i druga dela povezana sa poslovanjem, uključujući predmete koji zahtevaju analizu obimne poslovne i finansijske dokumentacije i saradnju sa stručnjacima odgovarajućih oblasti.",
          },
          {
            label: "Oduzimanje imovine proistekle iz krivičnog dela",
            desc: "Zastupanje u postupcima privremenog i trajnog oduzimanja imovine proistekle iz krivičnog dela, uključujući zaštitu prava trećih lica čija je imovina obuhvaćena merom.",
          },
          {
            label: "Odgovornost pravnih lica za krivična dela",
            desc: "Odbrana pravnih lica u postupcima po Zakonu o odgovornosti pravnih lica za krivična dela i savetovanje u vezi sa pravnim posledicama krivične odgovornosti pravnog lica.",
          },
          {
            label: "Međunarodna pravna pomoć i ekstradicija",
            desc: "Zastupanje u postupcima ekstradicije i ekstradicionog pritvora, postupanje u vezi sa međunarodnim poternicama, prenosom krivičnog gonjenja i izvršenja kazne, priznanjem i izvršenjem stranih krivičnih presuda, kao i drugim oblicima međunarodne pravne pomoći.",
          },
        ],
      },
    ],
  },
  {
    slug: "prava-stranaca",
    no: "07",
    title: "Prava stranaca",
    summary:
      "Jedinstvena dozvola, vize, boravak, ulaganja, kupovina nepokretnosti i državljanstvo za strana lica.",
    intro: [
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža sveobuhvatnu pravnu podršku stranim pravnim i fizičkim licima koja žele da borave, rade, investiraju ili posluju u Srbiji. Strani državljani i njihovi poslovni partneri mogu se osloniti na našu ekspertizu u oblasti zakonodavstva o strancima, uključujući regulisanje boravka i prava na rad, pribavljanje viza i jedinstvenih dozvola za privremeni boravak i rad, kao i vođenje svih relevantnih postupaka u skladu sa važećim propisima Republike Srbije.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Jedinstvena dozvola za privremeni boravak i rad",
            desc: "Pravna podrška u postupku pribavljanja i produženja jedinstvene dozvole za privremeni boravak i rad, uključujući pripremu dokumentacije, podnošenje zahteva i zastupanje pred nadležnim organima.",
          },
          {
            label: "Vize za kraći i duži boravak",
            desc: "Pravna pomoć u postupcima pribavljanja vize C i vize D, uključujući analizu osnova za boravak, pripremu dokumentacije i podršku tokom postupka podnošenja zahteva.",
          },
          {
            label: "Regulisanje statusa stranaca",
            desc: "Savetovanje u vezi sa viznim režimom, zakonitim boravkom, produženjem boravka, pravom na rad i drugim pitanjima statusa stranih državljana u Republici Srbiji.",
          },
          {
            label: "Privremeni i stalni boravak",
            desc: "Pravna pomoć u pripremi i podnošenju zahteva za privremeni boravak i stalno nastanjenje, kao i vođenje postupaka pred nadležnim organima.",
          },
          {
            label: "Prijava boravišta stranca",
            desc: "Pravna pomoć u vezi sa prijavom mesta boravka stranog državljanina u Republici Srbiji i drugim povezanim administrativnim obavezama.",
          },
          {
            label: "Zastupanje i pravno savetovanje",
            desc: "Zastupanje stranaca pred državnim organima, sudovima, poslovnim bankama, osiguravajućim društvima i drugim institucijama u pitanjima koja se odnose na njihov boravak, rad, poslovanje i ostvarivanje prava u Srbiji.",
          },
          {
            label: "Ulaganja i poslovne strukture",
            desc: "Savetovanje stranih investitora pri osnivanju privrednih društava, izboru odgovarajuće pravne forme, ulaganju u postojeća društva i pokretanju poslovnih aktivnosti u Republici Srbiji.",
          },
          {
            label: "Otvaranje bankovnih računa",
            desc: "Pravna podrška stranim fizičkim i pravnim licima u postupcima otvaranja računa kod poslovnih banaka u Republici Srbiji i pribavljanju dokumentacije koju banke zahtevaju u okviru svojih procedura.",
          },
          {
            label: "Kupovina nepokretnosti",
            desc: "Savetovanje i zastupanje stranih fizičkih i pravnih lica pri kupovini nepokretnosti u Republici Srbiji, uključujući proveru uslova za sticanje prava svojine, pravnu analizu nepokretnosti i pripremu ugovorne dokumentacije.",
          },
          {
            label: "Državljanstvo",
            desc: "Pravna podrška u postupcima prijema u državljanstvo Republike Srbije po osnovu porekla, braka, rođenja, prijema i drugih zakonom predviđenih osnova, kao i u postupcima utvrđivanja i prestanka državljanstva.",
          },
          {
            label: "Statusna i lična pitanja stranaca",
            desc: "Pravna pomoć u vezi sa upisom u matične knjige, priznavanjem i korišćenjem stranih javnih isprava, pribavljanjem potvrda i drugom dokumentacijom potrebnom za ostvarivanje prava u Srbiji.",
          },
        ],
      },
    ],
  },
  {
    slug: "radno-pravo",
    no: "08",
    title: "Radno pravo",
    summary:
      "Savetovanje i zastupanje poslodavaca i zaposlenih o ugovorima, otkazima, sporovima i usklađenosti sa propisima o radu.",
    intro: [
      "Radno pravo predstavlja jednu od najzahtevnijih pravnih oblasti u Srbiji. MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža sveobuhvatnu pravnu pomoć u svim pravnim aspektima radnih odnosa, zastupajući podjednako poslodavce i zaposlene u savetodavnim, pregovaračkim i sudskim postupcima.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Savetovanje za poslodavce i zaposlene",
            desc: "Pružanje jasnih i preciznih pravnih mišljenja i saveta u vezi s pravima i obavezama iz radnog odnosa.",
          },
          {
            label: "Ugovori o radu i opšti akti poslodavca",
            desc: "Pregovaranje, izrada i analiza ugovora o radu, aneksa ugovora, pravilnika o radu, pravilnika o organizaciji i sistematizaciji poslova i drugih opštih akata poslodavaca iz oblasti radnih odnosa.",
          },
          {
            label: "Zaštita od diskriminacije i zlostavljanja na radu",
            desc: "Zastupanje zaposlenih i poslodavaca u postupcima povodom diskriminacije, zlostavljanja na radu i drugih oblika povrede prava zaposlenih.",
          },
          {
            label: "Prestanak radnog odnosa i otkaz ugovora o radu",
            desc: "Postupci prestanka radnog odnosa predstavljaju jedan od najosetljivijih segmenata radnog prava, jer procesna ili materijalnopravna greška može dovesti do poništaja rešenja o otkazu, vraćanja zaposlenog na rad i obaveze naknade štete. Poslodavcima pružamo pravnu pomoć pri pripremi i sprovođenju postupka prestanka radnog odnosa, dok zaposlene zastupamo kada je do prestanka radnog odnosa došlo protivno zakonu ili uz povredu njihovih prava.",
          },
          {
            label: "Radni sporovi i mirno rešavanje sporova",
            desc: "Zastupanje pred nadležnim sudovima, kao i u postupcima mirnog rešavanja individualnih i kolektivnih radnih sporova kada su za to ispunjeni zakonski uslovi.",
          },
          {
            label: "Usklađenost sa zakonodavstvom",
            desc: "Savetovanje poslodavaca u vezi sa usklađivanjem internih procedura, ugovora i opštih akata sa važećim propisima iz oblasti rada.",
          },
          {
            label: "Naknada štete nastale na radu i u vezi sa radom",
            desc: "Zastupamo zaposlene u postupcima za naknadu materijalne i nematerijalne štete nastale usled povrede na radu, profesionalne bolesti ili druge štete u vezi sa radom. Istovremeno pružamo pravnu pomoć poslodavcima u postupcima utvrđivanja odgovornosti i visine štete, kao i u vezi sa pravnim posledicama povrede na radu.",
          },
          {
            label: "Kolektivno radno pravo",
            desc: "Zastupanje u pregovorima o kolektivnim ugovorima, u odnosima s reprezentativnim sindikatima i u postupcima u vezi sa organizovanjem i sprovođenjem štrajka.",
          },
          {
            label: "Zaštita uzbunjivača",
            desc: "Savetovanje poslodavaca o obavezama iz Zakona o zaštiti uzbunjivača i izradi internih akata o postupku uzbunjivanja, kao i zastupanje uzbunjivača u postupcima zaštite od štetne radnje.",
          },
          {
            label: "Angažovanja izvan radnog odnosa",
            desc: "Izrada i analiza ugovora o delu, ugovora o privremenim i povremenim poslovima, dopunskom radu i saradnji s preduzetnicima, uz procenu pravnih rizika konkretnog modela angažovanja.",
          },
          {
            label: "Upućivanje zaposlenih i rad na daljinu",
            desc: "Savetovanje o upućivanju zaposlenih na rad u inostranstvo, angažovanju stranih radnika u Srbiji, radu od kuće i radu na daljinu, uz pitanja merodavnog prava i socijalnog osiguranja.",
          },
        ],
      },
    ],
  },
  {
    slug: "gradjansko-pravo",
    no: "09",
    title: "Građansko pravo",
    summary:
      "Imovinski i ugovorni odnosi, porodično i nasledno pravo, naknada štete, stvarna prava i medijacija.",
    intro: [
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža pravnu podršku u širokom spektru građanskopravnih odnosa. Tim advokata posvećen je zaštiti prava fizičkih i pravnih lica, s fokusom na imovinske odnose, ugovorne odnose, nasledstvo, porodične odnose i druga pitanja iz oblasti građanskog prava.",
    ],
    sections: [
      {
        heading: "Ponuda usluga uključuje",
        items: [
          {
            label: "Rešavanje sporova",
            desc: "Efikasno zastupanje putem pregovora, medijacije i sudskih postupaka, s posebnim akcentom na kreativna i najefikasnija rešenja. MB Law - Zajednička advokatska kancelarija Marković i Bogdanović se posebno ponosi načinom na koji se pristupa rešavanju sporova sudskim putem, onda kada je to komplikovano i kada je potrebno naći kreativno rešenje za konkretan pravni problem.",
          },
          {
            label: "Naknada štete",
            desc: "Jedna od ključnih komponenti građanskog prava je i naknada štete, koja se odnosi na obavezu nadoknade štete koja je nanesena jednoj strani usled povrede prava ili neispunjavanja ugovornih obaveza. Naši iskusni advokati pružaju stručno vođstvo u procesima koji se odnose na naknadu štete, bilo da je reč o materijalnoj ili nematerijalnoj šteti.",
          },
          {
            label: "Ugovorni odnosi",
            desc: "Pravne usluge vezane za izradu, interpretaciju i izvršenje različitih vrsta ugovora, obezbeđujući jasnoću i zaštitu interesa naših klijenata. Naš pristup izradi ugovora specifičan je iz razloga što svaki ugovor radimo „ad hoc\", dakle za konkretno činjenično i pravno stanje.",
          },
          {
            label: "Porodično pravo",
            desc: "Savetovanje i zastupanje u svim porodičnopravnim postupcima, uključujući razvod braka, vršenje roditeljskog prava, uređivanje ličnih odnosa roditelja i dece, izdržavanje, deobu bračne tekovine, utvrđivanje i osporavanje očinstva i materinstva, izradu bračnih ugovora, kao i pravnu zaštitu i zastupanje u slučajevima nasilja u porodici.",
          },
          {
            label: "Nasledno pravo",
            desc: "Pružanje stručne podrške u ostavinskim postupcima, izradi testamenta, izradi naslednopravnih ugovora.",
          },
          {
            label: "Stvarna prava i susedski odnosi",
            desc: "Postupci utvrđivanja prava svojine, zaštite od uznemiravanja svojine, državinski sporovi, kao i ustanovljenje i zaštita službenosti.",
          },
          {
            label: "Vanparnični postupci",
            desc: "Zastupanje u postupcima uređenja međa, deobe zajedničkih stvari, lišenja i vraćanja poslovne sposobnosti, proglašenja nestalog lica za umrlo, dokazivanja smrti i utvrđivanja postojanja vanbračne zajednice.",
          },
          {
            label: "Medijacija i vansudsko rešavanje sporova",
            desc: "Vođenje postupka medijacije i izrada vansudskih poravnanja u građanskopravnim odnosima.",
          },
        ],
      },
    ],
  },
  {
    slug: "nepokretnosti",
    no: "10",
    title: "Nepokretnosti i građevinarstvo",
    summary:
      "Pravna procena, ugovori, katastar, ozakonjenje, građevinski projekti, zakup i zaštita investicije.",
    intro: [
      "Ova oblast predstavlja jedan od najvažnijih sektora privrede i investicionog razvoja. MB Law - Zajednička advokatska kancelarija Marković i Bogdanović nudi kompletnu pravnu podršku u svim segmentima vezanim za nepokretnosti i građevinarstvo, od pravne procene i provere pravnog statusa nepokretnosti, preko pripreme i pregovaranja ugovorne dokumentacije, do realizacije investicionih i građevinskih projekata.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Pravna procena i due diligence",
            desc: "Detaljna analiza svojinskopravnih, urbanističkih i građevinskih pitanja, tereta, ograničenja, dozvola i druge relevantne dokumentacije pre kupovine, investiranja ili realizacije projekta.",
          },
          {
            label: "Ugovori u sektoru nepokretnosti",
            desc: "Izrada predugovora i ugovora o kupoprodaji, ugovora o zakupu, ugovora o građenju, ugovora o suinvestiranju, ugovora između investitora i izvođača radova, kao i zastupanje u pregovorima u vezi sa zaključenjem transakcione i projektne dokumentacije.",
          },
          {
            label: "Katastar nepokretnosti",
            desc: "Pravna podrška u postupcima upisa prava svojine i drugih stvarnih prava, zabeležbi i predbeležbi, kao i u postupcima ispravke i usklađivanja podataka u katastru nepokretnosti.",
          },
          {
            label: "Podrška u građevinarstvu",
            desc: "Savetovanje u vezi sa lokacijskim uslovima, građevinskim i upotrebnim dozvolama, planskim dokumentima i propisima iz oblasti planiranja i izgradnje, kao i rešavanje imovinsko-pravnih pitanja vezanih za zemljište.",
          },
          {
            label: "Ozakonjenje objekata",
            desc: "Pravna analiza statusa nezakonito izgrađenih objekata, priprema i pribavljanje potrebne dokumentacije i zastupanje u postupcima ozakonjenja pred nadležnim organima, u skladu sa Zakonom o posebnim uslovima za evidentiranje i upis prava na nepokretnostima (Svoj na svome).",
          },
          {
            label: "Javne nabavke i koncesije",
            desc: "Pravna podrška investitorima u postupcima javnih nabavki, koncesija i velikih infrastrukturnih projekata.",
          },
          {
            label: "Upravljanje rizicima i pravna zaštita",
            desc: "Identifikacija pravnih rizika u vezi sa sticanjem, razvojem i korišćenjem nepokretnosti, kao i pravno strukturiranje transakcija radi zaštite investicije.",
          },
          {
            label: "Zakup i upravljanje nepokretnostima",
            desc: "Izrada ugovora o zakupu poslovnog i stambenog prostora, savetovanje u vezi sa upravljanjem zgradom i odnosima u stambenim zajednicama.",
          },
          {
            label: "Eksproprijacija i restitucija",
            desc: "Zastupanje u postupcima eksproprijacije i utvrđivanja naknade, kao i u postupcima vraćanja oduzete imovine i obeštećenja.",
          },
          {
            label: "Poljoprivredno zemljište",
            desc: "Pravna analiza i postupci u vezi sa prometom i zakupom poljoprivrednog zemljišta, kao i sa pravom preče kupovine.",
          },
        ],
      },
    ],
  },
  {
    slug: "naplata-potrazivanja-i-izvrsenje",
    no: "11",
    title: "Naplata potraživanja i izvršni postupak",
    summary:
      "Zastupanje poverilaca u naplati potraživanja i dužnika radi zaštite njihovih prava u izvršnom postupku.",
    intro: [
      "Naplata potraživanja je oblast u kojoj ishod u velikoj meri zavisi od brzine reakcije i pravilnog izbora pravnog puta i sredstava izvršenja. MB Law - Zajednička advokatska kancelarija Marković i Bogdanović zastupa poverioce u postupcima naplate potraživanja, ali i dužnike radi zaštite njihovih prava u izvršnom postupku.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Vansudska naplata",
            desc: "Analiza dokumentacije, opomene pred utuženje i pregovaranje o sporazumima o otplati i reprogramu duga.",
          },
          {
            label: "Pokretanje i vođenje izvršnog postupka",
            desc: "Podnošenje predloga za izvršenje na osnovu izvršnih i verodostojnih isprava, kao i vođenje parničnih postupaka kada je prethodno potrebno utvrditi postojanje potraživanja.",
          },
          {
            label: "Sprovođenje izvršenja",
            desc: "Predlaganje i praćenje sredstava izvršenja na novčanim sredstvima, zaradi, nepokretnostima i pokretnim stvarima, uz postupanje pred javnim izvršiteljima.",
          },
          {
            label: "Obezbeđenje potraživanja",
            desc: "Predlozi za određivanje privremenih mera i drugih sredstava obezbeđenja radi sprečavanja otuđenja ili umanjenja imovine dužnika tokom postupka.",
          },
          {
            label: "Zaštita dužnika",
            desc: "Izrada prigovora i žalbi, zahteva za odlaganje izvršenja i drugih pravnih sredstava radi zaštite dužnika od nedozvoljenog ili neosnovanog izvršenja.",
          },
          {
            label: "Priznanje i izvršenje stranih odluka",
            desc: "Vođenje postupaka priznanja i izvršenja stranih sudskih i arbitražnih odluka u Republici Srbiji.",
          },
          {
            label: "Naplata u stečaju i likvidaciji",
            desc: "Prijava potraživanja i zastupanje poverilaca kada je nad dužnikom otvoren stečaj ili se sprovodi likvidacija.",
          },
        ],
      },
    ],
  },
  {
    slug: "naknada-stete",
    no: "12",
    title: "Naknada štete i prava iz osiguranja",
    summary:
      "Zastupanje oštećenih i lica prema kojima je zahtev postavljen, uključujući sporove s društvima za osiguranje.",
    intro: [
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović zastupa oštećena lica u postupcima naknade materijalne i nematerijalne štete, kao i lica i privredne subjekte prema kojima je zahtev za naknadu postavljen. Posebno mesto u praksi kancelarije zauzimaju sporovi s društvima za osiguranje.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Šteta iz saobraćajnih nezgoda",
            desc: "Pravna podrška od prikupljanja dokumentacije i prijave štete, preko vansudskog postupka pred osiguravačem, do parničnog postupka.",
          },
          {
            label: "Sporovi s društvima za osiguranje",
            desc: "Zastupanje u slučajevima odbijanja isplate, delimične isplate ili spora u pogledu osnova ili visine naknade iz osiguranja.",
          },
          {
            label: "Nematerijalna šteta",
            desc: "Zahtevi za naknadu zbog pretrpljenih fizičkih i duševnih bolova, umanjenja životne aktivnosti, naruženosti i povrede prava ličnosti.",
          },
          {
            label: "Materijalna šteta",
            desc: "Naknada stvarne štete i izgubljene koristi, uključujući troškove lečenja, tuđe pomoći i nege i izgubljenu zaradu.",
          },
          {
            label: "Šteta od organa javne vlasti",
            desc: "Postupci naknade štete zbog neosnovanog lišenja slobode, neosnovane osude i nezakonitog ili nepravilnog rada organa.",
          },
          {
            label: "Ugovorna odgovornost",
            desc: "Naknada štete zbog neizvršenja ili neurednog izvršenja ugovornih obaveza.",
          },
          {
            label: "Koordinacija veštačenja",
            desc: "Priprema i praćenje medicinskih, saobraćajnih i ekonomskih veštačenja, koja često imaju značajnu dokaznu ulogu u ovim postupcima.",
          },
        ],
      },
    ],
  },
  {
    slug: "upravni-postupci-i-sporovi",
    no: "16",
    title: "Upravni postupci i upravni sporovi",
    summary:
      "Zastupanje u upravnim postupcima pred organima javne vlasti i u upravnim sporovima pred Upravnim sudom.",
    intro: [
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža pravnu pomoć u upravnim postupcima pred organima javne vlasti i u upravnim sporovima pred Upravnim sudom. Zastupanje obuhvata postupke iz oblasti imovinskih odnosa, građevinarstva, prava stranaca, penzijskog i socijalnog osiguranja, inspekcijskog nadzora i drugih upravnih oblasti.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Vođenje upravnog postupka",
            desc: "Pokretanje postupka, priprema zahteva i dokumentacije i zastupanje pred nadležnim organima.",
          },
          {
            label: "Pravna sredstva",
            desc: "Izrada žalbi, prigovora i drugih pravnih sredstava u upravnom postupku.",
          },
          {
            label: "Upravni spor",
            desc: "Sastavljanje tužbe i zastupanje pred Upravnim sudom, uključujući predloge za odlaganje izvršenja.",
          },
          {
            label: "Ćutanje uprave",
            desc: "Postupanje kada nadležni organ ne odluči u zakonskom roku.",
          },
          {
            label: "Penzijsko i socijalno osiguranje",
            desc: "Zastupanje u postupcima ostvarivanja i zaštite prava iz penzijskog i socijalnog osiguranja.",
          },
          {
            label: "Inspekcijski nadzor",
            desc: "Zastupanje tokom inspekcijskog nadzora i u postupcima povodom izrečenih mera.",
          },
          {
            label: "Registri i evidencije",
            desc: "Postupci upisa, izmene i brisanja podataka u javnim registrima i evidencijama.",
          },
        ],
      },
    ],
  },
  {
    slug: "zastita-podataka-o-licnosti",
    no: "17",
    title: "Zaštita podataka o ličnosti",
    summary:
      "Usklađivanje poslovanja sa Zakonom o zaštiti podataka o ličnosti i GDPR-om, kada je njegova primena relevantna.",
    intro: [
      "Obrada podataka o ličnosti danas je sastavni deo gotovo svakog poslovnog procesa, a obaveze rukovaoca i obrađivača zahtevaju jasno uređene interne procedure i dokumentaciju. MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža pravnu pomoć u usklađivanju poslovanja sa Zakonom o zaštiti podataka o ličnosti i GDPR-om kada je njegova primena relevantna.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Procena usklađenosti",
            desc: "Analiza postojećih procesa obrade podataka i izrada plana usklađivanja.",
          },
          {
            label: "Interna dokumentacija",
            desc: "Izrada evidencije radnji obrade, politika privatnosti, obaveštenja licima, procedura i internih akata.",
          },
          {
            label: "Ugovorni okvir",
            desc: "Izrada ugovora o obradi podataka, sporazuma o zajedničkoj obradi i klauzula o poverljivosti.",
          },
          {
            label: "Prenos podataka u inostranstvo",
            desc: "Savetovanje o pravnim osnovima prenosa i potrebnim zaštitnim merama.",
          },
          {
            label: "Procena uticaja",
            desc: "Pravna podrška pri sprovođenju procene uticaja na zaštitu podataka kod obrada visokog rizika.",
          },
          {
            label: "Povreda podataka o ličnosti",
            desc: "Pravna pomoć u slučaju incidenta, uključujući procenu obaveze prijave Povereniku i obaveštavanja lica na koja se podaci odnose.",
          },
          {
            label: "Zastupanje pred Poverenikom",
            desc: "Zastupanje u postupcima nadzora i po pritužbama.",
          },
          {
            label: "Lice za zaštitu podataka",
            desc: "Savetovanje o obavezi određivanja i podrška u radu lica za zaštitu podataka o ličnosti.",
          },
        ],
      },
    ],
  },
  {
    slug: "posebne-oblasti-ekspertize",
    no: "20",
    title: "Okrenuti budućnosti",
    summary:
      "Pravo životne sredine, IT i intelektualna svojina, i pravna podrška startapima, inovatorima i investitorima.",
    intro: [
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović prati razvoj pravnih oblasti koje nastaju i menjaju se zajedno sa tehnologijom, novim poslovnim modelima i regulatornim zahtevima.",
    ],
    sections: [
      {
        heading: "Posebne oblasti stručnosti obuhvataju",
        items: [
          {
            label: "Pravo životne sredine",
            desc: "Savetovanje i zastupanje u vezi sa propisima o zaštiti životne sredine, regulatornim obavezama i usklađivanjem poslovanja.",
          },
          {
            label: "Informacione tehnologije i intelektualna svojina (IT & IP law)",
            desc: "Pravna zaštita softvera, autorskih prava, žigova, patenata i drugih prava intelektualne svojine, kao i izrada i analiza IT ugovora i pravna podrška digitalnom poslovanju.",
          },
          {
            label: "Inovacije i moderne industrije",
            desc: "Pravna podrška startap kompanijama, inovatorima i investitorima pri strukturiranju poslovanja, zaštiti intelektualne svojine, ugovornim odnosima i investicionim transakcijama.",
          },
        ],
      },
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

const areaTags: Record<string, string> = {
  "prava-stranaca": "Prava stranaca",
  "naplata-potrazivanja-i-izvrsenje": "Naplata i izvršenje",
  "naknada-stete": "Naknada i osiguranje",
  "upravni-postupci-i-sporovi": "Upravni postupci",
  "zastita-podataka-o-licnosti": "Zaštita podataka",
  "posebne-oblasti-ekspertize": "IT, IP i inovacije",
  "poresko-i-carinsko-pravo": "Poresko i carinsko",
};

export function getPracticeAreaTag(area: PracticeArea): string {
  return areaTags[area.slug] ?? area.title;
}

export function getPracticeGroupForArea(slug: string) {
  return practiceMenuGroups.find((group) => group.areaSlugs.includes(slug));
}

export type PracticeMenuGroup = {
  slug: string;
  title: string;
  navTitle?: string;
  summary: string;
  navLine: string;
  areaSlugs: string[];
};

export function getPracticeGroupNavTitle(group: PracticeMenuGroup) {
  return group.navTitle ?? group.title;
}

export const practiceMenuGroups: PracticeMenuGroup[] = [
  {
    slug: "korporativno-pravo",
    title: "Korporativno pravo",
    navLine: "Osnivanje, M&A, ugovori i usklađenost",
    summary:
      "Osnivanje i registracija društava, vlasnička struktura, ugovori, M&A, due diligence i korporativno upravljanje.",
    areaSlugs: ["korporativno-pravo"],
  },
  {
    slug: "krivicno-i-prekrsajno-pravo",
    title: "Krivično i prekršajno pravo",
    navLine: "Prekršaji, prestupi i krivična odbrana",
    summary:
      "MB Law - Zajednička advokatska kancelarija Marković i Bogdanović pruža pravnu pomoć i zastupanje u prekršajnim postupcima, postupcima za privredne prestupe i krivičnim postupcima, od prvog kontakta sa nadležnim organom do pravnosnažnog okončanja postupka.",
    areaSlugs: ["prekrsajno-pravo", "privredni-prestupi", "krivicno-pravo"],
  },
  {
    slug: "gradjansko-pravo",
    title: "Građansko pravo",
    navLine: "Imovina, ugovori, porodica i nasledstvo",
    summary:
      "Imovinski i ugovorni odnosi, porodično i nasledno pravo, naknada štete, stvarna prava i medijacija.",
    areaSlugs: ["gradjansko-pravo"],
  },
  {
    slug: "nepokretnosti",
    title: "Nepokretnosti i građevinarstvo",
    navTitle: "Nepokretnosti",
    navLine: "Kupoprodaja, projekti i katastar",
    summary:
      "Pravna procena, ugovori, katastar, ozakonjenje, građevinski projekti, zakup i zaštita investicije.",
    areaSlugs: ["nepokretnosti"],
  },
  {
    slug: "prava-stranaca",
    title: "Prava stranaca",
    navLine: "Boravak, rad, ulaganja i državljanstvo",
    summary:
      "Jedinstvena dozvola, vize, boravak, ulaganja, kupovina nepokretnosti i državljanstvo za strana lica.",
    areaSlugs: ["prava-stranaca"],
  },
  {
    slug: "poresko-i-carinsko-pravo",
    title: "Poresko i carinsko pravo",
    navTitle: "Poresko pravo",
    navLine: "Kontrola, žalbe, carina i upravni spor",
    summary:
      "Poreska kontrola, pravna sredstva, transferne cene, carinski postupci i upravni spor pred Upravnim sudom.",
    areaSlugs: ["poresko-i-carinsko-pravo"],
  },
  {
    slug: "ostale-oblasti-rada",
    title: "Ostale oblasti rada",
    navLine: "Rad, naplata, šteta, uprava i podaci",
    summary:
      "Radno pravo, naplata potraživanja, naknada štete i osiguranje, upravni postupci, zaštita podataka i oblasti koje prate tehnologiju i nove poslovne modele.",
    areaSlugs: [
      "radno-pravo",
      "naplata-potrazivanja-i-izvrsenje",
      "naknada-stete",
      "upravni-postupci-i-sporovi",
      "zastita-podataka-o-licnosti",
      "posebne-oblasti-ekspertize",
    ],
  },
];

export function getPracticeMenuGroup(slug: string) {
  return practiceMenuGroups.find((group) => group.slug === slug);
}

export function getPracticeGroupHref(group: PracticeMenuGroup): string {
  if (group.areaSlugs.length === 1) {
    return `/oblasti-rada/${group.areaSlugs[0]}`;
  }
  return `/oblasti-rada/${group.slug}`;
}
