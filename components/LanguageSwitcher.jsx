"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loader from "@/components/Loader";
import Cookies from "js-cookie";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || i18n.language
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedLanguage = Cookies.get("language"); // Получите язык из кукисов
    setSelectedLanguage(storedLanguage || i18n.language);
  }, [i18n.language]);

  const changeLanguage = async (lng) => {
    setIsLoading(true);
    await i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    Cookies.set("language", lng);
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Показываем лоадер в течение 0.5 секунды
  };
  const availableLanguages = [
    { code: "en", label: "EN", flag: "🇬🇧" }, //
    { code: "pl", label: "PL", flag: "🇵🇱" }, //
    { code: "no", label: "NO", flag: "🇳🇴" }, //
    { code: "au", label: "AU", flag: "🇦🇺" }, //
    { code: "ca", label: "CA", flag: "🇨🇦" }, //
    { code: "nz", label: "NZ", flag: "🇳🇿" }, //
    { code: "de", label: "DE", flag: "🇩🇪" }, //
    { code: "at", label: "AT", flag: "🇦🇹" },
    { code: "ch", label: "CH", flag: "🇨🇭" },
    // Добавьте другие языки по аналогии
  ];

  return (
    <div className={`language-switcher ml-3`}>
      <select
        className={`${selectedLanguage}`}
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {availableLanguages.map((language) => (
          <option
            className={`${language.code}`}
            key={language.code}
            value={language.code}
            style={{ fontSize: "20px" }} // Увеличьте размер флагов здесь
          >
            {language.flag} {language.label}
          </option>
        ))}
      </select>
      {isLoading && <Loader />}{" "}
      {/* Показать лоадер, если isLoading равен true */}
    </div>
  );
};

export default LanguageSwitcher;
