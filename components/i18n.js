// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "header.home": "Home",
      "header.bonuses": "Bonuses ▼",
      "header.casinos": "Casinos ▼",
      "header.spins": "Free Spins",
      "header.guides": "Guides",
      "header.about": "About Us",
      "header.contacts": "Contacts",

      "header.homebonuses": "Bonuses",
      "header.homecasinos": "Casinos",
      "header.homespins": "Free Spins",
      "header.homeguides": "Gambling Guides",

      "header.nodeposit": "No Deposit Bonuses",
      "header.exclusive": "Exclusive Bonuses",
      "header.deposit": "Deposit Bonuses",
      "header.welcome": "Welcome Bonuses",
      "header.nowager": "No Wagering Bonuses",
      "header.cryptocasinos": "Crypto Casinos",
      "header.fastwithdrawalcasinos": "Fast Withdrawal Casinos",
      "header.livecasinos": "Live Casinos",
      "header.newestcasinos": "Newest Casinos",
      "header.certifiedcasinos": "Top Certified Casinos",

      "searchBrands.placeholder": "Search brands...",

      "home.title": "Online Casino Reviews & Gambling Guide's",
      "home.description":
        "Authentic player reviews, no deposit bonuses, and a wide selection of games with free play.",

      "topBrands.title": "CasinoFrog Best Choices for 2023",
      "newBrands.title": "Latest Casino Additions 2023",

      "reviewBrands.title1": "All meticulously reviewed online casinos",
      "reviewBrands.description1":
        "We thoroughly review all existing online casinos, regardless of their preference",

      "reviewBrands.question1.title":
        "Currently in active pursuit of fresh casino websites",
      "reviewBrands.question1.excerpt":
        "Our team is constantly seeking recently",
      "reviewBrands.question1.link": "launched casino websites for evaluation",
      "reviewBrands.question1.excerpt2":
        ", aiming to provide utmost value to our visitors.",

      "reviewBrands.question2.title":
        "The most precise details regarding each casino",
      "reviewBrands.question2.excerpt":
        "We meticulously assess each casino and gather extensive information to ensure our visitors are well-informed about what to anticipate before playing",

      "reviewBrands.question3.title":
        "Promoting responsible approach to gambling",
      "reviewBrands.question3.excerpt":
        "Every casino undergoes evaluation by an impartial team, adhering to a comprehensive, data-driven, ",
      "reviewBrands.question3.link": "and unbiased review approach",

      "reviewBrands.button1": "Discover top-rated bonuses",
      "reviewBrands.button2": "Discover top-rated casinos",

      "reviewBrands.title2": "We are passionate about no deposit bonuses",
      "reviewBrands.description2":
        "Our relentless efforts go into crafting the ultimate database of no deposit bonuses.",

      "reviewBrands.question4.title":
        "Compiling promotional deals from every online casino out there",
      "reviewBrands.question4.excerpt":
        "In our quest to provide the widest range of choices, we continually seek ",
      "reviewBrands.question4.link": "fresh no deposit bonuses",
      "reviewBrands.question4.excerpt2":
        " to expand our database, sourced from all existing casino websites.",

      "reviewBrands.question5.title":
        "Creating unique and exclusive bonuses tailored exclusively for our valued visitors",
      "reviewBrands.question5.excerpt":
        "In our quest to provide the widest range of choices, we continually seek fresh ",
      "reviewBrands.question5.link": "exclusive bonuses",
      "reviewBrands.question5.excerpt2":
        " features deals crafted solely for our esteemed visitors.",

      "reviewBrands.question6.title":
        "Comprehensive and precise details regarding every bonus",
      "reviewBrands.question6.excerpt":
        "In our bonus database, you'll find crucial information and terms associated with each bonus, along with clear explanations and illustrative examples.",

      "filteredHome.title": "Catalog of all 2023 Online Casino Bonuses Offered",
      "filteredHome.description":
        "Seeking online casino bonuses and promotions? Explore our current database featuring numerous casino bonus offers for your selection.",

      "navigateBrands.all": "All Brands",
      "navigateBrands.recommend": "Recommended Brands",
      "navigateBrands.newly": "Newly Brands",
      "navigateBrands.crypto": "Crypto Brands",
      "navigateBrands.sports": "Top Sports Brands",

      "allBrands.withLimits": "Withdrawal Limits:",
      "allBrands.advantages": "Advantages",
      "allBrands.depMethods": "Deposit Methods",
      "allBrands.withMethods": "Withdrawal Methods",
      "allBrands.restricted": "Restricted Countries",
      "allBrands.howGet": "How to get bonus?",
      "allBrands.activate": "Activate bonus in your casino account",

      "guideSlotsHome.title1": "Online Gambling Guides",
      "guideSlotsHome.title2": "Establish a gambling budge",
      "guideSlotsHome.excerpt1":
        "Prior to commencing any gambling session, it is imperative to establish a budget and adhere to it strictly. Ensure that the allocated amount is within your financial means, as it may not be your fortunate day and could be lost.",
      "guideSlotsHome.title3": "Avoid pursuing your losses at all costs",
      "guideSlotsHome.excerpt2":
        "The unpredictable nature of games of chance necessitates caution. If your budget is lost, refrain from chasing your losses, as this behavior may result in further financial losses and, ultimately, lead to the development of a gambling addiction.",
      "guideSlotsHome.title3":
        "Pay close attention to your emotions while engaging in gambling activities",
      "guideSlotsHome.excerpt3":
        "Enjoy the entertainment of gambling while ensuring it remains enjoyable by being mindful of your emotions during play. If you detect feelings of heightened anger, frustration, or difficulty making rational decisions, it is essential to cease playing.",

      "previewBonuses.title": "Promoting a responsible approach to gambling",
      "previewBonuses.excerpt":
        " Looking for exciting online casino bonuses and promotions? Look no further! Our extensive and regularly updated database offers a vast selection of enticing casino bonus offers that cater to all players' preferences. Whether you're into free spins, deposit bonuses, or cashback rewards, we've got you covered with the best deals available in the gambling world. Don't miss out on these exclusive offers – start exploring now and boost your gaming experience with lucrative bonuses!",

      "nodepositbonuses.title": "Irresistible in 2023: No Deposit Casino Bonuses and Unique Bonus Codes",
      "nodepositbonuses.excerpt": "Fresh in 2023: A continuously refreshed catalog of no deposit bonus deals for virtual casinos. Obtain exclusive promo codes and enjoy complimentary spins rewards.",

      "exclusivebonuses.title": "Comprehensive Compilation of Online Casino Bonuses Accessible in 2023",
      "exclusivebonuses.excerpt": "Searching for casino bonuses and promos on the web? Explore our current, well-maintained repository featuring a plethora of casino bonus propositions for your consideration.",

      "depositbonuses.title": "Finest Casino Welcome Bonuses on Your Initial 2023 Deposit",
      "depositbonuses.excerpt": "Select from a variety of top-tier introductory casino rewards and receive additional bonus funds incorporated into your initial payment. Exclusive registration incentive deals designed for fresh participants.",

      "welcomebonuses.title": "Welcome Bonuses 2023",
      "welcomebonuses.excerpt": "If you're in search of a quality casino experience coupled with enticing bonuses, we have the perfect solution tailored for you! The welcoming bonus stands as a gesture from casinos to their fresh players, usually presented as free spins or cashback rewards. Explore our compilation of introductory bonuses from renowned online casinos, ensuring an ideal match for your preferences.",

      "nowagerbonuses.title": "No Wagering Casino Bonuses 2023",
      "nowagerbonuses.excerpt": "Searching for no wagering bonuses? Explore our exclusive compilation of wager-free bonuses, available only at Casino.",


      "cryptocasinos.title": "Top Cryptocurrency Betting Platforms & Bitcoin Casino Sites in 2023",
      "cryptocasinos.excerpt": "  Explore our compilation of premier online casinos for Bitcoin along with betting platforms that embrace BTC and alternative cryptocurrencies as viable payment methods. Delve into impartial assessments, and pinpoint the ultimate Bitcoin casino destination tailored to your preferences.",

      "fastcasinos.title": "2023's Swiftest Payout Casino and Betting Platforms",
      "fastcasinos.excerpt": "The most advantageous aspect of rapid payout casinos is their swift and unwavering dispensation of your earnings. We've meticulously crafted this inventory to aid you in locating the supreme casinos offering expedited withdrawal processes, particularly when your earnings surge swiftly and substantially. Simply initiate a withdrawal and envisage the exhilarating possibilities for allocating those funds!",

      "livecasinos.title": "Premier Live Dealer Casinos of the Year 2023",
      "livecasinos.excerpt": "Explore this compilation of top-notch live dealer casinos for an immersive gaming experience and discover prime online casinos hosting captivating live casino games catered to your preferences.",

      "newestasinos.title": "Fresh Entrants to the Online Casino Scene 2023",
      "newestasinos.excerpt": "On the Hunt for Fresh 2023 Online Casino Platforms? Discover Recently Launched Casino Sites Offering Outstanding Incentives and Cutting-Edge Attributes. Constantly Refreshed for Your Exploration.",

      "certifiedcasinos.title": "Premier Accredited Casinos in 2023",
      "certifiedcasinos.excerpt": "Gaming constitutes a substantial sector, and with the assistance of authorized internet-based casinos, you can relish your preferred pastime with serenity, assured of its oversight by official governmental bodies. Cutting-edge security protocols ensure the confidentiality of all personal data!",





      "filteredBonuses.title": "Catalog of all 2023 Online Casino Bonuses Offered",
      "filteredBonuses.excerpt": " Seeking online casino bonuses and promotions? Explore our current database featuring numerous casino bonus offers for your selection.",

      "filteredCasinos.title": "Comprehensive Compilation of 2023 Online Casino Selection",
      "filteredCasinos.excerpt": "In Search of an Online Casino? Navigate through our up-to-date repository housing a myriad of casinos awaiting your consideration.",





      "GuideSlotsPage.title": "Latest Casino Guides",

      "button.view": "View All Guides",
      "button.load": "Load More Brands",
      "button.review": "Read Review",
      "button.play": "Play Now",
    },
  },
  pl: {
    translation: {
      "header.home": "Dom",
      "header.bonuses": "Bonusy ▼",
      "header.casinos": "Kasyna ▼",
      "header.spins": "Darmowe spiny",
      "header.guides": "Przewodniki",
      "header.about": "O nas",
      "header.contacts": "Łączność",

      "header.homebonuses": "Bonusy",
      "header.homecasinos": "Kasyna",
      "header.homespins": "Darmowe spiny",
      "header.homeguides": "Przewodniki",

      "header.nodeposit": "Bonusy bez depozytu",
      "header.exclusive": "Ekskluzywne bonusy",
      "header.deposit": "Bonusy depozytowe",
      "header.welcome": "Bonusy powitalne",
      "header.nowager": "Brak bonusów do zakładów",
      "header.cryptocasinos": "Kasyna kryptograficzne",
      "header.fastwithdrawalcasinos": "Kasyna z szybką wypłatą",
      "header.livecasinos": "Kasyna na żywo",
      "header.newestcasinos": "Najnowsze kasyna",
      "header.certifiedcasinos": "Certyfikowane kasyna",

      "searchBrands.placeholder": "Wyszukaj marki...",

      "home.title": "Recenzje Kasyn Online i Przewodnik Po Hazardzie",
      "home.description":
        "Autentyczne opinie graczy, bonusy bez depozytu oraz szeroki wybór gier z darmową grą.",

      "topBrands.title": "CasinoFrog najlepszy wybór dla 2023",
      "newBrands.title": "Najnowsze dodatki do kasyna 2023",

      "reviewBrands.title1": "Wszystkie skrupulatnie sprawdzone kasyna online",
      "reviewBrands.description1":
        "Dokładnie sprawdzamy wszystkie istniejące kasyna online, niezależnie od ich preferencji",

      "reviewBrands.question1.title":
        "Obecnie aktywnie poszukuje nowych witryn kasyn",
      "reviewBrands.question1.excerpt":
        "Nasz zespół stale poszukuje w ostatnim czasie ",
      "reviewBrands.question1.link":
        "uruchomił strony internetowe kasyn do oceny",
      "reviewBrands.question1.excerpt2":
        ", mając na celu zapewnienie najwyższej wartości dla naszych gości.",

      "reviewBrands.question2.title":
        "Najdokładniejsze szczegóły dotyczące każdego kasyna",
      "reviewBrands.question2.excerpt":
        "Skrupulatnie oceniamy każde kasyno i zbieramy obszerne informacje, aby upewnić się, że nasi goście są dobrze poinformowani o tym, czego mogą się spodziewać przed rozpoczęciem gry.",

      "reviewBrands.question3.title":
        "Promowanie odpowiedzialnego podejścia do hazardu",
      "reviewBrands.question3.excerpt":
        "Każde kasyno przechodzi ocenę przez bezstronny zespół, stosujący się do kompleksowej, opartej na danych, ",
      "reviewBrands.question3.link": "i bezstronne podejście do recenzji",

      "reviewBrands.button1": "Odkryj najwyżej oceniane bonusy",
      "reviewBrands.button2": "Odkryj najwyżej oceniane kasyna",

      "reviewBrands.title2": "Jesteśmy pasjonatami bonusów bez depozytu",
      "reviewBrands.description2":
        "Nasze nieustanne wysiłki zmierzają do stworzenia ostatecznej bazy danych bonusów bez depozytu.",

      "reviewBrands.question4.title":
        "Kompilowanie ofert promocyjnych z każdego kasyna online",
      "reviewBrands.question4.excerpt":
        "W naszym dążeniu do zapewnienia jak najszerszego wyboru, nieustannie poszukujemy ",
      "reviewBrands.question4.link": "świeże bonusy bez depozytu",
      "reviewBrands.question4.excerpt2":
        " aby rozszerzyć naszą bazę danych, pochodzącą ze wszystkich istniejących witryn kasyn.",

      "reviewBrands.question5.title":
        "Tworzenie unikalnych i ekskluzywnych bonusów dostosowanych wyłącznie do naszych cenionych gości",
      "reviewBrands.question5.excerpt":
        "W naszym dążeniu do zapewnienia jak najszerszego wyboru, nieustannie poszukujemy nowości ",
      "reviewBrands.question5.link": "ekskluzywne bonusy",
      "reviewBrands.question5.excerpt2":
        " zawiera oferty przygotowane wyłącznie dla naszych szanownych gości.",

      "reviewBrands.question6.title":
        "Kompleksowe i precyzyjne szczegóły dotyczące każdego bonusu",
      "reviewBrands.question6.excerpt":
        "W naszej bazie danych bonusów znajdziesz kluczowe informacje i terminy związane z każdym bonusem, wraz z jasnymi wyjaśnieniami i ilustrującymi przykładami.",

      "filteredHome.title":
        "Katalog wszystkich oferowanych bonusów w kasynie online w 2023 roku",
      "filteredHome.description":
        "Szukasz bonusów i promocji w kasynie online? Zapoznaj się z naszą aktualną bazą danych zawierającą liczne oferty bonusowe kasyn do wyboru.",

      "navigateBrands.all": "Wszystkie marki",
      "navigateBrands.recommend": "Polecane marki",
      "navigateBrands.newly": "Nowe marki",
      "navigateBrands.crypto": "Marki kryptowalut",
      "navigateBrands.sports": "Najlepsze marki sportowe",

      "allBrands.withLimits": "Limity wypłat:",
      "allBrands.advantages": "Zalety",
      "allBrands.depMethods": "Metody wpłat",
      "allBrands.withMethods": "Metody wypłaty",
      "allBrands.restricted": "Kraje z ograniczeniami",
      "allBrands.howGet": "Jak otrzymać bonus?",
      "allBrands.activate": "Aktywuj bonus na swoim koncie w kasynie",

      "guideSlotsHome.title1": "Przewodniki po grach hazardowych online",
      "guideSlotsHome.title2": "Ustal budżet hazardowy",
      "guideSlotsHome.excerpt1":
        "Przed rozpoczęciem jakiejkolwiek sesji hazardowej konieczne jest ustalenie budżetu i ścisłe przestrzeganie go. Upewnij się, że przydzielona kwota mieści się w twoich możliwościach finansowych, ponieważ może to nie być twój szczęśliwy dzień i możesz go stracić.",
      "guideSlotsHome.title3":
        "Unikaj dochodzenia swoich strat za wszelką cenę",
      "guideSlotsHome.excerpt2":
        "Nieprzewidywalna natura gier losowych wymaga ostrożności. W przypadku utraty budżetu powstrzymaj się od pogoni za stratami, ponieważ takie zachowanie może skutkować dalszymi stratami finansowymi, a ostatecznie doprowadzić do rozwoju uzależnienia od hazardu.",
      "guideSlotsHome.title3":
        "Zwracaj szczególną uwagę na swoje emocje podczas angażowania się w gry hazardowe",
      "guideSlotsHome.excerpt3":
        "Ciesz się rozrywką związaną z hazardem, jednocześnie dbając o to, by była przyjemna, pamiętając o swoich emocjach podczas gry. Jeśli wykryjesz uczucie wzmożonej złości, frustracji lub trudności w podejmowaniu racjonalnych decyzji, konieczne jest zaprzestanie gry.",

      "previewBonuses.title":
        "Promowanie odpowiedzialnego podejścia do hazardu",
      "previewBonuses.excerpt":
        "Szukasz ekscytujących bonusów i promocji w kasynie online? Nie szukaj dalej! Nasza obszerna i regularnie aktualizowana baza danych oferuje szeroki wybór kuszących ofert bonusowych kasyn, które odpowiadają preferencjom wszystkich graczy. Niezależnie od tego, czy interesują Cię darmowe spiny, bonusy od depozytu czy zwroty gotówki, mamy dla Ciebie najlepsze oferty dostępne w świecie hazardu. Nie przegap tych ekskluzywnych ofert – zacznij odkrywać już teraz i zwiększ swoje wrażenia z gry dzięki lukratywnym bonusom!",

        "nodepositbonuses.title": "Nieodparty w 2023: Bonusy kasynowe bez depozytu i unikalne kody bonusowe",
      "nodepositbonuses.excerpt": "Nowość w 2023 roku: Stale odświeżany katalog ofert bonusowych bez depozytu dla wirtualnych kasyn. Zdobądź ekskluzywne kody promocyjne i ciesz się darmowymi spinami.",


      "exclusivebonuses.title": "Kompleksowa kompilacja bonusów kasyn online dostępnych w 2023 roku",
      "exclusivebonuses.excerpt": "Szukasz bonusów i promocji kasynowych w Internecie? Zapoznaj się z naszym obecnym, dobrze utrzymanym repozytorium zawierającym mnóstwo propozycji bonusów kasynowych do rozważenia.",

      "depositbonuses.title": "Najlepsze bonusy powitalne w kasynie przy pierwszej wpłacie w 2023 r",
      "depositbonuses.excerpt": "Wybieraj spośród wielu najlepszych nagród wprowadzających do kasyna i otrzymuj dodatkowe środki bonusowe wliczone w początkową płatność. Ekskluzywne oferty zachęt rejestracyjnych przeznaczone dla nowych uczestników.",

      "welcomebonuses.title": "Bonusy powitalne 2023",
      "welcomebonuses.excerpt": "Jeśli szukasz wysokiej jakości kasyna połączonego z kuszącymi bonusami, mamy dla Ciebie idealne rozwiązanie! Bonus powitalny jest gestem kasyn skierowanym do ich nowych graczy, zwykle przedstawiany jako darmowe spiny lub zwrot gotówki. Zapoznaj się z naszą kompilacją bonusów wprowadzających od renomowanych kasyn online, zapewniając idealne dopasowanie do Twoich preferencji.",

      "nowagerbonuses.title": "Brak bonusów kasynowych 2023",
      "nowagerbonuses.excerpt": "Szukasz bonusów bez zakładów? Zapoznaj się z naszą ekskluzywną kompilacją bonusów bez zakładów, dostępnych tylko w Kasynie.",

      "cryptocasinos.title": "Najlepsze platformy zakładów kryptowalutowych i kasyna Bitcoin w 2023 roku",
      "cryptocasinos.excerpt": "Zapoznaj się z naszą kompilacją najlepszych kasyn online dla Bitcoin wraz z platformami bukmacherskimi, które wykorzystują BTC i alternatywne kryptowaluty jako opłacalne metody płatności. Zagłęb się w bezstronne oceny i wskaż ostateczne miejsce docelowe kasyna Bitcoin dostosowane do Twoich preferencji.",

      "fastcasinos.title": "Kasyno i platformy bukmacherskie z największą wypłatą w 2023 roku",
      "fastcasinos.excerpt": "Najbardziej korzystnym aspektem kasyn z szybkimi wypłatami jest ich szybka i niezachwiana dystrybucja Twoich zarobków. Skrupulatnie opracowaliśmy ten wykaz, aby pomóc Ci zlokalizować najlepsze kasyna oferujące przyspieszone procesy wypłat, szczególnie gdy Twoje zarobki szybko i znacząco rosną. Po prostu zainicjuj wypłatę i wyobraź sobie ekscytujące możliwości alokacji tych środków!",

      "livecasinos.title": "Najlepsze kasyna z krupierami na żywo roku 2023",
      "livecasinos.excerpt": "Zapoznaj się z tą kompilacją najlepszych kasyn z krupierami na żywo, aby uzyskać wciągające wrażenia z gry i odkryj najlepsze kasyna online oferujące wciągające gry kasynowe na żywo dostosowane do Twoich preferencji.",

        "newestasinos.title": "Nowi uczestnicy sceny kasyn online 2023",
      "newestasinos.excerpt": "Polujesz na platformy kasyn online Fresh 2023? Odkryj niedawno uruchomione witryny kasyn oferujące wyjątkowe zachęty i najnowocześniejsze atrybuty. Stale odświeżany do eksploracji.",

      "certifiedcasinos.title": "Najlepsze akredytowane kasyna w 2023 roku",
      "certifiedcasinos.excerpt": "Gry to ważny sektor, a przy pomocy autoryzowanych kasyn internetowych możesz cieszyć się ulubioną rozrywką ze spokojem, mając pewność, że jest ona nadzorowana przez oficjalne organy rządowe. Najnowocześniejsze protokoły bezpieczeństwa zapewniają poufność wszystkich danych osobowych!",




      "filteredBonuses.title": "Katalog wszystkich oferowanych bonusów w kasynie online w 2023 roku",
      "filteredBonuses.excerpt": "Szukasz bonusów i promocji w kasynie online? Zapoznaj się z naszą aktualną bazą danych zawierającą liczne oferty bonusowe kasyn do wyboru.",

      "filteredCasinos.title": "Kompleksowa kompilacja wyboru kasyn online 2023",
      "filteredCasinos.excerpt": "Szukasz kasyna online? Poruszaj się po naszym aktualnym repozytorium zawierającym niezliczone kasyna czekające na Twoją uwagę.",

      "GuideSlotsPage.title": "Najnowsze przewodniki po kasynach",

      "button.view": "Wyświetl wszystkie przewodniki",
      "button.load": "Załaduj więcej marek",
      "button.review": "Recenzję",
      "button.play": "Zagraj teraz",
    },
  },
  // Add translations for other languages here
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
