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

const navItems = [
  {
    icon: <HouseLine className="mr-1 mb-1" size={24} />,
    label: "Home",
    href: "/",
  },
  {
    icon: <Gift className="mr-1 mb-1" size={24} />,
    label: "Bonuses",
    href: "/bonuses",
  },
  {
    icon: <PokerChip className="mr-1 mb-1" size={24} />,
    label: "New Casinos",
    href: "/casinos",
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

const HeaderForSearch = () => {
  return (
    <header className="header">
      {/* <div className="change-lng"> <LanguageSwitcher /> </div> */}
      <div className="header__bg">
        <div className="header__container">
          <div className="logo">
            <Image src={Img} alt="logo" width={150} loading="lazy" />
          </div>
       
        </div>
      </div>
      <div className="header__container">
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};

export { HeaderForSearch };
