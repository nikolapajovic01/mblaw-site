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
    slug: "privredno-pravo",
    no: "01",
    title: "Privredno pravo",
    summary:
      "Osnivanje, upravljanje i restrukturiranje privrednih društava, ugovori i transakcije.",
    intro: [
      "MB Law – Marković, Bogdanović & Partners pruža kompletne usluge u oblasti kompanijskog i trgovinskog prava, s posebnim akcentom na pravnu podršku u poslovanju. Iskusni tim advokata ima dugogodišnje iskustvo u radu sa domaćim i inostranim pravnim subjektima, u svim sektorima privrede.",
    ],
    sections: [
      {
        heading: "Usluge obuhvataju",
        items: [
          {
            label: "Izbor strukture kompanije",
            desc: "Savetovanje u odabiru optimalne pravne forme prema ciljevima i potrebama klijenta.",
          },
          {
            label: "Osnivanje i registracija",
            desc: "Uključujući pripremu dokumentacije i potpuni pravni proces osnivanja.",
          },
          {
            label: "Promena vlasničke strukture",
            desc: "Stručno savetovanje i podrška u slučaju promene vlasništva.",
          },
          {
            label: "Zakonska usklađenost",
            desc: "Obezbeđivanje usklađenosti poslovanja sa svim relevantnim zakonima i regulativama.",
          },
          {
            label: "Savetovanje pri donošenju odluka",
            desc: "Pružanje pravnih mišljenja i preporuka u ključnim poslovnim odlukama.",
          },
          {
            label: "Ugovori i sporazumi",
            desc: "Izrada, pregovaranje i tumačenje ugovora prema najvišim profesionalnim standardima.",
          },
          {
            label: "Statusne promene i akvizicije",
            desc: "Uključuju kompletne pravne usluge u procesu promene organizacione ili vlasničke strukture.",
          },
          {
            label: "Spajanja i preuzimanja",
            desc: "Pravna podrška u svim fazama transakcije - od pisma o namerama i pravne analize, preko pregovaranja transakcione dokumentacije, do zatvaranja i postupanja nakon zatvaranja.",
          },
          {
            label: "Pravni due diligence",
            desc: "Sprovođenje pravne analize privrednog subjekta pred transakciju, finansiranje ili ulazak novog investitora, uz izradu izveštaja s procenom utvrđenih rizika.",
          },
          {
            label: "Korporativno upravljanje",
            desc: "Savetovanje o odnosima između organa društva, izradi ugovora članova društva i internih akata, kao i o odgovornosti zakonskih zastupnika i članova organa.",
          },
          {
            label: "Usklađenost i sprečavanje pranja novca",
            desc: "Izrada internih procedura, politika poznavanja klijenta i programa usklađenosti, uključujući postupanje u skladu s međunarodnim sankcionim režimima.",
          },
          {
            label: "Likvidacija i prestanak društva",
            desc: "Vođenje postupka dobrovoljne likvidacije i postupanje s poveriocima do brisanja iz registra.",
          },
        ],
      },
    ],
  },
  {
    slug: "stecaj-i-restrukturiranje",
    no: "02",
    title: "Stečaj i restrukturiranje",
    summary:
      "Zastupanje stečajnih dužnika, poverilaca i članova odbora poverilaca u postupcima stečaja i reorganizacije.",
    intro: [
      "MB Law – Marković, Bogdanović & Partners pruža pravnu podršku u postupcima stečaja, reorganizacije i restrukturiranja, zastupajući stečajne dužnike, poverioce, kupce stečajne mase i članove odbora poverilaca. Ova oblast zahteva istovremeno razumevanje procesnih pravila i poslovne logike, jer se odluke donose u kratkim rokovima i s trajnim posledicama za imovinu klijenta.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Prijava i zaštita potraživanja",
            desc: "Priprema i podnošenje prijava potraživanja, zastupanje na ispitnim ročištima i osporavanje potraživanja drugih poverilaca.",
          },
          {
            label: "Pokretanje stečajnog postupka",
            desc: "Sastavljanje i podnošenje predloga za otvaranje stečaja, kao i zastupanje dužnika u postupku pokrenutom po predlogu poverioca.",
          },
          {
            label: "Unapred pripremljeni plan reorganizacije",
            desc: "Pravna priprema, izrada i sprovođenje plana reorganizacije, uz koordinaciju s finansijskim savetnicima i revizorima.",
          },
          {
            label: "Zastupanje u organima poverilaca",
            desc: "Učešće i zastupanje interesa klijenata u skupštini i odboru poverilaca.",
          },
          {
            label: "Kupovina stečajne mase",
            desc: "Pravna analiza i podrška u postupcima prodaje imovine stečajnog dužnika, uključujući javna nadmetanja i neposredne pogodbe.",
          },
          {
            label: "Pobijanje pravnih radnji stečajnog dužnika",
            desc: "Vođenje postupaka pobijanja, kao i zaštita klijenata od zahteva za pobijanje.",
          },
          {
            label: "Odgovornost organa društva",
            desc: "Savetovanje i zastupanje u vezi s odgovornošću zakonskih zastupnika i članova organa za obaveze društva.",
          },
        ],
      },
    ],
    closing:
      "Naš pristup usmeren je na očuvanje vrednosti - kod dužnika kroz održivo restrukturiranje, a kod poverilaca kroz najviši mogući stepen naplate u okviru zakonskih mogućnosti.",
  },
  {
    slug: "poresko-i-carinsko-pravo",
    no: "03",
    title: "Poresko i carinsko pravo",
    summary:
      "Zastupanje u poreskoj kontroli, upravnom postupku i upravnom sporu pred Upravnim sudom.",
    intro: [
      "Poreski i carinski postupci pripadaju oblastima u kojima se greška učinjena u ranoj fazi kasnije teško ispravlja. MB Law – Marković, Bogdanović & Partners pruža podršku klijentima od trenutka pokretanja kontrole, preko upravnog postupka, do vođenja upravnog spora pred Upravnim sudom.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Poreska kontrola i inspekcijski nadzor",
            desc: "Zastupanje i savetovanje tokom postupka kontrole, priprema dokumentacije i komunikacija s poreskim organima.",
          },
          {
            label: "Pravna sredstva u poreskom postupku",
            desc: "Izrada primedbi na zapisnik o kontroli, žalbi na poreska rešenja i tužbi u upravnom sporu.",
          },
          {
            label: "Poreski tretman transakcija",
            desc: "Pravna mišljenja o poreskom tretmanu konkretnih poslovnih odnosa, uz savetovanje pri strukturiranju transakcija s fokusom na usklađenost i predvidivost.",
          },
          {
            label: "Transferne cene i međunarodno poresko pravo",
            desc: "Savetovanje o primeni ugovora o izbegavanju dvostrukog oporezivanja i o dokumentacionim obavezama.",
          },
          {
            label: "Carinski postupci",
            desc: "Zastupanje u postupcima carinjenja, svrstavanja robe, određivanja carinske vrednosti i porekla robe.",
          },
          {
            label: "Carinski prekršaji i naknadna naplata",
            desc: "Odbrana u prekršajnim postupcima pred carinskim organima i vođenje postupaka po rešenjima o naknadnoj naplati dažbina.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je da klijentima obezbedimo predvidivost u poreskim i carinskim pitanjima i da svaki postupak vodimo tako da se sva pravna sredstva iskoriste u punom obimu i u zakonskim rokovima.",
  },
  {
    slug: "bankarsko-i-finansijsko-pravo",
    no: "04",
    title: "Bankarsko i finansijsko pravo",
    summary:
      "Pravna podrška učesnicima na finansijskom tržištu u odnosima s bankama i finansijskim institucijama.",
    intro: [
      "MB Law – Marković, Bogdanović & Partners pruža pravnu podršku učesnicima na finansijskom tržištu, kao i privrednim subjektima i fizičkim licima u odnosima s bankama i drugim finansijskim institucijama.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Kreditni poslovi i obezbeđenje",
            desc: "Izrada i pregovaranje ugovora o kreditu, jemstvu, zalozi i hipoteci, uključujući analizu i uspostavljanje sredstava obezbeđenja.",
          },
          {
            label: "Sporovi s finansijskim institucijama",
            desc: "Zastupanje u sporovima o ništavosti pojedinih ugovornih odredbi, obračunu kamate i naplati troškova obrade kredita.",
          },
          {
            label: "Regulatorna usklađenost",
            desc: "Savetovanje u vezi s propisima Narodne banke Srbije, sprečavanjem pranja novca i finansiranja terorizma i primenom mera poznavanja klijenta.",
          },
          {
            label: "Lizing i faktoring",
            desc: "Pravna podrška u zaključenju i sprovođenju ugovora o finansijskom lizingu i faktoringu.",
          },
          {
            label: "Tržište kapitala",
            desc: "Savetovanje pri izdavanju hartija od vrednosti, javnim ponudama i ispunjavanju obaveza izveštavanja.",
          },
          {
            label: "Digitalna imovina i platne usluge",
            desc: "Pravna analiza poslovnih modela u oblasti digitalne imovine, platnih usluga i elektronskog novca, uz procenu obaveze licenciranja.",
          },
        ],
      },
    ],
    closing:
      "Naš pristup kombinuje poznavanje regulatornog okvira s razumevanjem komercijalne strukture transakcije, kako bi se pravna zaštita klijenta obezbedila pre nego što spor nastane.",
  },
  {
    slug: "javne-nabavke-koncesije-i-jpp",
    no: "05",
    title: "Javne nabavke, koncesije i javno-privatno partnerstvo",
    summary:
      "Zastupanje naručilaca i ponuđača u svim fazama postupka javnih nabavki, koncesija i JPP.",
    intro: [
      "Postupci javnih nabavki vode se u kratkim i strogim rokovima, u kojima propuštena radnja najčešće ne može da se nadoknadi. MB Law – Marković, Bogdanović & Partners zastupa i naručioce i ponuđače u svim fazama postupka.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Priprema dokumentacije o nabavci",
            desc: "Izrada i pravna kontrola dokumentacije, tehničkih specifikacija i modela ugovora.",
          },
          {
            label: "Podrška ponuđačima",
            desc: "Analiza dokumentacije, priprema ponuda, pravna provera uslova za učešće i sastavljanje zahteva za dodatnim informacijama i pojašnjenjima.",
          },
          {
            label: "Zaštita prava u postupku",
            desc: "Izrada i podnošenje zahteva za zaštitu prava, zastupanje pred Republičkom komisijom za zaštitu prava u postupcima javnih nabavki i vođenje upravnog spora protiv njenih odluka.",
          },
          {
            label: "Ugovori o javnoj nabavci",
            desc: "Savetovanje u vezi s izvršenjem, izmenama i raskidom ugovora zaključenih u postupku javne nabavke.",
          },
          {
            label: "Koncesije",
            desc: "Pravna podrška u postupcima davanja koncesija, izradi koncesionih akata i koncesionih ugovora.",
          },
          {
            label: "Javno-privatno partnerstvo",
            desc: "Savetovanje pri strukturiranju projekata javno-privatnog partnerstva, izradi predloga projekta i vođenju postupka pred nadležnim organima.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je da klijentima obezbedimo pravnu sigurnost u postupku u kome je rok jednako važan kao i sadržina - od pripreme dokumentacije do konačne odluke.",
  },
  {
    slug: "kazneno-pravo",
    no: "06",
    title: "Kazneno pravo",
    summary:
      "Odbrana u krivičnom, prekršajnom postupku i postupcima privrednih prestupa pred svim sudovima u Srbiji.",
    intro: [
      "MB Law – Marković, Bogdanović & Partners ima dugu tradiciju zastupanja u zahtevnim krivičnim postupcima pred svim sudovima i tužilaštvima u Srbiji. S velikim iskustvom u odbrani u krivičnim postupcima pred svim sudovima opšte nadležnosti kao i pred posebnim odeljenjima Viših sudova i to za organizovani kriminal, ratne zločine, visokotehnološki kriminal i borbu protiv korupcije, kancelarija obezbeđuje najviši nivo pravne zaštite svakom klijentu.",
    ],
    sections: [
      {
        heading: "Krivični postupak",
        items: [
          {
            desc: "Naša ekspertiza u oblasti krivičnog prava omogućava klijentima sveobuhvatnu pravnu zaštitu i odbranu u predmetima u kojima su osumnjičeni ili optuženi za najteža krivična dela. Tokom poslednje decenije naši advokati su učestvovali u odbranama više javno propraćenih predmeta. Bilo da se suočavate sa optužbom ili tražite ostvarenje pravde, naši timovi će vas profesionalno i energično zastupati pred sudom i posvetiti se zaštiti vaših prava.",
          },
          {
            label: "Zadržavanje do 48 sati",
            desc: "Prema odredbama Zakonika o krivičnom postupku, javni tužilac i policija (po nalogu nadležnog tužilaštva) ovlašćeni su da donesu rešenje o zadržavanju do 48 časova, nakon čega lice biva pušteno ili se predlaže određivanje pritvora, o čemu odlučuje sud. MB Law – Marković, Bogdanović & Partners obezbeđuje pravnu pomoć okrivljenima od trenutka dovođenja u policijsku stanicu pa do okončanja postupka, s fokusom na pravovremenu i ciljanu odbranu.",
          },
          {
            label: "Hitne intervencije i dežurni servisi",
            desc: "U izuzetnim i opravdanim slučajevima, kada je potrebno preduzeti hitne radnje van redovnog radnog vremena, na raspolaganju našim klijentima stoje dežurni telefoni dostupni 00-24. U takvim situacijama, MB Law – Marković, Bogdanović & Partners garantuje brz odziv i organizovanu pravnu podršku.",
          },
          {
            label: "Zastupanje oštećenih lica",
            desc: "Osim odbrane okrivljenih, kancelarija zastupa i oštećena lica - sastavljanjem i podnošenjem krivičnih prijava, zastupanjem tokom celog postupka i podnošenjem imovinskopravnog zahteva radi naknade štete.",
          },
        ],
      },
      {
        heading: "Prekršajni postupak",
        items: [
          {
            desc: "MB Law – Marković, Bogdanović & Partners pruža sveobuhvatnu odbranu u svim prekršajnim postupcima, kako pokrenutim na osnovu Zahteva za pokretanje prekršajnog postupka, tako i u slučajevima izdatih Prekršajnih naloga.",
          },
          {
            desc: "Kada je postupak pokrenut na osnovu Zahteva, obezbeđujemo kompletnu pravnu podršku od trenutka prijema obaveštenja do konačnog okončanja postupka, s fokusom na stratešku odbranu i zaštitu prava klijenta.",
          },
          {
            desc: "U slučaju izdavanja Prekršajnog naloga neophodno je podneti zahtev za sudsko odlučivanje u roku od 8 dana od dana izdavanja, a neretko se ispostavi efikasnim dostaviti i pripremljenu pisanu odbranu zajedno sa zahtevom. Uspeh odbrane u ovakvim situacijama u velikoj meri zavisi od blagovremene reakcije, te je stoga od suštinskog značaja da odmah nakon izdavanja naloga kontaktirate svog izabranog branioca i na taj način drastično povećate šanse za povoljno okončanje postupka.",
          },
          {
            desc: "Značajan broj prekršajnih postupaka iz portfolia MB Law - Marković, Bogdanović & Partners okončan je obustavom usled nastupanja apsolutne zastarelosti ili donošenjem oslobađajućih presuda. Obe vrste okončanja predstavljaju povoljan ishod za klijente kancelarije.",
          },
        ],
      },
      {
        heading: "Privredni prestupi",
        intro: [
          "MB Law – Marković, Bogdanović & Partners zastupa klijente u postupcima privrednih prestupa, zastupajući i pravna lica i odgovorna lica u pravnim licima. Naša advokatska kancelarija deluje u svim fazama postupka - od preduzimanja inicijalnih istražnih radnji, preko odbrane pred nadležnim organima i sudovima, do rešavanja posledica koje proizilaze iz eventualnih novčanih kazni, oduzimanja imovinske koristi ili drugih mera.",
          "Obezbeđujemo pravnu podršku prilagođenu specifičnostima privrednih delatnosti: analiziramo poslovnu dokumentaciju, koordiniramo veštačenja i ekspertize, pripremamo pravne podneske i strategiju odbrane, i zastupamo klijente u pregovorima sa nadležnim organima. Poseban akcenat stavljamo na prevenciju poslovnih rizika i usklađivanje poslovanja sa važećim propisima kako bismo umanjili mogućnost pokretanja postupka i izbegli bilo kakve negativne posledice na poslovanje klijenta.",
        ],
      },
      {
        heading: "Privredni i finansijski kriminal",
        intro: [
          "Kancelarija zastupa okrivljena fizička i pravna lica u postupcima za krivična dela protiv privrede, službene dužnosti i platnog prometa. Ovi predmeti počivaju na obimnoj poslovnoj dokumentaciji i finansijskim veštačenjima, zbog čega odbrana zahteva pripremu koja teče uporedo sa samim postupkom, kao i saradnju s ekonomskim stručnjacima.",
        ],
        items: [
          {
            label: "Poreska krivična dela",
            desc: "Odbrana u postupcima za poresku utaju, neuplaćivanje poreza po odbitku i s njima povezana dela, uz koordinaciju s paralelnim poreskim postupkom.",
          },
          {
            label: "Postupci oduzimanja imovine",
            desc: "Zastupanje u postupcima privremenog i trajnog oduzimanja imovine proistekle iz krivičnog dela, uključujući zastupanje trećih lica čija je imovina obuhvaćena merom.",
          },
          {
            label: "Odgovornost pravnih lica",
            desc: "Odbrana pravnih lica u postupcima po Zakonu o odgovornosti pravnih lica za krivična dela i savetovanje o merama za smanjenje rizika.",
          },
        ],
      },
      {
        heading: "Međunarodna pravna pomoć i ekstradicija",
        items: [
          {
            label: "Postupci izdavanja",
            desc: "Zastupanje u ekstradicionim postupcima, po molbama za izdavanje i u postupcima ekstradicionog pritvora.",
          },
          {
            label: "Međunarodne poternice",
            desc: "Postupanje u vezi s međunarodnim poternicama i podnošenje zahteva za brisanje podataka iz evidencija Interpola.",
          },
          {
            label: "Prenos postupka i izvršenja kazne",
            desc: "Vođenje postupaka preuzimanja i prenosa krivičnog gonjenja, kao i priznanja i izvršenja stranih krivičnih presuda.",
          },
          {
            label: "Pravna pomoć u dokaznim radnjama",
            desc: "Postupanje po zamolnicama stranih organa i pribavljanje dokaza iz inostranstva.",
          },
        ],
      },
    ],
  },
  {
    slug: "prava-stranaca",
    no: "07",
    title: "Pravna podrška za strana pravna i fizička lica",
    summary:
      "Radne i boravišne dozvole, državljanstvo i poslovno prisustvo stranih lica u Srbiji.",
    intro: [
      "MB Law – Marković, Bogdanović & Partners pruža sveobuhvatnu pravnu podršku stranim pravnim i fizičkim licima koja žele da poslovno ili lično budu prisutni u Srbiji. Strani državljani i njihovi poslovni partneri mogu se osloniti na našu ekspertizu u oblasti zakonodavstva o strancima, uključujući pribavljanje radnih i boravišnih dozvola, kao i vođenje svih relevantnih postupaka u skladu s pozitivnim propisima.",
    ],
    sections: [
      {
        heading: "Naše usluge u oblasti prava stranaca obuhvataju",
        items: [
          {
            label: "Pribavljanje radnih i boravišnih dozvola",
            desc: "Kompletnu pravnu podršku u procesu podnošenja zahteva za izdavanje radne i boravišne dozvole, od pripreme dokumentacije, preko zastupanja pred nadležnim institucijama, do dobijanja dozvole.",
          },
          {
            label: "Upravljanje u skladu sa Zakonom o strancima",
            desc: "Savetovanje i primena zakonskih odredbi u skladu sa najnovijim zakonodavnim promenama, uključujući pitanja viznog režima, produženja boravka, dobijanja dozvola za rad i ostalih uslova za legalan boravak i rad stranaca u Srbiji.",
          },
          {
            label: "Privremeni i stalni boravak",
            desc: "Pomoć u pripremi i podnošenju zahteva za privremeni ili stalni boravak, kao i vođenje postupaka pred nadležnim organima.",
          },
          {
            label: "Zastupanje i pravno savetovanje",
            desc: "Zastupanje stranaca u svim pravnim radnjama i procesima vezanim za legalnost boravka i rada, kao i u slučajevima eventualnih pravnih problema ili sporova.",
          },
          {
            label: "Ulaganja i poslovne strukture",
            desc: "Pravni saveti i podrška stranim investitorima pri uspostavljanju poslovnih subjekata, osnivanju pravnih lica, pridruživanju i pokretanju poslovnih aktivnosti u skladu sa Zakonom o strancima i drugim relevantnim propisima.",
          },
          {
            label: "Državljanstvo",
            desc: "Pravna podrška u postupcima prijema u državljanstvo Republike Srbije - po osnovu porekla, braka, rođenja na teritoriji Republike Srbije i posebnog interesa - kao i u postupcima utvrđivanja i prestanka državljanstva.",
          },
          {
            label: "Statusna i lična pitanja stranaca",
            desc: "Prijava boravišta, upis u matične knjige, priznanje stranih javnih isprava i pribavljanje potvrda potrebnih za ostvarivanje prava u Srbiji.",
          },
        ],
      },
    ],
    closing:
      "Tim advokata specijalizovan za prava stranih pravnih i fizičkih lica i migraciona pravila garantuje pravnu sigurnost i svu podršku potrebnu za uspešan poslovni ili lični boravak u Srbiji, kao i usklađenost sa svim relevantnim propisima.",
  },
  {
    slug: "radno-pravo",
    no: "08",
    title: "Radno pravo",
    summary:
      "Radni odnosi, interna akta, otkazi i zastupanje u radnim sporovima poslodavaca i zaposlenih.",
    intro: [
      "Radno pravo predstavlja jednu od najzahtevnijih pravnih oblasti u Srbiji. MB Law – Marković, Bogdanović & Partners pruža punu stručnu podršku u svim pravnim aspektima radnih odnosa, s ciljem zaštite prava i interesa poslodavaca i zaposlenih.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Savetovanje za poslodavce i zaposlene",
            desc: "Pružanje jasnih i preciznih smernica u vezi s pravima i obavezama u radnom odnosu.",
          },
          {
            label: "Proces pregovaranja, izrada ugovora i opštih akata",
            desc: "Sastavljanje ugovora o radu, aneksa i opštih akata poslodavaca u skladu s najvišim standardima.",
          },
          {
            label: "Zaštita od diskriminacije i zlostavljanja",
            desc: "Zastupanje u postupcima zaštite od kršenja radnih prava i zastupanje učesnika u postupku.",
          },
          {
            label: "Sporazumni prestanci radnih odnosa i otkazi",
            desc: "Sporazumni prestanci radnih odnosa i postupci davanja otkaza zaposlenom predstavljaju jedne od najdelikatnijih i najsloženijih procesa u okviru radnog prava, gde i najsitnija nepažnja može rezultirati ozbiljnim posledicama za obe strane - kako za poslodavce, tako i za zaposlene. Naš tim advokata uspešno zastupa poslodavce u ovim postupcima osiguravajući na taj način njihovu pravnu sigurnost, ali sa druge strane zastupa i zaposlene kojima su povređena prava u smislu Zakona o radu i drugih relevantnih propisa.",
          },
          {
            label: "Radni sporovi i arbitraža",
            desc: "Rešavanje sporova putem alternativnih metoda, uz zaštitu prava i interesa klijenata.",
          },
          {
            label: "Usklađenost sa zakonodavstvom",
            desc: "Kontinuirano usklađivanje poslovnih procesa s relevantnim propisima iz oblasti radnog prava.",
          },
          {
            label: "Naknada štete",
            desc: "Posebnu pažnju posvećujemo pravima zaposlenih u situacijama kada su pretrpeli povrede ili štetu tokom obavljanja radnih zadataka ili usled povezanosti sa radom, ali i poslodavcima kod kojih je ova šteta nastala. Pravna podrška obuhvata analizu pravne osnove za potraživanje naknade štete, uključujući fizičke povrede i profesionalne bolesti.",
          },
          {
            label: "Kolektivno radno pravo",
            desc: "Zastupanje u pregovorima o kolektivnim ugovorima, u odnosima s reprezentativnim sindikatima i u postupcima organizovanja i sprovođenja štrajka.",
          },
          {
            label: "Zaštita uzbunjivača",
            desc: "Savetovanje poslodavaca o obavezama iz Zakona o zaštiti uzbunjivača i izradi internih akata o postupku uzbunjivanja, kao i zastupanje uzbunjivača u postupcima zaštite od štetne radnje.",
          },
          {
            label: "Angažovanja izvan radnog odnosa",
            desc: "Izrada i analiza ugovora o delu, ugovora o privremenim i povremenim poslovima, dopunskom radu i saradnji s preduzetnicima, uz procenu rizika prekvalifikacije u radni odnos.",
          },
          {
            label: "Upućivanje zaposlenih i rad na daljinu",
            desc: "Savetovanje o upućivanju zaposlenih u inostranstvo i iz inostranstva, radu od kuće i radu na daljinu, uz pitanja merodavnog prava i socijalnog osiguranja.",
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
      "Imovinski i ugovorni odnosi, nasledstvo i zaštita prava fizičkih i pravnih lica.",
    intro: [
      "MB Law – Marković, Bogdanović & Partners pruža pravnu podršku u širokom spektru građanskopravnih odnosa. Tim advokata posvećen je zaštiti prava fizičkih i pravnih lica, s fokusom na imovinske odnose, ugovorne odnose, nasledstvo i druga važna pitanja iz sfera građanskih prava.",
    ],
    sections: [
      {
        heading: "Ponuda usluga uključuje",
        items: [
          {
            label: "Rešavanje sporova",
            desc: "Efikasno zastupanje putem pregovora, medijacije i sudskih postupaka, s posebnim akcentom na kreativna i najefikasnija rešenja. MB Law – Marković, Bogdanović & Partners se posebno ponosi načinom na koji se pristupa rešavanju sporova sudskim putem, onda kada je to komplikovano i kada je potrebno naći kreativno rešenje za konkretan pravni problem.",
          },
          {
            label: "Ugovorni odnosi",
            desc: "Pravne usluge vezane za izradu, interpretaciju i izvršenje različitih vrsta ugovora, obezbeđujući jasnoću i zaštitu interesa naših klijenata. Naš pristup izradi ugovora specifičan je iz razloga što svaki ugovor radimo „ad hoc\", dakle za konkretno činjenično i pravno stanje.",
          },
          {
            label: "Zakonsko i testamentalno nasleđivanje",
            desc: "Pružanje stručne podrške u postupcima nasledstva, izradi testamenta, izradi naslednopravnih ugovora, i zastupanju u svim parničnim i vanparničnim postupcima.",
          },
          {
            label: "Naknada štete",
            desc: "Jedna od ključnih komponenti građanskog prava je i naknada štete, koja se odnosi na obavezu nadoknade štete koja je nanesena jednoj strani usled povrede prava ili neispunjavanja ugovornih obaveza. Naši iskusni advokati pružaju stručno vođstvo u procesima koji se odnose na naknadu štete, bilo da je reč o materijalnoj ili nematerijalnoj šteti.",
          },
          {
            label: "Stvarna prava i susedski odnosi",
            desc: "Postupci utvrđivanja prava svojine, zaštite od uznemiravanja svojine, državinski sporovi, kao i ustanovljenje i zaštita službenosti.",
          },
          {
            label: "Vanparnični postupci",
            desc: "Zastupanje u postupcima uređenja međa, deobe zajedničkih stvari, lišenja i vraćanja poslovne sposobnosti, proglašenja nestalog lica za umrlo i dokazivanja smrti.",
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
    slug: "nekretnine-i-gradjevinarstvo",
    no: "10",
    title: "Nekretnine i građevinarstvo",
    summary:
      "Pravna podrška u svim segmentima vezanim za nepokretnosti i građevinarstvo, od procene do realizacije projekata.",
    intro: [
      "Ova oblast predstavlja jedan od najvažnijih sektora u razvoju modernog društva i ekonomije. MB Law – Marković, Bogdanović & Partners nudi kompletnu pravnu podršku u svim segmentima vezanim za nepokretnosti i građevinarstvo, od pravne procene, preko pripreme dokumentacije, do realizacije velikih projekata.",
    ],
    sections: [
      {
        heading: "Naše usluge u sektoru nepokretnosti i građevinarstva uključuju",
        items: [
          {
            label: "Pravna procena i due diligence",
            desc: "Detaljna analiza svojinskopravnih, urbanističkih i građevinskih dokumenata za uspešnu realizaciju projekata.",
          },
          {
            label: "Ugovori u sektoru nepokretnosti",
            desc: "Izrada kupoprodajnih ugovora, ugovora o zakupu, ugovora o građenju, ugovora o suinvestiranju, ugovora između investitora i izvođača radova, kao i učestvovanje u pregovorima u vezi sa zaključenjem svih ugovora.",
          },
          {
            label: "Podrška u građevinarstvu",
            desc: "Savetovanje u vezi s dozvolama, urbanističkim planovima i regulativom, kao i rešavanje imovinsko-pravnih pitanja vezanih za zemljište.",
          },
          {
            label: "Javne nabavke i koncesije",
            desc: "Pravna podrška investitorima u okviru javnih nabavki, koncesija i velikih infrastrukturnih projekata.",
          },
          {
            label: "Upravljanje rizicima i pravna zaštita",
            desc: "Kreiranje strategija za minimizaciju pravnih rizika i zaštitu investicija.",
          },
          {
            label: "Zakup i upravljanje nepokretnostima",
            desc: "Izrada ugovora o zakupu poslovnog i stambenog prostora, savetovanje u vezi s upravljanjem zgradom i odnosima u stambenim zajednicama.",
          },
          {
            label: "Eksproprijacija i restitucija",
            desc: "Zastupanje u postupcima eksproprijacije i utvrđivanja naknade, kao i u postupcima vraćanja oduzete imovine i obeštećenja.",
          },
          {
            label: "Poljoprivredno zemljište",
            desc: "Pravna analiza i postupci u vezi s prometom i zakupom poljoprivrednog zemljišta, kao i s pravom preče kupovine.",
          },
        ],
      },
    ],
    closing:
      "Naša ekspertiza omogućava klijentima da sigurno i efikasno realizuju velike projekte u sektoru nepokretnosti i građevinarstva, uz potpunu pravnu sigurnost i usklađenost sa svim relevantnim propisima.",
  },
  {
    slug: "naplata-potrazivanja-i-izvrsenje",
    no: "11",
    title: "Naplata potraživanja i izvršni postupak",
    summary:
      "Zastupanje poverilaca u naplati potraživanja i dužnika u zaštiti od neosnovanog izvršenja.",
    intro: [
      "Naplata potraživanja je oblast u kojoj ishod u velikoj meri zavisi od brzine reakcije i pravilnog izbora sredstava. MB Law – Marković, Bogdanović & Partners zastupa poverioce u naplati, ali i dužnike u zaštiti od nezakonitog ili neosnovanog izvršenja.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Vansudska naplata",
            desc: "Analiza dokumentacije, opomene pred utuženje i pregovaranje sporazuma o otplati i reprogramu duga.",
          },
          {
            label: "Postupci pred sudom",
            desc: "Vođenje postupaka po predlogu za izvršenje na osnovu izvršne i verodostojne isprave, kao i parničnih postupaka radi utvrđivanja potraživanja.",
          },
          {
            label: "Sprovođenje izvršenja",
            desc: "Predlaganje i praćenje sredstava izvršenja - na novčanim sredstvima na računu, na zaradi, na nepokretnostima i pokretnim stvarima - uz koordinaciju s javnim izvršiteljima.",
          },
          {
            label: "Obezbeđenje potraživanja",
            desc: "Predlozi za određivanje privremenih mera i mera obezbeđenja radi sprečavanja umanjenja imovine dužnika tokom postupka.",
          },
          {
            label: "Zaštita dužnika",
            desc: "Izrada prigovora i žalbi u izvršnom postupku, zahteva za odlaganje izvršenja i postupanje u slučaju blokade računa ili zastarelog potraživanja.",
          },
          {
            label: "Priznanje i izvršenje stranih odluka",
            desc: "Vođenje postupaka priznanja i izvršenja stranih sudskih i arbitražnih odluka pred domaćim sudovima.",
          },
          {
            label: "Naplata u stečaju i likvidaciji",
            desc: "Prijava potraživanja i zastupanje poverilaca kada nad dužnikom bude otvoren stečaj ili pokrenuta likvidacija.",
          },
        ],
      },
    ],
    closing:
      "Naš pristup polazi od procene stvarne naplativosti pre pokretanja postupka, kako bi klijent unapred znao šta može da očekuje i koje su realne mogućnosti naplate.",
  },
  {
    slug: "naknada-stete",
    no: "12",
    title: "Naknada štete",
    summary:
      "Zastupanje oštećenih lica i lica prema kojima je zahtev za naknadu postavljen, uključujući sporove s osiguravačima.",
    intro: [
      "MB Law – Marković, Bogdanović & Partners zastupa oštećena lica u postupcima naknade materijalne i nematerijalne štete, kao i lica i privredne subjekte prema kojima je zahtev za naknadu postavljen. Posebno mesto u praksi kancelarije zauzimaju sporovi s društvima za osiguranje.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Šteta iz saobraćajnih nezgoda",
            desc: "Pravna podrška od prikupljanja dokumentacije i prijave štete, preko vansudskog postupka pred osiguravačem, do parničnog postupka.",
          },
          {
            label: "Sporovi s društvima za osiguranje",
            desc: "Zastupanje u slučajevima odbijanja isplate, delimične isplate ili neopravdano niske ponude osiguravača.",
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
            desc: "Priprema i praćenje medicinskih, saobraćajnih i ekonomskih veštačenja, kao ključnog dokaznog sredstva u ovim postupcima.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je da oštećeno lice ne pristane na manje od onoga na šta ima pravo, a da lice od koga se naknada zahteva ne odgovara u obimu većem od zakonom određenog.",
  },
  {
    slug: "nasledno-pravo",
    no: "13",
    title: "Nasledno pravo",
    summary: "Ostavinski postupci, testamenti i sporovi o nasleđivanju, uz diskreciju i pažnju porodičnim odnosima.",
    intro: [
      "Nasledni odnosi po pravilu nastaju u okolnostima u kojima su porodični odnosi već osetljivi. MB Law – Marković, Bogdanović & Partners ovim postupcima pristupa s diskrecijom i s ciljem da se pravno stanje uredi trajno i bez naknadnih sporova.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Ostavinski postupak",
            desc: "Zastupanje naslednika pred sudom i javnim beležnikom, od pokretanja postupka do pravnosnažnog rešenja o nasleđivanju.",
          },
          {
            label: "Izrada testamenta",
            desc: "Sastavljanje svih zakonom predviđenih formi testamenta, uz savetovanje o pravnim posledicama pojedinih raspolaganja.",
          },
          {
            label: "Naslednopravni ugovori",
            desc: "Izrada ugovora o doživotnom izdržavanju, ugovora o ustupanju i raspodeli imovine za života i ugovora o poklonu.",
          },
          {
            label: "Nužni deo",
            desc: "Zastupanje u postupcima zaštite nužnog dela i smanjenja raspolaganja kojima je nužni deo povređen.",
          },
          {
            label: "Sporovi o nasleđivanju",
            desc: "Postupci utvrđivanja prava na nasleđe, poništaja testamenta, utvrđivanja nedostojnosti za nasleđivanje i odlučivanja o naslednoj izjavi.",
          },
          {
            label: "Deoba nasleđene imovine",
            desc: "Vođenje postupaka fizičke i civilne deobe, kao i sporazumne deobe nasledničke zajednice.",
          },
          {
            label: "Nasleđivanje s inostranim elementom",
            desc: "Postupanje kada se ostavina ili naslednici nalaze u inostranstvu, uključujući pitanja merodavnog prava i priznanja stranih odluka.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je da nasledni postupak bude okončan tako da imovinski odnosi u porodici budu jasno i konačno uređeni.",
  },
  {
    slug: "ozakonjenje-i-upis-nepokretnosti",
    no: "14",
    title: "Ozakonjenje i upis nepokretnosti",
    summary:
      "Postupci ozakonjenja, upisa i ispravke podataka u katastru nepokretnosti.",
    intro: [
      "Neupisana ili neozakonjena nepokretnost pravno postoji u ograničenom obimu - ne može se u punom obimu prometovati, opterećivati ni koristiti kao sredstvo obezbeđenja. MB Law – Marković, Bogdanović & Partners vodi postupke ozakonjenja i upisa od prikupljanja dokumentacije do konačnog rešenja.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Postupak ozakonjenja",
            desc: "Vođenje postupka pred nadležnim organom, priprema dokumentacije i koordinacija s geodetskim i projektantskim stručnjacima.",
          },
          {
            label: "Upis prava u katastar",
            desc: "Podnošenje zahteva za upis prava svojine i drugih stvarnih prava, kao i postupanje po žalbama na rešenja Službe za katastar nepokretnosti.",
          },
          {
            label: "Ispravka podataka i uknjižba",
            desc: "Postupci ispravke grešaka u katastru, upisa objekata i posebnih delova objekta.",
          },
          {
            label: "Etažiranje",
            desc: "Pravna podrška u postupku deobe objekta na posebne delove i upisa etažne svojine.",
          },
          {
            label: "Priključci i infrastruktura",
            desc: "Postupanje u vezi s priključcima na komunalnu infrastrukturu i pribavljanjem potrebnih odobrenja.",
          },
          {
            label: "Pravni status građevinskog zemljišta",
            desc: "Postupci konverzije prava korišćenja u pravo svojine i regulisanja odnosa na zemljištu ispod i oko objekta.",
          },
          {
            label: "Odnosi na neupisanim objektima",
            desc: "Uređivanje pravnog statusa objekata izgrađenih bez odobrenja, uključujući sporove između srodnika, suinvestitora i sunaslednika.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je da nepokretnost dovedemo u stanje u kome je pravno sigurna - upisana, prometljiva i podobna za opterećenje.",
  },
  {
    slug: "porodicno-pravo",
    no: "15",
    title: "Porodično pravo",
    summary:
      "Razvod braka, starateljstvo, imovinski odnosi i zaštita od nasilja u porodici.",
    intro: [
      "U oblasti porodičnog prava, MB Law – Marković, Bogdanović & Partners pruža stručnu pravnu pomoć u najosetljivijim i najkompleksnijim slučajevima, kao što su razvod braka, starateljstvo, prava roditelja i dece i imovinski odnosi unutar porodice. S velikom pažnjom, posvećenošću i diskrecijom, zastupamo interese klijenata i nastojimo da se postignu najcelishodnija rešenja.",
    ],
    sections: [
      {
        heading: "Naše usluge uključuju",
        items: [
          {
            label: "Razvod braka",
            desc: "Podrška i zastupanje u postupcima razvoda braka, s posebnim naglaskom na zaštitu interesa klijenata i interesa dece. Brak se u našem zakonodavstvu može razvesti zaključenjem sporazuma pred sudom ili podnošenjem tužbe nadležnom sudu. U oba slučaja neophodno je doneti prave odluke u pravo vreme, kako bi ovi postupci prošli uz što manje neprijatnosti.",
          },
          {
            label: "Zaštita od nasilja u porodici",
            desc: "Posvećeni smo zaštiti vaših prava i sigurnosti, pružajući podršku i zastupanje u slučajevima nasilja u porodici, te se zalažemo za obezbeđivanje odgovarajućih mera zaštite. Takođe, vaninstitucionalnim delovanjem i pre svega edukacijom ljudi, držanjem predavanja i čestim gostovanjima na televizijama s nacionalnom frekvencijom trudimo se da promenimo svest učinioca i na taj način preventivno delujemo.",
          },
          {
            label: "Starateljstvo i prava dece",
            desc: "Zastupanje u sporovima oko starateljstva, prava i obaveza roditelja, uz fokus na zaštitu interesa deteta.",
          },
          {
            label: "Podela bračne tekovine",
            desc: "Pravne strategije za pravičnu podelu bračne tekovine, uz zaštitu prava svih članova porodice.",
          },
          {
            label: "Zakonsko izdržavanje",
            desc: "Zastupanje u postupcima utvrđivanja, povećanja, smanjenja i prinudne naplate izdržavanja, kako izdržavanja deteta tako i izdržavanja supružnika.",
          },
          {
            label: "Utvrđivanje i osporavanje očinstva i materinstva",
            desc: "Vođenje postupaka utvrđivanja porodičnog statusa, uz koordinaciju potrebnih veštačenja.",
          },
          {
            label: "Vanbračna zajednica",
            desc: "Uređivanje imovinskih odnosa u vanbračnoj zajednici i postupci utvrđivanja njenog postojanja i trajanja, kao i prava koja iz nje proizlaze.",
          },
          {
            label: "Bračni i predbračni ugovori",
            desc: "Izrada ugovora o imovinskim odnosima supružnika i budućih supružnika.",
          },
          {
            label: "Odnosi s inostranim elementom",
            desc: "Postupci u kojima jedna strana ili dete žive u inostranstvu, uključujući pitanja nadležnosti, priznanja stranih odluka i međunarodne otmice dece.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je da klijentima omogućimo pravnu sigurnost, mir i stabilnost u najosetljivijim porodičnim situacijama, vodeći računa o najboljem interesu članova porodice.",
  },
  {
    slug: "upravni-postupci-i-sporovi",
    no: "16",
    title: "Upravni postupci i upravni sporovi",
    summary:
      "Zastupanje pred organima uprave i Upravnim sudom u odnosima građana i pravnih lica s državom.",
    intro: [
      "Upravni postupci i upravni sporovi predstavljaju posebnu granu prava koja se odnosi na odnose između građana ili pravnih lica i državnih organa. Ova oblast je od izuzetnog značaja jer se u njoj odlučuje o pravima, obavezama i pravnim interesima stranaka u postupcima pred organima javne vlasti.",
      "Advokatska kancelarija MB Law – Marković, Bogdanović & Partners pruža punu pravnu podršku klijentima tokom celog procesa - od pokretanja i vođenja upravnog postupka, preko zastupanja pred nadležnim organima, pa sve do vođenja upravnog spora pred Upravnim sudom. Poseban naglasak stavlja se na blagovremeno i pravilno korišćenje svih pravnih sredstava, kako bi se klijentima obezbedila najefikasnija zaštita njihovih prava i interesa.",
      "Naš tim advokata poseduje značajno iskustvo u različitim vrstama upravnih postupaka, uključujući pitanja iz oblasti građevinskog prava, imovinsko-pravnih odnosa, poreskih i carinskih postupaka, prava stranaca, socijalnog i penzijskog osiguranja, kao i brojnih drugih specifičnih upravnih oblasti.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Vođenje upravnog postupka",
            desc: "Pokretanje postupka, priprema zahteva i dokumentacije i zastupanje pred organima uprave u prvom stepenu.",
          },
          {
            label: "Pravna sredstva",
            desc: "Izrada žalbi i prigovora, predloga za ponavljanje postupka, kao i zahteva za ispravku, izmenu i poništaj rešenja.",
          },
          {
            label: "Upravni spor",
            desc: "Sastavljanje tužbe i zastupanje pred Upravnim sudom, uključujući predlog za odlaganje izvršenja rešenja do okončanja spora.",
          },
          {
            label: "Ćutanje uprave",
            desc: "Postupanje u slučajevima kada organ ne odluči u zakonskom roku, uključujući podnošenje tužbe zbog nedonošenja rešenja.",
          },
          {
            label: "Penzijsko i socijalno osiguranje",
            desc: "Postupci ostvarivanja prava na starosnu, invalidsku i porodičnu penziju, utvrđivanja penzijskog staža i vođenje sporova s Republičkim fondom za penzijsko i invalidsko osiguranje.",
          },
          {
            label: "Inspekcijski nadzor",
            desc: "Zastupanje tokom inspekcijskog nadzora i u postupcima po nalozima i merama inspekcijskih organa.",
          },
          {
            label: "Registri i evidencije",
            desc: "Postupci upisa, izmene i brisanja podataka u javnim registrima i evidencijama.",
          },
        ],
      },
    ],
    closing:
      "Cilj kancelarije je da klijentima omogući da složene administrativne procese prođu uz što manje opterećenja, uz profesionalnu i stratešku pravnu podršku u svakoj fazi postupka.",
  },
  {
    slug: "zastita-podataka-o-licnosti",
    no: "17",
    title: "Zaštita podataka o ličnosti",
    summary:
      "Usklađivanje poslovanja sa Zakonom o zaštiti podataka o ličnosti i GDPR-om.",
    intro: [
      "Obrada podataka o ličnosti danas je sastavni deo gotovo svakog poslovnog procesa, a obaveze rukovaoca i obrađivača široke su i praćene visokim kaznama. MB Law – Marković, Bogdanović & Partners pruža podršku u usklađivanju poslovanja sa Zakonom o zaštiti podataka o ličnosti i Opštom uredbom o zaštiti podataka (GDPR).",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
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
            desc: "Izrada ugovora o obradi podataka i sporazuma o zajedničkoj obradi, kao i klauzula o poverljivosti.",
          },
          {
            label: "Prenos podataka u inostranstvo",
            desc: "Savetovanje o osnovima prenosa, standardnim ugovornim klauzulama i proceni uticaja prenosa.",
          },
          {
            label: "Procena uticaja na zaštitu podataka",
            desc: "Sprovođenje procene uticaja za obrade visokog rizika i savetovanje o merama ublažavanja rizika.",
          },
          {
            label: "Povreda podataka o ličnosti",
            desc: "Postupanje u slučaju incidenta, uključujući obaveštavanje Poverenika i lica na koja se podaci odnose u zakonskim rokovima.",
          },
          {
            label: "Zastupanje pred Poverenikom",
            desc: "Zastupanje u postupcima nadzora i po pritužbama lica na koja se podaci odnose.",
          },
          {
            label: "Lice za zaštitu podataka",
            desc: "Savetovanje o obavezi određivanja i podrška u radu lica za zaštitu podataka o ličnosti.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je usklađenost primenjiva u praksi - dokumentacija koja odgovara stvarnim procesima klijenta, a ne formalni set akata bez upotrebne vrednosti.",
  },
  {
    slug: "medicinsko-pravo",
    no: "18",
    title: "Medicinsko pravo",
    summary:
      "Zastupanje pacijenata, zdravstvenih ustanova i zdravstvenih radnika u postupcima vezanim za pruženu zdravstvenu uslugu.",
    intro: [
      "Postupci u kojima se ispituje pružena zdravstvena usluga zahtevaju istovremeno pravno i medicinsko razumevanje predmeta. MB Law – Marković, Bogdanović & Partners zastupa pacijente u ostvarivanju njihovih prava, kao i zdravstvene ustanove i zdravstvene radnike u postupcima koji se protiv njih vode.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Prava pacijenata",
            desc: "Savetovanje i zastupanje u vezi s pravom na obaveštenost, pristankom na medicinsku meru, pristupom medicinskoj dokumentaciji i zaštitom privatnosti pacijenta.",
          },
          {
            label: "Naknada štete zbog pružene zdravstvene usluge",
            desc: "Vođenje postupaka naknade štete, uključujući pripremu i koordinaciju medicinskih veštačenja.",
          },
          {
            label: "Postupci pred zaštitnikom prava pacijenata",
            desc: "Podnošenje prigovora i zastupanje po prigovorima, kao i postupanje pred nadzornim organima.",
          },
          {
            label: "Zastupanje zdravstvenih ustanova",
            desc: "Odbrana ustanova i zdravstvenih radnika u parničnim, prekršajnim i krivičnim postupcima, kao i u postupcima profesionalne odgovornosti.",
          },
          {
            label: "Ugovorni odnosi u zdravstvu",
            desc: "Izrada ugovora o pružanju zdravstvenih usluga, ugovora o kliničkim ispitivanjima i ugovora s dobavljačima.",
          },
          {
            label: "Regulatorna pitanja",
            desc: "Savetovanje u vezi s propisima o lekovima i medicinskim sredstvima, uslovima za obavljanje zdravstvene delatnosti i oglašavanjem.",
          },
          {
            label: "Osiguranje od profesionalne odgovornosti",
            desc: "Savetovanje o obimu pokrića i zastupanje u odnosu s osiguravačem.",
          },
        ],
      },
    ],
    closing:
      "Naš pristup ovim predmetima je uzdržan i zasnovan na dokazima - medicinska dokumentacija i veštačenje temelj su svakog zahteva, bez obzira na to koju stranu zastupamo.",
  },
  {
    slug: "resavanje-sporova-i-arbitraza",
    no: "19",
    title: "Rešavanje sporova i arbitraža",
    summary:
      "Procena i zastupanje u sporovima, od pregovora i medijacije do domaće i međunarodne arbitraže.",
    intro: [
      "Ne završava se svaki spor pred sudom, i ne treba svaki spor tako ni da počne. MB Law – Marković, Bogdanović & Partners procenjuje koji je način rešavanja spora u konkretnom slučaju najefikasniji i zastupa klijente u svim vrstama postupaka.",
    ],
    sections: [
      {
        heading: "Usluge uključuju",
        items: [
          {
            label: "Procena spora i strategija",
            desc: "Analiza pravnog i činjeničnog stanja, procena rizika i troškova i preporuka o načinu vođenja spora.",
          },
          {
            label: "Pregovori i poravnanje",
            desc: "Vođenje pregovora i izrada sporazuma o vansudskom rešenju spora, kao i sudskih poravnanja.",
          },
          {
            label: "Medijacija",
            desc: "Zastupanje u postupku medijacije i priprema sporazuma o rešavanju spora putem medijacije.",
          },
          {
            label: "Arbitraža",
            desc: "Zastupanje u domaćim i međunarodnim arbitražnim postupcima, uključujući postupke pred Stalnom arbitražom pri Privrednoj komori Srbije.",
          },
          {
            label: "Klauzule o rešavanju sporova",
            desc: "Izrada i analiza arbitražnih klauzula, kao i ugovaranje merodavnog prava i mesta arbitraže.",
          },
          {
            label: "Sporovi s inostranim elementom",
            desc: "Postupci u kojima se javljaju pitanja nadležnosti, merodavnog prava i dostavljanja u inostranstvo.",
          },
          {
            label: "Priznanje i izvršenje arbitražnih odluka",
            desc: "Vođenje postupaka priznanja i izvršenja stranih arbitražnih odluka.",
          },
        ],
      },
    ],
    closing:
      "Naš cilj je da klijent u spor ulazi s jasnom procenom ishoda, troška i vremena, i da svaki postupak vodimo do najcelishodnijeg rešenja.",
  },
  {
    slug: "posebne-oblasti-ekspertize",
    no: "20",
    title: "Posebne oblasti ekspertize",
    summary:
      "Pravo životne sredine, IT i intelektualna svojina, i podrška startapima i inovatorima.",
    intro: [
      "Advokatska kancelarija MB Law – Marković, Bogdanović & Partners posvećuje posebnu pažnju modernim i dinamičnim oblastima prava, koje prate razvoj tržišta, tehnologije i društvenih potreba. Razumevanje specifičnosti ovih oblasti omogućava našoj advokatskoj kancelariji da pruži inovativna i praktična pravna rešenja, prilagođena izazovima današnjeg poslovnog okruženja.",
    ],
    sections: [
      {
        heading: "Posebne oblasti stručnosti obuhvataju",
        items: [
          {
            label: "Pravo životne sredine (Environmental Law)",
            desc: "Savetovanje i zastupanje u vezi s ekološkim propisima i regulativama, podrška pravnim licima u postizanju usklađenosti sa standardima zaštite životne sredine i održivog poslovanja.",
          },
          {
            label: "Informacione tehnologije i intelektualna svojina (IT & IP Law)",
            desc: "Pravna zaštita softverskih rešenja, brendova, patenata i autorskih prava, kao i savetovanje u vezi s digitalnim poslovanjem, e-trgovinom, zaštitom podataka i IT ugovorima.",
          },
          {
            label: "Inovacije i moderne industrije",
            desc: "Pratimo razvoj novih sektora privrede i tehnologije, pružajući pravnu podršku startap kompanijama, inovatorima i investitorima u svim fazama razvoja njihovih projekata.",
          },
        ],
      },
    ],
    closing:
      "Kombinujući pravno znanje s razumevanjem savremenih tržišnih trendova, MB Law – Marković, Bogdanović & Partners klijentima omogućava sigurnost i stabilnost u poslovanju koje se razvija i transformiše pod uticajem novih tehnologija i globalnih izazova.",
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

const areaTags: Record<string, string> = {
  "javne-nabavke-koncesije-i-jpp": "Javne nabavke i JPP",
  "prava-stranaca": "Prava stranaca",
  "naplata-potrazivanja-i-izvrsenje": "Naplata i izvršenje",
  "ozakonjenje-i-upis-nepokretnosti": "Ozakonjenje i upis",
  "upravni-postupci-i-sporovi": "Upravni postupci",
  "zastita-podataka-o-licnosti": "Zaštita podataka",
  "posebne-oblasti-ekspertize": "IT, IP i inovacije",
  "poresko-i-carinsko-pravo": "Poresko i carinsko",
  "bankarsko-i-finansijsko-pravo": "Bankarsko i finansijsko",
  "resavanje-sporova-i-arbitraza": "Sporovi i arbitraža",
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
  summary: string;
  navLine: string;
  areaSlugs: string[];
};

export const practiceMenuGroups: PracticeMenuGroup[] = [
  {
    slug: "poslovanje-i-kompanije",
    title: "Poslovanje i kompanije",
    navLine: "Privreda, M&A, porez, nabavke i IT",
    summary:
      "Privredno i korporativno pravo, ugovori, M&A, radno pravo za poslodavce, poresko i carinsko pravo, bankarsko pravo, javne nabavke, zaštita podataka i IT/IP",
    areaSlugs: [
      "privredno-pravo",
      "radno-pravo",
      "poresko-i-carinsko-pravo",
      "bankarsko-i-finansijsko-pravo",
      "javne-nabavke-koncesije-i-jpp",
      "zastita-podataka-o-licnosti",
      "posebne-oblasti-ekspertize",
    ],
  },
  {
    slug: "sporovi-naplata-i-restrukturiranje",
    title: "Sporovi, naplata i restrukturiranje",
    navLine: "Sporovi, izvršenje i stečaj",
    summary:
      "Rešavanje sporova, arbitraža, naplata potraživanja, izvršenje, stečaj i restrukturiranje, upravni postupci i sporovi",
    areaSlugs: [
      "resavanje-sporova-i-arbitraza",
      "naplata-potrazivanja-i-izvrsenje",
      "stecaj-i-restrukturiranje",
      "upravni-postupci-i-sporovi",
    ],
  },
  {
    slug: "krivicno-i-prekrsajno-pravo",
    title: "Krivično i prekršajno pravo",
    navLine: "Odbrana, prekršaji i privredni kriminal",
    summary:
      "Krivična odbrana, prekršaji, privredni prestupi, privredni i finansijski kriminal, ekstradicija i međunarodna pravna pomoć",
    areaSlugs: ["kazneno-pravo"],
  },
  {
    slug: "strani-klijenti-i-ulaganja",
    title: "Strani klijenti i ulaganja",
    navLine: "Ulaganja, boravak i statusna pitanja",
    summary:
      "Osnivanje firmi i ulaganja u Srbiji, boravak i rad stranaca, državljanstvo i statusna pitanja",
    areaSlugs: ["prava-stranaca"],
  },
  {
    slug: "nekretnine",
    title: "Nekretnine i građevinarstvo",
    navLine: "Kupoprodaja, projekti i katastar",
    summary:
      "Kupoprodaja i pravne provere, zakup, građevinski projekti, ugovori, katastar i upis, imovinski i susedski odnosi",
    areaSlugs: [
      "nekretnine-i-gradjevinarstvo",
      "ozakonjenje-i-upis-nepokretnosti",
      "gradjansko-pravo",
    ],
  },
  {
    slug: "privatni-klijenti",
    title: "Privatni klijenti",
    navLine: "Porodica, nasledstvo i naknada štete",
    summary:
      "Porodično, nasledno, naknada štete, medicinsko pravo i zaštita prava zaposlenih",
    areaSlugs: [
      "porodicno-pravo",
      "nasledno-pravo",
      "naknada-stete",
      "medicinsko-pravo",
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
