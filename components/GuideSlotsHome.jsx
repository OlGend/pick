"use client";
import Image from "next/image";
import { BookBookmark, Coins, UsersFour } from "phosphor-react";
import Img from "@/public/mobile_blue.png";
import Link from "next/link";
import jsonContent from "./guidePosts.json";

const GuideSlotsHome = () => {
  const lastThreePosts = jsonContent.slice(-3);
  return (
    <div className="guides">
      <div className="main__container flex">
        <div className="flex flex-col">
          <h2 className="mb-5">Online Gambling Guides</h2>
          <div className="flex justify-between">
            <div className="left basis-5/12 ">
              <div className="item relative mb-5">
                <BookBookmark
                  className="absolute left-0"
                  color="#0967e3"
                  size={32}
                />
                <h4 className="mb-2">Establish a gambling budget</h4>
                <p>
                  Prior to commencing any gambling session, it is imperative to
                  establish a budget and adhere to it strictly. Ensure that the
                  allocated amount is within your financial means, as it may not
                  be your fortunate day and could be lost.
                </p>
              </div>
              <div className="item relative mb-5">
                <Coins className="absolute left-0" color="#0967e3" size={32} />
                <h4 className="mb-2">
                  Avoid pursuing your losses at all costs
                </h4>
                <p>
                  The unpredictable nature of games of chance necessitates
                  caution. If your budget is lost, refrain from chasing your
                  losses, as this behavior may result in further financial
                  losses and, ultimately, lead to the development of a gambling
                  addiction.
                </p>
              </div>
              <div className="item relative mb-5">
                <UsersFour
                  className="absolute left-0"
                  color="#0967e3"
                  size={32}
                />
                <h4 className="mb-2">
                  Pay close attention to your emotions while engaging in
                  gambling activities
                </h4>
                <p>
                  Enjoy the entertainment of gambling while ensuring it remains
                  enjoyable by being mindful of your emotions during play. If
                  you detect feelings of heightened anger, frustration, or
                  difficulty making rational decisions, it is essential to cease
                  playing.
                </p>
              </div>
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
            View All Guides
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideSlotsHome;
