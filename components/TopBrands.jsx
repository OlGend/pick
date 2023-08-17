// TopBrands.jsx (Клиентский компонент)
"use client";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Play, Eye } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { useTopBrands } from "./useBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "./brandUtils";
import Loader from "@/components/Loader";

export default function TopBrands() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const filteredBrands = useTopBrands(112);


  useEffect(() => {
    if (filteredBrands.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [filteredBrands]);
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
      {loading ? (
        <Loader />
      ) : (
        <div className="main__container pb-6">
          <div className="heading flex items-center pt-12">
            <h2>{t('topBrands.title')}</h2>
          </div>
          <div className="flex flex-wrap px-0 py-6">
            {filteredBrands.map((brand) => {
              const reviewImgSrc = extractReviewImage(brand.content.rendered);
              const playLink = extractLink(brand.content.rendered);

              return (
                <div className="basis-[19%] card-brand mb-3" key={brand.id}>
                  <div className="brandImage p-3">
                    <Link key={brand.id} href={`/bonuses/${brand.id}`}>
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
                        className="btn btn-secondary flex justify-center items-center mb-1"
                        href={`/bonuses/${brand.id}`}
                      >
                        <Eye className="mr-1" size={20} />
                        {t('button.review')}
                      </Link>
                      <Link
                        className="btn btn-primary flex justify-center items-center mt-1"
                        href={playLink}
                        onClick={handleLinkClick}
                      >
                        {isLoading ? (
                          <Loader />
                        ) : (
                          <Play className="mr-2" size={20} />
                        )}
                       {t('button.play')}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
