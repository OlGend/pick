"use client";
import Image from "next/image";
import Img1 from "@/public/solution1.png";
import Img2 from "@/public/solution2.png";
import Img3 from "@/public/solution3.png";
import Img4 from "@/public/solution4.png";
import Img5 from "@/public/solution5.png";
import Img6 from "@/public/solution6.png";
import Img7 from "@/public/solution7.png";
import Img8 from "@/public/solution8.png";
import Img9 from "@/public/solution9.png";
import Img10 from "@/public/solution10.png";
import Img11 from "@/public/solution11.png";
import Img12 from "@/public/solution12.png";
import Img from "@/public/logo3.png";
import { useTranslation } from "react-i18next";
import { Link } from "phosphor-react";

const TheFooter = () => {
  const { t } = useTranslation();
  const solutions = [Img1, Img2, Img3, Img4, Img5, Img6];
  const solutions2 = [Img7, Img8, Img9, Img10, Img11, Img12];
  return (
    <footer className="footer">
      <div className="flex  text-white flex-col">
        <div className="footer-top ">
          <div className="main__container flex justify-between items-center pb-3 pt-5">
            <div className="logo">
              <Image src={Img} alt="logo" width={150} loading="lazy" />
            </div>
            <div className="solution-contacts flex">
              <div>
                <p className="mb-1">{t("footer.contacts")}</p>
                <a
                  className="underline flex items-center"
                  href="mailto:manager@reg2dep.business"
                >
                  manager@reg2dep.business
                </a>
              </div>
              <div className="flex flex-col">
                <a
                  className="underline ml-5 flex items-end mb-1"
                  href="/responsible-gaming"
                >
                  Responsible Gaming
                </a>
                <a
                  className="underline ml-5 flex items-end mb-1"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
                <a
                  className="underline ml-5 flex items-end "
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center ">
          <div className="main__container flex pt-5 pb-4">
            <div className="solution-images flex flex-wrap justify-start items-center">
              {solutions.map((item, index) => (
                <Image
                  className="grayscale"
                  key={index}
                  src={item}
                  alt={`Item ${index}`}
                  width={120}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="solution-text flex flex-col items-center">
                <h4 className="text-center mb-1">{t("footer.title")}</h4>
                <p className="text-center">{t("footer.description")}</p>
                <a
                  className="btn btn-primary m-auto"
                  target="_blank"
                  href="skype:live:.cid.5aea35e66c096c0b?chat"
                >
                  {t("footer.link")}
                </a>
              </div>
            </div>
            <div className="solution-images flex flex-wrap justify-end items-center">
              {solutions2.map((item, index) => (
                <Image
                  className="grayscale"
                  key={index}
                  src={item}
                  alt={`Item ${index}`}
                  width={120}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="main__container pt-3">
            <p>{t("footer.about")}</p>
          </div>
        </div>
        <div className="footer-end">
          <div className="main__container pt-3 pb-3 flex justify-center">
            <span>{t("footer.copyright")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
