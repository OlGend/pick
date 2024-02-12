"use client";
import { useState, useEffect } from "react";
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
  // const br = localStorage.getItem("brands");
  const { data: languageDetails, error: detailsError } = useSWR(
    "languageDetails",
    null,
    {
      fallbackData: { flag: "🌍", brand: 221, topBrand: 213 }, // Задаем начальное значение
    }
  );

  const [isLoading, setIsLoading] = useState(false);

  const [source, setSource] = useState("");
  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const urlObj = typeof window !== "undefined" ? new URL(url) : null;

    const searchParams = new URLSearchParams(urlObj.search);
    searchParams.delete("brand");

    const currentKeyword = searchParams.get("keyword");

    if (currentKeyword !== null && currentKeyword.includes("partner1039")) {
      // Если в строке есть "partner1039" или "partner1041", вырезаем и добавляем в setSource
      const partnerIndex = currentKeyword.indexOf("partner");
      const partnerText = currentKeyword.substring(
        partnerIndex,
        partnerIndex + 11
      ); // 11 - длина "partner1039" или "partner1041"
      setSource(partnerText);

      // Используем "partner1039" или "partner1041" в newUrl
      searchParams.set("source", partnerText);
    } else {
      // Если "partner1039" или "partner1041" отсутствует, добавляем 0 в setSource
      setSource("0");
      searchParams.set("source", "0");
      // Если "partner1039" или "partner1041" отсутствует, новый URL не содержит source
      // searchParams.delete("source");
    }

 
  }, []);

  

  // Если данные еще не загрузились, показываем индикатор загрузки
  if (!selectedLanguage || !languageDetails) {
    return <Loader />;
  }

  // Обработка ошибок для selectedLanguage и languageDetails
  if (error || detailsError) {
    return <div>Failed to load</div>;
  }

  const changeLanguage = async (lng, flag, brand, topBrand) => {
    setIsLoading(true);
    try {
      mutate("selectedLanguage", lng, false);
      // Не вызываем i18n.changeLanguage(lng);
      mutate("languageDetails", {  brand, topBrand }, true); // Обновляем дополнительные данные
    } catch (error) {
      console.error("Ошибка при смене языка:", error);
    } finally {
      setIsLoading(false);
    }
  };



  

  const availableLanguages = [
    { code: "en", label: "World", flag: "🌍", brand: 221, topBrand: 222 }, //
    { code: "pl", label: "Poland", flag: "🇵🇱", brand: 221, topBrand: 232 }, //
    { code: "no", label: "Norway", flag: "🇳🇴", brand: 221, topBrand: 230 }, //
    {
      code: "au",
      label: "Australia",
      flag: "🇦🇺",
      brand: 221,
      topBrand: 223,
    }, //
    { code: "ca", label: "Canada", flag: "🇨🇦", brand: 221, topBrand: 224 }, //
    {
      code: "nz",
      label: "New Zealand",
      flag: "🇳🇿",
      brand: 221,
      topBrand: 231,
    }, //
    { code: "de", label: "Germany", flag: "🇩🇪", brand: 221, topBrand: 226 }, //
    {
      code: "fi",
      label: "Finland",
      flag: "🇫🇮",
      brand: 221,
      topBrand: 228,
    },
    // Добавьте другие языки по аналогии
  ];
  const availableLanguagesPartners = [
    { code: "en", label: "World", flag: "🌍", brand: 248, topBrand: 250 }, //
    { code: "pl", label: "Poland", flag: "🇵🇱", brand: 248, topBrand: 232 }, //
    { code: "no", label: "Norway", flag: "🇳🇴", brand: 248, topBrand: 230 }, //
    {
      code: "au",
      label: "Australia",
      flag: "🇦🇺",
      brand: 248,
      topBrand: 251,
    }, //
    { code: "ca", label: "Canada", flag: "🇨🇦", brand: 248, topBrand: 224 }, //
    {
      code: "nz",
      label: "New Zealand",
      flag: "🇳🇿",
      brand: 248,
      topBrand: 231,
    }, //
    { code: "de", label: "Germany", flag: "🇩🇪", brand: 248, topBrand: 226 }, //
    {
      code: "fi",
      label: "Finland",
      flag: "🇫🇮",
      brand: 248,
      topBrand: 228,
    },
    // Добавьте другие языки по аналогии
  ];

  const newLng = source === "partner1039" ? availableLanguagesPartners : availableLanguages;
  console.log("NEWLNG", newLng)
  // Обработка ошибок для selectedLanguage и languageDetails
  if (error || detailsError) return <div>Failed to load</div>;

  return (
    <div className={`language-switcher ml-3 flex flex-col`}>
      <p className="headerText">Your country of residence</p>
      <select
        className={`${selectedLanguage}`}
        value={selectedLanguage}
        onChange={(e) => {
          const selected = newLng.find(
            (lang) => lang.code === e.target.value
          );
          if (selected) {
            changeLanguage(selected.code, selected.flag, selected.brand, selected.topBrand);
          }
        }}
      >
        {newLng.map((language) => (
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
