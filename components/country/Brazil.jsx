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
          <h1 className="text-white">{t("brazil.title")}</h1>
          <p className="text-white mt-5">{t("brazil.description")}</p>
          <Subscribe />
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={400} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Brazil;
