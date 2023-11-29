"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BookBookmark, Coins, UsersFour } from "phosphor-react";
import Img from "@/public/mobile_blue.png";
import Link from "next/link";
import guidepostDataEn from "@/components/posts/en.json";
import guidepostDataPl from "@/components/posts/pl.json";
import guidepostDataNo from "@/components/posts/no.json"; // Файл с данными на норвежском
import guidepostDataDe from "@/components/posts/de.json"; // Файл с данными на немецком

const GuideSlotsHome = () => {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Используйте объект с данными для каждого языка
  const guidepostData = {
    pl: guidepostDataPl,
    en: guidepostDataEn,
    nz: guidepostDataEn,
    au: guidepostDataEn,
    ca: guidepostDataEn,
    no: guidepostDataNo, // Добавьте данные на норвежском языке
    de: guidepostDataDe, // Добавьте данные на немецком языке
    at: guidepostDataDe, // Добавьте данные на немецком языке
    ch: guidepostDataDe, // Добавьте данные на немецком языке
  };

  const guideposts = guidepostData[currentLanguage].guideposts;

  useEffect(() => {
    if (guideposts.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [guideposts]);

  const lastThreePosts = guideposts.slice(-3);

  return (
    <div className="guides">
      <div className="main__container flex">
        <div className="flex flex-col">
          <h2 className="mb-5">{t("guideSlotsHome.title1")}</h2>
          <div className="flex justify-between guide-wrapper">
            <div className="left basis-5/12">
          <p>{t("guideSlotsHome.excerpt3")}</p>
            </div>
            <div className="right basis-5/12">
              <Image
                src={Img}
                alt={"Guide"}
                width={350}
                height={350}
                loading="lazy"
              />
            </div>
          </div>
          <div className="guide-cards flex-wrap flex justify-start pt-12 pb-12">
            {lastThreePosts.map((item) => (
              <div className="guide-card relative mb-6" key={item.id}>
                <div className="avatar absolute"></div>
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={600}
                  height={300}
                  loading="lazy"
                />
                <span>{item.author}</span>

                <Link href={`/guides/${item.id}`}>
                  {" "}
                  <h4>{item.title}</h4>
                </Link>
              </div>
            ))}
          </div>
          <Link className="btn btn-primary text-center" href={"/guides"}>
            {t("button.view")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideSlotsHome;
