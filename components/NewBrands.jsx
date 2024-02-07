// TopBrands.jsx (Клиентский компонент)
"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { CalendarCheck, Play, Eye } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { useTopBrands } from "./useBrands";
import { useTopBrandsFilter } from "@/components/useBrands";

import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
  extractBadge,
  extractPros,
} from "./brandUtils";
import useSWR from "swr";

export default function NewBrands() {
  const { t } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState(null);
  useEffect(() => {
    const defLng = localStorage.getItem("country").toLowerCase();
    setSelectedBrand(defLng);
    if (defLng) {
      const foundBrand = navigateBrands.find((brand) => brand.slug === defLng);
      if (foundBrand) {
        setSelectedBrand(foundBrand);
      } else {
        // Если локаль не найдена, устанавливаем "all"
        const allBrand = navigateBrands.find((brand) => brand.slug === "all");
        setSelectedBrand(allBrand);
      }
    }
  }, []);
  const navigateBrands = [
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
        ? {
            flag: selectedBrand.icon,
            allBrand: selectedBrand.currentCategories,
            topBrand: selectedBrand.topCurrentCategories,
          }
        : { flag: "🌍", allBrand: 138, topBrand: 213 },
    }
  );
  const filteredBrands = useTopBrandsFilter(214, languageDetails.allBrand);

  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);

    // Simulate some delay to show the loader (remove this in actual usage)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const [newUrl, setNewUrl] = useState("");
  // Чтение сохраненной ссылки из локального хранилища
  useEffect(() => {
    const savedUrl = localStorage.getItem("savedUrl");

    // Установка новой ссылки в состояние
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, []);

  return (
    <>
      <div className="main__container pb-6">
        <div className="heading flex items-center">
          <h2>{t("newestasinos.title")}</h2>
        </div>
        <div className="flex flex-col px-0 py-6 wrap-mobile">
          {filteredBrands.map((brand) => {
            const reviewImgSrc = extractReviewImage(brand.content.rendered);
            const playLink = extractLink(brand.content.rendered);

            return (
              <div
                className="flex flex-wrap mb-2 card-brand-new justify-between"
                key={brand.id}
              >
                <div className="brandImage p-3">
                  <Link key={brand.id} href={`/bonuses/${brand.id}`}>
                    <Image
                      src={reviewImgSrc}
                      alt={brand.title.rendered}
                      width={120}
                      height={60}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <Link
                  className="flex basis-[16%] items-center p-3"
                  key={brand.id}
                  href={`/bonuses/${brand.id}`}
                >
                  <span>{brand.title.rendered}</span>
                </Link>
                <div
                  className="basis-[15%] flex items-center"
                  dangerouslySetInnerHTML={{
                    __html: extractReviewBonus(brand.content.rendered),
                  }}
                />
                <div
                  className="flex basis-[11%] items-center"
                  dangerouslySetInnerHTML={{
                    __html: extractBadge(brand.content.rendered),
                  }}
                />
                <div
                  className="flex basis-[25%] py-2 items-center ml-3"
                  dangerouslySetInnerHTML={{
                    __html: extractPros(brand.content.rendered),
                  }}
                />
                <div className="buttons basis-[17%] ml-auto p-3 flex items-center">
                  <Link
                    className="btn btn-primary mb-1 flex justify-center items-center w-full"
                    href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                    target="_blank"
                  >
                    <Play className="mb-1 mr-1" size={24} />
                    {t("button.play")}
                  </Link>
                  <Link
                    className="btn btn-secondary flex justify-center items-center w-full"
                    href={`/bonuses/${brand.id}`}
                    onClick={handleLinkClick}
                  >
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <Eye className="mr-2" size={20} />
                    )}
                    {t("button.review")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
