// TopBrands.jsx (Клиентский компонент)
"use client";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import Loader from "./Loader";
import { CalendarCheck, Play, Eye } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { useTopBrands } from "./useBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
  extractBadge,
  extractPros,
} from "./brandUtils";

export default function NewBrands() {
  const { t } = useTranslation();
  const filteredBrands = useTopBrands(183);


  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);

    // Simulate some delay to show the loader (remove this in actual usage)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="main__container pb-6">
        <div className="heading flex items-center">
        <h2>{t('newestasinos.title')}</h2>
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
                    href={playLink}
                  >
                    <Play className="mb-1 mr-1" size={24} />
                    {t('button.play')}
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
                     {t('button.review')}
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
