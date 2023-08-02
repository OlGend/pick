// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState } from "react";
import AllBrands from "./AllBrands";

const FilteredHome = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  const navigateBrands = [
    {
      currentTab: 1,
      currentCategories: 25,
      currentText: "All Brands",
    },
    {
      currentTab: 2,
      currentCategories: 26,
      currentText: "Recommended Brands",
    },
    {
      currentTab: 3,
      currentCategories: 24,
      currentText: "Newly Brands",
    },
    {
      currentTab: 4,
      currentCategories: 19,
      currentText: "Crypto Brands",
    },
    {
      currentTab: 5,
      currentCategories: 187,
      currentText: "Top Sports Brands",
    },
  ];

  return (
    <div className="main__container filter-brands">
      <div className="flex">
        {navigateBrands.map((item) => (
          <button
            key={item.currentTab}
            className={`flex justify-center items-center p-4 border text-lg button-tab ${
              currentTab === item.currentTab ? "active" : ""
            }`}
            onClick={() => handleTabChange(item.currentTab)}
          >
            {item.currentText}
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
  );
};

export default FilteredHome;
