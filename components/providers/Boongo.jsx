"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Img from "@/public/providersRobot.png";
import Subscribe from "@/components/subscribe/Subscribe";

const Amatic = () => {
  const { t } = useTranslation();

  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">
         
          </h1>
          <p className="text-white mt-5">
         
          </p>
          <h1 className="text-white">{t("boongo.title")}</h1>
          <p className="text-white mt-5">{t("boongo.description")}</p>
          <Subscribe />
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={327} height={540} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Amatic;
