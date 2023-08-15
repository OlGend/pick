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
          Comprehensive Compilation of Online Casino Bonuses Accessible in 2023
          </h1>
          <p className="text-white mt-5">
          Searching for casino bonuses and promos on the web? Explore our current, well-maintained repository featuring a plethora of casino bonus propositions for your consideration.
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
