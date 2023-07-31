"use client";
import React from "react";
import { useState } from "react";
import jsonContent from "./guidePosts.json";
import Link from "next/link";
import Image from "next/image";
import { CaretDown, CaretUp } from "@phosphor-icons/react"

export default function GuideSlotsGuide() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <>
      {showMore ? (
        <>
          <p>
            If you aspire to hit the jackpot, delve into the world of online
            slots through our comprehensive guides on CasinoFreak.com. All the
            information you need, from paylines to progressive jackpots, is
            available on a single platform! Stay updated with the latest
            developments in the slot gambling realm and even try out free slot
            games directly from your device. Our collection of online gambling
            guides ensures easy access to all there is to know about slots.
            While it might seem like slot machines are a matter of mere
            &quot;hit and spin,&quot; there are tricks and strategies that can
            enhance your experience. Our guides are designed to empower you with
            a complete understanding of how slots operate, granting you full
            control over your gaming sessions.
          </p>
          <p>
            In search of the perfect repository for tips, fun facts, and advice
            to boost your chances of winning? Look no further as we provide
            quick access to some of the most relevant slots guides and free
            slots games hosted on our website.
          </p>
          <button className="read flex" onClick={toggleShowMore}>Read Less <CaretUp size={20} /></button>
        </>
      ) : (
        <button className="read flex" onClick={toggleShowMore}>Read More <CaretDown size={20} /></button>
      )}

      <div className="guide-cards flex-wrap flex justify-start pt-12 pb-12">
        {jsonContent.map((item) => (
          <div className="guide-card relative mb-6" key={item.id}>
            <div className="avatar absolute"></div>
            <Image src={`/${item.image}`} alt={item.title} width={600} height={300} loading="lazy" />
            <span>{item.author}</span>
           
            <Link href={`/guides/${item.id}`}> <h4>{item.title}</h4></Link>
          </div>
        ))}
      </div>
    </>
  );
}
