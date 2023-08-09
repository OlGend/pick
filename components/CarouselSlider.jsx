"use client";
import React from "react";
import { Play, Eye } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTopBrands } from "./useBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "./brandUtils";

const CarouselSlider = ({ slides }) => {
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const slidesData = useTopBrands(112);

  

  return (
    <div className="brand-slider mb-6">
        <h4 className="mb-3">Reccomend brands for you</h4>
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
      </Slider>
    </div>
  );
};

export default CarouselSlider;
