"use client";
import React from "react";
import Image from "next/image";
import Img from "@/public/cryptoCasinos.png";

const CryptoCasinos = () => {
  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">
            Top Cryptocurrency Betting Platforms & Bitcoin Casino Sites in 2023
          </h1>
          <p className="text-white mt-5">
            Explore our compilation of premier online casinos for Bitcoin along
            with betting platforms that embrace BTC and alternative
            cryptocurrencies as viable payment methods. Delve into impartial
            assessments, and pinpoint the ultimate Bitcoin casino destination
            tailored to your preferences.
          </p>
        </div>
        <div className="basis-[40%] flex justify-end">
          <Image src={Img} alt="Beep" width={300} height={300} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default CryptoCasinos;
