// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "@/components/posts/en.json"; // Путь к файлу с английскими переводами
import plTranslation from "@/components/posts/pl.json"; // Путь к файлу с польскими переводами
import noTranslation from "@/components/posts/no.json"; // Путь к файлу с польскими переводами


const resources = {
  en: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
        "  If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device. Our collection of online gambling guides ensures easy access to all there is to know about slots. While it might seem like slot machines are a matter of mere 'hit and spin', there are tricks and strategies that can enhance your experience. Our guides are designed to empower you with a complete understanding of how slots operate, granting you full control over your gaming sessions.",
      guideslotsguide2:
        "In search of the perfect repository for tips, fun facts, and advice to boost your chances of winning? Look no further as we provide quick access to some of the most relevant slots guides and free slots games hosted on our website.",
      "guideslotsguide.title": "Gambling Guides",
      "guideslotsguide.excerpt":
        "If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device.",

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

      "button.read": "Read More",
      "button.less": "Read Less",

      "button.view": "View All Guides",
      "button.load": "Load More Brands",
      "button.review": "Read Review",
      "button.play": "Play Now",
    },
  },
  au: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
        "  If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device. Our collection of online gambling guides ensures easy access to all there is to know about slots. While it might seem like slot machines are a matter of mere 'hit and spin', there are tricks and strategies that can enhance your experience. Our guides are designed to empower you with a complete understanding of how slots operate, granting you full control over your gaming sessions.",
      guideslotsguide2:
        "In search of the perfect repository for tips, fun facts, and advice to boost your chances of winning? Look no further as we provide quick access to some of the most relevant slots guides and free slots games hosted on our website.",
      "guideslotsguide.title": "Gambling Guides",
      "guideslotsguide.excerpt":
        "If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device.",

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

      "button.read": "Read More",
      "button.less": "Read Less",

      "button.view": "View All Guides",
      "button.load": "Load More Brands",
      "button.review": "Read Review",
      "button.play": "Play Now",
    },
  },
  ca: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
        "  If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device. Our collection of online gambling guides ensures easy access to all there is to know about slots. While it might seem like slot machines are a matter of mere 'hit and spin', there are tricks and strategies that can enhance your experience. Our guides are designed to empower you with a complete understanding of how slots operate, granting you full control over your gaming sessions.",
      guideslotsguide2:
        "In search of the perfect repository for tips, fun facts, and advice to boost your chances of winning? Look no further as we provide quick access to some of the most relevant slots guides and free slots games hosted on our website.",
      "guideslotsguide.title": "Gambling Guides",
      "guideslotsguide.excerpt":
        "If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device.",

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

      "button.read": "Read More",
      "button.less": "Read Less",

      "button.view": "View All Guides",
      "button.load": "Load More Brands",
      "button.review": "Read Review",
      "button.play": "Play Now",
    },
  },
  nz: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
        "  If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device. Our collection of online gambling guides ensures easy access to all there is to know about slots. While it might seem like slot machines are a matter of mere 'hit and spin', there are tricks and strategies that can enhance your experience. Our guides are designed to empower you with a complete understanding of how slots operate, granting you full control over your gaming sessions.",
      guideslotsguide2:
        "In search of the perfect repository for tips, fun facts, and advice to boost your chances of winning? Look no further as we provide quick access to some of the most relevant slots guides and free slots games hosted on our website.",
      "guideslotsguide.title": "Gambling Guides",
      "guideslotsguide.excerpt":
        "If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on CasinoFreak.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device.",

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

      "button.read": "Read More",
      "button.less": "Read Less",

      "button.view": "View All Guides",
      "button.load": "Load More Brands",
      "button.review": "Read Review",
      "button.play": "Play Now",
    },
  },
  pl: {
    translation: {
      guideposts: plTranslation,
      guideslotsguide:
        "Jeśli dążysz do trafienia w jackpota, zanurz się w świat gier w automaty online za pośrednictwem naszych wszechstronnych przewodników na CasinoFreak.com. Wszystkie potrzebne informacje, od linii wypłat do jackpotów progresywnych, są dostępne na jednej platformie! Bądź na bieżąco z najnowszymi wydarzeniami w świecie hazardu na automatach i nawet wypróbuj darmowe gry na automatach bezpośrednio ze swojego urządzenia. Nasza kolekcja przewodników po hazardzie online zapewnia łatwy dostęp do wszystkiego, co warto wiedzieć o automatach. Choć może się wydawać, że automaty do gier to tylko 'kręć i wygrywaj', istnieją sztuczki i strategie, które mogą wzmocnić twoje doświadczenie. Nasze przewodniki są zaprojektowane, aby wyposażyć cię w pełne zrozumienie działania automatów, dając ci pełną kontrolę nad twoimi sesjami gry.",
      guideslotsguide2:
        "W poszukiwaniu doskonałego źródła porad, ciekawostek i wskazówek, które zwiększą twoje szanse na wygraną? Nie szukaj dalej, ponieważ zapewniamy szybki dostęp do niektórych z najważniejszych przewodników po automatach oraz darmowych gier na automatach dostępnych na naszej stronie internetowej.",

      "guideslotsguide.title": "Przewodniki hazardowe",
      "guideslotsguide.excerpt":
        "Jeśli aspirujesz do zdobycia jackpota, zagłębij się w świat automatów online dzięki naszym obszernym przewodnikom na CasinoFreak.com. Wszystkie potrzebne informacje, od linii wygrywających po progresywne jackpoty, są dostępne na jednej platformie! Bądź na bieżąco z najnowszymi osiągnięciami w dziedzinie gier hazardowych na automatach, a nawet wypróbuj darmowe gry na automatach bezpośrednio ze swojego urządzenia.",

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

      "nodepositbonuses.title":
        "Nieodparty w 2023: Bonusy kasynowe bez depozytu i unikalne kody bonusowe",
      "nodepositbonuses.excerpt":
        "Nowość w 2023 roku: Stale odświeżany katalog ofert bonusowych bez depozytu dla wirtualnych kasyn. Zdobądź ekskluzywne kody promocyjne i ciesz się darmowymi spinami.",

      "exclusivebonuses.title":
        "Kompleksowa kompilacja bonusów kasyn online dostępnych w 2023 roku",
      "exclusivebonuses.excerpt":
        "Szukasz bonusów i promocji kasynowych w Internecie? Zapoznaj się z naszym obecnym, dobrze utrzymanym repozytorium zawierającym mnóstwo propozycji bonusów kasynowych do rozważenia.",

      "depositbonuses.title":
        "Najlepsze bonusy powitalne w kasynie przy pierwszej wpłacie w 2023 r",
      "depositbonuses.excerpt":
        "Wybieraj spośród wielu najlepszych nagród wprowadzających do kasyna i otrzymuj dodatkowe środki bonusowe wliczone w początkową płatność. Ekskluzywne oferty zachęt rejestracyjnych przeznaczone dla nowych uczestników.",

      "welcomebonuses.title": "Bonusy powitalne 2023",
      "welcomebonuses.excerpt":
        "Jeśli szukasz wysokiej jakości kasyna połączonego z kuszącymi bonusami, mamy dla Ciebie idealne rozwiązanie! Bonus powitalny jest gestem kasyn skierowanym do ich nowych graczy, zwykle przedstawiany jako darmowe spiny lub zwrot gotówki. Zapoznaj się z naszą kompilacją bonusów wprowadzających od renomowanych kasyn online, zapewniając idealne dopasowanie do Twoich preferencji.",

      "nowagerbonuses.title": "Brak bonusów kasynowych 2023",
      "nowagerbonuses.excerpt":
        "Szukasz bonusów bez zakładów? Zapoznaj się z naszą ekskluzywną kompilacją bonusów bez zakładów, dostępnych tylko w Kasynie.",

      "cryptocasinos.title":
        "Najlepsze platformy zakładów kryptowalutowych i kasyna Bitcoin w 2023 roku",
      "cryptocasinos.excerpt":
        "Zapoznaj się z naszą kompilacją najlepszych kasyn online dla Bitcoin wraz z platformami bukmacherskimi, które wykorzystują BTC i alternatywne kryptowaluty jako opłacalne metody płatności. Zagłęb się w bezstronne oceny i wskaż ostateczne miejsce docelowe kasyna Bitcoin dostosowane do Twoich preferencji.",

      "fastcasinos.title":
        "Kasyno i platformy bukmacherskie z największą wypłatą w 2023 roku",
      "fastcasinos.excerpt":
        "Najbardziej korzystnym aspektem kasyn z szybkimi wypłatami jest ich szybka i niezachwiana dystrybucja Twoich zarobków. Skrupulatnie opracowaliśmy ten wykaz, aby pomóc Ci zlokalizować najlepsze kasyna oferujące przyspieszone procesy wypłat, szczególnie gdy Twoje zarobki szybko i znacząco rosną. Po prostu zainicjuj wypłatę i wyobraź sobie ekscytujące możliwości alokacji tych środków!",

      "livecasinos.title": "Najlepsze kasyna z krupierami na żywo roku 2023",
      "livecasinos.excerpt":
        "Zapoznaj się z tą kompilacją najlepszych kasyn z krupierami na żywo, aby uzyskać wciągające wrażenia z gry i odkryj najlepsze kasyna online oferujące wciągające gry kasynowe na żywo dostosowane do Twoich preferencji.",

      "newestasinos.title": "Nowi uczestnicy sceny kasyn online 2023",
      "newestasinos.excerpt":
        "Polujesz na platformy kasyn online Fresh 2023? Odkryj niedawno uruchomione witryny kasyn oferujące wyjątkowe zachęty i najnowocześniejsze atrybuty. Stale odświeżany do eksploracji.",

      "certifiedcasinos.title": "Najlepsze akredytowane kasyna w 2023 roku",
      "certifiedcasinos.excerpt":
        "Gry to ważny sektor, a przy pomocy autoryzowanych kasyn internetowych możesz cieszyć się ulubioną rozrywką ze spokojem, mając pewność, że jest ona nadzorowana przez oficjalne organy rządowe. Najnowocześniejsze protokoły bezpieczeństwa zapewniają poufność wszystkich danych osobowych!",

      "filteredBonuses.title":
        "Katalog wszystkich oferowanych bonusów w kasynie online w 2023 roku",
      "filteredBonuses.excerpt":
        "Szukasz bonusów i promocji w kasynie online? Zapoznaj się z naszą aktualną bazą danych zawierającą liczne oferty bonusowe kasyn do wyboru.",

      "filteredCasinos.title":
        "Kompleksowa kompilacja wyboru kasyn online 2023",
      "filteredCasinos.excerpt":
        "Szukasz kasyna online? Poruszaj się po naszym aktualnym repozytorium zawierającym niezliczone kasyna czekające na Twoją uwagę.",

      "GuideSlotsPage.title": "Najnowsze przewodniki po kasynach",

      "button.read": "Czytaj więcej",
      "button.less": "Mniej czytać",
      "button.view": "Wyświetl wszystkie przewodniki",
      "button.load": "Załaduj więcej marek",
      "button.review": "Recenzję",
      "button.play": "Zagraj teraz",
    },
  },
  no: {
    translation: {
      guideposts: noTranslation,
      guideslotsguide:
        "Hvis du aspirerer til å treffe jackpotten, dykk inn i verden av nettbaserte spilleautomater gjennom våre omfattende guider på CasinoFreak.com. All den informasjonen du trenger, fra gevinstlinjer til progressive jackpotter, er tilgjengelig på én plattform! Hold deg oppdatert med de nyeste utviklingene innenfor spilleautomat-gamblingens rike og prøv til og med gratis spilleautomatspill direkte fra enheten din. Vår samling av guider for nettgambling sikrer enkel tilgang til alt du trenger å vite om spilleautomater. Selv om det kan virke som om spilleautomater er en ren 'trykk og snurr'-sak, finnes det triks og strategier som kan forbedre opplevelsen din. Våre guider er utformet for å gi deg en full forståelse av hvordan spilleautomater fungerer, og gi deg full kontroll over spilløktene dine.",
      guideslotsguide2:
        "På jakt etter det perfekte stedet for tips, morsomme fakta og råd for å øke sjansene dine for å vinne? Ikke lete lenger, for vi gir deg rask tilgang til noen av de mest relevante guidene for spilleautomater og gratis spilleautomatspill som er tilgjengelige på nettsiden vår.",
      "guideslotsguide.title": "Gamblingguider",
      "guideslotsguide.excerpt":
        "Hvis du aspirerer til å treffe jackpotten, dykk inn i verden av nettbaserte spilleautomater gjennom våre omfattende guider på CasinoFreak.com. All den informasjonen du trenger, fra gevinstlinjer til progressive jackpotter, er tilgjengelig på én plattform! Hold deg oppdatert med de nyeste utviklingene innenfor spilleautomat-gamblingens rike og prøv til og med gratis spilleautomatspill direkte fra enheten din.",

      "header.home": "Hjem",
      "header.bonuses": "Bonuser ▼",
      "header.casinos": "Kasinoer ▼",
      "header.spins": "Gratis Spinn",
      "header.guides": "Guider",
      "header.about": "Om Oss",
      "header.contacts": "Kontakter",

      "header.homebonuses": "Bonuser",
      "header.homecasinos": "Kasinoer",
      "header.homespins": "Gratis Spinn",
      "header.homeguides": "Gamblingguider",

      "header.nodeposit": "Ingen Innskuddsbonuser",
      "header.exclusive": "Eksklusive Bonuser",
      "header.deposit": "Innskuddsbonuser",
      "header.welcome": "Velkomstbonuser",
      "header.nowager": "Ingen Omsetningsbonuser",
      "header.cryptocasinos": "Krypto-Kasinoer",
      "header.fastwithdrawalcasinos": "Raske Uttakskasinoer",
      "header.livecasinos": "Live Kasinoer",
      "header.newestcasinos": "Nyeste Kasinoer",
      "header.certifiedcasinos": "Topp Sertifiserte Kasinoer",

      "searchBrands.placeholder": "Søk etter merker...",

      "home.title": "Anmeldelser av Nettbaserte Kasinoer & Gamblingguider",
      "home.description":
        "Autentiske spillanmeldelser, ingen innskuddsbonuser og et bredt utvalg av spill med gratisspill.",

      "topBrands.title": "CasinoFrog Beste Valg for 2023",
      "newBrands.title": "Siste Tilskudd til Kasinoer i 2023",
      "reviewBrands.title1": "Alle grundig gjennomgåtte nettbaserte kasinoer",
      "reviewBrands.description1":
        "Vi gjennomgår grundig alle eksisterende nettbaserte kasinoer, uavhengig av deres preferanser",

      "reviewBrands.question1.title":
        "For øyeblikket aktivt på jakt etter nye kasinonettsteder",
      "reviewBrands.question1.excerpt": "Vårt team søker stadig nylig",
      "reviewBrands.question1.link": "lanserte kasinonettsteder for evaluering",
      "reviewBrands.question1.excerpt2":
        ", med sikte på å gi mest mulig verdi til våre besøkende.",

      "reviewBrands.question2.title":
        "De mest nøyaktige detaljene om hvert kasino",
      "reviewBrands.question2.excerpt":
        "Vi vurderer hvert kasino grundig og samler omfattende informasjon for å sikre at våre besøkende er godt informert om hva de kan forvente før de spiller",

      "reviewBrands.question3.title":
        "Fremme en ansvarlig tilnærming til pengespill",
      "reviewBrands.question3.excerpt":
        "Hvert kasino gjennomgår vurdering av et upartisk team, med en omfattende, datadrevet og upartisk vurderingstilnærming",
      "reviewBrands.question3.link": "og upartisk gjennomgangstilnærming",

      "reviewBrands.button1": "Oppdag topprangerte bonuser",
      "reviewBrands.button2": "Oppdag topprangerte kasinoer",

      "reviewBrands.title2": "Vi er lidenskapelige for bonuser uten innskudd",
      "reviewBrands.description2":
        "Våre utrettelige innsats går med på å skape den ultimate databasen for bonuser uten innskudd.",

      "reviewBrands.question4.title":
        "Sammensetning av kampanjetilbud fra alle nettbaserte kasinoer der ute",
      "reviewBrands.question4.excerpt":
        "I vår streben etter å tilby det bredeste utvalget av valg, søker vi stadig ",
      "reviewBrands.question4.link": "ferske bonuser uten innskudd",
      "reviewBrands.question4.excerpt2":
        " for å utvide vår database, kilder fra alle eksisterende kasinonettsteder.",

      "reviewBrands.question5.title":
        "Oppretting av unike og eksklusive bonuser skreddersydd eksklusivt for våre verdifulle besøkende",
      "reviewBrands.question5.excerpt":
        "I vår streben etter å tilby det bredeste utvalget av valg, søker vi stadig friske ",
      "reviewBrands.question5.link": "eksklusive bonuser",
      "reviewBrands.question5.excerpt2":
        " funksjoner tilbud utformet kun for våre ærverdige besøkende.",

      "reviewBrands.question6.title":
        "Omfattende og nøyaktige detaljer om hver bonus",
      "reviewBrands.question6.excerpt":
        "I vår bonussamling finner du avgjørende informasjon og vilkår knyttet til hver bonus, sammen med klare forklaringer og illustrerende eksempler.",

      "filteredHome.title":
        "Katalog over alle 2023 nettbaserte kasinobonuser tilgjengelig",
      "filteredHome.description":
        "På jakt etter nettbaserte kasinobonuser og kampanjer? Utforsk vår nåværende database med mange kasinobonustilbud for ditt valg.",

      "navigateBrands.all": "Alle merker",
      "navigateBrands.recommend": "Anbefalte merker",
      "navigateBrands.newly": "Nye merker",
      "navigateBrands.crypto": "Kryptomerker",
      "navigateBrands.sports": "Topp sportsmerker",

      "allBrands.withLimits": "Grenser for uttak:",
      "allBrands.advantages": "Fordeler",
      "allBrands.depMethods": "Innskuddsmetoder",
      "allBrands.withMethods": "Uttaksmetoder",
      "allBrands.restricted": "Begrensede land",
      "allBrands.howGet": "Hvordan få bonus?",
      "allBrands.activate": "Aktiver bonusen i kasinokontoen din",

      "guideSlotsHome.title1": "Nettspillguider",
      "guideSlotsHome.title2": "Etablere en spillbudsjett",
      "guideSlotsHome.excerpt1":
        "Før du begynner en spilløkt, er det viktig å etablere et budsjett og holde deg strengt til det. Forsikre deg om at beløpet du tildeler er innenfor økonomisk rekkevidde, da det kanskje ikke er din heldige dag og pengene kan gå tapt.",
      "guideSlotsHome.title3": "Unngå å jage tap for enhver pris",
      "guideSlotsHome.excerpt2":
        "De uforutsigbare spillenes natur krever forsiktighet. Hvis budsjettet ditt går tapt, unngå å jage tapene, da denne oppførselen kan resultere i ytterligere økonomiske tap og til slutt føre til utviklingen av spilleavhengighet.",
      "guideSlotsHome.title3":
        "Vær oppmerksom på følelsene dine mens du deltar i spillaktiviteter",
      "guideSlotsHome.excerpt3":
        "Nyt underholdningen med spill mens du sørger for at det forblir underholdende ved å være oppmerksom på følelsene dine under spillet. Hvis du oppdager følelser av økt sinne, frustrasjon eller vanskeligheter med å ta rasjonelle beslutninger, er det nødvendig å slutte å spille.",

      "previewBonuses.title": "Fremmer en ansvarlig tilnærming til pengespill",
      "previewBonuses.excerpt":
        "På jakt etter spennende nettbaserte kasinobonuser og kampanjer? Ikke lete lenger! Vår omfattende og regelmessig oppdaterte database tilbyr et stort utvalg av fristende kasinobonustilbud som imøtekommer alle spilleres preferanser. Enten du er interessert i gratisspinn, innskuddsbonuser eller cashback-belønninger, har vi deg dekket med de beste tilbudene som er tilgjengelige i spillverdenen. Ikke gå glipp av disse eksklusive tilbudene – begynn utforskningen nå og øk spillopplevelsen din med lukrative bonuser!",

      "nodepositbonuses.title":
        "Uimotståelig i 2023: Kasinobonuser uten innskudd og unike bonuskoder",
      "nodepositbonuses.excerpt":
        "Friske i 2023: En kontinuerlig oppdatert katalog over avtaler om bonuser uten innskudd for virtuelle kasinoer. Få eksklusive kampanjekoder og nyt gratis spinn-belønninger.",

      "exclusivebonuses.title":
        "Omfattende samling av nettbaserte kasinobonuser tilgjengelig i 2023",
      "exclusivebonuses.excerpt":
        "På jakt etter kasinobonuser og kampanjer på nettet? Utforsk vår nåværende og godt vedlikeholdte samling som inneholder et mylder av kasinobonustilbud for din vurdering.",

      "depositbonuses.title":
        "Beste kasino velkomstbonuser på ditt første innskudd i 2023",
      "depositbonuses.excerpt":
        "Velg blant en rekke førsteklasses introduksjonsbonuser på kasino og motta ekstra bonusmidler som er inkludert i ditt første innskudd. Eksklusive registreringsinsentivavtaler utformet for nye deltakere.",

      "welcomebonuses.title": "Velkomstbonuser 2023",
      "welcomebonuses.excerpt":
        "Hvis du leter etter en kvalitetskasinoopplevelse kombinert med fristende bonuser, har vi den perfekte løsningen skreddersydd for deg! Velkomstbonusen står som en gest fra kasinoer til deres nye spillere og presenteres vanligvis som gratisspinn eller cashback-belønninger. Utforsk vår samling av introduksjonsbonuser fra velkjente online kasinoer, og sikre en ideell match for dine preferanser.",

      "nowagerbonuses.title":
        "Innskuddsfrie kasinobonuser uten omsetningskrav i 2023",
      "nowagerbonuses.excerpt":
        "På jakt etter innskuddsfrie bonuser uten omsetningskrav? Utforsk vår eksklusive samling av omsetningsfrie bonuser, kun tilgjengelig på Casino.",

      "cryptocasinos.title":
        "Topp kryptovaluta bettingplattformer og Bitcoin kasinosider i 2023",
      "cryptocasinos.excerpt":
        "Utforsk vår samling av førsteklasses online kasinoer for Bitcoin sammen med spillplattformer som omfavner BTC og alternative kryptovalutaer som levedyktige betalingsmetoder. Dykk ned i upartiske vurderinger og finn den ultimate Bitcoin kasinodestinasjonen tilpasset dine preferanser.",

      "fastcasinos.title":
        "Raskeste utbetalingskasinoer og spillplattformer i 2023",
      "fastcasinos.excerpt":
        "Det mest fordelsaktige med raske utbetalingskasinoer er deres raske og pålitelige utbetaling av gevinstene dine. Vi har nøye utarbeidet denne oversikten for å hjelpe deg med å finne de beste kasinoene som tilbyr hurtige uttaksprosesser, spesielt når gevinstene dine øker raskt og betydelig. Bare start et uttak og forestill deg de spennende mulighetene for å fordele disse midlene!",

      "livecasinos.title": "Premierte live dealer kasinoer i 2023",
      "livecasinos.excerpt":
        "Utforsk denne samlingen av førsteklasses live dealer kasinoer for en dyptgående spillopplevelse og oppdag ledende online kasinoer som arrangerer fengslende live kasinospill som er tilpasset dine preferanser.",

      "newestasinos.title": "Ferske tilskudd til nettbasino scenen i 2023",
      "newestasinos.excerpt":
        "På jakt etter ferske nettbaserte kasino plattformer i 2023? Oppdag nylig lanserte kasinosider som tilbyr enestående insentiver og nyskapende funksjoner. Konstant oppdatert for din utforskning.",

      "certifiedcasinos.title": "Premierte sertifiserte kasinoer i 2023",
      "certifiedcasinos.excerpt":
        "Spill utgjør en betydelig sektor, og med hjelp av autoriserte internettkasinoer kan du nyte din favoritthobby med ro i sjelen, forsikret om at den er overvåket av offisielle myndigheter. Avanserte sikkerhetsprotokoller sikrer konfidensialiteten til all personlig informasjon!",

      "filteredBonuses.title":
        "Katalog over alle nettbaserte kasinobonuser tilbudt i 2023",
      "filteredBonuses.excerpt":
        "På jakt etter nettbaserte kasinobonuser og kampanjer? Utforsk vår nåværende database som inneholder mange kasinobonustilbud for ditt valg.",

      "filteredCasinos.title":
        "Omfattende samling av nettbasert kasinoutvalg i 2023",
      "filteredCasinos.excerpt":
        "På jakt etter et nettbasert kasino? Naviger gjennom vår oppdaterte database som inneholder et mangfold av kasinoer som venter på din vurdering.",

      "GuideSlotsPage.title": "De nyeste kasinoguidene",

      "button.read": "Les mer",
      "button.less": "Les mindre",

      "button.view": "Vis alle guider",
      "button.load": "Last inn flere merker",
      "button.review": "Les anmeldelse",
      "button.play": "Spill nå",

      // ... (и так далее, остальные переводы)
    },
  },

  de: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
      "Wenn Sie darauf hoffen, den Jackpot zu knacken, tauchen Sie in die Welt der Online-Slots ein durch unsere umfassenden Anleitungen auf CasinoFreak.com. Alle Informationen, die Sie benötigen, von Gewinnlinien bis zu progressiven Jackpots, sind auf einer einzigen Plattform verfügbar! Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen im Bereich des Slot-Glücksspiels und probieren Sie sogar kostenlose Slot-Spiele direkt von Ihrem Gerät aus. Unsere Sammlung von Online-Glücksspielführern ermöglicht einen einfachen Zugang zu allem, was es über Slots zu wissen gibt. Während es vielleicht so aussieht, als ob Spielautomaten eine Frage von einfachem 'Drehen und Gewinnen' sind, gibt es Tricks und Strategien, die Ihre Erfahrung verbessern können. Unsere Anleitungen sollen Ihnen ein umfassendes Verständnis dafür vermitteln, wie Slots funktionieren, und Ihnen die volle Kontrolle über Ihre Spiel-Sessions geben.",
    guideslotsguide2:
      "Auf der Suche nach dem perfekten Aufbewahrungsort für Tipps, unterhaltsame Fakten und Ratschläge, um Ihre Gewinnchancen zu steigern? Suchen Sie nicht weiter, denn wir bieten schnellen Zugang zu einigen der relevantesten Slot-Anleitungen und kostenlosen Slot-Spielen, die auf unserer Website gehostet werden.",
    "guideslotsguide.title": "Glücksspielführer",
    "guideslotsguide.excerpt":
      "Wenn Sie darauf hoffen, den Jackpot zu knacken, tauchen Sie in die Welt der Online-Slots ein durch unsere umfassenden Anleitungen auf CasinoFreak.com. Alle Informationen, die Sie benötigen, von Gewinnlinien bis zu progressiven Jackpots, sind auf einer einzigen Plattform verfügbar! Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen im Bereich des Slot-Glücksspiels und probieren Sie sogar kostenlose Slot-Spiele direkt von Ihrem Gerät aus.",
    
    "header.home": "Startseite",
    "header.bonuses": "Boni ▼",
    "header.casinos": "Kasinos ▼",
    "header.spins": "Freispiele",
    "header.guides": "Anleitungen",
    "header.about": "Über uns",
    "header.contacts": "Kontakte",
    
    "header.homebonuses": "Boni",
    "header.homecasinos": "Kasinos",
    "header.homespins": "Freispiele",
    "header.homeguides": "Glücksspielführer",
    
    "header.nodeposit": "Keine Einzahlungsboni",
    "header.exclusive": "Exklusive Boni",
    "header.deposit": "Einzahlungsboni",
    "header.welcome": "Willkommensboni",
    "header.nowager": "Bonis ohne Umsatzbedingungen",
    "header.cryptocasinos": "Krypto-Kasinos",
    "header.fastwithdrawalcasinos": "Kasinos mit schneller Auszahlung",
    "header.livecasinos": "Live-Kasinos",
    "header.newestcasinos": "Neueste Kasinos",
    "header.certifiedcasinos": "Top zertifizierte Kasinos",

    "searchBrands.placeholder": "Marken suchen...",

    "home.title": "Online Casino Bewertungen & Glücksspielhandbücher",
    "home.description":
      "Authentische Spielerbewertungen, keine Einzahlungsboni und eine breite Auswahl an Spielen mit kostenlosem Spiel.",
    
    "topBrands.title": "CasinoFrog Top-Auswahl für 2023",
    "newBrands.title": "Neueste Casino-Zugänge 2023",
    
    "reviewBrands.title1": "Alle sorgfältig überprüften Online-Casinos",
    "reviewBrands.description1":
      "Wir überprüfen gründlich alle vorhandenen Online-Casinos, unabhängig von ihren Vorlieben",
    
    "reviewBrands.question1.title":
      "Derzeit auf der Suche nach neuen Casino-Websites",
    "reviewBrands.question1.excerpt":
      "Unser Team sucht ständig nach kürzlich gestarteten Casino-Websites zur Bewertung",
    "reviewBrands.question1.link": "gestarteten Casino-Websites zur Bewertung",
    "reviewBrands.question1.excerpt2":
      ", mit dem Ziel, unseren Besuchern höchsten Wert zu bieten.",
    
    "reviewBrands.question2.title":
      "Die präzisesten Details zu jedem Casino",
    "reviewBrands.question2.excerpt":
      "Wir überprüfen jedes Casino sorgfältig und sammeln umfangreiche Informationen, um sicherzustellen, dass unsere Besucher gut informiert sind, was sie vor dem Spielen erwarten können",
    
    "reviewBrands.question3.title":
      "Förderung eines verantwortungsbewussten Ansatzes für das Glücksspiel",
    "reviewBrands.question3.excerpt":
      "Jedes Casino wird von einem unparteiischen Team bewertet und folgt einem umfassenden, datengetriebenen und unvoreingenommenen Überprüfungsansatz",
    "reviewBrands.question3.link": "und unvoreingenommenen Überprüfungsansatz",
    
    "reviewBrands.button1": "Top-Boni entdecken",
    "reviewBrands.button2": "Top-Casinos entdecken",
    
    "reviewBrands.title2": "Wir sind leidenschaftlich über Boni ohne Einzahlung",
    "reviewBrands.description2":
      "Unsere unermüdlichen Bemühungen fließen in die Erstellung der ultimativen Datenbank für Boni ohne Einzahlung.",
    
    "reviewBrands.question4.title":
      "Zusammenstellen von Werbedeals von jedem Online-Casino da draußen",
    "reviewBrands.question4.excerpt":
      "In unserem Bestreben, die größtmögliche Auswahl zu bieten, suchen wir ständig nach frischen Boni ohne Einzahlung",
    "reviewBrands.question4.link": "frischen Boni ohne Einzahlung",
    "reviewBrands.question4.excerpt2":
      ", um unsere Datenbank zu erweitern, die von allen bestehenden Casino-Websites stammt.",
    
    "reviewBrands.question5.title":
      "Erstellen von einzigartigen und exklusiven Boni, die ausschließlich auf unsere geschätzten Besucher zugeschnitten sind",
    "reviewBrands.question5.excerpt":
      "In unserem Bestreben, die größtmögliche Auswahl zu bieten, suchen wir ständig nach frischen",
    "reviewBrands.question5.link": "exklusiven Boni",
    "reviewBrands.question5.excerpt2":
      " enthält Angebote, die ausschließlich für unsere geschätzten Besucher entwickelt wurden.",
    
    "reviewBrands.question6.title":
      "Umfassende und präzise Details zu jedem Bonus",
    "reviewBrands.question6.excerpt":
      "In unserer Bonusdatenbank finden Sie wichtige Informationen und Bedingungen zu jedem Bonus sowie klare Erklärungen und veranschaulichende Beispiele.",
    

      "filteredHome.title": "Katalog aller Online Casino Boni für 2023",
      "filteredHome.description":
        "Suchen Sie nach Online Casino Boni und Promotionen? Entdecken Sie unsere aktuelle Datenbank mit zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "navigateBrands.all": "Alle Marken",
      "navigateBrands.recommend": "Empfohlene Marken",
      "navigateBrands.newly": "Neue Marken",
      "navigateBrands.crypto": "Krypto-Marken",
      "navigateBrands.sports": "Top Sport-Marken",
      
      "allBrands.withLimits": "Auszahlungslimits:",
      "allBrands.advantages": "Vorteile",
      "allBrands.depMethods": "Einzahlungsmethoden",
      "allBrands.withMethods": "Auszahlungsmethoden",
      "allBrands.restricted": "Eingeschränkte Länder",
      "allBrands.howGet": "Wie erhalte ich den Bonus?",
      "allBrands.activate": "Aktivieren Sie den Bonus in Ihrem Casino-Konto",
      
      "guideSlotsHome.title1": "Online Glücksspielhandbücher",
      "guideSlotsHome.title2": "Budget für Glücksspiele festlegen",
      "guideSlotsHome.excerpt1":
        "Bevor Sie eine Glücksspielsitzung beginnen, ist es wichtig, ein Budget festzulegen und strikt einzuhalten. Stellen Sie sicher, dass der zugewiesene Betrag innerhalb Ihrer finanziellen Möglichkeiten liegt, da es möglicherweise nicht Ihr Glückstag ist und verloren gehen könnte.",
      "guideSlotsHome.title3": "Verfolgen Sie Ihre Verluste um jeden Preis nicht",
      "guideSlotsHome.excerpt2":
        "Die unvorhersehbare Natur von Glücksspielen erfordert Vorsicht. Wenn Ihr Budget verloren geht, vermeiden Sie es, Ihren Verlusten hinterherzujagen, da dieses Verhalten zu weiteren finanziellen Verlusten und letztendlich zur Entwicklung einer Glücksspielsucht führen kann.",
      "guideSlotsHome.title3":
        "Achten Sie genau auf Ihre Emotionen während des Glücksspiels",
      "guideSlotsHome.excerpt3":
        "Genießen Sie das Unterhaltungsangebot des Glücksspiels und achten Sie dabei darauf, dass es beim Spielen angenehm bleibt. Wenn Sie erhöhte Wut, Frustration oder Schwierigkeiten bei rationalen Entscheidungen bemerken, ist es unerlässlich, mit dem Spielen aufzuhören.",
      
      "previewBonuses.title": "Förderung eines verantwortungsbewussten Ansatzes für das Glücksspiel",
      "previewBonuses.excerpt":
        "Suchen Sie nach aufregenden Online Casino Boni und Promotionen? Suchen Sie nicht weiter! Unsere umfangreiche und regelmäßig aktualisierte Datenbank bietet eine große Auswahl an verlockenden Casino Bonusangeboten, die alle Spielerpräferenzen abdecken. Egal, ob Sie Freispiele, Einzahlungsboni oder Cashback-Belohnungen bevorzugen, wir haben die besten Angebote aus der Welt des Glücksspiels für Sie. Verpassen Sie nicht diese exklusiven Angebote – starten Sie jetzt und steigern Sie Ihre Spielerfahrung mit lukrativen Boni!",
      
      "nodepositbonuses.title":
        "Unwiderstehlich im Jahr 2023: Boni ohne Einzahlung im Casino und einzigartige Bonuscodes",
      "nodepositbonuses.excerpt":
        "Neu im Jahr 2023: Ein kontinuierlich aktualisierter Katalog von Boni ohne Einzahlung für virtuelle Casinos. Erhalten Sie exklusive Promo-Codes und genießen Sie kostenlose Spins-Belohnungen.",
      
      "exclusivebonuses.title":
        "Umfassende Zusammenstellung von Online Casino Boni zugänglich im Jahr 2023",
      "exclusivebonuses.excerpt":
        "Suchen Sie im Web nach Casino Boni und Promotionen? Entdecken Sie unsere aktuelle, gut gepflegte Sammlung von zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "depositbonuses.title":
        "Beste Casino Willkommensboni für Ihre erste Einzahlung im Jahr 2023",
      "depositbonuses.excerpt":
        "Wählen Sie aus einer Vielzahl von erstklassigen Einführungs-Casino-Belohnungen und erhalten Sie zusätzliche Bonusmittel, die in Ihre erste Einzahlung integriert sind. Exklusive Anmeldeanreiz-Angebote für neue Teilnehmer.",
      
      "welcomebonuses.title": "Willkommensboni 2023",
      "welcomebonuses.excerpt":
        "Wenn Sie nach einer hochwertigen Casino-Erfahrung suchen, die mit verlockenden Boni kombiniert ist, haben wir die perfekte Lösung für Sie! Der Willkommensbonus ist eine Geste der Casinos an ihre neuen Spieler, die in der Regel als Freispiele oder Cashback-Belohnungen präsentiert werden. Erkunden Sie unsere Zusammenstellung von Einführungs-Boni von renommierten Online Casinos, um eine ideale Übereinstimmung für Ihre Präferenzen sicherzustellen.",
      
      "nowagerbonuses.title": "Bonuscodes ohne Wettanforderungen 2023",
      "nowagerbonuses.excerpt":
        "Suchen Sie nach Bonuscodes ohne Wettanforderungen? Entdecken Sie unsere exklusive Zusammenstellung von wettanforderungsfreien Bonuscodes, die nur im Casino erhältlich sind.",
      
      "cryptocasinos.title":
        "Top Kryptowährungs-Wettplattformen & Bitcoin Casino Seiten im Jahr 2023",
      "cryptocasinos.excerpt":
        "Erkunden Sie unsere Zusammenstellung erstklassiger Online Casinos für Bitcoin sowie Wettplattformen, die BTC und alternative Kryptowährungen als tragfähige Zahlungsmethoden akzeptieren. Tauchen Sie in unvoreingenommene Bewertungen ein und finden Sie das ultimative Bitcoin Casino-Ziel, das auf Ihre Präferenzen zugeschnitten ist.",
      

        "fastcasinos.title":
        "Das schnellste Auszahlungs-Casino und Wettplattformen 2023",
      "fastcasinos.excerpt":
        "Der vorteilhafteste Aspekt von Casinos mit schnellen Auszahlungen ist ihre schnelle und zuverlässige Ausschüttung Ihrer Gewinne. Wir haben dieses Inventar sorgfältig erstellt, um Ihnen bei der Suche nach den besten Casinos zu helfen, die beschleunigte Auszahlungsprozesse anbieten, insbesondere wenn Ihre Gewinne schnell und signifikant steigen. Starten Sie einfach eine Auszahlung und stellen Sie sich die aufregenden Möglichkeiten zur Verwendung dieser Mittel vor!",
      
      "livecasinos.title": "Hervorragende Live-Dealer Casinos des Jahres 2023",
      "livecasinos.excerpt":
        "Erkunden Sie diese Zusammenstellung erstklassiger Live-Dealer Casinos für ein immersives Spielerlebnis und entdecken Sie erstklassige Online Casinos, die fesselnde Live-Casino-Spiele nach Ihren Vorlieben anbieten.",
      
      "newestasinos.title": "Neueinsteiger in der Online Casino Szene 2023",
      "newestasinos.excerpt":
        "Auf der Suche nach frischen Online Casino Plattformen für das Jahr 2023? Entdecken Sie neu gestartete Casino Websites, die herausragende Anreize und innovative Merkmale bieten. Ständig aktualisiert für Ihre Erkundung.",
      
      "certifiedcasinos.title": "Erstklassige akkreditierte Casinos im Jahr 2023",
      "certifiedcasinos.excerpt":
        "Das Gaming bildet einen bedeutenden Sektor, und mit der Unterstützung von autorisierten Internet-Casinos können Sie Ihr bevorzugtes Hobby mit Ruhe genießen und sich darauf verlassen, dass es von offiziellen staatlichen Stellen überwacht wird. Modernste Sicherheitsprotokolle gewährleisten die Vertraulichkeit aller persönlichen Daten!",
      
      "filteredBonuses.title":
        "Katalog aller Online Casino Boni für das Jahr 2023",
      "filteredBonuses.excerpt":
        "Suchen Sie nach Online Casino Boni und Promotionen? Entdecken Sie unsere aktuelle Datenbank mit zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "filteredCasinos.title":
        "Umfassende Zusammenstellung der Online Casino Auswahl für das Jahr 2023",
      "filteredCasinos.excerpt":
        "Auf der Suche nach einem Online Casino? Navigieren Sie durch unser aktuelles Repository, das eine Vielzahl von Casinos für Ihre Überlegung bereithält.",
      
      "GuideSlotsPage.title": "Neueste Casino Anleitungen",
      
      "button.read": "Mehr lesen",
      "button.less": "Weniger lesen",
      
      "button.view": "Alle Anleitungen anzeigen",
      "button.load": "Mehr Marken laden",
      "button.review": "Rezension lesen",
      "button.play": "Jetzt spielen",
      
    },
  },
  at: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
      "Wenn Sie darauf hoffen, den Jackpot zu knacken, tauchen Sie in die Welt der Online-Slots ein durch unsere umfassenden Anleitungen auf CasinoFreak.com. Alle Informationen, die Sie benötigen, von Gewinnlinien bis zu progressiven Jackpots, sind auf einer einzigen Plattform verfügbar! Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen im Bereich des Slot-Glücksspiels und probieren Sie sogar kostenlose Slot-Spiele direkt von Ihrem Gerät aus. Unsere Sammlung von Online-Glücksspielführern ermöglicht einen einfachen Zugang zu allem, was es über Slots zu wissen gibt. Während es vielleicht so aussieht, als ob Spielautomaten eine Frage von einfachem 'Drehen und Gewinnen' sind, gibt es Tricks und Strategien, die Ihre Erfahrung verbessern können. Unsere Anleitungen sollen Ihnen ein umfassendes Verständnis dafür vermitteln, wie Slots funktionieren, und Ihnen die volle Kontrolle über Ihre Spiel-Sessions geben.",
    guideslotsguide2:
      "Auf der Suche nach dem perfekten Aufbewahrungsort für Tipps, unterhaltsame Fakten und Ratschläge, um Ihre Gewinnchancen zu steigern? Suchen Sie nicht weiter, denn wir bieten schnellen Zugang zu einigen der relevantesten Slot-Anleitungen und kostenlosen Slot-Spielen, die auf unserer Website gehostet werden.",
    "guideslotsguide.title": "Glücksspielführer",
    "guideslotsguide.excerpt":
      "Wenn Sie darauf hoffen, den Jackpot zu knacken, tauchen Sie in die Welt der Online-Slots ein durch unsere umfassenden Anleitungen auf CasinoFreak.com. Alle Informationen, die Sie benötigen, von Gewinnlinien bis zu progressiven Jackpots, sind auf einer einzigen Plattform verfügbar! Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen im Bereich des Slot-Glücksspiels und probieren Sie sogar kostenlose Slot-Spiele direkt von Ihrem Gerät aus.",
    
    "header.home": "Startseite",
    "header.bonuses": "Boni ▼",
    "header.casinos": "Kasinos ▼",
    "header.spins": "Freispiele",
    "header.guides": "Anleitungen",
    "header.about": "Über uns",
    "header.contacts": "Kontakte",
    
    "header.homebonuses": "Boni",
    "header.homecasinos": "Kasinos",
    "header.homespins": "Freispiele",
    "header.homeguides": "Glücksspielführer",
    
    "header.nodeposit": "Keine Einzahlungsboni",
    "header.exclusive": "Exklusive Boni",
    "header.deposit": "Einzahlungsboni",
    "header.welcome": "Willkommensboni",
    "header.nowager": "Bonis ohne Umsatzbedingungen",
    "header.cryptocasinos": "Krypto-Kasinos",
    "header.fastwithdrawalcasinos": "Kasinos mit schneller Auszahlung",
    "header.livecasinos": "Live-Kasinos",
    "header.newestcasinos": "Neueste Kasinos",
    "header.certifiedcasinos": "Top zertifizierte Kasinos",

    "searchBrands.placeholder": "Marken suchen...",

    "home.title": "Online Casino Bewertungen & Glücksspielhandbücher",
    "home.description":
      "Authentische Spielerbewertungen, keine Einzahlungsboni und eine breite Auswahl an Spielen mit kostenlosem Spiel.",
    
    "topBrands.title": "CasinoFrog Top-Auswahl für 2023",
    "newBrands.title": "Neueste Casino-Zugänge 2023",
    
    "reviewBrands.title1": "Alle sorgfältig überprüften Online-Casinos",
    "reviewBrands.description1":
      "Wir überprüfen gründlich alle vorhandenen Online-Casinos, unabhängig von ihren Vorlieben",
    
    "reviewBrands.question1.title":
      "Derzeit auf der Suche nach neuen Casino-Websites",
    "reviewBrands.question1.excerpt":
      "Unser Team sucht ständig nach kürzlich gestarteten Casino-Websites zur Bewertung",
    "reviewBrands.question1.link": "gestarteten Casino-Websites zur Bewertung",
    "reviewBrands.question1.excerpt2":
      ", mit dem Ziel, unseren Besuchern höchsten Wert zu bieten.",
    
    "reviewBrands.question2.title":
      "Die präzisesten Details zu jedem Casino",
    "reviewBrands.question2.excerpt":
      "Wir überprüfen jedes Casino sorgfältig und sammeln umfangreiche Informationen, um sicherzustellen, dass unsere Besucher gut informiert sind, was sie vor dem Spielen erwarten können",
    
    "reviewBrands.question3.title":
      "Förderung eines verantwortungsbewussten Ansatzes für das Glücksspiel",
    "reviewBrands.question3.excerpt":
      "Jedes Casino wird von einem unparteiischen Team bewertet und folgt einem umfassenden, datengetriebenen und unvoreingenommenen Überprüfungsansatz",
    "reviewBrands.question3.link": "und unvoreingenommenen Überprüfungsansatz",
    
    "reviewBrands.button1": "Top-Boni entdecken",
    "reviewBrands.button2": "Top-Casinos entdecken",
    
    "reviewBrands.title2": "Wir sind leidenschaftlich über Boni ohne Einzahlung",
    "reviewBrands.description2":
      "Unsere unermüdlichen Bemühungen fließen in die Erstellung der ultimativen Datenbank für Boni ohne Einzahlung.",
    
    "reviewBrands.question4.title":
      "Zusammenstellen von Werbedeals von jedem Online-Casino da draußen",
    "reviewBrands.question4.excerpt":
      "In unserem Bestreben, die größtmögliche Auswahl zu bieten, suchen wir ständig nach frischen Boni ohne Einzahlung",
    "reviewBrands.question4.link": "frischen Boni ohne Einzahlung",
    "reviewBrands.question4.excerpt2":
      ", um unsere Datenbank zu erweitern, die von allen bestehenden Casino-Websites stammt.",
    
    "reviewBrands.question5.title":
      "Erstellen von einzigartigen und exklusiven Boni, die ausschließlich auf unsere geschätzten Besucher zugeschnitten sind",
    "reviewBrands.question5.excerpt":
      "In unserem Bestreben, die größtmögliche Auswahl zu bieten, suchen wir ständig nach frischen",
    "reviewBrands.question5.link": "exklusiven Boni",
    "reviewBrands.question5.excerpt2":
      " enthält Angebote, die ausschließlich für unsere geschätzten Besucher entwickelt wurden.",
    
    "reviewBrands.question6.title":
      "Umfassende und präzise Details zu jedem Bonus",
    "reviewBrands.question6.excerpt":
      "In unserer Bonusdatenbank finden Sie wichtige Informationen und Bedingungen zu jedem Bonus sowie klare Erklärungen und veranschaulichende Beispiele.",
    

      "filteredHome.title": "Katalog aller Online Casino Boni für 2023",
      "filteredHome.description":
        "Suchen Sie nach Online Casino Boni und Promotionen? Entdecken Sie unsere aktuelle Datenbank mit zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "navigateBrands.all": "Alle Marken",
      "navigateBrands.recommend": "Empfohlene Marken",
      "navigateBrands.newly": "Neue Marken",
      "navigateBrands.crypto": "Krypto-Marken",
      "navigateBrands.sports": "Top Sport-Marken",
      
      "allBrands.withLimits": "Auszahlungslimits:",
      "allBrands.advantages": "Vorteile",
      "allBrands.depMethods": "Einzahlungsmethoden",
      "allBrands.withMethods": "Auszahlungsmethoden",
      "allBrands.restricted": "Eingeschränkte Länder",
      "allBrands.howGet": "Wie erhalte ich den Bonus?",
      "allBrands.activate": "Aktivieren Sie den Bonus in Ihrem Casino-Konto",
      
      "guideSlotsHome.title1": "Online Glücksspielhandbücher",
      "guideSlotsHome.title2": "Budget für Glücksspiele festlegen",
      "guideSlotsHome.excerpt1":
        "Bevor Sie eine Glücksspielsitzung beginnen, ist es wichtig, ein Budget festzulegen und strikt einzuhalten. Stellen Sie sicher, dass der zugewiesene Betrag innerhalb Ihrer finanziellen Möglichkeiten liegt, da es möglicherweise nicht Ihr Glückstag ist und verloren gehen könnte.",
      "guideSlotsHome.title3": "Verfolgen Sie Ihre Verluste um jeden Preis nicht",
      "guideSlotsHome.excerpt2":
        "Die unvorhersehbare Natur von Glücksspielen erfordert Vorsicht. Wenn Ihr Budget verloren geht, vermeiden Sie es, Ihren Verlusten hinterherzujagen, da dieses Verhalten zu weiteren finanziellen Verlusten und letztendlich zur Entwicklung einer Glücksspielsucht führen kann.",
      "guideSlotsHome.title3":
        "Achten Sie genau auf Ihre Emotionen während des Glücksspiels",
      "guideSlotsHome.excerpt3":
        "Genießen Sie das Unterhaltungsangebot des Glücksspiels und achten Sie dabei darauf, dass es beim Spielen angenehm bleibt. Wenn Sie erhöhte Wut, Frustration oder Schwierigkeiten bei rationalen Entscheidungen bemerken, ist es unerlässlich, mit dem Spielen aufzuhören.",
      
      "previewBonuses.title": "Förderung eines verantwortungsbewussten Ansatzes für das Glücksspiel",
      "previewBonuses.excerpt":
        "Suchen Sie nach aufregenden Online Casino Boni und Promotionen? Suchen Sie nicht weiter! Unsere umfangreiche und regelmäßig aktualisierte Datenbank bietet eine große Auswahl an verlockenden Casino Bonusangeboten, die alle Spielerpräferenzen abdecken. Egal, ob Sie Freispiele, Einzahlungsboni oder Cashback-Belohnungen bevorzugen, wir haben die besten Angebote aus der Welt des Glücksspiels für Sie. Verpassen Sie nicht diese exklusiven Angebote – starten Sie jetzt und steigern Sie Ihre Spielerfahrung mit lukrativen Boni!",
      
      "nodepositbonuses.title":
        "Unwiderstehlich im Jahr 2023: Boni ohne Einzahlung im Casino und einzigartige Bonuscodes",
      "nodepositbonuses.excerpt":
        "Neu im Jahr 2023: Ein kontinuierlich aktualisierter Katalog von Boni ohne Einzahlung für virtuelle Casinos. Erhalten Sie exklusive Promo-Codes und genießen Sie kostenlose Spins-Belohnungen.",
      
      "exclusivebonuses.title":
        "Umfassende Zusammenstellung von Online Casino Boni zugänglich im Jahr 2023",
      "exclusivebonuses.excerpt":
        "Suchen Sie im Web nach Casino Boni und Promotionen? Entdecken Sie unsere aktuelle, gut gepflegte Sammlung von zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "depositbonuses.title":
        "Beste Casino Willkommensboni für Ihre erste Einzahlung im Jahr 2023",
      "depositbonuses.excerpt":
        "Wählen Sie aus einer Vielzahl von erstklassigen Einführungs-Casino-Belohnungen und erhalten Sie zusätzliche Bonusmittel, die in Ihre erste Einzahlung integriert sind. Exklusive Anmeldeanreiz-Angebote für neue Teilnehmer.",
      
      "welcomebonuses.title": "Willkommensboni 2023",
      "welcomebonuses.excerpt":
        "Wenn Sie nach einer hochwertigen Casino-Erfahrung suchen, die mit verlockenden Boni kombiniert ist, haben wir die perfekte Lösung für Sie! Der Willkommensbonus ist eine Geste der Casinos an ihre neuen Spieler, die in der Regel als Freispiele oder Cashback-Belohnungen präsentiert werden. Erkunden Sie unsere Zusammenstellung von Einführungs-Boni von renommierten Online Casinos, um eine ideale Übereinstimmung für Ihre Präferenzen sicherzustellen.",
      
      "nowagerbonuses.title": "Bonuscodes ohne Wettanforderungen 2023",
      "nowagerbonuses.excerpt":
        "Suchen Sie nach Bonuscodes ohne Wettanforderungen? Entdecken Sie unsere exklusive Zusammenstellung von wettanforderungsfreien Bonuscodes, die nur im Casino erhältlich sind.",
      
      "cryptocasinos.title":
        "Top Kryptowährungs-Wettplattformen & Bitcoin Casino Seiten im Jahr 2023",
      "cryptocasinos.excerpt":
        "Erkunden Sie unsere Zusammenstellung erstklassiger Online Casinos für Bitcoin sowie Wettplattformen, die BTC und alternative Kryptowährungen als tragfähige Zahlungsmethoden akzeptieren. Tauchen Sie in unvoreingenommene Bewertungen ein und finden Sie das ultimative Bitcoin Casino-Ziel, das auf Ihre Präferenzen zugeschnitten ist.",
      

        "fastcasinos.title":
        "Das schnellste Auszahlungs-Casino und Wettplattformen 2023",
      "fastcasinos.excerpt":
        "Der vorteilhafteste Aspekt von Casinos mit schnellen Auszahlungen ist ihre schnelle und zuverlässige Ausschüttung Ihrer Gewinne. Wir haben dieses Inventar sorgfältig erstellt, um Ihnen bei der Suche nach den besten Casinos zu helfen, die beschleunigte Auszahlungsprozesse anbieten, insbesondere wenn Ihre Gewinne schnell und signifikant steigen. Starten Sie einfach eine Auszahlung und stellen Sie sich die aufregenden Möglichkeiten zur Verwendung dieser Mittel vor!",
      
      "livecasinos.title": "Hervorragende Live-Dealer Casinos des Jahres 2023",
      "livecasinos.excerpt":
        "Erkunden Sie diese Zusammenstellung erstklassiger Live-Dealer Casinos für ein immersives Spielerlebnis und entdecken Sie erstklassige Online Casinos, die fesselnde Live-Casino-Spiele nach Ihren Vorlieben anbieten.",
      
      "newestasinos.title": "Neueinsteiger in der Online Casino Szene 2023",
      "newestasinos.excerpt":
        "Auf der Suche nach frischen Online Casino Plattformen für das Jahr 2023? Entdecken Sie neu gestartete Casino Websites, die herausragende Anreize und innovative Merkmale bieten. Ständig aktualisiert für Ihre Erkundung.",
      
      "certifiedcasinos.title": "Erstklassige akkreditierte Casinos im Jahr 2023",
      "certifiedcasinos.excerpt":
        "Das Gaming bildet einen bedeutenden Sektor, und mit der Unterstützung von autorisierten Internet-Casinos können Sie Ihr bevorzugtes Hobby mit Ruhe genießen und sich darauf verlassen, dass es von offiziellen staatlichen Stellen überwacht wird. Modernste Sicherheitsprotokolle gewährleisten die Vertraulichkeit aller persönlichen Daten!",
      
      "filteredBonuses.title":
        "Katalog aller Online Casino Boni für das Jahr 2023",
      "filteredBonuses.excerpt":
        "Suchen Sie nach Online Casino Boni und Promotionen? Entdecken Sie unsere aktuelle Datenbank mit zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "filteredCasinos.title":
        "Umfassende Zusammenstellung der Online Casino Auswahl für das Jahr 2023",
      "filteredCasinos.excerpt":
        "Auf der Suche nach einem Online Casino? Navigieren Sie durch unser aktuelles Repository, das eine Vielzahl von Casinos für Ihre Überlegung bereithält.",
      
      "GuideSlotsPage.title": "Neueste Casino Anleitungen",
      
      "button.read": "Mehr lesen",
      "button.less": "Weniger lesen",
      
      "button.view": "Alle Anleitungen anzeigen",
      "button.load": "Mehr Marken laden",
      "button.review": "Rezension lesen",
      "button.play": "Jetzt spielen",
      
    },
  },
  ch: {
    translation: {
      guideposts: enTranslation,
      guideslotsguide:
      "Wenn Sie darauf hoffen, den Jackpot zu knacken, tauchen Sie in die Welt der Online-Slots ein durch unsere umfassenden Anleitungen auf CasinoFreak.com. Alle Informationen, die Sie benötigen, von Gewinnlinien bis zu progressiven Jackpots, sind auf einer einzigen Plattform verfügbar! Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen im Bereich des Slot-Glücksspiels und probieren Sie sogar kostenlose Slot-Spiele direkt von Ihrem Gerät aus. Unsere Sammlung von Online-Glücksspielführern ermöglicht einen einfachen Zugang zu allem, was es über Slots zu wissen gibt. Während es vielleicht so aussieht, als ob Spielautomaten eine Frage von einfachem 'Drehen und Gewinnen' sind, gibt es Tricks und Strategien, die Ihre Erfahrung verbessern können. Unsere Anleitungen sollen Ihnen ein umfassendes Verständnis dafür vermitteln, wie Slots funktionieren, und Ihnen die volle Kontrolle über Ihre Spiel-Sessions geben.",
    guideslotsguide2:
      "Auf der Suche nach dem perfekten Aufbewahrungsort für Tipps, unterhaltsame Fakten und Ratschläge, um Ihre Gewinnchancen zu steigern? Suchen Sie nicht weiter, denn wir bieten schnellen Zugang zu einigen der relevantesten Slot-Anleitungen und kostenlosen Slot-Spielen, die auf unserer Website gehostet werden.",
    "guideslotsguide.title": "Glücksspielführer",
    "guideslotsguide.excerpt":
      "Wenn Sie darauf hoffen, den Jackpot zu knacken, tauchen Sie in die Welt der Online-Slots ein durch unsere umfassenden Anleitungen auf CasinoFreak.com. Alle Informationen, die Sie benötigen, von Gewinnlinien bis zu progressiven Jackpots, sind auf einer einzigen Plattform verfügbar! Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen im Bereich des Slot-Glücksspiels und probieren Sie sogar kostenlose Slot-Spiele direkt von Ihrem Gerät aus.",
    
    "header.home": "Startseite",
    "header.bonuses": "Boni ▼",
    "header.casinos": "Kasinos ▼",
    "header.spins": "Freispiele",
    "header.guides": "Anleitungen",
    "header.about": "Über uns",
    "header.contacts": "Kontakte",
    
    "header.homebonuses": "Boni",
    "header.homecasinos": "Kasinos",
    "header.homespins": "Freispiele",
    "header.homeguides": "Glücksspielführer",
    
    "header.nodeposit": "Keine Einzahlungsboni",
    "header.exclusive": "Exklusive Boni",
    "header.deposit": "Einzahlungsboni",
    "header.welcome": "Willkommensboni",
    "header.nowager": "Bonis ohne Umsatzbedingungen",
    "header.cryptocasinos": "Krypto-Kasinos",
    "header.fastwithdrawalcasinos": "Kasinos mit schneller Auszahlung",
    "header.livecasinos": "Live-Kasinos",
    "header.newestcasinos": "Neueste Kasinos",
    "header.certifiedcasinos": "Top zertifizierte Kasinos",

    "searchBrands.placeholder": "Marken suchen...",

    "home.title": "Online Casino Bewertungen & Glücksspielhandbücher",
    "home.description":
      "Authentische Spielerbewertungen, keine Einzahlungsboni und eine breite Auswahl an Spielen mit kostenlosem Spiel.",
    
    "topBrands.title": "CasinoFrog Top-Auswahl für 2023",
    "newBrands.title": "Neueste Casino-Zugänge 2023",
    
    "reviewBrands.title1": "Alle sorgfältig überprüften Online-Casinos",
    "reviewBrands.description1":
      "Wir überprüfen gründlich alle vorhandenen Online-Casinos, unabhängig von ihren Vorlieben",
    
    "reviewBrands.question1.title":
      "Derzeit auf der Suche nach neuen Casino-Websites",
    "reviewBrands.question1.excerpt":
      "Unser Team sucht ständig nach kürzlich gestarteten Casino-Websites zur Bewertung",
    "reviewBrands.question1.link": "gestarteten Casino-Websites zur Bewertung",
    "reviewBrands.question1.excerpt2":
      ", mit dem Ziel, unseren Besuchern höchsten Wert zu bieten.",
    
    "reviewBrands.question2.title":
      "Die präzisesten Details zu jedem Casino",
    "reviewBrands.question2.excerpt":
      "Wir überprüfen jedes Casino sorgfältig und sammeln umfangreiche Informationen, um sicherzustellen, dass unsere Besucher gut informiert sind, was sie vor dem Spielen erwarten können",
    
    "reviewBrands.question3.title":
      "Förderung eines verantwortungsbewussten Ansatzes für das Glücksspiel",
    "reviewBrands.question3.excerpt":
      "Jedes Casino wird von einem unparteiischen Team bewertet und folgt einem umfassenden, datengetriebenen und unvoreingenommenen Überprüfungsansatz",
    "reviewBrands.question3.link": "und unvoreingenommenen Überprüfungsansatz",
    
    "reviewBrands.button1": "Top-Boni entdecken",
    "reviewBrands.button2": "Top-Casinos entdecken",
    
    "reviewBrands.title2": "Wir sind leidenschaftlich über Boni ohne Einzahlung",
    "reviewBrands.description2":
      "Unsere unermüdlichen Bemühungen fließen in die Erstellung der ultimativen Datenbank für Boni ohne Einzahlung.",
    
    "reviewBrands.question4.title":
      "Zusammenstellen von Werbedeals von jedem Online-Casino da draußen",
    "reviewBrands.question4.excerpt":
      "In unserem Bestreben, die größtmögliche Auswahl zu bieten, suchen wir ständig nach frischen Boni ohne Einzahlung",
    "reviewBrands.question4.link": "frischen Boni ohne Einzahlung",
    "reviewBrands.question4.excerpt2":
      ", um unsere Datenbank zu erweitern, die von allen bestehenden Casino-Websites stammt.",
    
    "reviewBrands.question5.title":
      "Erstellen von einzigartigen und exklusiven Boni, die ausschließlich auf unsere geschätzten Besucher zugeschnitten sind",
    "reviewBrands.question5.excerpt":
      "In unserem Bestreben, die größtmögliche Auswahl zu bieten, suchen wir ständig nach frischen",
    "reviewBrands.question5.link": "exklusiven Boni",
    "reviewBrands.question5.excerpt2":
      " enthält Angebote, die ausschließlich für unsere geschätzten Besucher entwickelt wurden.",
    
    "reviewBrands.question6.title":
      "Umfassende und präzise Details zu jedem Bonus",
    "reviewBrands.question6.excerpt":
      "In unserer Bonusdatenbank finden Sie wichtige Informationen und Bedingungen zu jedem Bonus sowie klare Erklärungen und veranschaulichende Beispiele.",
    

      "filteredHome.title": "Katalog aller Online Casino Boni für 2023",
      "filteredHome.description":
        "Suchen Sie nach Online Casino Boni und Promotionen? Entdecken Sie unsere aktuelle Datenbank mit zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "navigateBrands.all": "Alle Marken",
      "navigateBrands.recommend": "Empfohlene Marken",
      "navigateBrands.newly": "Neue Marken",
      "navigateBrands.crypto": "Krypto-Marken",
      "navigateBrands.sports": "Top Sport-Marken",
      
      "allBrands.withLimits": "Auszahlungslimits:",
      "allBrands.advantages": "Vorteile",
      "allBrands.depMethods": "Einzahlungsmethoden",
      "allBrands.withMethods": "Auszahlungsmethoden",
      "allBrands.restricted": "Eingeschränkte Länder",
      "allBrands.howGet": "Wie erhalte ich den Bonus?",
      "allBrands.activate": "Aktivieren Sie den Bonus in Ihrem Casino-Konto",
      
      "guideSlotsHome.title1": "Online Glücksspielhandbücher",
      "guideSlotsHome.title2": "Budget für Glücksspiele festlegen",
      "guideSlotsHome.excerpt1":
        "Bevor Sie eine Glücksspielsitzung beginnen, ist es wichtig, ein Budget festzulegen und strikt einzuhalten. Stellen Sie sicher, dass der zugewiesene Betrag innerhalb Ihrer finanziellen Möglichkeiten liegt, da es möglicherweise nicht Ihr Glückstag ist und verloren gehen könnte.",
      "guideSlotsHome.title3": "Verfolgen Sie Ihre Verluste um jeden Preis nicht",
      "guideSlotsHome.excerpt2":
        "Die unvorhersehbare Natur von Glücksspielen erfordert Vorsicht. Wenn Ihr Budget verloren geht, vermeiden Sie es, Ihren Verlusten hinterherzujagen, da dieses Verhalten zu weiteren finanziellen Verlusten und letztendlich zur Entwicklung einer Glücksspielsucht führen kann.",
      "guideSlotsHome.title3":
        "Achten Sie genau auf Ihre Emotionen während des Glücksspiels",
      "guideSlotsHome.excerpt3":
        "Genießen Sie das Unterhaltungsangebot des Glücksspiels und achten Sie dabei darauf, dass es beim Spielen angenehm bleibt. Wenn Sie erhöhte Wut, Frustration oder Schwierigkeiten bei rationalen Entscheidungen bemerken, ist es unerlässlich, mit dem Spielen aufzuhören.",
      
      "previewBonuses.title": "Förderung eines verantwortungsbewussten Ansatzes für das Glücksspiel",
      "previewBonuses.excerpt":
        "Suchen Sie nach aufregenden Online Casino Boni und Promotionen? Suchen Sie nicht weiter! Unsere umfangreiche und regelmäßig aktualisierte Datenbank bietet eine große Auswahl an verlockenden Casino Bonusangeboten, die alle Spielerpräferenzen abdecken. Egal, ob Sie Freispiele, Einzahlungsboni oder Cashback-Belohnungen bevorzugen, wir haben die besten Angebote aus der Welt des Glücksspiels für Sie. Verpassen Sie nicht diese exklusiven Angebote – starten Sie jetzt und steigern Sie Ihre Spielerfahrung mit lukrativen Boni!",
      
      "nodepositbonuses.title":
        "Unwiderstehlich im Jahr 2023: Boni ohne Einzahlung im Casino und einzigartige Bonuscodes",
      "nodepositbonuses.excerpt":
        "Neu im Jahr 2023: Ein kontinuierlich aktualisierter Katalog von Boni ohne Einzahlung für virtuelle Casinos. Erhalten Sie exklusive Promo-Codes und genießen Sie kostenlose Spins-Belohnungen.",
      
      "exclusivebonuses.title":
        "Umfassende Zusammenstellung von Online Casino Boni zugänglich im Jahr 2023",
      "exclusivebonuses.excerpt":
        "Suchen Sie im Web nach Casino Boni und Promotionen? Entdecken Sie unsere aktuelle, gut gepflegte Sammlung von zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "depositbonuses.title":
        "Beste Casino Willkommensboni für Ihre erste Einzahlung im Jahr 2023",
      "depositbonuses.excerpt":
        "Wählen Sie aus einer Vielzahl von erstklassigen Einführungs-Casino-Belohnungen und erhalten Sie zusätzliche Bonusmittel, die in Ihre erste Einzahlung integriert sind. Exklusive Anmeldeanreiz-Angebote für neue Teilnehmer.",
      
      "welcomebonuses.title": "Willkommensboni 2023",
      "welcomebonuses.excerpt":
        "Wenn Sie nach einer hochwertigen Casino-Erfahrung suchen, die mit verlockenden Boni kombiniert ist, haben wir die perfekte Lösung für Sie! Der Willkommensbonus ist eine Geste der Casinos an ihre neuen Spieler, die in der Regel als Freispiele oder Cashback-Belohnungen präsentiert werden. Erkunden Sie unsere Zusammenstellung von Einführungs-Boni von renommierten Online Casinos, um eine ideale Übereinstimmung für Ihre Präferenzen sicherzustellen.",
      
      "nowagerbonuses.title": "Bonuscodes ohne Wettanforderungen 2023",
      "nowagerbonuses.excerpt":
        "Suchen Sie nach Bonuscodes ohne Wettanforderungen? Entdecken Sie unsere exklusive Zusammenstellung von wettanforderungsfreien Bonuscodes, die nur im Casino erhältlich sind.",
      
      "cryptocasinos.title":
        "Top Kryptowährungs-Wettplattformen & Bitcoin Casino Seiten im Jahr 2023",
      "cryptocasinos.excerpt":
        "Erkunden Sie unsere Zusammenstellung erstklassiger Online Casinos für Bitcoin sowie Wettplattformen, die BTC und alternative Kryptowährungen als tragfähige Zahlungsmethoden akzeptieren. Tauchen Sie in unvoreingenommene Bewertungen ein und finden Sie das ultimative Bitcoin Casino-Ziel, das auf Ihre Präferenzen zugeschnitten ist.",
      

        "fastcasinos.title":
        "Das schnellste Auszahlungs-Casino und Wettplattformen 2023",
      "fastcasinos.excerpt":
        "Der vorteilhafteste Aspekt von Casinos mit schnellen Auszahlungen ist ihre schnelle und zuverlässige Ausschüttung Ihrer Gewinne. Wir haben dieses Inventar sorgfältig erstellt, um Ihnen bei der Suche nach den besten Casinos zu helfen, die beschleunigte Auszahlungsprozesse anbieten, insbesondere wenn Ihre Gewinne schnell und signifikant steigen. Starten Sie einfach eine Auszahlung und stellen Sie sich die aufregenden Möglichkeiten zur Verwendung dieser Mittel vor!",
      
      "livecasinos.title": "Hervorragende Live-Dealer Casinos des Jahres 2023",
      "livecasinos.excerpt":
        "Erkunden Sie diese Zusammenstellung erstklassiger Live-Dealer Casinos für ein immersives Spielerlebnis und entdecken Sie erstklassige Online Casinos, die fesselnde Live-Casino-Spiele nach Ihren Vorlieben anbieten.",
      
      "newestasinos.title": "Neueinsteiger in der Online Casino Szene 2023",
      "newestasinos.excerpt":
        "Auf der Suche nach frischen Online Casino Plattformen für das Jahr 2023? Entdecken Sie neu gestartete Casino Websites, die herausragende Anreize und innovative Merkmale bieten. Ständig aktualisiert für Ihre Erkundung.",
      
      "certifiedcasinos.title": "Erstklassige akkreditierte Casinos im Jahr 2023",
      "certifiedcasinos.excerpt":
        "Das Gaming bildet einen bedeutenden Sektor, und mit der Unterstützung von autorisierten Internet-Casinos können Sie Ihr bevorzugtes Hobby mit Ruhe genießen und sich darauf verlassen, dass es von offiziellen staatlichen Stellen überwacht wird. Modernste Sicherheitsprotokolle gewährleisten die Vertraulichkeit aller persönlichen Daten!",
      
      "filteredBonuses.title":
        "Katalog aller Online Casino Boni für das Jahr 2023",
      "filteredBonuses.excerpt":
        "Suchen Sie nach Online Casino Boni und Promotionen? Entdecken Sie unsere aktuelle Datenbank mit zahlreichen Casino Bonusangeboten zur Auswahl.",
      
      "filteredCasinos.title":
        "Umfassende Zusammenstellung der Online Casino Auswahl für das Jahr 2023",
      "filteredCasinos.excerpt":
        "Auf der Suche nach einem Online Casino? Navigieren Sie durch unser aktuelles Repository, das eine Vielzahl von Casinos für Ihre Überlegung bereithält.",
      
      "GuideSlotsPage.title": "Neueste Casino Anleitungen",
      
      "button.read": "Mehr lesen",
      "button.less": "Weniger lesen",
      
      "button.view": "Alle Anleitungen anzeigen",
      "button.load": "Mehr Marken laden",
      "button.review": "Rezension lesen",
      "button.play": "Jetzt spielen",
      
    },
  }
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
