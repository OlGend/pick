"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import guidepostDataEn from "@/components/posts/en.json";
import guidepostDataPl from "@/components/posts/pl.json";
import Link from "next/link";
import Image from "next/image";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Loader from "@/components/Loader";

export default function GuideSlotsGuide() {
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const guidepostData =
    currentLanguage === "pl" ? guidepostDataPl : guidepostDataEn;
  const guideposts = guidepostData.guideposts;

  useEffect(() => {
    if (guideposts.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [guideposts]);

  return (
    <>
      <div className="title-guide">
        <h1 className="pt-12 pb-4">{t("guideslotsguide.title")}</h1>
      </div>
      <p>{t("guideslotsguide.excerpt")}</p>
      {showMore ? (
        <>
          <p>{t("guideslotsguide")}</p>
          <p>{t("guideslotsguide2")}</p>
          <button className="read flex" onClick={toggleShowMore}>
            {" "}
            {t("button.less")} <CaretUp size={20} />
          </button>
        </>
      ) : (
        <button className="read flex" onClick={toggleShowMore}>
          {t("button.read")} <CaretDown size={20} />
        </button>
      )}

      <div className="guide-cards flex-wrap flex justify-start pt-12 pb-12">
        {loading ? (
          <Loader />
        ) : (
          <>
            {guideposts.map((item) => (
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
          </>
        )}
      </div>
    </>
  );
}
