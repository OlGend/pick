"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import guidepostDataEn from "@/components/posts/en.json";
import guidepostDataPl from "@/components/posts/pl.json";
import guidepostDataNo from "@/components/posts/no.json"; // Файл с данными на норвежском
import guidepostDataDe from "@/components/posts/de.json"; // Файл с данными на немецком
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

  return (
    <>
      <div className="title-guide">
        <h1 className="pt-12 pb-4">Gambling Guides</h1>
      </div>
      <p>If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on Bonus XXXCasinoGuru.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device.</p>
      {showMore ? (
        <>
          <p>If you aspire to hit the jackpot, delve into the world of online slots through our comprehensive guides on Bonus XXXCasinoGuru.com. All the information you need, from paylines to progressive jackpots, is available on a single platform! Stay updated with the latest developments in the slot gambling realm and even try out free slot games directly from your device. Our collection of online gambling guides ensures easy access to all there is to know about slots. While it might seem like slot machines are a matter of mere &#39;hit and spin&#39;, there are tricks and strategies that can enhance your experience. Our guides are designed to empower you with a complete understanding of how slots operate, granting you full control over your gaming sessions.</p>
          <p>In search of the perfect repository for tips, fun facts, and advice to boost your chances of winning? Look no further as we provide quick access to some of the most relevant slots guides and free slots games hosted on our website.</p>
          <button className="read flex" onClick={toggleShowMore}>
            {" "}
            Read Less <CaretUp size={20} />
          </button>
        </>
      ) : (
        <button className="read flex" onClick={toggleShowMore}>
          Read More <CaretDown size={20} />
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
