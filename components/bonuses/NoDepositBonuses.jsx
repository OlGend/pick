"use client";
import React from "react";
import Image from "next/image";
import Img from "@/public/bonuses.png";

const NoDepositBonuses = () => {
  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">
          Irresistible in 2023: No Deposit Casino Bonuses and Unique Bonus Codes
          </h1>
          <p className="text-white mt-5">
          Fresh in 2023: A continuously refreshed catalog of no deposit bonus deals for virtual casinos. Obtain exclusive promo codes and enjoy complimentary spins rewards.
          </p>
        </div>
        <div className="basis-[40%] flex justify-end">
          <Image src={Img} alt="Beep" width={300} height={300} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default NoDepositBonuses;
