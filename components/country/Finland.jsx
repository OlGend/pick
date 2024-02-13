"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/finlandrobot.png";
import Subscribe from "@/components/subscribe/Subscribe";


const LiveCasinos = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">Finnish Online Casino Guide: The Ultimate Gaming Experience in Finland</h1>
          <p className="text-white mt-5">Searching for an unparalleled gaming adventure in Finland? Our hand-picked selection showcases the finest online casinos catering to the Finnish audience. Step into a realm filled with generous bonuses, top-notch customer service, and a broad spectrum of payment methods from traditional bank transfers to modern e-wallets. If you're in Finland, your one-of-a-kind gaming journey starts here</p>
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
