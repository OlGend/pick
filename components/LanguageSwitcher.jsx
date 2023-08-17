"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const availableLanguages = [
    { code: "en", label: "EN", flag: "🇬🇧" }, 
    { code: "pl", label: "PL", flag: "🇵🇱" },
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
    </div>
  );
};

export default LanguageSwitcher;
