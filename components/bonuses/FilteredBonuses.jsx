// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState, useEffect } from "react";
import AllBonuses from "./AllBonuses";
import {
  Gift,
  Coins,
  Crown,
  Handshake,
  RadioButton,
} from "phosphor-react";
import Image from "next/image";
import Img from "@/public/beep2.png";

const FilteredBonuses = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const navigateBrands = [
    {
      currentTab: 1,
      currentCategories: 36,
      currentText: "No Deposit Bonuses",
      icon: <Gift className="mr-2 pb-1" size={32} />,
      slug: "no-deposit-bonuses"
    },
    {
      currentTab: 2,
      currentCategories: 39,
      currentText: "Exclusive Bonuses",
      icon: <Crown className="mr-2 pb-1" size={32} />,
      slug: "exclusive-bonuses"
    },
    {
      currentTab: 3,
      currentCategories: 150,
      currentText: "Deposit Bonuses",
      icon: <Coins className="mr-2 pb-1" size={32} />,
      slug: "deposit-bonuses"
    },
    {
      currentTab: 4,
      currentCategories: 35,
      currentText: "Welcome bonuses",
      icon: <Handshake className="mr-2 pb-1" size={32} />,
      slug: "welcome-bonuses"
    },
    {
      currentTab: 5,
      currentCategories: 37,
      currentText: "No wagering bonuses",
      icon: <RadioButton className="mr-2 pb-1" size={32} />,
      slug: "no-wagering-bonuses"
    },
  ];


  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const slugFromUrl = pathSegments[1]; // Используйте [1] для первого сегмента после "/"
    const foundTab = navigateBrands.find(item => item.slug === slugFromUrl);
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
              Catalog of all 2023 Online Casino Bonuses Offered
            </h2>
            <p className="mt-3 pb-4">
              Seeking online casino bonuses and promotions? Explore our current
              database featuring numerous casino bonus offers for your
              selection.
            </p>
          </div>
          <div className="right ml-auto">
            <Image
              src={Img}
              alt={"Beep"}
              width={318}
              height={237}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex">
          {navigateBrands.map((item) => (
            <button
              key={item.currentTab}
              className={`flex justify-center flex-col basis-[20%] items-center p-2 border text-lg button-tab ${
                currentTab === item.currentTab ? "active" : ""
              }`}
              onClick={() => handleTabChange(item.currentTab)}
            >
              {item.icon}
              {item.currentText}
            </button>
          ))}
        </div>

        <div>
          {navigateBrands.map((item) => {
            return (
              currentTab === item.currentTab && (
                <AllBonuses
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

export default FilteredBonuses;
