// TopBrands.jsx (Клиентский компонент)
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTopBrands } from "./useBrands";
import {
  Gift,
  ShieldPlus,
  CaretDown,
  Bank,
  CurrencyCircleDollar,
  Play,
  Eye,
  Prohibit,
  MinusCircle,
} from "phosphor-react";

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
} from "./brandUtils";

export default function AllBrands({ choose }) {
  const itemsPerPage = 7;
  const [visibleBrands, setVisibleBrands] = useState(itemsPerPage);
  const [hasMoreBrands, setHasMoreBrands] = useState(false);
  const [openPlusesId, setOpenPlusesId] = useState(null);
  const [openWithdrawalId, setOpenWithdrawalId] = useState(null);
  const [openDepositsId, setOpenDepositsId] = useState(null);
  const [openCountriesId, setOpenCountriesId] = useState(null);

  const filteredBrands = useTopBrands(choose);
  const topBrands = useTopBrands(112);
  console.log("real", topBrands);

  useEffect(() => {
    setHasMoreBrands(visibleBrands < filteredBrands.length);
  }, [visibleBrands, filteredBrands.length]);

  useEffect(() => {
    const withdrawalItems = document.querySelectorAll(".withdrawal li");
    withdrawalItems.forEach((item) => {
      const content = item.textContent.trim();
      const className = content.toLowerCase().replace(/\s+/g, "-");
      item.classList.add(className);
    });
  }, [filteredBrands]);

  const loadMoreBrands = () => {
    setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + itemsPerPage);
  };
  const handlePlusesClick = (brandId) => {
    setOpenPlusesId((prevId) => (prevId === brandId ? null : brandId));
  };
  const handleWithdrawalClick = (brandId) => {
    setOpenWithdrawalId((prevId) => (prevId === brandId ? null : brandId));
  };
  const handleDepositsClick = (brandId) => {
    setOpenDepositsId((prevId) => (prevId === brandId ? null : brandId));
  };
  const handleCountriesClick = (brandId) => {
    setOpenCountriesId((prevId) => (prevId === brandId ? null : brandId));
  };
  useEffect(() => {
    const flagCircles = document.querySelectorAll(".pokageo-flag-circle");

    flagCircles.forEach((flagCircle) => {
      const statusIconDiv = flagCircle.querySelector(".pokageo-status-icon");

      if (
        statusIconDiv &&
        statusIconDiv.classList.contains("pokageo-status-icon-disallowed")
      ) {
        flagCircle.classList.add("disallowed");
      }
    });
  }, [filteredBrands]);

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col px-0 py-6 basis-[75%]">
          {filteredBrands.slice(0, visibleBrands).map((brand) => {
            const reviewImgSrc = extractReviewImage(brand.content.rendered);
            const playLink = extractLink(brand.content.rendered);
            const isPlusesOpen = openPlusesId === brand.id;
            const isWithdrawalOpen = openWithdrawalId === brand.id;
            const isDepositsOpen = openDepositsId === brand.id;
            const isCountriesOpen = openCountriesId === brand.id;

            return (
              <div
                className="p-3 flex justify-between flex-wrap mb-2 card-brand-filtered w-full"
                key={brand.id}
              >
                <div className="flex flex-col basis-[63%]">
                  <div className="flex ml-1 mb-3">
                    <div
                      className="items-center"
                      dangerouslySetInnerHTML={{
                        __html: extractFlag(brand.content.rendered),
                      }}
                    />
                    <div
                      className="items-center ml-2"
                      dangerouslySetInnerHTML={{
                        __html: extractBadge(brand.content.rendered),
                      }}
                    />
                  </div>
                  <div className="flex mb-3">
                    <Gift className="mr-1" size={24} />
                    <div
                      className=" flex items-center"
                      dangerouslySetInnerHTML={{
                        __html: extractReviewBonus(brand.content.rendered),
                      }}
                    />
                  </div>
                  <div
                    onClick={() => handlePlusesClick(brand.id)}
                    className="pluses custom-list-item mb-1"
                  >
                    <div className="title flex items-center">
                      <ShieldPlus size={24} />
                      <span className="mt-1 ml-2">Advantages</span>
                      <CaretDown className="ml-auto" size={20} />
                    </div>
                    {isPlusesOpen && (
                      <div
                        className="items-center ml-3"
                        dangerouslySetInnerHTML={{
                          __html: extractPros(brand.content.rendered),
                        }}
                      />
                    )}
                  </div>
                  <div
                    onClick={() => handleDepositsClick(brand.id)}
                    className="withdrawal custom-list-item mb-1"
                  >
                    <div className="title flex items-center">
                      <CurrencyCircleDollar size={24} />
                      <span className="mt-1 ml-2">Deposit Methods</span>
                      <CaretDown className="ml-auto" size={20} />
                    </div>
                    {isDepositsOpen && (
                      <div
                        className="withdrawal"
                        dangerouslySetInnerHTML={{
                          __html: extractDeposits(brand.content.rendered),
                        }}
                      />
                    )}
                  </div>
                  <div
                    onClick={() => handleWithdrawalClick(brand.id)}
                    className="withdrawal custom-list-item mb-1"
                  >
                    <div className="title flex items-center">
                      <Bank size={24} />
                      <span className="mt-1 ml-2">Withdrawal Methods</span>
                      <CaretDown className="ml-auto" size={20} />
                    </div>
                    {isWithdrawalOpen && (
                      <div
                        className="withdrawal"
                        dangerouslySetInnerHTML={{
                          __html: extractWithdrawal(brand.content.rendered),
                        }}
                      />
                    )}
                  </div>
                  <div
                    onClick={() => handleCountriesClick(brand.id)}
                    className="withdrawal custom-list-item mb-1"
                  >
                    <div className="title flex items-center">
                      <Prohibit size={24} />
                      <span className="mt-1 ml-2">Restricted Countries</span>
                      <CaretDown className="ml-auto" size={20} />
                    </div>
                    {isCountriesOpen && (
                      <div className="withdrawal">
                        {/* Виводимо обмежені країни */}
                        <div className="countries flex flex-wrap justify-between mt-1">
                          {extractCountries(brand.content.rendered).map(
                            (country, index) => (
                              <div
                                className="basis-[49%] pl-1 mb-2 flex"
                                key={index}
                              >
                                <MinusCircle color="#dd3333" size={18} />
                                <span className="pl-1">{country}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="basis-[36%]">
                  <div className="brandImage p-3">
                    <Link key={brand.id} href={`/bonuses/${brand.id}`}>
                      <Image
                        src={reviewImgSrc}
                        alt={brand.title.rendered}
                        width={250}
                        height={125}
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  <div className="buttons ml-auto flex items-center">
                    <Link
                      className="btn btn-secondary text-center flex justify-center items-center"
                      href={`/bonuses/${brand.id}`}
                    >
                      <Eye className="mr-2 mb-1" size={20} />
                      Read review
                    </Link>
                    <div className="flex flex-col items-center w-full p-4 howUse mt-2 mb-2">
                      <span className="text-center">How to get bonus?</span>
                      <p className="text-center m-0">
                        Activate bonus in your casino account
                      </p>
                    </div>
                    <Link
                      className="btn btn-primary mt-0 text-center flex justify-center items-center"
                      href={playLink}
                    >
                      <Play className="mr-2 mb-1" size={24} /> Play Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {hasMoreBrands && (
            <button
              className="btn-primary btn-more text-lg max-w-sm p-3 ml-auto mr-auto mt-4 font-semibold text-white"
              onClick={loadMoreBrands}
            >
              Load More Brands (+7)
            </button>
          )}
        </div>
        <div className="flex flex-col basis-[24%] py-6">
          {topBrands.map((item) => {
            const reviewImgSrc = extractReviewImage(item.content.rendered);
            const playLink = extractLink(item.content.rendered);
            return (
              <div className="card-brand-banner mb-2" key={item.id}>
                <div className="brandImage p-3">
                  <Link className="flex justify-center flex-col items-center" key={item.id} href={playLink}>
                    <Image
                      src={reviewImgSrc}
                      alt={item.title.rendered}
                      width={200}
                      height={80}
                      loading="lazy"
                    />
                     <div
                      className="p-3 text-center flex items-center"
                      dangerouslySetInnerHTML={{
                        __html: extractReviewBonus(item.content.rendered),
                      }}
                    />
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
