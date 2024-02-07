// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AllCasinos from "./AllCasinos";
import {
  CurrencyBtc,
  UsersThree,
  Cardholder,
  CalendarCheck,
  Scroll,
} from "phosphor-react";
import useSWR from "swr";

const FilteredCasinos = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);
  const navigateBrands = [
    {
      currentTab: 1,
      currentCategories: 19,
      currentText: "header.cryptocasinos",
      icon: <CurrencyBtc className="mr-2 pb-1" size={32} />,
      slug: "crypto-casinos",
    },
    {
      currentTab: 2,
      currentCategories: 20,
      currentText: "header.fastwithdrawalcasinos",
      icon: <Cardholder className="mr-2 pb-1" size={32} />,
      slug: "fast-withdrawal-casinos",
    },
    {
      currentTab: 3,
      currentCategories: 22,
      currentText: "header.livecasinos",
      icon: <UsersThree className="mr-2 pb-1" size={32} />,
      slug: "live-casinos",
    },
    {
      currentTab: 4,
      currentCategories: 24,
      currentText: "header.newestcasinos",
      icon: <CalendarCheck className="mr-2 pb-1" size={32} />,
      slug: "newest-casinos",
    },
    {
      currentTab: 5,
      currentCategories: 26,
      currentText: "header.certifiedcasinos",
      icon: <Scroll className="mr-2 pb-1" size={32} />,
      slug: "top-certified-casinos",
    },
  ];

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const slugFromUrl = pathSegments[1]; // Используйте [1] для первого сегмента после "/"
    const foundTab = navigateBrands.find((item) => item.slug === slugFromUrl);
    if (foundTab) {
      setCurrentTab(foundTab.currentTab);
    }
  }, []);

  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  };
  ////////////////////new

  const [selectedBrand, setSelectedBrand] = useState(null);
  useEffect(() => {
    const defLng = localStorage.getItem("country");
    if (defLng) {
      const locale = defLng.toLowerCase();
      setSelectedBrand(locale);
      const foundBrand = navigateBrands2.find((brand) => brand.slug === locale);
      if (foundBrand) {
        setSelectedBrand(foundBrand);
      } else {
        // Если локаль не найдена, устанавливаем "all"
        const allBrand = navigateBrands2.find((brand) => brand.slug === "all");
        setSelectedBrand(allBrand);
      }
    } else {
      setSelectedBrand("all"); // Устанавливаем значение по умолчанию, если ключ "country" отсутствует в localStorage
    }
  }, []);
  const navigateBrands2 = [
    {
      currentCategories: 138,
      topCurrentCategories: 213,
      icon: "🌍",
      slug: "all",
    },
    {
      currentCategories: 143,
      topCurrentCategories: 184,
      icon: "🇦🇺",
      slug: "au",
    },
    {
      currentCategories: 119,
      topCurrentCategories: 84,
      icon: "🇧🇷",
      slug: "br",
    },
    {
      currentCategories: 120,
      topCurrentCategories: 46,
      icon: "🇨🇦",
      slug: "ca",
    },
    {
      currentCategories: 121,
      topCurrentCategories: 43,
      icon: "🇫🇮",
      slug: "fi",
    },
    {
      currentCategories: 122,
      topCurrentCategories: 45,
      icon: "🇩🇪",
      slug: "de",
    },
    {
      currentCategories: 123,
      topCurrentCategories: 47,
      icon: "🇳🇿",
      slug: "nz",
    },
    {
      currentCategories: 124,
      topCurrentCategories: 44,
      icon: "🇳🇴",
      slug: "no",
    },
    {
      currentCategories: 125,
      topCurrentCategories: 48,
      icon: "🇵🇱",
      slug: "pl",
    },
  ];
  console.log("!!!!", selectedBrand);
  const { data: languageDetails, error: detailsError } = useSWR(
    "languageDetails",
    null,
    {
      fallbackData: selectedBrand
        ? {
            flag: selectedBrand.icon,
            allBrand: selectedBrand.currentCategories,
            topBrand: selectedBrand.topCurrentCategories,
          }
        : { flag: "🌍", allBrand: 138, topBrand: 213 },
    }
  );

  ///////////
  return (
    <div className="main pt-10 pb-10 custom-bonuses">
      <div className="main__container filter-brands">
        <div className="content flex flex-wrap">
          <div className="left flex flex-col justify-center basis-[60%]">
            <h2 className="">{t("filteredCasinos.title")}</h2>
            <p className="mt-3 pb-4">{t("filteredCasinos.excerpt")}</p>
          </div>
        </div>
        <div className="flex navigate-filter">
          {navigateBrands.map((item) => (
            <button
              key={item.currentTab}
              className={`flex justify-center flex-col basis-[20%] items-center p-2 border text-lg button-tab ${
                currentTab === item.currentTab ? "active" : ""
              }`}
              onClick={() => handleTabChange(item.currentTab)}
            >
              {item.icon}
              {t(item.currentText)}
            </button>
          ))}
        </div>

        <div className="overlay-filter">
          {navigateBrands.map((item) => {
            return (
              currentTab === item.currentTab && (
                <AllCasinos
                  key={item.currentTab}
                  choose={item.currentCategories}
                  filtered={languageDetails}
                  isLoader={isLoader}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilteredCasinos;
