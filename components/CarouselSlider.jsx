"use client";
import React from "react";
import { useTranslation } from "react-i18next";

import { Play, Eye } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTopBrands } from "./useBrands";
import { useTopBrandsFilter } from "@/components/useBrands";
import useSWR from "swr";

import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "./brandUtils";

const CarouselSlider = ({ slides }) => {
  const { t } = useTranslation();
  const { data: languageDetails, error: detailsError } = useSWR(
    "languageDetails",
    null,
    {
      fallbackData: { flag: "🌍", allBrand: 25, topBrand: 213 }, // Задаем начальное значение
    }
  );
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slidesData = useTopBrandsFilter(213, languageDetails.allBrand);

  return (
    <div className="brand-slider mb-6">
      <h4 className="mb-3">{t("slider.title")}</h4>
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          const reviewImgSrc = extractReviewImage(slide.content.rendered);
          const playLink = extractLink(slide.content.rendered);

          return (
            <div className="card-brand" key={index}>
              <div className="brandImage p-3">
                <Link key={slide.id} href={`/bonuses/${slide.id}`}>
                  <Image
                    src={reviewImgSrc}
                    alt={slide.title.rendered}
                    width={150}
                    height={75}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="brandContent p-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: extractReviewBonus(slide.content.rendered),
                  }}
                />
                <div className="buttons">
                  <Link
                    className="btn btn-secondary flex justify-center items-center mb-1"
                    href={`/bonuses/${slide.id}`}
                  >
                    <Eye className="mr-1 mb-1" size={20} />
                    {t("button.review")}
                  </Link>
                  <Link
                    className="btn btn-primary flex justify-center items-center mt-1"
                    href={`https://link.reg2dep1.com/${playLink}`}
                    target="_blank"

                  >
                    <Play className="mr-1 mb-1" size={20} />
                    {t("button.play")}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
