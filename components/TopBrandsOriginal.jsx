"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import { CalendarCheck, Play, Eye } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { useTopBrands } from "./useBrands";
import { useTopBrandsFilter } from "@/components/useBrands";
import { track } from "@vercel/analytics";

import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
  extractBadge,
  extractPros,
} from "./brandUtils";
import useSWR from "swr";

export default function TopBrandsOriginal() {
  const { t } = useTranslation();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [source, setSource] = useState("");
  useEffect(() => {
    const defLng = localStorage.getItem("country");
    // setSelectedBrand(defLng);
    if (defLng) {
      const foundBrand = navigateBrands.find(
        (brand) => brand.slug === defLng.toLowerCase()
      );
      const foundBrandPartners = navigateBrandsPartners.find(
        (brand) => brand.slug === defLng.toLowerCase()
      );
      if (foundBrand || foundBrandPartners) {
        const newSource = localStorage.getItem("source");
        setSelectedBrand(
          newSource === "partner1039" ? foundBrandPartners : foundBrand
        );
      } else {
        // Если локаль не найдена, устанавливаем "all"
        const allBrand = navigateBrands.find((brand) => brand.slug === "all");
        const allBrandPartners = navigateBrandsPartners.find(
          (brand) => brand.slug === "all"
        );
        const newSource = localStorage.getItem("source");
        setSelectedBrand(
          newSource === "partner1039" ? allBrandPartners : allBrand
        );
      }
    }
  }, []);

  const navigateBrands = [
    // {
    //   topCurrentCategories: 222,
    //   brand: 220,
    //   icon: "🌍",
    //   slug: "all",
    // },
    {
      topCurrentCategories: 223,
      brand: 220,
      icon: "🇦🇺",
      slug: "au",
    },
    {
      topCurrentCategories: 224,
      brand: 220,
      icon: "🇨🇦",
      slug: "ca",
    },
    // {
    //   topCurrentCategories: 228,
    //   brand: 220,
    //   icon: "🇫🇮",
    //   slug: "fi",
    // },
    // {
    //   topCurrentCategories: 226,
    //   brand: 220,
    //   icon: "🇩🇪",
    //   slug: "de",
    // },
    {
      topCurrentCategories: 231,
      brand: 220,
      icon: "🇳🇿",
      slug: "nz",
    },
    // {
    //   topCurrentCategories: 230,
    //   brand: 220,
    //   icon: "🇳🇴",
    //   slug: "no",
    // },
    // {
    //   topCurrentCategories: 232,
    //   brand: 220,
    //   icon: "🇵🇱",
    //   slug: "pl",
    // },
  ];
  const navigateBrandsPartners = [
    // {
    //   topCurrentCategories: 250,
    //   brand: 249,
    //   icon: "🌍",
    //   slug: "all",
    // },
    {
      topCurrentCategories: 251,
      brand: 249,
      icon: "🇦🇺",
      slug: "au",
    },
    {
      topCurrentCategories: 224,
      brand: 249,
      icon: "🇨🇦",
      slug: "ca",
    },
    // {
    //   topCurrentCategories: 228,
    //   brand: 249,
    //   icon: "🇫🇮",
    //   slug: "fi",
    // },
    // {
    //   topCurrentCategories: 226,
    //   brand: 249,
    //   icon: "🇩🇪",
    //   slug: "de",
    // },
    {
      topCurrentCategories: 231,
      brand: 249,
      icon: "🇳🇿",
      slug: "nz",
    },
    // {
    //   topCurrentCategories: 230,
    //   brand: 249,
    //   icon: "🇳🇴",
    //   slug: "no",
    // },
    // {
    //   topCurrentCategories: 232,
    //   brand: 249,
    //   icon: "🇵🇱",
    //   slug: "pl",
    // },
  ];

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const urlObj = typeof window !== "undefined" ? new URL(url) : null;

    const searchParams = new URLSearchParams(urlObj.search);
    searchParams.delete("brand");

    const currentKeyword = searchParams.get("keyword");

    if (currentKeyword !== null && currentKeyword.includes("partner1039")) {
      // Если в строке есть "partner1039" или "partner1041", вырезаем и добавляем в setSource
      const partnerIndex = currentKeyword.indexOf("partner");
      const partnerText = currentKeyword.substring(
        partnerIndex,
        partnerIndex + 11
      ); // 11 - длина "partner1039" или "partner1041"
      setSource(partnerText);

      // Используем "partner1039" или "partner1041" в newUrl
      searchParams.set("source", partnerText);
    } else {
      // Если "partner1039" или "partner1041" отсутствует, добавляем 0 в setSource
      setSource("0");
      searchParams.set("source", "0");
      // Если "partner1039" или "partner1041" отсутствует, новый URL не содержит source
      // searchParams.delete("source");
    }
  }, []);
  const { data: languageDetails, error: detailsError } = useSWR(
    "languageDetails",
    null,
    {
      fallbackData: selectedBrand
        ? {
            flag: selectedBrand.icon,
            brand: selectedBrand.brand,
            topBrand: selectedBrand.topCurrentCategories,
          }
        : { flag: "🌍", brand: 220, topBrand: 223 },
    }
  );

  if (typeof window !== "undefined") {
    const newSource = localStorage.getItem("source");
    const urlBrands = newSource === "partner1039" ? 249 : 220;

    if (urlBrands && typeof window !== "undefined") {
      localStorage.setItem("newbrands", urlBrands);
    }
  }
  let br;
  if (typeof window !== "undefined") {
    br = localStorage.getItem("newbrands");
  }
  const filteredBrands = useTopBrandsFilter(br, languageDetails.topBrand);

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

  console.log("FBR", filteredBrands);
  console.log("CATEG", br, languageDetails.topBrand);

  return (
    <>
      <div className="main__container pb-6">
        <div className="heading flex items-center pt-12 ptn-12">
          <h2>Fresh Entrants to the Online Casino Scene 2024</h2>
        </div>
        <div className="flex flex-wrap px-0 py-6">
          {filteredBrands.map((brand) => {
            const reviewImgSrc = extractReviewImage(brand.content.rendered);
            const playLink = extractLink(brand.content.rendered);

            return (
              <div className="basis-[19%] card-brand mb-3" key={brand.id}>
                <div className="brandImage p-3">
                  <Link
                    key={brand.id}
                    href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                    onClick={() => {
                      track(`Fresh Entrants | Conversion to Brand`);
                    }}
                  >
                    <Image
                      src={reviewImgSrc}
                      alt={brand.title.rendered}
                      width={150}
                      height={75}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="brandContent p-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: extractReviewBonus(brand.content.rendered),
                    }}
                  />
                  <div className="buttons">
                    <Link
                      className="btn btn-primary flex justify-center items-center mt-1"
                      href={`https://link.reg2dep1.com/${extractLink(
                        brand.content.rendered
                      )}/${newUrl}`}
                      target="_blank"
                      onClick={() => {
                        track(`Fresh Entrants | Conversion to Brand`);
                      }}
                    >
                      <Play className="mr-2" size={20} />
                      Play Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
