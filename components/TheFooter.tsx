"use client";
import Image from "next/image";
// import Img1 from "@/public/solution1.png";
// import Img2 from "@/public/solution2.png";
// import Img3 from "@/public/solution3.png";
// import Img4 from "@/public/solution4.png";
// import Img5 from "@/public/solution5.png";
// import Img6 from "@/public/solution6.png";
// import Img7 from "@/public/solution7.png";
// import Img8 from "@/public/solution8.png";
// import Img9 from "@/public/solution9.png";
// import Img10 from "@/public/solution10.png";
// import Img11 from "@/public/solution11.png";
// import Img12 from "@/public/solution12.png";
import Img from "@/public/logo3.png";
// import { useTranslation } from "react-i18next";
import { Link } from "phosphor-react";

const TheFooter = () => {
  // const { t } = useTranslation();
  // const solutions = [Img1, Img2, Img3, Img4, Img5, Img6];
  // const solutions2 = [Img7, Img8, Img9, Img10, Img11, Img12];
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
                <p className="mb-1">Our Contacts:</p>
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
         
            
              {/* <Image
                className="grayscale"
                src={Img1}
                alt={`${Img1}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img2}
                alt={`${Img2}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img3}
                alt={`${Img3}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img4}
                alt={`${Img4}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img5}
                alt={`${Img5}`}
                width={120}
                loading="lazy"
              />
                <Image
                className="grayscale"
                src={Img6}
                alt={`${Img6}`}
                width={120}
                loading="lazy"
              /> */}
            </div>
            <div className="flex flex-col ml-auto mr-auto ">
              <div className="solution-text flex flex-col items-center">
                <h4 className="text-center mb-1">Empowering iGaming Solutions</h4>
                <p className="text-center">Unlocking 15 Websites That Will Boost Your Brand to New Heights</p>
                <a
                  className="btn btn-primary m-auto"
                  target="_blank"
                  href="skype:live:.cid.3ebe8eae09c57c4f?chat"
                >
                 Start Working With Us
                </a>
              </div>
            </div>
            <div className="solution-images flex flex-wrap justify-end items-center">
           
               {/* <Image
                className="grayscale"
                src={Img7}
                alt={`${Img7}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img8}
                alt={`${Img8}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img9}
                alt={`${Img9}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img10}
                alt={`${Img10}`}
                width={120}
                loading="lazy"
              />{" "}
              <Image
                className="grayscale"
                src={Img11}
                alt={`${Img11}`}
                width={120}
                loading="lazy"
              />
                <Image
                className="grayscale"
                src={Img12}
                alt={`${Img12}`}
                width={120}
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="main__container pt-3">
            <p>XxlCasinolist.com positions itself as an exceptional source of information about virtual gaming establishments and online gambling entertainment. All our reviews and guides are crafted in accordance with the knowledge and convictions of our independent team of experts, objectively and without any bias. Nevertheless,such assessments and notifications are provided solely for informational purposes and should not be considered legal advice or a basis for making legal decisions. Before commencing participation in your chosen casino, always ensure that you comply with all applicable legal requirements.</p>
          </div>
        </div>
        <div className="footer-end">
          <div className="main__container pt-3 pb-3 flex justify-center">
            <span>Copyright © 2024, xxlcasinolist.com All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
