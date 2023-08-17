"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Diamond,
  DiceTwo,
  PokerChip,
  PersonSimpleRun,
  AlignCenterHorizontalSimple,
  ThumbsUp,
  CaretDown,
} from "phosphor-react";
import Link from "next/link";
import Image from "next/image";
import Img from "@/public/tablet_blue.png";
import Img2 from "@/public/mobile_blue.png";

const MenuItem = ({ title, excerpt, icon, excerpt2, link }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div
      className="p-4 menuItem flex flex-wrap items-center mb-2 relative"
      onClick={handleItemClick}
    >
      <div className="icon">{icon}</div>
      <div className="title ml-2 mt-1 carretDown">{title}<CaretDown color="#0967e3" size={22} /></div>
      {isMenuOpen && (
        <div className="excerpt ml-8 mt-3">
          {excerpt}
          {link}
          {excerpt2}
        </div>
      )}
    </div>
  );
};



const ReviewBrands = () => {
  const { t } = useTranslation();
  return (
    <div className="tabNavigation">
      <div className="main__container">
        <div className="top-navigate flex justify-between">
          <div className="top-navigate__left basis-3/7">
            <h2 className="mb-3 text-white">{t("reviewBrands.title1")}</h2>
            <p className="mb-6 text-white">{t("reviewBrands.description1")}</p>
            <div className="">
              <MenuItem
                icon={<PersonSimpleRun color="#0967e3" size={24} />}
                title={t("reviewBrands.question1.title")}
                excerpt={t("reviewBrands.question1.excerpt")}
                link={
                  <Link href={"/casinos"}>
                    {t("reviewBrands.question1.link")}
                  </Link>
                }
                excerpt2={t("reviewBrands.question1.excerpt2")}
              />
              <MenuItem
                icon={<AlignCenterHorizontalSimple color="#0967e3" size={24} />}
                title={t("reviewBrands.question2.title")}
                excerpt={t("reviewBrands.question2.excerpt")}
              />
              <MenuItem
                icon={<ThumbsUp color="#0967e3" size={24} />}
                title={t("reviewBrands.question3.title")}
                excerpt={t("reviewBrands.question3.excerpt")}
                link={<Link href={"/about"}>{t("reviewBrands.question3.link")}</Link>}
              />
            </div>
            <Link
              className="w-full flex justify-center items-center text-lg text-white p-3"
              href={"/bonuses"}
            >
              {t("reviewBrands.button1")}
            </Link>
          </div>
          <div className="top-navigate__right basis-4/7 flex justify-end items-start">
            <Image src={Img} alt="img" loading="lazy" width={400} />
          </div>
        </div>
        <div className="top-navigate flex justify-between mt-12">
          <div className="top-navigate__right basis-4/7 flex justify-start items-start">
            <Image src={Img2} alt="img" loading="lazy" width={300} />
          </div>
          <div className="top-navigate__left basis-3/7">
          <h2 className="mb-3 text-white">{t("reviewBrands.title2")}</h2>
            <p className="mb-6 text-white">{t("reviewBrands.description2")}</p>
            <div className="">
              <MenuItem
                icon={<Diamond color="#0967e3" size={24} />}
                title={t("reviewBrands.question4.title")}
                excerpt={t("reviewBrands.question4.excerpt")}
                link={
                  <Link href={"/casinos"}>
                    {t("reviewBrands.question4.link")}
                  </Link>
                }
                excerpt2={t("reviewBrands.question4.excerpt2")}
              />

              <MenuItem
                icon={<DiceTwo color="#0967e3" size={24} />}
                title={t("reviewBrands.question5.title")}
                excerpt={t("reviewBrands.question5.excerpt")}
                link={
                  <Link href={"/casinos"}>
                    {t("reviewBrands.question5.link")}
                  </Link>
                }
                excerpt2={t("reviewBrands.question5.excerpt2")}
              />

              <MenuItem
                icon={<PokerChip color="#0967e3" size={24} />}
                title={t("reviewBrands.question6.title")}
                excerpt={t("reviewBrands.question6.excerpt")}
              />
            </div>
            <Link
              className="w-full flex justify-center items-center text-lg text-white p-3"
              href={"/casinos"}
            >
               {t("reviewBrands.button2")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBrands;
