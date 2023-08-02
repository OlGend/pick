// TopBrands.jsx (Клиентский компонент)
"use client";
import React from "react";
import { Trophy } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { useTopBrands } from "./useBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "./brandUtils";

export default function TopBrands() {
  // Передаем значение фильтра (например, 112) в хук useTopBrands
  const filteredBrands = useTopBrands(112);

  const currentDate = new Date();
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const title = `CasinoFrog Best Choices for ${month} ${year}`;

  return (
    <>
      <div className="main__container pb-6">
        <div className="heading flex items-center pt-12">
          <Trophy color="#0967e3" size={32} />
          <h2 className="ml-2">{title}</h2>
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
                  {/* <Link key={brand.id} href={`/bonuses/${brand.id}`}>
                    <h4>{brand.title.rendered}</h4>
                  </Link> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: extractReviewBonus(brand.content.rendered),
                    }}
                  />
                  <div className="buttons">
                    <Link className="btn btn-primary" href={playLink}>
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
