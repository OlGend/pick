"use client"
import React from "react";
import { Navigation } from "./Navigation";
import Image from "next/image";
import { Club, PokerChip, DiceSix, BookBookmark } from "phosphor-react";
import Img from "@/public/laptop.png";
const navItems = [
  { label: "No Deposit Bonuses", href: "/bonuses", icon: <PokerChip color="#5dd667" size={32} /> },
  { label: "New Casinos", href: "/casinos", icon: <Club color="#5dd667" size={32} /> },
  { label: "Free Spins", href: "/free-spins", icon: <DiceSix color="#5dd667" size={32} /> },
  { label: "Guides", href: "/guides", icon: <BookBookmark color="#5dd667" size={32} /> },
];

const PreviewHome = () => {
  return (
    <div className="preview">
      <div className="main__container flex">
        <div className="flex flex-col">
          <h1>Online Casino Reviews & Gambling Guides</h1>
          <p>
            Authentic player reviews, no deposit bonuses, and a wide selection
            of games with free play.
          </p>

          <div className="flex flex-wrap justify-start preview-navigate">
            <Navigation navLinks={navItems} />
          </div>
        
        </div>
        <Image
          src={Img}
          alt="Beep"
          width={500}
          loading="lazy" 
        />
      </div>
    </div>
  );
};

export default PreviewHome;
