import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Img1 from "@/public/subscr1.png";
import Img2 from "@/public/subscr2.png";
import Img3 from "@/public/subscr3.png";

const SliderExample = () => {
  const images = [Img1, Img2, Img3];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  
  return (
    <div className="slider-popup">
      <Slider {...settings}>
        {images.map((slide, index) => (
          <div key={index}>
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              width={298}
              height={300}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderExample;
