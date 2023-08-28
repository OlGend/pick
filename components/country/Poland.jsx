"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/polishrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const LiveCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
        <h1 className="text-white">Polish Online Casino Guide: The Premier Gaming Destination in Poland</h1>
          <p className="text-white mt-5">Seeking an unparalleled gaming experience in Poland? Our scrupulously curated list highlights the elite online casinos accessible to Polish players. Step into a world rich in lucrative bonuses, impeccable customer service, and a myriad of payment options, from traditional bank transfers to innovative e-wallet solutions. If you&#39;re in Poland, your matchless gaming journey starts here.</p>
          <Subscribe />
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={400} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default LiveCasinos;
