"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/germanyrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const LiveCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">German Online Casino Guide: The Ultimate Gaming Haven in Deutschland</h1>
          <p className="text-white mt-5">Are you on the quest for an exceptional gaming experience in Germany? Our carefully curated list highlights the best online casinos available for the German market. Venture into a world rich with enticing bonuses, reliable customer support, and a multitude of payment options, including traditional bank transfers and contemporary e-wallets. If you're in Germany, your unparalleled gaming journey begins here</p>
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
