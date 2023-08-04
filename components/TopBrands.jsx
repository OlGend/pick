// TopBrands.jsx (Клиентский компонент)
"use client";
import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const filteredBrands = useTopBrands(112);
  const currentDate = new Date();
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const title = `CasinoFrog Best Choices for ${month} ${year}`;

  useEffect(() => {
    if (filteredBrands.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [filteredBrands]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="main__container pb-6">
          <div className="heading flex items-center pt-12">
            <h2>{title}</h2>
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
                      <Link
                        className="btn btn-secondary flex justify-center items-center mb-1"
                        href={`/bonuses/${brand.id}`}
                      >
                        <Eye className="mr-1 mb-1" size={20} />
                        Read Review
                      </Link>
                      <Link
                        className="btn btn-primary flex justify-center items-center mt-1"
                        href={playLink}
                      >
                        <Play className="mr-1 mb-1" size={20} />
                        Play Now
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
