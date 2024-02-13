"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/brazilrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const Brazil = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">Brazilian Online Casino Guide: Your Portal to Gaming Bliss in Brazil</h1>
          <p className="text-white mt-5">Looking for a top-tier gaming experience in Brazil? Our expertly curated list highlights the most exceptional online casinos available in the Brazilian market. Explore a universe of rewarding bonuses, dependable customer service, and a myriad of payment options, from traditional bank transfers to modern digital wallets. If you&#39;re in Brazil, we&#39;ve got your ultimate gaming adventure covered.</p>
          {/* <Subscribe /> */}
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={400} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Brazil;
