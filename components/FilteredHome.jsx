// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import AllBrands from "./AllBrands";
import {
  Medal,
  Crown,
  DribbbleLogo,
  CurrencyBtc,
  SquareLogo,
} from "phosphor-react";

const FilteredHome = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(2);
  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  const navigateBrands = [
    {
      currentTab: 1,
      currentCategories: 25,
      currentText: "navigateBrands.all",
      icon: <SquareLogo className="mr-2 pb-1" size={32} />,
    },
    {
      currentTab: 2,
      currentCategories: 26,
      currentText: "navigateBrands.recommend",
      icon: <Medal className="mr-2 pb-1" size={32} />,
    },
    {
      currentTab: 3,
      currentCategories: 24,
      currentText: "navigateBrands.newly",
      icon: <Crown className="mr-2 pb-1" size={32} />,
    },
    {
      currentTab: 4,
      currentCategories: 19,
      currentText: "navigateBrands.crypto",
      icon: <CurrencyBtc className="mr-2 pb-1" size={32} />,
    },
    {
      currentTab: 5,
      currentCategories: 187,
      currentText: "navigateBrands.sports",
      icon: <DribbbleLogo className="mr-2 pb-1" size={32} />,
    },
  ];

  return (
    <div className="main pt-10 pb-10 other-custom-bonuses">
      <div className="main__container filter-brands">
        <div className="content flex flex-wrap">
          <div className="left flex flex-col justify-center basis-[60%]">
            <h2 className="">
            {t('filteredHome.title')}
            </h2>
            <p className="mt-3 pb-4">
            {t('filteredHome.description')}
            </p>
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
                <AllBrands
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

export default FilteredHome;
