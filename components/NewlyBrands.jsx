// TopBrands.jsx (Клиентский компонент)
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTopBrands } from "./useTopBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
  extractBadge,
  extractPros,
} from "./brandUtils";

export default function NewlyBrands() {
  const itemsPerPage = 7;
  const [visibleBrands, setVisibleBrands] = useState(itemsPerPage);
  const [hasMoreBrands, setHasMoreBrands] = useState(false);

  const filteredBrands = useTopBrands(24);

  useEffect(() => {
    setHasMoreBrands(visibleBrands < filteredBrands.length);
  }, [visibleBrands, filteredBrands.length]);

  const loadMoreBrands = () => {
    setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + itemsPerPage);
  };
  return (
    <>
      <div>
        <div className="flex flex-col px-0 py-6">
          {filteredBrands.slice(0, visibleBrands).map((brand) => {
            const reviewImgSrc = extractReviewImage(brand.content.rendered);
            const playLink = extractLink(brand.content.rendered);

            return (
              <div
                className="flex flex-wrap mb-2 card-brand-new"
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
                  className="flex basis-[13%] items-center p-3"
                  key={brand.id}
                  href={`/bonuses/${brand.id}`}
                >
                  <h4>{brand.title.rendered}</h4>
                </Link>
                <div
                  className="basis-[15%] flex items-center"
                  dangerouslySetInnerHTML={{
                    __html: extractReviewBonus(brand.content.rendered),
                  }}
                />
                <div
                  className="flex basis-[10%] items-center"
                  dangerouslySetInnerHTML={{
                    __html: extractBadge(brand.content.rendered),
                  }}
                />
                <div
                  className="flex basis-[25%] items-center ml-3"
                  dangerouslySetInnerHTML={{
                    __html: extractPros(brand.content.rendered),
                  }}
                />
                <div className="buttons ml-auto p-3 flex items-center">
                  <Link className="btn btn-primary mr-3 mt-0" href={playLink}>
                    Play Now
                  </Link>
                  <Link
                    className="btn btn-secondary"
                    href={`/bonuses/${brand.id}`}
                  >
                    Review
                  </Link>
                </div>
              </div>
            );
          })}
          {/* Кнопка для загрузки дополнительных брендов */}
          {hasMoreBrands && (
        <button className="btn btn-secondary" onClick={loadMoreBrands}>
          Load More Brands (+7)
        </button>
      )}
        </div>
      </div>
    </>
  );
}
