"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/nzrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const LiveCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">New Zealand Online Casino Guide: The Ultimate Kiwi Gaming Experience</h1>
          <p className="text-white mt-5">Searching for an extraordinary gaming experience in New Zealand? Our rigorously curated list features the cream of the crop in online casinos available to Kiwi players. Step into a world of lavish bonuses, excellent customer service, and a plethora of payment options ranging from traditional bank transfers to cutting-edge e-wallets. For those in New Zealand, your unparalleled gaming adventure starts right here.</p>
          {/* <Subscribe /> */}
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={400} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default LiveCasinos;
