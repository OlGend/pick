//TheHeader.jsx
"use client";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/components/i18n";
import { Navigation } from "./Navigation";
import {
  Gift,
  PokerChip,
  Spiral,
  Wallet,
  Notepad,
  UsersThree,
  At,
  HouseLine,
} from "phosphor-react";
import Image from "next/image";
import Img from "@/public/logo2.png";
import SearchComponent from "@/components/SearchComponent";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const navItems = [
  {
    icon: <HouseLine className="mr-1" size={20} />,
    label: "header.home",
    href: "/",
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
    icon: <Wallet className="mr-1" size={20} />,
    label: "All Payments",
    href: "/payments",
  },
  {
    icon: <Notepad className="mr-1" size={20} />,
    label: "header.guides",
    href: "/guides",
  },
  {
    icon: <UsersThree className="mr-1" size={20} />,
    label: "header.about",
    href: "/about",
  },
  {
    icon: <At className="mr-1" size={20} />,
    label: "header.contacts",
    href: "/contacts",
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
            <Image src={Img} alt="logo" width={150} loading="lazy" />
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
                  // onLinkClick={closeMobileMenu} 
                />
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
        <div className="change-lng"> </div>
      </div>
    </header>
  );
};

export { TheHeader };
