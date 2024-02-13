"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/canadarobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const LiveCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">Canadian Online Casino Guide: Uncovering the Best in Canadian Gaming</h1>
          <p className="text-white mt-5">In search of an exceptional gaming experience in Canada? Our meticulously curated list features the top online casinos available to the Canadian audience. Dive into a realm of generous bonuses, stellar customer service, and a wide array of payment options that include traditional bank transfers as well as contemporary e-wallets. If you're based in Canada, your ultimate gaming adventure awaits.</p>
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
