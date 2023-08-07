"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useBrandById } from "./useBrandById";
import { SketchLogo, Star, MinusCircle, Play } from "phosphor-react";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
  extractBadge,
  extractPros,
  extractWithdrawal,
  extractDeposits,
  extractCountries,
  extractFlag,
  extractLimits,
  extractSingle,
  extractRating,
} from "./brandUtils";

export default function Brand({ brand }) {
  const oneBrand = useBrandById(brand);

  useEffect(() => {
    if (oneBrand) {
      console.log(oneBrand);
    }
  }, [oneBrand]);

  const reviewImgSrc = oneBrand
    ? extractReviewImage(oneBrand.content.rendered)
    : null;
  const playLink = oneBrand
  ? extractLink(oneBrand.content.rendered)
  : null;

  const ratingText = oneBrand ? extractRating(oneBrand.content.rendered) : "0";
  const numericRating = parseFloat(ratingText);
  const ratingPercentage = (numericRating / 5) * 100;

  useEffect(() => {
    const flagCircles = document.querySelectorAll(".pokageo-flag-circle");

    flagCircles.forEach((flagCircle) => {
      const statusIconDiv = flagCircle.querySelector(".pokageo-status-icon");

      if (statusIconDiv) {
        const disallowed = statusIconDiv.classList.contains(
          "pokageo-status-icon-disallowed"
        );
        const statusText = document.createElement("div");
        statusText.innerText = disallowed
          ? "Dont accepted players"
          : "Accept players";
        statusText.classList.add("status-text");
        statusIconDiv.appendChild(statusText);
        flagCircle.classList.add(disallowed ? "disallowed" : "allowed");
      }
    });
  }, [oneBrand]);
  useEffect(() => {
    const withdrawalItems = document.querySelectorAll(".withdrawal li");
    withdrawalItems.forEach((item) => {
      const content = item.textContent.trim();
      const className = content.toLowerCase().replace(/\s+/g, "-");
      item.classList.add(className);
    });
  }, [oneBrand]);

  return (
    <>
      <div className="flex flex-wrap justify-between oneBrand">
        <div className="flex flex-col px-0 py-6 w-full">
          <div
            className="p-3 flex justify-between flex-wrap mb-2 card-brand-filtered w-full"
            key={brand.id}
          >
            <div className="flex w-full">
              {oneBrand ? (
                <>
                  <div className="mb-2 withdrawal withdrawal-limits flex flex-col basis-[25%]">
                    <div className="brandImage p-3">
                      {reviewImgSrc ? (
                        <Link
                          key={oneBrand.id}
                          href={`/bonuses/${oneBrand.id}`}
                        >
                          <Image
                            src={reviewImgSrc}
                            alt={oneBrand.title.rendered}
                            width={250}
                            height={125}
                            loading="lazy"
                          />
                        </Link>
                      ) : (
                        <p>Завантаження...</p>
                      )}
                    </div>

                    <div className="block-rating flex flex-col">
                      <div className="flex">
                        <div className="raitText basis-[50%] flex justify-center items-center">
                          <Star className="mb-1 mr-2" size={24} />
                          {numericRating}/5
                        </div>
                        <div className="basis-[50%] p-2 safeIndex">
                          <div className="font-bold">Safety Index </div>
                          <div>by Our Casino</div>
                        </div>
                      </div>
                    </div>
                    <div className="rating-bar mt-4">
                      <SketchLogo
                        className="rating-circle"
                        style={{
                          left: `${ratingPercentage}%`,
                          transform: `translateX(-${ratingPercentage}%)`,
                        }}
                        size={24}
                      />
                    </div>
                    <div
                      className="geo-tag flex items-center mt-2 mb-2"
                      dangerouslySetInnerHTML={{
                        __html: extractFlag(oneBrand.content.rendered),
                      }}
                    />
                    <div
                      className=" flex items-center"
                      dangerouslySetInnerHTML={{
                        __html: extractBadge(oneBrand.content.rendered),
                      }}
                    />
                    <div className="title mt-2">Withdrawal limits:</div>
                    <div
                      className="limits flex items-center"
                      dangerouslySetInnerHTML={{
                        __html: extractLimits(oneBrand.content.rendered),
                      }}
                    />
                     <Link
                      className="btn btn-primary mt-3 text-center flex justify-center items-center"
                      href={playLink}
                    >
                      <Play className="mr-2 mb-1" size={24} /> Play Now
                    </Link>
                  </div>
                  <div className="otherContent ml-2 basis-[75%]">
                    <div className="title">
                      <h1> {oneBrand.title.rendered}</h1>
                    </div>
                    <div className="pt-6">
                      <div
                        className="pl-2"
                        dangerouslySetInnerHTML={{
                          __html: extractPros(oneBrand.content.rendered),
                        }}
                      />
                      <div className="title pt-2 flex items-center ">
                        <span className="mt-2 ">Deposit Methods:</span>
                      </div>
                      <div
                        className="withdrawal"
                        dangerouslySetInnerHTML={{
                          __html: extractDeposits(oneBrand.content.rendered),
                        }}
                      />
                      <div className="title pt-2 flex items-center ">
                        <span className="mt-2 ">Withdrawal Methods:</span>
                      </div>
                      <div
                        className="withdrawal"
                        dangerouslySetInnerHTML={{
                          __html: extractWithdrawal(oneBrand.content.rendered),
                        }}
                      />
                      <div className="restricted">
                        <div className="title pt-2 flex items-center ">
                          <span className="mt-2 ">Restricted countries:</span>
                        </div>
                        <div className="countries-items pt-2">
                          {extractCountries(oneBrand.content.rendered).map(
                            (country, index) => (
                              <div className="pr-2 mb-2 flex" key={index}>
                                <MinusCircle color="#dd3333" size={18} />
                                <span className="pl-1">{country}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p>Завантаження...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
