// TopBrands.jsx (Клиентский компонент)
"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useTopBrandsFilter } from "@/components/useBrands";
import Loader from "@/components/Loader";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterLoader from "@/components/FilterLoader";
import { track } from "@vercel/analytics";

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
  DotsThreeCircle,
  Handshake,
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
  extractLimits,
} from "@/components/brandUtils";

export default function AllBonuses({
  choose,
  filtered,
  isLoader,
  currentText,
}) {
  const { t } = useTranslation();
  const itemsPerPage = 4;
  const itemsPerPage2 = 4;

  const [visibleBrands, setVisibleBrands] = useState(itemsPerPage);
  const [visibleBrands2, setVisibleBrands2] = useState(itemsPerPage2);

  const [hasMoreBrands, setHasMoreBrands] = useState(false);
  const [openPlusesId, setOpenPlusesId] = useState(null);
  const [openWithdrawalId, setOpenWithdrawalId] = useState(null);
  const [openDepositsId, setOpenDepositsId] = useState(null);
  const [openCountriesId, setOpenCountriesId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = () => {
    setIsLoading(true);

    // Simulate some delay to show the loader (remove this in actual usage)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const filteredBrands = useTopBrandsFilter(choose, filtered.brand);

  const topBrands = useTopBrandsFilter(choose, filtered.topBrand);

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
    setVisibleBrands2((prevVisibleBrands) => prevVisibleBrands + itemsPerPage2);
    track(`Load More Brands | ${currentText}`);
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
  const [newUrl, setNewUrl] = useState("");
  // Чтение сохраненной ссылки из локального хранилища
  useEffect(() => {
    const savedUrl = localStorage.getItem("savedUrl");

    // Установка новой ссылки в состояние
    if (savedUrl) {
      setNewUrl(savedUrl);
    }
  }, []);

  const [randomBrands, setRandomBrands] = useState([]);
  const [randomBrands2, setRandomBrands2] = useState([]);
  const [brandsGenerated, setBrandsGenerated] = useState(false);

  useEffect(() => {
    setBrandsGenerated(false); // Устанавливаем в false при изменении локали, чтобы пересчитать случайные бренды
  }, [filtered.topBrand]); // Отслеживаем изменения связанные с локалью

  useEffect(() => {
    const generateRandomBrands = () => {
      if (!brandsGenerated && filteredBrands.length > 0) {
        const shuffledBrands = [...filteredBrands].sort(
          () => Math.random() - 0.5
        );
        const shuffledBrands2 = [...filteredBrands].sort(
          () => Math.random() - 0.5
        );

        setRandomBrands(shuffledBrands);
        setRandomBrands2(shuffledBrands2);
        setBrandsGenerated(true);
      }
    };

    generateRandomBrands(); // Вызываем генерацию при первом рендере
  }, [brandsGenerated, filteredBrands]); // Отслеживаем изменения brandsGenerated и filteredBrands

  console.log("RANDOM", filteredBrands);

  const vis = randomBrands.length > 0 ? randomBrands : filteredBrands;
  const vis2 = randomBrands2.length > 0 ? randomBrands2 : filteredBrands;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (filteredBrands.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [filteredBrands]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const [page, setPage] = useState("");

  useEffect(() => {
    const urlArray = window.location.href.split("/");
    const pageName = urlArray[urlArray.length - 1]; 
    setPage(pageName);
  }, []);


  console.log("PAGEPAGE", page)


  return (
    <>
      {isLoader ? (
        <FilterLoader />
      ) : (
        <div className="flex flex-wrap justify-between awesome">
          {loading ? ( // Показываем индикатор загрузки, если данные загружаются
            <Loader />
          ) : (
            <div className="flex flex-wrap justify-between w-full">
              <div className="flex flex-col px-0 py-6 basis-[75%]">
                {vis.slice(0, visibleBrands).map((brand) => {
                  const reviewImgSrc = extractReviewImage(
                    brand.content.rendered
                  );
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
                          {/* <div className="filter-flag">{filtered.flag}</div> */}
                        </div>
                        <div className="flex mb-1">
                          <Gift className="mr-1" size={24} />
                          <div
                            className=" flex items-center"
                            dangerouslySetInnerHTML={{
                              __html: extractReviewBonus(
                                brand.content.rendered
                              ),
                            }}
                          />
                        </div>
                        <div className="mb-2 withdrawal withdrawal-limits flex items-center">
                          <Handshake className="mr-1 mb-1" size={24} />
                          <div className="title mr-2">Withdrawal Limits:</div>
                          <div
                            className="items-center"
                            dangerouslySetInnerHTML={{
                              __html: extractLimits(brand.content.rendered),
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
                            <span className="mt-1 ml-2">
                              Withdrawal Methods
                            </span>
                            <CaretDown className="ml-auto" size={20} />
                          </div>
                          {isWithdrawalOpen && (
                            <div
                              className="withdrawal"
                              dangerouslySetInnerHTML={{
                                __html: extractWithdrawal(
                                  brand.content.rendered
                                ),
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
                            <span className="mt-1 ml-2">
                              Restricted Countries
                            </span>
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
                          <Link
                            key={brand.id}
                            href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                            onClick={() => {
                              track(`${page} | ${currentText} | Conversion to Brand`);
                            }}
                          >
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
                          {/* <Link
                        className="btn btn-secondary text-center flex justify-center items-center"
                       href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                        onClick={handleLinkClick}
                      >
                        {isLoading ? (
                          <Loader />
                        ) : (
                          <Eye className="mr-2" size={20} />
                        )}
                        Read Review
                      </Link> */}
                          <div className="flex flex-col items-center w-full p-4 howUse mt-2 mb-2">
                            <span className="text-center">
                              How to get bonus?
                            </span>
                            <p className="text-center m-0 text-slate-500">
                              Activate bonus in your casino account
                            </p>
                          </div>
                          <Link
                            className="btn btn-primary mt-0 text-center flex justify-center items-center"
                            href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                            target="_blank"
                            onClick={() => {
                              track(`${page} | ${currentText} | Conversion to Brand`);
                            }}
                          >
                            <Play className="mr-2" size={24} /> Play Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {hasMoreBrands && (
                  <button
                    className="btn-primary btn-more text-lg max-w-sm p-3 ml-auto mr-auto mt-4 font-semibold text-white flex justify-center items-center"
                    onClick={loadMoreBrands}
                  >
                    <DotsThreeCircle className="mb-1 mr-1" size={24} />
                    Load More Brands
                  </button>
                )}
              </div>
              <div className="flex flex-col basis-[24%] py-6">
                {!isMobile && vis2.length > 0 ? (
                  vis2.slice(0, visibleBrands2).map((item) => {
                    const reviewImgSrc = extractReviewImage(
                      item.content.rendered
                    );
                    const playLink = extractLink(item.content.rendered);
                    return (
                      <div
                        className="card-brand-banner mb-2 flex flex-col items-center pb-3"
                        key={item.id}
                      >
                        <div className="brandImage p-3">
                          <Link
                            className="flex justify-center flex-col items-center"
                            key={item.id}
                            href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                            target="_blank"
                            onClick={() => {
                              track(`${page} | ${currentText} | Conversion to Brand`);
                            }}
                          >
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
                                __html: extractReviewBonus(
                                  item.content.rendered
                                ),
                              }}
                            />
                          </Link>
                        </div>
                        <Link
                          className="btn btn-primary btn-new"
                          key={item.id}
                          href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                          target="_blank"
                          onClick={() => {
                            track(`${page} | ${currentText} | Conversion to Brand`);
                          }}
                        >
                          Play now
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <Slider {...settings}>
                    {vis2.map((item) => {
                      const reviewImgSrc = extractReviewImage(
                        item.content.rendered
                      );
                      const playLink = extractLink(item.content.rendered);
                      return (
                        <div
                          className="card-brand-banner mb-2 flex flex-col items-center pb-3"
                          key={item.id}
                        >
                          <div className="brandImage p-3">
                            <Link
                              className="flex justify-center flex-col items-center"
                              key={item.id}
                              href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                              target="_blank"
                              onClick={() => {
                                track(`${page} | ${currentText} | Conversion to Brand`);
                              }}
                            >
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
                                  __html: extractReviewBonus(
                                    item.content.rendered
                                  ),
                                }}
                              />
                            </Link>
                          </div>
                          <Link
                            className="btn btn-primary btn-new"
                            key={item.id}
                            href={`https://link.reg2dep1.com/${playLink}/${newUrl}`}
                            target="_blank"
                            onClick={() => {
                              track(`${page} | ${currentText} | Conversion to Brand`);
                            }}
                          >
                            Play now
                          </Link>
                        </div>
                      );
                    })}
                  </Slider>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
