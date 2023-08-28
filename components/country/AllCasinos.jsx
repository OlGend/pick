"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/worldrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";

const CryptoCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          
          <h1 className="text-white">Global Online Casino Review: Top Platforms by Country</h1>
          <p className="text-white mt-5">Searching for the perfect online casino? Our comprehensive compilation showcases the most reliable and enticing casinos available across the globe. Here, you&#39;ll find information on lucrative bonuses, dependable customer service, and various payment methods ranging from credit cards to e-wallets. No matter where you are located, we have something to offer for every player.</p>
          <Subscribe />
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={400} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default CryptoCasinos;
