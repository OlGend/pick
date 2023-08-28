// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AllCountryCasinos from "./AllCountryCasinos";


const FilteredCasinos = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(1);
  const navigateBrands = [
    {
      currentTab: 1,
      currentCategories: 138,
      topCurrentCategories: 112,
      currentText: "Casinos",
      icon: "🌍",
      slug: "by-country",
    },
    {
      currentTab: 2,
      currentCategories: 143,
      topCurrentCategories: 184,
      currentText: "Casinos",
      icon: "🇦🇺",
      slug: "australia",
    },
    {
      currentTab: 3,
      currentCategories: 119,
      topCurrentCategories: 84,
      currentText: "Casinos",
      icon: "🇧🇷",
      slug: "brazil",
    },
    {
      currentTab: 4,
      currentCategories: 120,
      topCurrentCategories: 46,
      currentText: "Casinos",
      icon: "🇨🇦",
      slug: "canada",
    },
    {
      currentTab: 5,
      currentCategories: 121,
      topCurrentCategories: 43,
      currentText: "Casinos",
      icon: "🇫🇮",
      slug: "finland",
    },
    {
      currentTab: 6,
      currentCategories: 122,
      topCurrentCategories: 45,
      currentText: "Casinos",
      icon: "🇩🇪",
      slug: "germany",
    },
    {
      currentTab: 7,
      currentCategories: 123,
      topCurrentCategories: 47,
      currentText: "Casinos",
      icon: "🇳🇿",
      slug: "new-zealand",
    },
    {
      currentTab: 8,
      currentCategories: 124,
      topCurrentCategories: 44,
      currentText: "Casinos",
      icon: "🇳🇴",
      slug: "norway",
    },
    {
      currentTab: 9,
      currentCategories: 125,
      topCurrentCategories: 48,
      currentText: "Casinos",
      icon: "🇵🇱",
      slug: "poland",
    },
  ];

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/by-country/");
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
            <h2 className="">
              Interactive List of Online Casinos 2023: Filtering by Country
            </h2>
            <p className="mt-3 pb-4">
              Looking for the perfect online casino? Explore our interactive
              list for 2023, specifically designed to help you filter through an
              array of options based on country. Tailor your search to find the
              most reputable, safe, and exciting casinos available in your
              region.
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
              <div className="flag-countries mb-1"> {item.icon}</div>

              {t(item.currentText)}
            </button>
          ))}
        </div>

        <div>
          {navigateBrands.map((item) => {
            return (
              currentTab === item.currentTab && (
                <AllCountryCasinos
                  key={item.currentTab}
                  choose={item.currentCategories}
                  topchoose={item.topCurrentCategories}

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
