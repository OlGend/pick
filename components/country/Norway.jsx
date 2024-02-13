"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/norwayrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const LiveCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">Norwegian Online Casino Guide: The Apex of Gaming in Norway</h1>
          <p className="text-white mt-5">Looking for an unmatched gaming experience in Norway? Our carefully vetted list highlights the top online casinos available to Norwegian players. Enter a realm of substantial bonuses, first-rate customer support, and a wide variety of payment options from traditional bank transfers to state-of-the-art e-wallets. If you&#39;re in Norway, the ultimate gaming escapade awaits you here.</p>
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
