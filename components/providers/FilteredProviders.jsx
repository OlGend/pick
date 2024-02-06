// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DotsThreeCircle } from "phosphor-react";
import AllPayments from "./AllProviders";
import Image from "next/image";
import Bgaming from "@/public/providers/BGaming.png";
import Boongo from "@/public/providers/Booongo.png";
import Amusnet from "@/public/providers/Amusnet.png";
import Maskot from "@/public/providers/Mascot.png";
import Netent from "@/public/providers/NetEnt.png";
import Playngo from "@/public/providers/playngo.png";
import Pushgaming from "@/public/providers/pushgaming.png";
import Spinomenal from "@/public/providers/spinomenal.png";
import Amatic from "@/public/providers/amatic.png";
import Nolimitcity from "@/public/providers/nolimitcity.png";
import Pragmatic from "@/public/providers/pragmaticplay.png";
import Evolution from "@/public/providers/Evolution.png";
import AllPaymentsImg from "@/public/payments/allpaymentmethods.png";
import useSWR from "swr";


const FilteredProviders = () => {
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(false);


  const [currentTab, setCurrentTab] = useState(1);
  const navigateBrands = [
    {
      currentTab: 1,
      currentCategories: 137,
      currentText: "All Providers",
      icon: (
        <>
          <DotsThreeCircle className="mr-1" size={24} /> All
        </>
      ),
      slug: "providers",
    },
    {
      currentTab: 2,
      currentCategories: 107,
      currentText: "Amatic",
      icon: (
        <Image
          src={Amatic}
          alt="amatic"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "amatic",
    },
    {
      currentTab: 3,
      currentCategories: 105,
      currentText: "BGaming",
      icon: (
        <Image
          src={Bgaming}
          alt="bgaming"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "bgaming",
    },
    {
      currentTab: 4,
      currentCategories: 132,
      currentText: "Booongo",
      icon: (
        <Image
          src={Boongo}
          alt="booongo"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "booongo",
    },

    {
      currentTab: 5,
      currentCategories: 152,
      currentText: "EGT",
      icon: (
        <Image src={Amusnet} alt="egt" width={80} height={40} loading="lazy" />
      ),
      slug: "egt",
    },
    {
      currentTab: 6,
      currentCategories: 106,
      currentText: "Evolution",
      icon: (
        <Image
          src={Evolution}
          alt="evolution"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "evolution",
    },
    {
      currentTab: 7,
      currentCategories: 186,
      currentText: "Mascot",
      icon: (
        <Image
          src={Maskot}
          alt="mascot"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "mascot",
    },
    {
      currentTab: 8,
      currentCategories: 160,
      currentText: "NetEnt",
      icon: (
        <Image
          src={Netent}
          alt="netEnt"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "netent",
    },
    {
      currentTab: 9,
      currentCategories: 130,
      currentText: "Nolimit city",
      icon: (
        <Image
          src={Nolimitcity}
          alt="nolimit-city"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "nolimit-city",
    },
    {
      currentTab: 10,
      currentCategories: 108,
      currentText: "Play’n go",
      icon: (
        <Image
          src={Playngo}
          alt="Playn go"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "playn-go",
    },
    {
      currentTab: 11,
      currentCategories: 104,
      currentText: "Pragmatic Play",
      icon: (
        <Image
          src={Pragmatic}
          alt="Pragmatic Play"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "pragmatic-play",
    },

    {
      currentTab: 12,
      currentCategories: 133,
      currentText: "Push Gaming",
      icon: (
        <Image
          src={Pushgaming}
          alt="Push Gaming"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "push-gaming",
    },
    {
      currentTab: 13,
      currentCategories: 131,
      currentText: "Spinomenal",
      icon: (
        <Image
          src={Spinomenal}
          alt="Spinomenal"
          width={80}
          height={40}
          loading="lazy"
        />
      ),
      slug: "spinomenal",
    },
  ];

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/game-providers/");
    const slugFromUrl = pathSegments[1];
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

  const [selectedBrand, setSelectedBrand] = useState(null);
  useEffect(() =>{
    const defLng = localStorage.getItem("country").toLowerCase();
    setSelectedBrand(defLng);
    if (defLng) {
      const foundBrand = navigateBrands2.find((brand) => brand.slug === defLng);
      if (foundBrand) {
        setSelectedBrand(foundBrand);
      } else {
        // Если локаль не найдена, устанавливаем "all"
        const allBrand = navigateBrands2.find((brand) => brand.slug === "all");
        setSelectedBrand(allBrand);
      }
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
  console.log("!!!!", selectedBrand)
  const { data: languageDetails, error: detailsError } = useSWR(
    "languageDetails",
    null,
    {
      fallbackData: selectedBrand
        ? { flag: selectedBrand.icon, allBrand: selectedBrand.currentCategories, topBrand: selectedBrand.topCurrentCategories }
        : { flag: "🌍", allBrand: 138, topBrand: 213 }
    }
  );

  return (
    <div className="main pt-10 pb-10 custom-bonuses filtered-providers">
      <div className="main__container filter-brands">
        <div className="content flex flex-wrap">
          <div className="left flex flex-col justify-center basis-[60%]">
            <h2 className="text-white">{t("filtered.providers.title")}</h2>
            <p className="text-white mt-5">
              {t("filtered.providers.description")}
            </p>
          </div>
        </div>
        <div className="flex navigate-filter flex-wrap">
          {navigateBrands.map((item) => (
            <button
              key={item.currentTab}
              className={`flex justify-center flex-col basis-[7.69%] items-center p-2 border text-lg button-tab ${
                currentTab === item.currentTab ? "active" : ""
              }`}
              onClick={() => handleTabChange(item.currentTab)}
            >
              <div className="flex items-center">
                {item.icon}
                {/* {t(item.currentText)} */}
              </div>
            </button>
          ))}
        </div>

        <div className="overlay-filter">
          {navigateBrands.map((item) => {
            return (
              currentTab === item.currentTab && (
                <AllPayments
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

export default FilteredProviders;
