// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AllBonuses from "./AllBonuses";
import { Gift, Coins, Crown, Handshake, RadioButton } from "phosphor-react";
import useSWR from "swr";

const FilteredBonuses = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);
  const navigateBrands = [
    {
      currentTab: 1,
      currentCategories: 36,
      currentText: "header.nodeposit",
      icon: <Gift className="mr-2 pb-1" size={32} />,
      slug: "no-deposit-bonuses",
    },
    {
      currentTab: 2,
      currentCategories: 39,
      currentText: "header.exclusive",
      icon: <Crown className="mr-2 pb-1" size={32} />,
      slug: "exclusive-bonuses",
    },
    {
      currentTab: 3,
      currentCategories: 150,
      currentText: "header.deposit",
      icon: <Coins className="mr-2 pb-1" size={32} />,
      slug: "deposit-bonuses",
    },
    {
      currentTab: 4,
      currentCategories: 35,
      currentText: "header.welcome",
      icon: <Handshake className="mr-2 pb-1" size={32} />,
      slug: "welcome-bonuses",
    },
    {
      currentTab: 5,
      currentCategories: 37,
      currentText: "header.nowager",
      icon: <RadioButton className="mr-2 pb-1" size={32} />,
      slug: "no-wagering-bonuses",
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

  // В начале компонента FilteredBonuses
  const { data: languageDetails, error: detailsError } = useSWR(
    "languageDetails",
    null,
    {
      fallbackData: { flag: "🌍", allBrand: 25, topBrand: 213 }, // Задаем начальное значение
    }
  );

  return (
    <div className="main pt-10 pb-10 custom-bonuses">
      <div className="main__container filter-brands">
        <div className="content flex flex-wrap">
          <div className="left flex flex-col justify-center basis-[60%]">
            <h2 className="">{t("filteredBonuses.title")}</h2>
            <p className="mt-3 pb-4">{t("filteredBonuses.excerpt")}</p>
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
                <AllBonuses
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

export default FilteredBonuses;
