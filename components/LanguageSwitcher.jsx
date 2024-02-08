"use client";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { useTranslation } from "react-i18next";
import Loader from "@/components/Loader";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { data: selectedLanguage, error } = useSWR(
    "selectedLanguage",
    () => i18n.language
  );
  let defLng;
  if (typeof window !== "undefined") {
    defLng = localStorage.getItem("country");
  }
  const { data: languageDetails, error: detailsError } = useSWR(
    "languageDetails",
    null,
    {
      fallbackData: { flag: "🌍", topBrand: 213 }, // Задаем начальное значение
    }
  );

  const [isLoading, setIsLoading] = useState(false);

  // Если данные еще не загрузились, показываем индикатор загрузки
  if (!selectedLanguage || !languageDetails) {
    return <Loader />;
  }

  // Обработка ошибок для selectedLanguage и languageDetails
  if (error || detailsError) {
    return <div>Failed to load</div>;
  }

  const changeLanguage = async (lng, flag, topBrand) => {
    setIsLoading(true);
    try {
      mutate("selectedLanguage", lng, false);
      // Не вызываем i18n.changeLanguage(lng);
      mutate("languageDetails", {  topBrand }, true); // Обновляем дополнительные данные
    } catch (error) {
      console.error("Ошибка при смене языка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const availableLanguages = [
    { code: "en", label: "World", flag: "🌍", topBrand: 222 }, //
    { code: "pl", label: "Poland", flag: "🇵🇱", topBrand: 232 }, //
    { code: "no", label: "Norway", flag: "🇳🇴", topBrand: 230 }, //
    {
      code: "au",
      label: "Australia",
      flag: "🇦🇺",

      topBrand: 223,
    }, //
    { code: "ca", label: "Canada", flag: "🇨🇦", topBrand: 224 }, //
    {
      code: "nz",
      label: "New Zealand",
      flag: "🇳🇿",

      topBrand: 231,
    }, //
    { code: "de", label: "Germany", flag: "🇩🇪", topBrand: 226 }, //
    {
      code: "fi",
      label: "Finland",
      flag: "🇫🇮",

      topBrand: 228,
    },
    // Добавьте другие языки по аналогии
  ];
  // Обработка ошибок для selectedLanguage и languageDetails
  if (error || detailsError) return <div>Failed to load</div>;

  return (
    <div className={`language-switcher ml-3 flex flex-col`}>
      <p className="headerText">Your country of residence</p>
      <select
        className={`${selectedLanguage}`}
        value={selectedLanguage}
        onChange={(e) => {
          const selected = availableLanguages.find(
            (lang) => lang.code === e.target.value
          );
          if (selected) {
            changeLanguage(selected.code, selected.flag, selected.topBrand);
          }
        }}
      >
        {availableLanguages.map((language) => (
          <option
            className={`${language.code} notranslate`}
            key={language.code}
            value={language.code}
            style={{ fontSize: "20px" }}
          >
            {language.flag} {language.label}
          </option>
        ))}
      </select>
      {isLoading && <Loader />}
    </div>
  );
};

export default LanguageSwitcher;
