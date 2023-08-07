"use client"
import React from "react";
import { useTranslation } from 'react-i18next';
import { Navigation } from "./Navigation";
import Image from "next/image";
import { Club, PokerChip, DiceSix, BookBookmark } from "phosphor-react";
import Img from "@/public/laptop_blue2.png";
import { I18nextProvider } from "react-i18next";
import i18n from "@/components/i18n"; // Шлях до вашого файлу i18n.js
const navItems = [
  { label: "No Deposit Bonuses", href: "/bonuses", icon: <PokerChip color="#0967e3" size={32} /> },
  { label: "New Casinos", href: "/casinos", icon: <Club color="#0967e3" size={32} /> },
  { label: "Free Spins", href: "/free-spins", icon: <DiceSix color="#0967e3" size={32} /> },
  { label: "Gambling Guides", href: "/guides", icon: <BookBookmark color="#0967e3" size={32} /> },
];

const PreviewHome = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}> {/* Додали обгортку I18nextProvider */}
    <div className="preview">
      <div className="main__container flex items-end">
        <div className="flex flex-col basis-[50%]">
        <h1>{t('home.title')}</h1>
          <p>{t('home.description')}</p>
          <div className="flex flex-wrap justify-start preview-navigate mt-3">
            <Navigation navLinks={navItems} />
          </div>
        
        </div>
        <Image
          src={Img}
          alt="Beep"
          width={550}
          loading="lazy" 
        />
      </div>
    </div>
    </I18nextProvider>
  );
};

export default PreviewHome;
