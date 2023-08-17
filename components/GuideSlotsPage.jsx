"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import jsonContent from "./guidePosts.json";

const GuideSlotsPage = () => {
  const { t } = useTranslation();

  const lastThreePosts = jsonContent.slice(-3);
  return (
    <div className="guides guides-white">
      <div className="main__container flex">
        <div className="flex flex-col">
            <h2>{t("GuideSlotsPage.title")}</h2>
          <div className="guide-cards flex-wrap flex justify-start pt-6 pb-6">
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

export default GuideSlotsPage;
