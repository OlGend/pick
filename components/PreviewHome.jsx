"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavigationHome } from "./NavigationHome";
import Image from "next/image";
import { Club, PokerChip, DiceSix, BookBookmark } from "phosphor-react";
import Img from "@/public/laptop_blue2.png";
import Subscribe from "@/components/subscribe/Subscribe";
const navItems = [
  {
    label: "header.homebonuses",
    href: "/bonuses",
    icon: <PokerChip color="#0967e3" size={32} />,
  },
  {
    label: "header.homecasinos",
    href: "/casinos",
    icon: <Club color="#0967e3" size={32} />,
  },
  {
    label: "header.homespins",
    href: "/free-spins",
    icon: <DiceSix color="#0967e3" size={32} />,
  },
  {
    label: "header.homeguides",
    href: "/guides",
    icon: <BookBookmark color="#0967e3" size={32} />,
  },
];

const PreviewHome = () => {
  const { t } = useTranslation();

  return (
    <div className="preview">
      <div className="main__container flex items-center first-block">
        <div className="flex flex-col basis-[50%]">
          <h1>{t("home.title")}</h1>
          <p>{t("home.description")}</p>
          <Subscribe />
        </div>
        <Image src={Img} alt="Beep" width={550} />
      </div>
    </div>
  );
};

export default PreviewHome;
