"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/austrrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const FastWithdrawalCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">Australian Online Casino Overview: The Pinnacle of Gaming Down Unde</h1>
          <p className="text-white mt-5">Seeking an unparalleled gaming experience in Australia? Our curated list spotlights the crème de la crème of Australian online casinos. Dive into a world of generous bonuses, impeccable customer service, and diverse payment options—ranging from traditional bank transfers to modern e-wallet solutions. For those located in Australia, we offer a tailored gaming journey that's second to none.</p>
          {/* <Subscribe /> */}
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={400} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default FastWithdrawalCasinos;
