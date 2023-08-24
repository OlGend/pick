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


const FilteredCasinos = () => {
  const { t } = useTranslation();
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
  };

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

        <div>
          {navigateBrands.map((item) => {
            return (
              currentTab === item.currentTab && (
                <AllCasinos
                  key={item.currentTab}
                  choose={item.currentCategories}
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
