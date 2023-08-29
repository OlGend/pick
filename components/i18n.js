// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "@/components/posts/en.json"; // Путь к файлу с английскими переводами
import plTranslation from "@/components/posts/pl.json"; // Путь к файлу с польскими переводами

const resources = {
  en: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
        "If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device. Our collection of online gambling guides ensures easy access to all there is to know about slots. While it might seem like slot machines are a matter of mere 'hit and spin', there are tricks and strategies that can enhance your experience. Our guides are designed to empower you with a complete understanding of how slots operate, granting you full control over your gaming sessions.",
      guideslotsguide2:
        "In search of the perfect repository for tips, fun facts, and advice to boost your chances of winning? Look no further as we provide quick access to some of the most relevant slots guides and free slots games hosted on our website.",
      "guideslotsguide.title": "Gambling Guides",
      "guideslotsguide.excerpt":
        "If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device.",

      "header.home": "Home",
      "header.bonuses": "Bonuses ▼",
      "header.casinos": "Casinos ▼",
      "header.payments": "All Payments ▼",
      "header.providers": "Game Providers ▼",
      "header.countries": "Casinos by Country ▼",

      "header.austr": "Australian Casino",
      "header.brazil": "Brazilian Casino",
      "header.canada": "Canadian Casino",
      "header.finnish": "Finnish Casino",
      "header.germany": "Germanian Casino",
      "header.nz": "New Zealandian Casino",
      "header.norw": "Norwegian Casino",
      "header.polish": "Polish Casino",

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
      "guideSlotsHome.excerpt2":
        "The unpredictable nature of games of chance necessitates caution. If your budget is lost, refrain from chasing your losses, as this behavior may result in further financial losses and, ultimately, lead to the development of a gambling addiction.",
      "guideSlotsHome.title3":
        "Pay close attention to your emotions while engaging in gambling activities",
      "guideSlotsHome.excerpt3":
        "Enjoy the entertainment of gambling while ensuring it remains enjoyable by being mindful of your emotions during play. If you detect feelings of heightened anger, frustration, or difficulty making rational decisions, it is essential to cease playing.",

      "previewBonuses.title": "Promoting a responsible approach to gambling",
      "previewBonuses.excerpt":
        " Looking for exciting online casino bonuses and promotions? Look no further! Our extensive and regularly updated database offers a vast selection of enticing casino bonus offers that cater to all players' preferences. Whether you're into free spins, deposit bonuses, or cashback rewards, we've got you covered with the best deals available in the gambling world. Don't miss out on these exclusive offers – start exploring now and boost your gaming experience with lucrative bonuses!",

      "nodepositbonuses.title":
        "Irresistible in 2023: No Deposit Casino Bonuses and Unique Bonus Codes",
      "nodepositbonuses.excerpt":
        "Fresh in 2023: A continuously refreshed catalog of no deposit bonus deals for virtual casinos. Obtain exclusive promo codes and enjoy complimentary spins rewards.",

      "exclusivebonuses.title":
        "Comprehensive Compilation of Online Casino Bonuses Accessible in 2023",
      "exclusivebonuses.excerpt":
        "Searching for casino bonuses and promos on the web? Explore our current, well-maintained repository featuring a plethora of casino bonus propositions for your consideration.",

      "depositbonuses.title":
        "Finest Casino Welcome Bonuses on Your Initial 2023 Deposit",
      "depositbonuses.excerpt":
        "Select from a variety of top-tier introductory casino rewards and receive additional bonus funds incorporated into your initial payment. Exclusive registration incentive deals designed for fresh participants.",

      "welcomebonuses.title": "Welcome Bonuses 2023",
      "welcomebonuses.excerpt":
        "If you're in search of a quality casino experience coupled with enticing bonuses, we have the perfect solution tailored for you! The welcoming bonus stands as a gesture from casinos to their fresh players, usually presented as free spins or cashback rewards. Explore our compilation of introductory bonuses from renowned online casinos, ensuring an ideal match for your preferences.",

      "nowagerbonuses.title": "No Wagering Casino Bonuses 2023",
      "nowagerbonuses.excerpt":
        "Searching for no wagering bonuses? Explore our exclusive compilation of wager-free bonuses, available only at Casino.",

      "cryptocasinos.title":
        "Top Cryptocurrency Betting Platforms & Bitcoin Casino Sites in 2023",
      "cryptocasinos.excerpt":
        "  Explore our compilation of premier online casinos for Bitcoin along with betting platforms that embrace BTC and alternative cryptocurrencies as viable payment methods. Delve into impartial assessments, and pinpoint the ultimate Bitcoin casino destination tailored to your preferences.",

      "fastcasinos.title":
        "2023's Swiftest Payout Casino and Betting Platforms",
      "fastcasinos.excerpt":
        "The most advantageous aspect of rapid payout casinos is their swift and unwavering dispensation of your earnings. We've meticulously crafted this inventory to aid you in locating the supreme casinos offering expedited withdrawal processes, particularly when your earnings surge swiftly and substantially. Simply initiate a withdrawal and envisage the exhilarating possibilities for allocating those funds!",

      "livecasinos.title": "Premier Live Dealer Casinos of the Year 2023",
      "livecasinos.excerpt":
        "Explore this compilation of top-notch live dealer casinos for an immersive gaming experience and discover prime online casinos hosting captivating live casino games catered to your preferences.",

      "newestasinos.title": "Fresh Entrants to the Online Casino Scene 2023",
      "newestasinos.excerpt":
        "On the Hunt for Fresh 2023 Online Casino Platforms? Discover Recently Launched Casino Sites Offering Outstanding Incentives and Cutting-Edge Attributes. Constantly Refreshed for Your Exploration.",

      "certifiedcasinos.title": "Premier Accredited Casinos in 2023",
      "certifiedcasinos.excerpt":
        "Gaming constitutes a substantial sector, and with the assistance of authorized internet-based casinos, you can relish your preferred pastime with serenity, assured of its oversight by official governmental bodies. Cutting-edge security protocols ensure the confidentiality of all personal data!",

      "filteredBonuses.title":
        "Catalog of all 2023 Online Casino Bonuses Offered",
      "filteredBonuses.excerpt":
        " Seeking online casino bonuses and promotions? Explore our current database featuring numerous casino bonus offers for your selection.",

      "filteredCasinos.title":
        "Comprehensive Compilation of 2023 Online Casino Selection",
      "filteredCasinos.excerpt":
        "In Search of an Online Casino? Navigate through our up-to-date repository housing a myriad of casinos awaiting your consideration.",

      "GuideSlotsPage.title": "Latest Casino Guides",

      "filtered.payments.title":
        "Catalog of all offered Online Casinos by Payment Methods in 2023",
      "filtered.payments.description":
        "Looking for online casinos with specific payment methods? Explore our current database of numerous casino offers for you to choose from.",
      "apple.title":
        "Exceptional Online Casinos That Welcome Apple Pay Transactions in 2023",
      "apple.description":
        " Wondering which online casinos accept Apple Pay for financial transactions? Let our guide direct you to the most reliable Apple Pay casinos for a top-notch gaming experience.",
      "bitcoin.title":
        "Premier Bitcoin & Cryptocurrency Gambling Destinations in 2023.",
      "bitcoin.description":
        " Explore our curated selection of leading Bitcoin-friendly casinos and gaming platforms that welcome BTC and other digital currencies. Dive into our impartial reviews to discover the ideal Bitcoin gambling venue for you right now.",
      "ecopayz.title":
        "Top-Ranked Online Casinos Supporting EcoPayz Transactions for 2023",
      "ecopayz.description":
        "Looking for leading online casinos that welcome ecoPayz transactions? Explore our curated selection of premium ecoPayz-friendly casinos to discover the perfect fit for you.",
      "maestro.title":
        "Top-Rated Online Casinos Accepting Maestro Payments for 2023",
      "maestro.description":
        "Interested in gaming at online casinos that welcome Maestro transactions? Let Casino Guru steer you to the ideal Maestro-friendly casino for you.",
      "mastercard.title":
        "Top-Rated Online Casinos Welcoming Mastercard Transactions in 2023",
      "mastercard.description":
        " Interested in gaming at a Mastercard-friendly casino? Casino Guru is here to guide you to the most reliable casinos that welcome Mastercard for secure gambling.",
      "mobi.title":
        "Leading Online Casinos That Favor Mobile Payments for Seamless Transactions in 2023.",
      "mobi.description":
        "Experience smooth financial transactions in online casinos by leveraging the ease and speed of mobile payment methods. Keep abreast of your available options to choose the best fit for your geographical location and preferred currency, ensuring an effortless gaming journey.",
      "muchbetter.title":
        "Top Online Casinos Supporting MuchBetter Transactions in 2023",
      "muchbetter.description":
        "Searching for casinos compatible with MuchBetter? Consult our guide to discover the ideal MuchBetter-friendly casino for you.",
      "neosurf.title":
        "Top-Rated Online Casinos Supporting Neosurf Transactions for 2023",
      "neosurf.description":
        "In search of an online casino compatible with Neosurf payments? Browse our curated selection of Neosurf-friendly casinos, delve into our in-depth reviews, and pinpoint the ideal platform for you.",
      "neteller.title":
        "Top Online Casinos Supporting Neteller Transactions in 2023",
      "neteller.description":
        "  Directory of online casinos compatible with Neteller payments. ✅ In-depth assessments by Casino Guru. ✅ Discover your ideal Neteller-friendly casino.",
      "allpayments.title":
        "Digital Casino Financial Transactions & Payment Selections",
      "allpayments.description":
        "Currently, there exist numerous methods for funding a gaming account. Listed below are internet casinos categorized by widely utilized payment options. Some casinos accommodate MasterCard, Visa, and digital currency, while others endorse less conventional avenues like Neteller and Skrill. The choice of your preferred payment mechanism lies in your hands.",
      "paypal.title":
        "Leading Online Casinos Accepting PayPal Payments in 2023",
      "paypal.description":
        "Check out our comprehensive list of top-rated casinos that accept PayPal—a quick and secure option for both deposits and withdrawals. This payment method is a popular choice among global online players, offering advantages like bypassing traditional banking constraints and geographical limitations. If you don&'t already have a PayPal account, it's simple to set one up and start your journey to big wins!",
      "paysafe.title": "Top-Ranked Online Casino Platforms for 2023",
      "paysafe.description":
        "Our specialists have scrutinized more than 5,000 digital gambling platforms and selected the cream of the crop. Explore our curated list to discover your ideal online casino.",
      "pix.title":
        "Discover Top-Rated Casinos Accepting Pix Payments for Quick and Secure Transactions",
      "pix.description":
        "Explore our curated list of premium casinos that support Pix as a payment option. Known for its speed and security, Pix is a go-to method for deposits and withdrawals among online casino enthusiasts worldwide. It offers the advantage of sidestepping traditional banking hassles and pesky geographical limits. If you haven't set up a Pix wallet yet, it's easy to do so—then you're all set to try your luck!",
      "skrill.title":
        "Top Online Casinos Supporting Skrill Transactions for 2023",
      "skrill.description":
        "Searching for an online casino that allows Skrill payments? Browse our curated selection of premier Skrill-compatible casinos to find your ideal gaming destination.",
      "trustly.title":
        "Top Online Casinos Supporting Trustly Transactions for 2023",
      "trustly.description":
        "Searching for internet casinos that welcome Trustly payments? Browse our curated list and in-depth evaluations to discover the most suitable Trustly-compatible casino for you.",
      "visa.title":
        "Top-Rated Online Casinos Welcoming Visa Transactions in 2023",
      "visa.description":
        "Interested in gaming at a Visa-friendly casino? Casino Guru is here to guide you to the most reliable casinos that welcome Visa for secure gambling.",

      "filtered.countries.title":
        "Interactive List of Online Casinos 2023: Filtering by Country",
      "filtered.countries.description":
        " Looking for the perfect online casino? Explore our interactive list for 2023, specifically designed to help you filter through an array of options based on country. Tailor your search to find the most reputable, safe, and exciting casinos available in your region.",
      "countries.title":
        "Global Online Casino Review: Top Platforms by Country",
      "countries.description":
        "Searching for the perfect online casino? Our comprehensive compilation showcases the most reliable and enticing casinos available across the globe. Here, you'll find information on lucrative bonuses, dependable customer service, and various payment methods ranging from credit cards to e-wallets. No matter where you are located, we have something to offer for every player.",
      "australia.title":
        "Australian Online Casino Overview: The Pinnacle of Gaming Down Unde",
      "australia.description":
        "Seeking an unparalleled gaming experience in Australia? Our curated list spotlights the crème de la crème of Australian online casinos. Dive into a world of generous bonuses, impeccable customer service, and diverse payment options—ranging from traditional bank transfers to modern e-wallet solutions. For those located in Australia, we offer a tailored gaming journey that's second to none.",
      "brazil.title":
        "Brazilian Online Casino Guide: Your Portal to Gaming Bliss in Brazil",
      "brazil.description":
        "Looking for a top-tier gaming experience in Brazil? Our expertly curated list highlights the most exceptional online casinos available in the Brazilian market. Explore a universe of rewarding bonuses, dependable customer service, and a myriad of payment options, from traditional bank transfers to modern digital wallets. If you're in Brazil, we've got your ultimate gaming adventure covered.",
      "canada.title":
        "Canadian Online Casino Guide: Uncovering the Best in Canadian Gaming",
      "canada.description":
        "In search of an exceptional gaming experience in Canada? Our meticulously curated list features the top online casinos available to the Canadian audience. Dive into a realm of generous bonuses, stellar customer service, and a wide array of payment options that include traditional bank transfers as well as contemporary e-wallets. If you're based in Canada, your ultimate gaming adventure awaits.",
      "finland.title":
        "Finnish Online Casino Guide: The Ultimate Gaming Experience in Finland",
      "finland.description":
        "Searching for an unparalleled gaming adventure in Finland? Our hand-picked selection showcases the finest online casinos catering to the Finnish audience. Step into a realm filled with generous bonuses, top-notch customer service, and a broad spectrum of payment methods from traditional bank transfers to modern e-wallets. If you're in Finland, your one-of-a-kind gaming journey starts here",
      "germany.title":
        "German Online Casino Guide: The Ultimate Gaming Haven in Deutschland",
      "germany.description":
        "Are you on the quest for an exceptional gaming experience in Germany? Our carefully curated list highlights the best online casinos available for the German market. Venture into a world rich with enticing bonuses, reliable customer support, and a multitude of payment options, including traditional bank transfers and contemporary e-wallets. If you're in Germany, your unparalleled gaming journey begins here",
      "nz.title":
        "New Zealand Online Casino Guide: The Ultimate Kiwi Gaming Experience",
      "nz.description":
        "Searching for an extraordinary gaming experience in New Zealand? Our rigorously curated list features the cream of the crop in online casinos available to Kiwi players. Step into a world of lavish bonuses, excellent customer service, and a plethora of payment options ranging from traditional bank transfers to cutting-edge e-wallets. For those in New Zealand, your unparalleled gaming adventure starts right here.",
      "norway.title":
        "Norwegian Online Casino Guide: The Apex of Gaming in Norway",
      "norway.description":
        "Looking for an unmatched gaming experience in Norway? Our carefully vetted list highlights the top online casinos available to Norwegian players. Enter a realm of substantial bonuses, first-rate customer support, and a wide variety of payment options from traditional bank transfers to state-of-the-art e-wallets. If you're in Norway, the ultimate gaming escapade awaits you here.",
      "poland.title":
        "Polish Online Casino Guide: The Premier Gaming Destination in Poland",
      "poland.description":
        "Seeking an unparalleled gaming experience in Poland? Our scrupulously curated list highlights the elite online casinos accessible to Polish players. Step into a world rich in lucrative bonuses, impeccable customer service, and a myriad of payment options, from traditional bank transfers to innovative e-wallet solutions. If you're in Poland, your matchless gaming journey starts here.",

      "filtered.providers.title":
        "Comprehensive 2023 Directory for Online Casinos Sorted by Game Providers",
      "filtered.providers.description":
        "Interested in locating online casinos featuring games from particular providers? Browse our up-to-date list of diverse casino options to find your perfect match.",
      "amatic.title":
        "Amatic: Bridging the Gap Between Traditional and Online Casinos with Classic Game Titles",
      "amatic.description":
        "Amatic crafts digital games that mirror their real-world versions in both aesthetics and narrative. This distinct strategy captivates players fond of the time-honored casino vibe. Featuring standout games such as Hot Fruits 100, Allways Hot Fruits, Book Of Aztec, and Lucky Joker 10, Amatic provides an unparalleled entertainment experience for casino aficionados.",
      "amusnet.title":
        "Two Decades of Gaming Excellence: Exploring Amusnet Interactive&#39;s Innovative Portfolio",
      "amusnet.description":
        "Spanning over 20 years, Amusnet Interactive has amassed a significant following thanks to its relentless focus on game innovation, including the integration of in-game jackpots across several of its offerings. Notable Amusnet Interactive titles encompass Supreme Hot, Burning Hot, Ultimate Hot, and Shining Crown. Dive into the exhilarating gameplay and compelling elements presented by Amusnet Interactive's remarkable range of games.",
      "bgaming.title":
        "Rising Star in iGaming: BGaming's Rapid Ascent Through Innovation and Quality",
      "bgaming.description":
        " Though a relative novice in the iGaming realm, BGaming has rapidly ascended as a premier provider of online casino entertainment, owing to its superior quality and inventive strategies. Specializing in slots, casual diversions, and classic table games, BGaming constantly refreshes its game lineup with compelling storylines, unforgettable personas, and engaging promotional campaigns. Noteworthy titles such as Fruit Million, Elvis Frog in Vegas, Lucky Lady Moon, and Aloha King Elvis populate their standout collection. Delve into the thrilling and engaging world presented by BGaming's exceptional range of gaming options.",
      "boongo.title":
        " Boongo Gaming: Crafting Immersive Digital Experiences through Innovative Game Design",
      "boongo.description":
        " Boongo Gaming has quickly distinguished itself in the competitive iGaming sector with visually appealing and feature-rich games. Known for titles like 'God's Temple' and '15 Golden Eggs,' the company excels in both innovation and quality. Their robust backend solutions further enhance the gaming experience. Whether you're a casual player or a dedicated enthusiast, Boongo Gaming offers a memorable gaming journey.",
      "evolution.title":
        "Evolution Gaming: Setting the Gold Standard in Live Casino Experiences",
      "evolution.description":
        "A recognized leader in the live casino arena, Evolution Gaming has earned its reputation through a commitment to unparalleled quality and innovation. Offering a rich variety of live dealer games, from classics like blackjack and roulette to unique offerings like Lightning Dice, the company consistently delivers engaging and authentic experiences. By utilizing cutting-edge streaming technology and employing professional dealers, Evolution Gaming ensures a seamless and immersive gaming atmosphere that sets them apart in the industry.",
      "mascot.title":
        "Mascot Gaming: An Emerging Powerhouse in Tailored iGaming Solutions",
      "mascot.description":
        "Quickly rising through the ranks of the iGaming industry, Mascot Gaming is garnering attention for its custom gaming solutions. With a balanced portfolio of slots, table games, and interactive experiences, the company is making its mark through a blend of creativity and technology. Known for titles like 'Reel Monsters' and 'Fruit Vegas,' Mascot Gaming combines captivating visuals with intriguing gameplay features. Their unique approach to gaming has made them a go-to for operators seeking versatile and engaging content, setting the stage for what promises to be a bright future in the sector.",
      "netent.title":
        "NetEnt Gaming: Pioneering Excellence in the iGaming World",
      "netent.description":
        "As one of the stalwarts in the iGaming industry, NetEnt Gaming has consistently pushed the envelope in terms of quality, innovation, and gameplay. With a broad spectrum of offerings from classic slots like 'Starburst' to groundbreaking live casino games, the company has set industry benchmarks time and again. Utilizing state-of-the-art technology and creative storytelling, NetEnt offers an unrivaled gaming experience that keeps players coming back for more. Their reputation for excellence is backed by an extensive portfolio that continually evolves, solidifying their position as a leader in digital gaming.",
      "nolimit.title":
        "No Limit City Gaming: Unbounded Innovation in the iGaming Sphere",
      "nolimit.description":
        "Emerging as a force to be reckoned with in the iGaming industry, No Limit City Gaming is synonymous with creative freedom and technological prowess. Known for unique slots like 'Deadwood' and 'Punk Rocker,' the company goes beyond the norm to offer riveting themes and game mechanics. Their dedication to innovation is evident, providing a refreshing and unpredictable gaming experience. By continually pushing the boundaries of what’s possible, No Limit City Gaming has carved a niche for itself as an avant-garde game provider in a highly competitive market.",
      "playngo.title":
        "Play'n GO Gaming: A Vanguard of Versatility and Innovation in iGaming",
      "playngo.description":
        "Cementing its status as a trendsetter in the iGaming community, Play'n GO Gaming is celebrated for its wide-ranging and inventive game portfolio. From iconic slots like 'Book of Dead' to inventive table games, the company provides an all-encompassing gaming experience. Employing cutting-edge technology and captivating narratives, Play'n GO has mastered the art of creating games that are not just visually appealing but also rich in features. Their unyielding commitment to quality and innovation makes them a preferred choice for both casual gamers and ardent casino enthusiasts, continually setting new standards in the ever-evolving gaming landscape.",
      "pragmatic.title":
        "Pragmatic Play: Fusing Quality and Creativity for an Unmatched iGaming Experience",
      "pragmatic.description":
        "A frontrunner in the iGaming industry, Pragmatic Play has made its name through a potent blend of innovative gameplay and top-notch graphics. Renowned for popular titles like 'Wolf Gold' and 'The Dog House,' the company delivers a versatile range of slots, live casino games, and even bingo offerings. Pragmatic Play's commitment to quality is manifest in its intuitive interfaces, engaging storylines, and well-executed game mechanics. By consistently rolling out new and captivating games, they manage to stay ahead in the competitive world of online gaming, solidifying their reputation as a reliable and inventive game provider.",
      "allproviders.title":
        "Easily Find Your Ideal Online Casino: Sorted by Game Developers for Tailored Gaming Experiences",
      "allproviders.description":
        "To make your hunt easier, we've sorted our casino offerings by game developer. This enables you to effortlessly locate a gaming site that provides the exact games you wish to play. From state-of-the-art video slots and electrifying live casino experiences to traditional table games, we've got all your preferences accounted for. Browse our detailed list of game providers to find casinos backed by premier software developers, guaranteeing high-quality visuals, captivating gameplay, and engaging features.",
      "pushgaming.title":
        "Push Gaming: Revolutionizing iGaming with Cutting-Edge Concepts",
      "pushgaming.description":
        "In the ever-competitive realm of iGaming, Push Gaming stands out for groundbreaking slots like 'Jammin' Jars' and 'Wild Swarm,' the company excels in delivering games with exceptional visuals and intricate gameplay features. Push Gaming's focus on mobile-optimized, HTML5-based games ensures a seamless experience across devices. Their capacity to marry traditional gaming elements with novel twists makes them a sought-after provider, continually pushing the envelope in terms of what is possible in the iGaming world.",
      "spinomenal.title":
        "Spinomenal: A New Age Innovator in the iGaming Ecosystem",
      "spinomenal.description":
        "Earning its place as an agile and forward-thinking player in the iGaming scene, Spinomenal is recognized for its inventive approach to game development. Specializing in highly engaging slots like 'Book of Guardians' and 'Demi Gods II,' the company combines vibrant graphics with enticing gameplay mechanics. Spinomenal's commitment to user experience is evident, offering games that are optimized for both desktop and mobile play. Their innovative features, such as bonus games and progressive jackpots, make them a standout provider in an ever-growing market, appealing to a wide range of players seeking fresh and exciting gaming experiences.",

      "brand.safety": "Safety Index",
      "brand.our": "by Our Casino",
      "brand.providers": "Game Providers:",
      "brand.restricted": "Restricted countries:",

      "tab.casinos": "Casinos",
      "random.brand": "Random Brand",
      "random.description":
        "Pay attention to a random brand suggested just for you",
      "slider.title": "Reccomend brands for you",

      "button.read": "Read More",
      "button.less": "Read Less",

      "button.view": "View All Guides",
      "button.load": "Load More Brands",
      "button.review": "Read Review",
      "button.play": "Play Now",

      "subscribe.text":
        "Subscribe to our mailing list to receive the latest reviews right now, or check out our mailing ",
      "subscribe.link": "List Examples",

      "footer.contacts": "Our Contacts:",
      "footer.title": "Empowering iGaming Solutions",
      "footer.description":
        "Unlocking 15 Websites That Will Boost Your Brand to New Heights",
      "footer.link": "Start Working With Us",
      "footer.about":
        "CasinoFrog positions itself as an exceptional source of information about virtual gaming establishments and online gambling entertainment. All our reviews and guides are crafted in accordance with the knowledge and convictions of our independent team of experts, objectively and without any bias. Nevertheless,such assessments and notifications are provided solely for informational purposes and should not be considered legal advice or a basis for making legal decisions. Before commencing participation in your chosen casino, always ensure that you comply with all applicable legal requirements.",
      "footer.copyright": "Start Working With Us",
    },
  },

  pl: {
    translation: {
      guideposts: plTranslation,
      guideslotsguide:
        "Jeśli marzysz o wygraniu dużego jackpota, zanurz się w świat online slotów dzięki naszym wszechstronnym przewodnikom na CasinoFreak.com. Wszystkie informacje, których potrzebujesz, od linii wypłat do progresywnych jackpotów, są dostępne na jednej platformie! Bądź na bieżąco z najnowszymi wydarzeniami w świecie hazardu na automatach i nawet wypróbuj darmowe gry na automatach bezpośrednio z Twojego urządzenia. Nasza kolekcja przewodników po hazardzie online zapewnia łatwy dostęp do wszystkiego, co musisz wiedzieć o slotach. Chociaż może się wydawać, że automaty to kwestia zwykłego 'naciśnij i kręć', istnieją triki i strategie, które mogą uatrakcyjnić Twoje doświadczenia.",
      guideslotsguide2:
        "Szukasz idealnego źródła wskazówek, ciekawostek i porad, które zwiększą Twoje szanse na wygraną? Nie szukaj dalej, zapewniamy szybki dostęp do najbardziej istotnych przewodników o slotach i darmowych gier na automatach umieszczonych na naszej stronie.",
      "guideslotsguide.title": "Przewodniki po Hazardzie",
      "guideslotsguide.excerpt":
        "Jeśli marzysz o wygraniu dużego jackpota, zanurz się w świat online slotów dzięki naszym wszechstronnym przewodnikom na CasinoFreak.com. Wszystkie informacje, których potrzebujesz, od linii wypłat do progresywnych jackpotów, są dostępne na jednej platformie! Bądź na bieżąco z najnowszymi wydarzeniami w świecie hazardu na automatach i nawet wypróbuj darmowe gry na automatach bezpośrednio z Twojego urządzenia.",

      "header.home": "Strona Główna",
      "header.bonuses": "Bonusy ▼",
      "header.casinos": "Kasyna ▼",
      "header.payments": "Wszystkie Płatności ▼",
      "header.providers": "Dostawcy Gier ▼",
      "header.countries": "Kasyna według kraju ▼",

      "header.austr": "Australijskie Kasyno",
      "header.brazil": "Brazylijskie Kasyno",
      "header.canada": "Kanadyjskie Kasyno",
      "header.finnish": "Fińskie Kasyno",
      "header.germany": "Niemieckie Kasyno",
      "header.nz": "Nowozelandzkie Kasyno",
      "header.norw": "Norweskie Kasyno",
      "header.polish": "Polskie Kasyno",
      "header.spins": "Darmowe Spiny",
      "header.guides": "Przewodniki",
      "header.about": "O Nas",
      "header.contacts": "Kontakt",

      "header.homebonuses": "Bonusy",
      "header.homecasinos": "Kasyna",
      "header.homespins": "Darmowe Spiny",
      "header.homeguides": "Przewodniki po Hazardzie",

      "header.nodeposit": "Bonusy bez Depozytu",
      "header.exclusive": "Bonusy Ekskluzywne",
      "header.deposit": "Bonusy od Depozytu",
      "header.welcome": "Bonusy Powitalne",
      "header.nowager": "Bonusy Bez Obrotu",
      "header.cryptocasinos": "Krypto Kasyna",
      "header.fastwithdrawalcasinos": "Kasyna z Szybką Wypłatą",
      "header.livecasinos": "Kasyna na Żywo",
      "header.newestcasinos": "Najnowsze Kasyna",
      "header.certifiedcasinos": "Certyfikowane Kasyna",

      "searchBrands.placeholder": "Szukaj marek...",

      "home.title": "Recenzje Kasyn Online i Przewodniki po Hazardzie",
      "home.description":
        "Autentyczne recenzje graczy, bonusy bez depozytu i szeroki wybór gier z darmową grą.",

      "topBrands.title": "Najlepsze Wybory CasinoFrog na 2023",
      "newBrands.title": "Najnowsze Dodatki do Kasyn 2023",

      "reviewBrands.title1": "Wszystkie starannie recenzowane kasyna online",
      "reviewBrands.description1":
        "Dokładnie recenzujemy wszystkie istniejące kasyna online, niezależnie od ich preferencji",

      "reviewBrands.question1.title":
        "Aktualnie w aktywnym poszukiwaniu świeżych stron z kasynami",
      "reviewBrands.question1.excerpt": "Nasz zespół stale poszukuje",
      "reviewBrands.question1.link":
        "nowo uruchomionych stron z kasynami do oceny",
      "reviewBrands.question1.excerpt2":
        ", mając na celu dostarczenie największej wartości dla naszych odwiedzających.",

      "reviewBrands.question2.title":
        "Najdokładniejsze informacje dotyczące każdego kasyna",
      "reviewBrands.question2.excerpt":
        "Starannie oceniamy każde kasyno i gromadzimy obszerne informacje, aby nasi odwiedzający byli dobrze poinformowani o tym, czego mogą się spodziewać przed rozpoczęciem gry",

      "reviewBrands.question3.title":
        "Promowanie odpowiedzialnego podejścia do hazardu",
      "reviewBrands.question3.excerpt":
        "Każde kasyno jest oceniane przez niezależny zespół, przestrzegając kompleksowego, opartego na danych,",
      "reviewBrands.question3.link": "i bezstronnego podejścia do recenzji",

      "reviewBrands.button1": "Odkryj najlepiej oceniane bonusy",
      "reviewBrands.button2": "Odkryj najlepiej oceniane kasyna",

      "reviewBrands.title2": "Jesteśmy pasjonatami bonusów bez depozytu",
      "reviewBrands.description2":
        "Nasze nieustanne wysiłki idą w kierunku tworzenia ostatecznej bazy danych bonusów bez depozytu.",

      "reviewBrands.question4.title":
        "Kompilowanie promocyjnych ofert od każdego istniejącego kasyna online",
      "reviewBrands.question4.excerpt":
        "W naszym dążeniu do zapewnienia najszerszego wyboru, ciągle szukamy",
      "reviewBrands.question4.link": "świeżych bonusów bez depozytu",
      "reviewBrands.question4.excerpt2":
        "aby rozszerzyć naszą bazę danych, pozyskiwanej ze wszystkich istniejących stron z kasynami.",

      "reviewBrands.question5.title":
        "Tworzenie unikatowych i ekskluzywnych bonusów dostosowanych wyłącznie dla naszych cenionych odwiedzających",
      "reviewBrands.question5.excerpt":
        "W naszym dążeniu do zapewnienia najszerszego wyboru, ciągle szukamy świeżych",
      "reviewBrands.question5.link": "ekskluzywnych bonusów",
      "reviewBrands.question5.excerpt2":
        "zawierających oferty stworzone wyłącznie dla naszych cenionych odwiedzających.",

      "reviewBrands.question6.title":
        "Kompleksowe i dokładne informacje dotyczące każdego bonusu",
      "reviewBrands.question6.excerpt":
        "W naszej bazie danych bonusów znajdziesz kluczowe informacje i warunki związane z każdym bonusem, wraz z jasnymi wyjaśnieniami i przykładami ilustracyjnymi.",

      "filteredHome.title":
        "Katalog wszystkich oferowanych bonusów w kasynach online na 2023 rok",
      "filteredHome.description":
        "Szukasz bonusów i promocji w kasynach online? Przeglądaj naszą bieżącą bazę danych zawierającą liczne oferty bonusów w kasynach do wyboru.",

      "navigateBrands.all": "Wszystkie Marki",
      "navigateBrands.recommend": "Polecane Marki",
      "navigateBrands.newly": "Nowe Marki",
      "navigateBrands.crypto": "Marki Krypto",
      "navigateBrands.sports": "Najlepsze Marki Sportowe",

      "allBrands.withLimits": "Limity wypłat:",
      "allBrands.advantages": "Zalety",
      "allBrands.depMethods": "Metody wpłat",
      "allBrands.withMethods": "Metody wypłat",
      "allBrands.restricted": "Ograniczone kraje",
      "allBrands.howGet": "Jak zdobyć bonus?",
      "allBrands.activate": "Aktywuj bonus na swoim koncie kasynowym",

      "guideSlotsHome.title1": "Poradniki do hazardu online",
      "guideSlotsHome.title2": "Ustal budżet na hazard",
      "guideSlotsHome.excerpt1":
        "Przed rozpoczęciem jakiejkolwiek sesji hazardowej ważne jest, aby ustalić budżet i trzymać się go ściśle. Upewnij się, że przewidziana kwota mieści się w twoich środkach finansowych, ponieważ to może nie być twój szczęśliwy dzień i może być stracona.",
      "guideSlotsHome.excerpt2":
        "Nieprzewidywalność gier losowych wymaga ostrożności. Jeżeli stracisz swój budżet, powstrzymaj się od ścigania swoich strat, ponieważ to zachowanie może prowadzić do dalszych strat finansowych i ostatecznie do rozwoju uzależnienia od hazardu.",
      "guideSlotsHome.title3":
        "Zwróć szczególną uwagę na swoje emocje podczas uprawiania hazardu",
      "guideSlotsHome.excerpt3":
        "Ciesz się rozrywką hazardową, dbając o to, aby była przyjemna, zwracając uwagę na swoje emocje podczas gry. Jeśli zauważysz uczucia zwiększonego gniewu, frustracji lub trudności w podejmowaniu racjonalnych decyzji, konieczne jest przerwanie gry.",

      "previewBonuses.title":
        "Promowanie odpowiedzialnego podejścia do hazardu",
      "previewBonuses.excerpt":
        "Szukasz ekscytujących bonusów i promocji w kasynach online? Nie szukaj dalej! Nasza obszerna i regularnie aktualizowana baza danych oferuje szeroki wybór atrakcyjnych ofert bonusowych, które odpowiadają preferencjom wszystkich graczy. Niezależnie od tego, czy interesują Cię darmowe spiny, bonusy od depozytu czy nagrody cashback, mamy dla Ciebie najlepsze oferty dostępne w świecie hazardu. Nie przegap tych ekskluzywnych ofert – zacznij teraz eksplorować i wzbogac swoje doświadczenie w grach dzięki lukratywnym bonusom!",

      "nodepositbonuses.title":
        "Nieodparty w 2023: Bonusy kasynowe bez depozytu i unikatowe kody bonusowe",
      "nodepositbonuses.excerpt":
        "Świeże w 2023: Ciągle odświeżany katalog ofert bonusowych bez depozytu dla wirtualnych kasyn. Uzyskaj ekskluzywne kody promocyjne i ciesz się nagrodami w postaci darmowych spinów.",

      "exclusivebonuses.title":
        "Kompleksowa kompilacja dostępnych w 2023 bonusów kasynowych online",
      "exclusivebonuses.excerpt":
        "Szukasz bonusów i promocji w kasynach online? Przeglądaj nasze aktualne i dobrze utrzymane repozytorium zawierające mnóstwo propozycji bonusów kasynowych do Twojej oceny.",

      "depositbonuses.title":
        "Najlepsze bonusy powitalne przy Twoim pierwszym depozycie w 2023",
      "depositbonuses.excerpt":
        "Wybierz z różnorodnych, najwyższej klasy bonusów powitalnych i otrzymaj dodatkowe środki dodane do Twojego pierwszego wpłaty. Ekskluzywne oferty bonusowe dla nowych uczestników.",

      "welcomebonuses.title": "Bonusy powitalne 2023",
      "welcomebonuses.excerpt":
        "Jeśli szukasz jakościowego doświadczenia w kasynie w połączeniu z atrakcyjnymi bonusami, mamy dla Ciebie idealne rozwiązanie! Bonus powitalny to gest od kasyn do ich nowych graczy, zwykle prezentowany jako darmowe spiny lub nagrody cashback. Przeglądaj naszą kompilację bonusów powitalnych od renomowanych kasyn online, zapewniając idealne dopasowanie do Twoich preferencji.",

      "nowagerbonuses.title": "Bonusy kasynowe bez wymogu obrotu w 2023",
      "nowagerbonuses.excerpt":
        "Szukasz bonusów bez wymogu obrotu? Odkryj naszą ekskluzywną kompilację bonusów bez obrotu, dostępnych tylko w Casino.",

      "cryptocasinos.title":
        "Najlepsze platformy do zakładów w kryptowalutach i kasyna Bitcoin w 2023",
      "cryptocasinos.excerpt":
        "Odkryj naszą kompilację najlepszych kasyn online dla Bitcoina oraz platform zakładów, które akceptują BTC i inne kryptowaluty jako dopuszczalne metody płatności. Zanurz się w bezstronnych ocenach i znajdź ostateczny cel kasyna Bitcoin dopasowany do Twoich preferencji.",

      "fastcasinos.title":
        "Najszybsze w 2023 kasyna i platformy do zakładów z natychmiastową wypłatą",
      "fastcasinos.excerpt":
        "Najbardziej korzystnym aspektem szybkich kasyn z wypłatami jest ich szybkie i niezachwiane przekazywanie Twoich zarobków. Starannie przygotowaliśmy ten inwentarz, aby pomóc Ci w znalezieniu najwyższej klasy kasyn oferujących szybkie procesy wypłat, zwłaszcza gdy Twoje zyski szybko i znacznie rosną. Po prostu zainicjuj wypłatę i wyobraź sobie ekscytujące możliwości alokacji tych funduszy!",

      "livecasinos.title": "Najlepsze kasyna z krupierem na żywo w roku 2023",
      "livecasinos.excerpt":
        "Odkryj tę kompilację najlepszych kasyn z krupierem na żywo dla niezapomnianego doświadczenia w grze i odkryj najwyższej klasy kasyna online oferujące fascynujące gry w kasynie na żywo dostosowane do Twoich preferencji.",

      "newestasinos.title":
        "Najnowsze wprowadzenia na scenę kasyn online w 2023",
      "newestasinos.excerpt":
        "Szukasz nowych platform kasynowych online na 2023 rok? Odkryj niedawno uruchomione strony kasyn oferujące wyjątkowe bodźce i nowoczesne cechy. Ciągle odświeżane dla Twojego eksplorowania.",

      "certifiedcasinos.title": "Najlepsze certyfikowane kasyna w 2023",
      "certifiedcasinos.excerpt":
        "Gry to znaczący sektor, a dzięki pomocy autoryzowanych kasyn internetowych możesz cieszyć się ulubionym zajęciem ze spokojem, wiedząc, że jest ono nadzorowane przez oficjalne organy rządowe. Zaawansowane protokoły zabezpieczeń zapewniają poufność wszystkich danych osobowych!",

      "filteredBonuses.title":
        "Katalog wszystkich oferowanych bonusów kasynowych online w 2023",
      "filteredBonuses.excerpt":
        "Szukasz bonusów i promocji w kasynach online? Przeglądaj naszą aktualną bazę danych zawierającą liczne oferty bonusów kasynowych do Twojego wyboru.",

      "filteredCasinos.title":
        "Kompleksowa kompilacja wyboru kasyn online w 2023",
      "filteredCasinos.excerpt":
        "Szukasz kasyna online? Przeglądaj nasze aktualne repozytorium zawierające mnóstwo kasyn oczekujących na Twoją ocenę.",

      "GuideSlotsPage.title": "Najnowsze przewodniki po kasynach",
      "filtered.payments.title":
        "Katalog wszystkich oferowanych kasyn online według metod płatności w 2023 roku",
      "filtered.payments.description":
        "Szukasz kasyn online z określonymi metodami płatności? Przeglądaj naszą aktualną bazę danych zawierającą liczne oferty kasyn do Twojego wyboru.",

      "apple.title":
        "Wyjątkowe kasyna online akceptujące płatności przez Apple Pay w 2023 roku",
      "apple.description":
        "Zastanawiasz się, które kasyna online akceptują Apple Pay dla transakcji finansowych? Nasz przewodnik skieruje Cię do najbardziej niezawodnych kasyn obsługujących Apple Pay dla znakomitego doświadczenia w grze.",

      "bitcoin.title":
        "Najlepsze miejsca do hazardu w Bitcoinie i innych kryptowalutach w 2023 roku.",
      "bitcoin.description":
        "Odkryj naszą starannie dobraną selekcję wiodących kasyn przyjaznych dla Bitcoina i platform do gier, które akceptują BTC i inne waluty cyfrowe. Zanurz się w naszych bezstronnych recenzjach, aby odkryć idealne dla siebie miejsce do hazardu w Bitcoinie.",

      "ecopayz.title":
        "Najlepsze kasyna online obsługujące transakcje przez EcoPayz na rok 2023",
      "ecopayz.description":
        "Szukasz wiodących kasyn online, które akceptują płatności ecoPayz? Odkryj naszą starannie dobraną selekcję premium kasyn przyjaznych dla ecoPayz, aby znaleźć dla siebie idealne.",

      "maestro.title":
        "Najwyżej oceniane kasyna online akceptujące płatności Maestro na rok 2023",
      "maestro.description":
        "Interesuje Cię granie w kasynach online, które akceptują transakcje Maestro? Pozwól, że Casino Guru pokieruje Cię do idealnego kasyna przyjaznego dla Maestro.",

      "mastercard.title":
        "Najwyżej oceniane kasyna online akceptujące płatności Mastercard w 2023 roku",
      "mastercard.description":
        "Interesuje Cię granie w kasynie przyjaznym dla Mastercard? Casino Guru jest tutaj, aby pokierować Cię do najbardziej niezawodnych kasyn, które akceptują Mastercard dla bezpiecznego hazardu.",

      "mobi.title":
        "Wiodące kasyna online preferujące płatności mobilne dla bezproblemowych transakcji w 2023 roku.",
      "mobi.description":
        "Doświadcz płynnych transakcji finansowych w kasynach online, korzystając z łatwości i szybkości metod płatności mobilnych. Bądź na bieżąco z dostępnymi opcjami, aby wybrać najlepsze dopasowanie do Twojej lokalizacji geograficznej i preferowanej waluty, zapewniając bezproblemową podróż przez świat gier.",

      "muchbetter.title":
        "Najlepsze kasyna online obsługujące transakcje MuchBetter w 2023 roku",
      "muchbetter.description":
        "Szukasz kasyn kompatybilnych z MuchBetter? Skonsultuj się z naszym przewodnikiem, aby odkryć idealne kasyno przyjazne dla MuchBetter.",

      "neosurf.title":
        "Najwyżej oceniane kasyna online obsługujące transakcje Neosurf na rok 2023",
      "neosurf.description":
        "Szukasz kasyna online kompatybilnego z płatnościami Neosurf? Przeglądaj naszą starannie dobraną selekcję kasyn przyjaznych dla Neosurf, zapoznaj się z naszymi dogłębnymi recenzjami i znajdź idealną platformę dla siebie.",

      "neteller.title":
        "Najlepsze kasyna online obsługujące transakcje Neteller w 2023 roku",
      "neteller.description":
        "Katalog kasyn online kompatybilnych z płatnościami Neteller. ✅ Dogłębne oceny od Casino Guru. ✅ Odkryj swoje idealne kasyno przyjazne dla Neteller.",
      "allpayments.title":
        "Transakcje finansowe w kasynie online i wybór metod płatności",
      "allpayments.description":
        "Obecnie istnieje wiele metod finansowania konta do gier. Poniżej znajdują się kasyna internetowe sklasyfikowane według powszechnie używanych opcji płatności. Niektóre kasyna akceptują MasterCard, Visa i walutę cyfrową, podczas gdy inne wspierają mniej konwencjonalne środki, takie jak Neteller i Skrill. Wybór preferowanego mechanizmu płatności zależy od Ciebie.",
      "paypal.title":
        "Czołowe kasyna online akceptujące płatności PayPal w 2023 roku",
      "paypal.description":
        "Sprawdź naszą obszerną listę najlepszych kasyn, które akceptują PayPal — szybką i bezpieczną opcję zarówno dla wpłat, jak i wypłat. Ta metoda płatności cieszy się popularnością wśród graczy na całym świecie, oferując takie zalety, jak obejście tradycyjnych ograniczeń bankowych i ograniczeń geograficznych. Jeśli jeszcze nie masz konta PayPal, łatwo je założyć i rozpocząć swoją drogę do dużych wygranych!",
      "paysafe.title": "Najwyżej oceniane platformy kasyn online na rok 2023",
      "paysafe.description":
        "Nasi specjaliści przeanalizowali ponad 5 000 cyfrowych platform hazardowych i wybrali najlepsze z nich. Odkryj naszą starannie dobraną listę, aby znaleźć swoje idealne kasyno online.",
      "pix.title":
        "Odkryj najlepsze kasyna akceptujące płatności Pix dla szybkich i bezpiecznych transakcji",
      "pix.description":
        "Zapoznaj się z naszą starannie dobraną listą najlepszych kasyn, które obsługują Pix jako opcję płatności. Znany ze swojej szybkości i bezpieczeństwa, Pix jest preferowaną metodą wpłat i wypłat wśród entuzjastów kasyn online na całym świecie. Oferuje on zaletę obejścia tradycyjnych problemów bankowych i uciążliwych ograniczeń geograficznych. Jeśli jeszcze nie masz portfela Pix, łatwo go założyć — a potem jesteś gotów, żeby spróbować swojego szczęścia!",
      "skrill.title":
        "Najlepsze kasyna online obsługujące transakcje Skrill na rok 2023",
      "skrill.description":
        "Szukasz kasyna online, które akceptuje płatności Skrill? Przeglądaj naszą starannie dobraną listę najlepszych kasyn kompatybilnych ze Skrill, aby znaleźć swoje idealne miejsce do gry.",
      "trustly.title":
        "Najlepsze kasyna online obsługujące transakcje Trustly na rok 2023",
      "trustly.description":
        "Szukasz kasyn internetowych, które akceptują płatności Trustly? Przeglądaj naszą starannie dobraną listę i szczegółowe oceny, aby znaleźć najbardziej odpowiednie kasyno kompatybilne z Trustly dla siebie.",
      "visa.title":
        "Najwyżej oceniane kasyna online akceptujące transakcje Visa w 2023 roku",
      "visa.description":
        "Zainteresowany grą w kasynie przyjaznym dla Visa? Casino Guru jest tutaj, aby przekierować cię do najbardziej niezawodnych kasyn, które akceptują Visa dla bezpiecznego hazardu.",
      "filtered.countries.title":
        "Interaktywna lista kasyn online 2023: Filtrowanie według kraju",
      "filtered.countries.description":
        "Szukasz idealnego kasyna online? Przeglądaj naszą interaktywną listę na rok 2023, specjalnie zaprojektowaną, aby pomóc Ci przefiltrować różne opcje na podstawie kraju. Dostosuj swoje wyszukiwanie, aby znaleźć najbardziej renomowane, bezpieczne i ekscytujące kasyna dostępne w Twoim regionie.",
      "countries.title":
        "Globalny przegląd kasyn online: Najlepsze platformy według kraju",
      "countries.description":
        "Szukasz idealnego kasyna online? Nasza wszechstronna kompilacja prezentuje najbardziej niezawodne i atrakcyjne kasyna dostępne na całym świecie. Tutaj znajdziesz informacje o lukratywnych bonusach, niezawodnej obsłudze klienta i różnorodnych metodach płatności, od kart kredytowych po portfele elektroniczne. Bez względu na to, gdzie się znajdujesz, mamy coś do zaoferowania dla każdego gracza.",
      "australia.title":
        "Przegląd australijskich kasyn online: Szczyt gier w Down Under",
      "australia.description":
        "Szukasz nieporównywalnego doświadczenia w grach w Australii? Nasza starannie dobrana lista prezentuje śmietankę australijskich kasyn online. Zanurz się w świecie hojnych bonusów, doskonałej obsługi klienta i różnorodnych opcji płatności — od tradycyjnych przelewów bankowych po nowoczesne rozwiązania z portfelami elektronicznymi. Dla osób znajdujących się w Australii oferujemy doświadczenie gier na miarę.",
      "brazil.title":
        "Przewodnik po brazylijskich kasynach online: Twoja brama do gier w Brazylii",
      "brazil.description":
        "Szukasz kasyna najwyższej klasy w Brazylii? Nasza ekspertycznie opracowana lista podkreśla najbardziej wyjątkowe kasyna online dostępne na brazylijskim rynku. Odkryj świat nagradzających bonusów, niezawodnej obsługi klienta i różnorodnych opcji płatności, od tradycyjnych przelewów bankowych po nowoczesne portfele cyfrowe. Jeśli jesteś w Brazylii, zapewniamy Ci najbardziej ekscytującą przygodę w grach.",
      "canada.title":
        "Przewodnik po kanadyjskich kasynach online: Odkrywanie najlepszych gier w Kanadzie",
      "canada.description":
        "W poszukiwaniu wyjątkowego doświadczenia w grach w Kanadzie? Nasza starannie dobrana lista prezentuje najlepsze kasyna online dostępne dla kanadyjskiej publiczności. Zanurz się w świecie hojnych bonusów, doskonałej obsługi klienta i szerokiej gamy opcji płatności, które obejmują tradycyjne przelewy bankowe oraz nowoczesne portfele elektroniczne. Jeśli jesteś w Kanadzie, czeka na Ciebie twoja ostateczna przygoda w grach.",
      "finland.title":
        "Finski przewodnik po kasynach online: Ostateczne doświadczenie w grach w Finlandii",
      "finland.description":
        "W poszukiwaniu nieporównywalnej przygody w grach w Finlandii? Nasza starannie wybrana selekcja prezentuje najlepsze kasyna online dostępne dla fińskiej publiczności. Wejdź do świata pełnego hojnych bonusów, doskonałej obsługi klienta i szerokiej gamy metod płatności, od tradycyjnych przelewów bankowych po nowoczesne portfele elektroniczne. Jeśli jesteś w Finlandii, twoja wyjątkowa przygoda w grach zaczyna się tutaj.",
      "germany.title":
        "Niemiecki przewodnik po kasynach online: Ostateczny raj gier w Niemczech",
      "germany.description":
        "Czy jesteś w poszukiwaniu wyjątkowego doświadczenia w grach w Niemczech? Nasza starannie dobrana lista podkreśla najlepsze kasyna online dostępne na niemieckim rynku. Wejdź w świat bogaty w atrakcyjne bonusy, niezawodną obsługę klienta i mnóstwo opcji płatności, w tym tradycyjne przelewy bankowe i nowoczesne portfele elektroniczne. Jeśli jesteś w Niemczech, twoja nieporównywalna przygoda w grach zaczyna się tutaj.",
      "nz.title":
        "Przewodnik po kasynach online w Nowej Zelandii: Najwyższej klasy doświadczenie dla graczy z Nowej Zelandii",
      "nz.description":
        "Szukasz niezwykłego doświadczenia w grach w Nowej Zelandii? Nasza starannie dobrane lista przedstawia najlepsze dostępne kasyna online dla graczy z Nowej Zelandii. Wejdź do świata hojnych bonusów, doskonałej obsługi klienta i mnóstwa opcji płatności, od tradycyjnych przelewów bankowych po nowoczesne portfele elektroniczne. Jeżeli jesteś w Nowej Zelandii, twoja nieporównywalna przygoda z grami zaczyna się tutaj.",

      "norway.title":
        "Norweski Przewodnik po Kasynach Online: Szczyt Gry w Norwegii",
      "norway.description":
        "Szukasz niezrównanego doświadczenia w grach w Norwegii? Nasza starannie wyselekcjonowana lista podkreśla najlepsze kasyna online dostępne dla graczy z Norwegii. Wejdź w królestwo hojnych bonusów, doskonałej obsługi klienta i szerokiej gamy opcji płatności, od tradycyjnych przelewów bankowych po najnowocześniejsze portfele elektroniczne. Jeżeli jesteś w Norwegii, tutaj czeka na ciebie ostateczna przygoda z grami.",

      "poland.title":
        "Polski Przewodnik po Kasynach Online: Najlepsze Miejsce do Gry w Polsce",
      "poland.description":
        "Szukasz nieporównywalnego doświadczenia w grach w Polsce? Nasza skrupulatnie dobrane lista podkreśla elitarnie dostępne kasyna online dla graczy z Polski. Wejdź do świata bogatego w hojne bonusy, doskonałą obsługę klienta i mnóstwo opcji płatności, od tradycyjnych przelewów bankowych po innowacyjne portfele elektroniczne. Jeśli jesteś w Polsce, tutaj zaczyna się twoja niezrównana przygoda z grami.",

      "filtered.providers.title":
        "Wszechstronny Katalog Kasyn Online na 2023 Rok, Posortowany według Dostawców Gier",
      "filtered.providers.description":
        "Zainteresowany znalezieniem kasyn online z grami od konkretnych dostawców? Przeglądaj naszą aktualną listę różnorodnych opcji kasyn, aby znaleźć swój idealny wybór.",

      "amatic.title":
        "Amatic: Łączenie Tradycyjnych i Online Kasyn za pomocą Klasycznych Tytułów Gier",
      "amatic.description":
        "Amatic tworzy gry cyfrowe, które odzwierciedlają ich realne wersje zarówno pod względem estetyki, jak i narracji. Ta wyjątkowa strategia przyciąga graczy ceniących sobie tradycyjny klimat kasyna. Z wyjątkowymi grami takimi jak Hot Fruits 100, Allways Hot Fruits, Book Of Aztec i Lucky Joker 10, Amatic oferuje nieporównywalne doświadczenie rozrywkowe dla miłośników kasyn.",

      "amusnet.title":
        "Dwie Dekady Doskonałości w Grach: Badanie Innowacyjnego Portfolio Amusnet Interactive",
      "amusnet.description":
        "Obejmując ponad 20 lat, Amusnet Interactive zgromadziło znaczącą liczbę fanów dzięki nieustannemu skupieniu na innowacjach w grach, w tym integracji jackpotów w grze w kilku z jego ofert. Znaczące tytuły Amusnet Interactive obejmują Supreme Hot, Burning Hot, Ultimate Hot i Shining Crown. Zanurz się w ekscytującą rozgrywkę i fascynujące elementy prezentowane przez niezwykły zakres gier od Amusnet Interactive.",
      "bgaming.title":
        "Gwiazda wschodząca w iGaming: Szybki wzrost BGaming dzięki innowacji i jakości",
      "bgaming.description":
        "Choć jest stosunkowo nową firmą w świecie iGaming, BGaming szybko stało się czołowym dostawcą rozrywki w kasynach online, dzięki swojej doskonałej jakości i innowacyjnym strategiom. Specjalizując się w automatach, luźnych rozrywkach i klasycznych grach stołowych, BGaming stale odświeża swoją ofertę, wprowadzając fascynujące fabuły, niezapomniane postacie i angażujące kampanie promocyjne. Wartościowe tytuły takie jak Fruit Million, Elvis Frog in Vegas, Lucky Lady Moon i Aloha King Elvis wyróżniają ich kolekcję. Zanurz się w ekscytujący i angażujący świat przedstawiony przez wyjątkowy wachlarz opcji gier BGaming.",

      "boongo.title":
        "Boongo Gaming: Tworzenie immersyjnych doświadczeń cyfrowych poprzez innowacyjny projekt gier",
      "boongo.description":
        "Boongo Gaming szybko wyrobiło sobie markę w konkurencyjnym sektorze iGaming, oferując gry wizualnie atrakcyjne i bogate w funkcje. Znane z tytułów takich jak 'God's Temple' i '15 Golden Eggs', firma wyróżnia się zarówno innowacją, jak i jakością. Ich rozbudowane rozwiązania na zapleczu dodatkowo zwiększają doświadczenie z gry. Niezależnie od tego, czy jesteś przypadkowym graczem, czy zapalonym entuzjastą, Boongo Gaming oferuje niezapomnianą podróż po świecie gier.",

      "evolution.title":
        "Evolution Gaming: Ustalanie złotego standardu w doświadczeniach z kasyn na żywo",
      "evolution.description":
        "Uznany lider w dziedzinie kasyn na żywo, Evolution Gaming zdobyło swoją reputację dzięki zaangażowaniu w nieporównywalną jakość i innowację. Oferując bogaty wybór gier z krupierem na żywo, od klasyków takich jak blackjack i ruletka po unikatowe propozycje jak Lightning Dice, firma konsekwentnie dostarcza angażujące i autentyczne doświadczenia. Wykorzystując zaawansowane technologie strumieniowania i zatrudniając profesjonalnych krupierów, Evolution Gaming zapewnia bezproblemową i immersyjną atmosferę gry, która wyróżnia ich na tle branży.",

      "mascot.title":
        "Mascot Gaming: Wschodząca potęga w dostosowywanych rozwiązaniach iGaming",
      "mascot.description":
        "Szybko awansując w hierarchii branży iGaming, Mascot Gaming przyciąga uwagę swoimi niestandardowymi rozwiązaniami do gier. Z zrównoważonym portfolio automatów, gier stołowych i interaktywnych doświadczeń, firma zyskuje na znaczeniu dzięki połączeniu kreatywności i technologii. Znane z tytułów takich jak 'Reel Monsters' i 'Fruit Vegas', Mascot Gaming łączy urzekające wizualizacje z intrygującymi funkcjami rozgrywki. Ich unikatowe podejście do gier sprawiło, że stali się pierwszym wyborem dla operatorów szukających wszechstronnej i angażującej treści, otwierając drzwi do obiecującej przyszłości w sektorze.",

      "netent.title": "NetEnt Gaming: Pionierska doskonałość w świecie iGaming",
      "netent.description":
        "Jako jeden z filarów branży iGaming, NetEnt Gaming konsekwentnie przesuwa granice w zakresie jakości, innowacji i rozgrywki. Z szerokim spektrum ofert, od klasycznych automatów takich jak 'Starburst' po przełomowe gry w kasynie na żywo, firma nieustannie ustanawia branżowe standardy. Wykorzystując najnowocześniejsze technologie i kreatywne opowiadanie historii, NetEnt oferuje niezrównane doświadczenie gry, które przyciąga graczy na więcej. Ich reputacja doskonałości jest poparta obszernym portfolio, które nieustannie się rozwija, umacniając ich pozycję jako lidera w grach cyfrowych.",

      "nolimit.title":
        "No Limit City Gaming: Nieograniczona innowacja w sferze iGaming",
      "nolimit.description":
        "Emergując jako siła, z którą trzeba się liczyć w branży iGaming, No Limit City Gaming to synonim kreatywnej wolności i technologicznego kunsztu. Znane z unikatowych automatów takich jak 'Deadwood' i 'Punk Rocker', przedsiębiorstwo wychodzi poza normy, oferując fascynujące tematy i mechaniki gry. Ich zaangażowanie w innowacje jest oczywiste, zapewniając odświeżające i nieprzewidywalne doświadczenia w grze. Nieustannie przesuwając granice możliwości, No Limit City Gaming wyróżnia się jako awangardowy dostawca gier w wysoce konkurencyjnym rynku.",
      "playngo.title":
        "Play'n GO Gaming: Awangarda wszechstronności i innowacji w iGaming",
      "playngo.description":
        "Utwardzając swoją pozycję jako trendsetter w społeczności iGaming, Play'n GO Gaming jest cenione za swój szeroki i innowacyjny portfel gier. Od ikonicznych automatów takich jak 'Book of Dead' do innowacyjnych gier stołowych, firma zapewnia wszechstronne doświadczenia w grze. Wykorzystując zaawansowaną technologię i urzekające narracje, Play'n GO doskonali sztukę tworzenia gier, które są nie tylko wizualnie atrakcyjne, ale również bogate w funkcje. Ich nieugięte zaangażowanie w jakość i innowacje sprawia, że są preferowanym wyborem zarówno dla przypadkowych graczy, jak i zagorzałych entuzjastów kasyn, nieustannie ustanawiając nowe standardy w ciągle ewoluującym krajobrazie gier.",
      "pragmatic.title":
        "Pragmatic Play: Fuzja jakości i kreatywności dla nieporównywalnych doświadczeń w iGaming",
      "pragmatic.description":
        "Jako pionier w branży iGaming, Pragmatic Play zdobyło swoją renomę dzięki potężnej mieszance innowacyjnej rozgrywki i doskonałej grafiki. Znane z popularnych tytułów takich jak 'Wolf Gold' i 'The Dog House', firma oferuje wszechstronną gamę automatów, gier na żywo w kasynie, a nawet bingo. Zaangażowanie Pragmatic Play w jakość objawia się w intuicyjnych interfejsach, angażujących fabułach i dobrze wykonanych mechanikach gry. Nieustannie wprowadzając nowe i fascynujące gry, udaje im się pozostać na czele w konkurencyjnym świecie gier online, umacniając swoją reputację jako niezawodny i innowacyjny dostawca gier.",
      "allproviders.title":
        "Łatwo znajdź swoje idealne kasyno online: Posegregowane według deweloperów gier dla spersonalizowanych doświadczeń w grze",
      "allproviders.description":
        "Aby ułatwić Ci poszukiwania, posegregowaliśmy nasze oferty kasyn według dewelopera gier. Umożliwia to łatwe znalezienie strony z grami, które dostarczają dokładnie te gry, w które chcesz zagrać. Od najnowocześniejszych automatów wideo i elektryzujących doświadczeń w kasynie na żywo po tradycyjne gry stołowe - mamy zaspokojone wszystkie Twoje preferencje. Przejrzyj naszą szczegółową listę dostawców gier, aby znaleźć kasyna wspierane przez najlepszych deweloperów oprogramowania, gwarantujące wysokiej jakości wizualia, fascynującą rozgrywkę i angażujące funkcje.",
      "pushgaming.title":
        "Push Gaming: Rewolucjonizowanie iGaming za pomocą nowatorskich koncepcji",
      "pushgaming.description":
        "W zawsze konkurencyjnej sferze iGaming, Push Gaming wyróżnia się dzięki przełomowym automatów jak 'Jammin' Jars' i 'Wild Swarm'. Firma doskonali dostarczanie gier o wyjątkowych wizualizacjach i skomplikowanych funkcjach rozgrywki. Skupienie Push Gaming na zoptymalizowanych dla urządzeń mobilnych grach opartych na HTML5 zapewnia bezproblemowe doświadczenie na różnych urządzeniach. Ich zdolność do łączenia tradycyjnych elementów gier z nowymi pomysłami sprawia, że są poszukiwanym dostawcą, nieustannie przesuwając granice tego, co możliwe w świecie iGaming.",
      "spinomenal.title": "Spinomenal: Nowatorski gracze w ekosystemie iGaming",
      "spinomenal.description":
        "Zdobywając swoje miejsce jako zwinny i nowatorski uczestnik sceny iGaming, Spinomenal jest rozpoznawany za swój innowacyjny sposób tworzenia gier. Specjalizując się w niezwykle angażujących automatach, takich jak 'Book of Guardians' i 'Demi Gods II', firma łączy żywe grafiki z intrygującymi mechanikami gry. Zaangażowanie Spinomenal w doświadczenie użytkownika jest oczywiste, oferując gry zoptymalizowane zarówno na komputery, jak i urządzenia mobilne. Ich innowacyjne funkcje, takie jak gry bonusowe i progresywne jackpoty, sprawiają, że są wyjątkowym dostawcą na zawsze rosnącym rynku, przyciągając szeroki zakres graczy poszukujących świeżych i ekscytujących doświadczeń w grze.",
      "brand.safety": "Wskaźnik Bezpieczeństwa",
      "brand.our": "przez Nasze Kasyno",
      "brand.providers": "Dostawcy Gier:",
      "brand.restricted": "Ograniczone kraje:",

      "tab.casinos": "Kasyna",
      "random.brand": "Losowa Marka",
      "random.description":
        "Zwróć uwagę na losowo sugerowaną markę specjalnie dla Ciebie",
      "slider.title": "Polecane marki dla Ciebie",

      "button.read": "Czytaj Więcej",
      "button.less": "Czytaj Mniej",

      "button.view": "Zobacz Wszystkie Poradniki",
      "button.load": "Załaduj Więcej Marek",
      "button.review": "Czytaj Recenzję",
      "button.play": "Graj Teraz",

      "subscribe.text":
        "Zapisz się do naszego newslettera, aby otrzymywać najnowsze recenzje od razu, lub sprawdź naszą ",
      "subscribe.link": "Listę Przykładów",

      "footer.contacts": "Nasze Kontakty:",
      "footer.title": "Wzmocnienie Rozwiązań w iGaming",
      "footer.description":
        "Odblokowanie 15 Stron Internetowych, Które Wypromują Twoją Markę na Nowe Szczyty",
      "footer.link": "Zacznij z Nami Współpracę",
      "footer.about":
        "CasinoFrog prezentuje się jako wyjątkowe źródło informacji na temat wirtualnych zakładów hazardowych i rozrywki związanej z hazardem online. Wszystkie nasze recenzje i poradniki są tworzone zgodnie z wiedzą i przekonaniami naszego niezależnego zespołu ekspertów, obiektywnie i bezstronnie. Niemniej jednak, takie oceny i powiadomienia są dostarczane wyłącznie w celach informacyjnych i nie powinny być uznawane za porady prawne ani za podstawę do podejmowania decyzji prawnych. Zanim rozpoczniesz udział w wybranym kasynie, zawsze upewnij się, że spełniasz wszystkie obowiązujące wymagania prawne.",
      "footer.copyright": "Zacznij z Nami Współpracę",
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
