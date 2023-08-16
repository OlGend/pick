"use client";
import React from "react";
import Image from "next/image";
import Img from "@/public/live.png";


const LiveCasinos = () => {
  return (
    <div className="bonuses">
      <div className="main__container flex justify-between items-center">
        <div className="flex flex-col basis-[60%]">
          <h1 className="text-white">
          Premier Live Dealer Casinos of the Year 2023
          </h1>
          <p className="text-white mt-5">
          Explore this compilation of top-notch live dealer casinos for an immersive gaming experience and discover prime online casinos hosting captivating live casino games catered to your preferences.
          </p>
        </div>
        <div className="basis-[40%] flex justify-center">
          <Image src={Img} alt="Beep" width={242} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default LiveCasinos;
