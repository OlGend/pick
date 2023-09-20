// Я убрал fetchLanguageDetails, так как он не определен.
// Если он вам нужен, добавьте его обратно.
"use client";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { useTranslation } from "react-i18next";
import Loader from "@/components/Loader";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { data: selectedLanguage, error } = useSWR("selectedLanguage", () => i18n.language);
  const { data: languageDetails, error: detailsError } = useSWR("languageDetails", null, { 
    fallbackData: { flag: "🌍", allBrand: 25, topBrand: 213 } // Задаем начальное значение
  });

  const [isLoading, setIsLoading] = useState(false);

  // Если данные еще не загрузились, показываем индикатор загрузки
  if (!selectedLanguage || !languageDetails) {
    return <Loader />;
  }

  // Обработка ошибок для selectedLanguage и languageDetails
  if (error || detailsError) {
    return <div>Failed to load</div>;
  }

  const changeLanguage = async (lng, flag, allBrand, topBrand) => {
    setIsLoading(true);
    try {
      await i18n.changeLanguage(lng);
      mutate("selectedLanguage", lng, true);  // Обновляем только язык
      mutate("languageDetails", { flag, allBrand, topBrand }, true);  // Обновляем дополнительные данные
    } catch (error) {
      console.error("Ошибка при смене языка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const availableLanguages = [
    { code: "en", label: "EN", flag: "🌍", allBrand: 25, topBrand: 213 }, //
    { code: "pl", label: "PL", flag: "🇵🇱", allBrand: 125, topBrand: 48 }, //
    { code: "no", label: "NO", flag: "🇳🇴", allBrand: 124, topBrand: 44 }, //
    { code: "au", label: "AU", flag: "🇦🇺", allBrand: 143, topBrand: 184 }, //
    { code: "ca", label: "CA", flag: "🇨🇦", allBrand: 120, topBrand: 46 }, //
    { code: "nz", label: "NZ", flag: "🇳🇿", allBrand: 123, topBrand: 47 }, //
    { code: "de", label: "DE", flag: "🇩🇪", allBrand: 122, topBrand: 45 }, //
    { code: "at", label: "AT", flag: "🇦🇹", allBrand: 122, topBrand: 45 },
    { code: "ch", label: "CH", flag: "🇨🇭", allBrand: 122, topBrand: 45 },
    // Добавьте другие языки по аналогии
  ];
   // Обработка ошибок для selectedLanguage и languageDetails
   if (error || detailsError) return <div>Failed to load</div>;

   return (
     <div className={`language-switcher ml-3`}>
       <select
         className={`${selectedLanguage}`}
         value={selectedLanguage}
         onChange={(e) => {
           const selected = availableLanguages.find(lang => lang.code === e.target.value);
           if (selected) {
             changeLanguage(selected.code, selected.flag, selected.allBrand, selected.topBrand);
           }
         }}
       >
         {availableLanguages.map((language) => (
           <option
             className={`${language.code}`}
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