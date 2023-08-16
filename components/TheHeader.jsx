"use client";
import React from "react";
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

const navItems = [
  {
    icon: <HouseLine className="mr-1 mb-1" size={24} />,
    label: "Home",
    href: "/",
  },
  {
    icon: <Gift className="mr-1 mb-1" size={24} />,
    class: "sub-bonuses",
    label: "Bonuses ▼",
    href: "/bonuses",
    subMenu: [
      { label: "No Deposit Bonuses", href: "/no-deposit-bonuses" },
      { label: "Exclusive Bonuses", href: "/exclusive-bonuses" },
      { label: "Deposit Bonuses", href: "/deposit-bonuses" },
      { label: "Welcome Bonuses", href: "/welcome-bonuses" },
      { label: "No Wagering Bonuses", href: "/no-wagering-bonuses" },

    ],
  },
  {
    icon: <PokerChip className="mr-1 mb-1" size={24} />,
    class: "sub-casinos",
    label: "Casinos ▼",
    href: "/casinos",
    subMenu: [
      { label: "Crypto Casinos", href: "/crypto-casinos" },
      { label: "Fast Withdrawal Casinos", href: "/fast-withdrawal-casinos" },
      { label: "Live Casinos", href: "/live-casinos" },
      { label: "Newest Casinos", href: "/newest-casinos" },
      { label: "Top Certified Casinos", href: "/top-certified-casinos" },

    ],
  },
  {
    icon: <Spiral className="mr-1 mb-1" size={24} />,
    label: "Free Spins",
    href: "/free-spins",
  },
  {
    icon: <Notepad className="mr-1 mb-1" size={24} />,
    label: "Guides",
    href: "/guides",
  },
  {
    icon: <UsersThree className="mr-1 mb-1" size={24} />,
    label: "About",
    href: "/about",
  },
  {
    icon: <At className="mr-1 mb-1" size={24} />,
    label: "Contacts",
    href: "/contacts",
  },
];

const TheHeader = () => {
  return (
    <header className="header">
      {/* <div className="change-lng"> <LanguageSwitcher /> </div> */}
      <div className="header__bg">
        <div className="header__container ">
          <div className="logo">
            <Image src={Img} alt="logo" width={150} loading="lazy" />
          </div>
          <div className="search-container flex items-center justify-center ">
            <SearchComponent />
          </div>
        </div>
      </div>
      <div className="header__container menu-desctop">
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};

export { TheHeader };
