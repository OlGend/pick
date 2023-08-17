//TheHeader.jsx
"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/components/i18n";
import { Navigation } from "./Navigation";
import {
  Gift,
  PokerChip,
  Spiral,
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
    icon: <Spiral className="mr-1" size={20} />,
    label: "header.spins",
    href: "/free-spins",
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
