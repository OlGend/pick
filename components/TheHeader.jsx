//TheHeader.jsx
"use client";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/components/i18n";
import { Navigation } from "./Navigation";
import {
  Gift,
  PokerChip,
  Wallet,
  Notepad,
  Flag,
  GameController,
} from "phosphor-react";
import Image from "next/image";
import Img from "@/public/logo3.png";
import SearchComponent from "@/components/SearchComponent";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { geolocation } from "@vercel/edge";
import Smokace from "@/public/smokace.png";
import Winlegends from "@/public/winlegends.png";
import Windetta from "@/public/windeta.png";
import Spinsbro from "@/public/SpinsBro_500x250.png";
import Jupi from "@/public/jupicasino1_500x250.png";

const navItems = [
  {
    icon: <PokerChip className="mr-1" size={20} />,
    class: "sub-casinos",
    label: "header.casinos",
    href: "/casinos",
    subMenu: [
      { label: "header.cryptocasinos", href: "/crypto-casinos" },
      {
        label: "header.fastwithdrawalcasinos",
        href: "/fast-withdrawal-casinos",
      },
      { label: "header.livecasinos", href: "/live-casinos" },
      { label: "header.newestcasinos", href: "/newest-casinos" },
      { label: "header.certifiedcasinos", href: "/top-certified-casinos" },
    ],
  },
  {
    icon: <Gift className="mr-1" size={20} />,
    class: "sub-bonuses",
    label: "header.bonuses",
    href: "/bonuses",
    subMenu: [
      { label: "header.nodeposit", href: "/no-deposit-bonuses" },
      { label: "header.exclusive", href: "/exclusive-bonuses" },
      { label: "header.deposit", href: "/deposit-bonuses" },
      { label: "header.welcome", href: "/welcome-bonuses" },
      { label: "header.nowager", href: "/no-wagering-bonuses" },
    ],
  },

  {
    icon: <Wallet className="mr-1" size={20} />,
    class: "sub-payments",
    label: "header.payments",
    href: "/payments",
    subMenu: [
      { label: "Apple Pay", href: "/payments/apple-pay" },
      { label: "Bitcoin", href: "/payments/bitcoin-casino" },
      { label: "Ecopayz", href: "/payments/ecopayz" },
      { label: "Maestro", href: "/payments/maestro" },
      { label: "Mastercard", href: "/payments/mastercard" },
      { label: "Mobile Payments", href: "/payments/mobile-payments" },
      { label: "Muchbetter", href: "/payments/muchbetter" },
      { label: "Neosurf", href: "/payments/neosurf" },
      { label: "Neteller", href: "/payments/neteller-casino" },
      { label: "PayPal", href: "/payments/paypal-casino" },
      { label: "Paysafecard", href: "/payments/paysafecard-casino" },
      { label: "Pix", href: "/payments/pix" },
      { label: "Skrill", href: "/payments/skrill-casino" },
      { label: "Trustly", href: "/payments/trustly" },
      { label: "Visa", href: "/payments/visa" },
    ],
  },
  {
    icon: <Notepad className="mr-1" size={20} />,
    label: "header.guides",
    href: "/guides",
  },
  {
    icon: <GameController className="mr-1" size={20} />,
    class: "sub-providers",
    label: "header.providers",
    href: "/game-providers",
    subMenu: [
      { label: "Amatic", href: "/game-providers/amatic" },
      { label: "BGaming", href: "/game-providers/bgaming" },
      { label: "Boongo", href: "/game-providers/boongo" },
      { label: "Amusnet", href: "/game-providers/amusnet" },
      { label: "Evolution", href: "/game-providers/evolution" },
      { label: "Mascot", href: "/game-providers/mascot" },
      { label: "NeTent", href: "/game-providers/netent" },
      { label: "Nolimit city", href: "/game-providers/nolimit-city" },
      { label: "Play’n go", href: "/game-providers/playn-go" },
      { label: "Pragmatic Play", href: "/game-providers/pragmatic-play" },
      { label: "Push Gaming", href: "/game-providers/push-gaming" },
      { label: "Spinomenal", href: "/game-providers/spinomenal" },
    ],
  },
  {
    icon: <Flag className="mr-1" size={20} />,
    class: "sub-countries",
    label: "header.countries",
    href: "/by-country",
    subMenu: [
      { label: "header.austr", href: "/by-country/australia" },
      { label: "header.brazil", href: "/by-country/brazil" },
      { label: "header.canada", href: "/by-country/canada" },
      { label: "header.finnish", href: "/by-country/finland" },
      { label: "header.germany", href: "/by-country/germany" },
      { label: "header.nz", href: "/by-country/new-zealand" },
      { label: "header.norw", href: "/by-country/norway" },
      { label: "header.polish", href: "/by-country/poland" },
    ],
  },
];

const TheHeader = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Step 2

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Step 3
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  

  return (
    <header className="header">
      <div className="header__bg">
        <div className="header__container ">
          <div className="logo">
            <Link href="/">
              <Image src={Img} alt="logo" width={130} loading="lazy" />
            </Link>
          </div>
          <div className="search-container flex items-center justify-center ml-auto">
            <SearchComponent />
          </div>
          <I18nextProvider i18n={i18n}>
            <LanguageSwitcher />{" "}
          </I18nextProvider>
          <div className="mobile-none">
            <button
              className={`burger-icon ${isMobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
            >
              <div className="burger-lines">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>
            </button>
            <div className="menu-mobile">
              <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                {/* Mobile menu content */}
                <Navigation
                  navLinks={navItems.map((item) => ({
                    ...item,
                    label: t(item.label),
                  }))}
                  onLinkClick={closeMobileMenu}
                />
                {/* <div className="navigation-item">
                  <Link href={`/bonuses/7089`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Smokace}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div> */}
                <div className="navigation-item p-0">
                  <Link href={`/bonuses/6883`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Winlegends}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="navigation-item p-0">
                  <Link href={`/bonuses/7383`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Windetta}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div>
                {/* <div className="navigation-item p-0">
                  <Link href={`/bonuses/6657`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Spinsbro}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div> */}
                {/* <div className="navigation-item p-0">
                  <Link href={`/bonuses/5011`} onClick={closeMobileMenu}>
                    <Image
                     className="flex flex-start"
                      src={Jupi}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__container menu-desctop">
        <Navigation
          navLinks={navItems.map((item) => ({
            ...item,
            label: t(item.label), // Используйте функцию перевода для текста пунктов меню
          }))}
        />
        {/* <div className="change-lng"> </div> */}
      </div>
      <div className="header-brands">
        <div className="header__container flex justify-center">
          {/* <div className="basis-[17%]">
            <Link href={`/bonuses/7089`}>
              <Image
                className="grayscale"
                src={Smokace}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div> */}
          <div className="basis-[17%]">
            <Link href={`/bonuses/6883`}>
              <Image
                className="grayscale"
                src={Winlegends}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="basis-[17%]">
            <Link href={`/bonuses/7383`}>
              <Image
                className="grayscale"
                src={Windetta}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div>
          {/* <div className="basis-[17%]">
            <Link href={`/bonuses/6657`}>
              <Image
                className="grayscale"
                src={Spinsbro}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div> */}
          {/* <div className="basis-[17%]">
            <Link href={`/bonuses/5011`}>
              <Image
                className="grayscale"
                src={Jupi}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export { TheHeader };
