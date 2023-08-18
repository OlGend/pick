"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import guidepostDataEn from "@/components/posts/en.json";
import guidepostDataPl from "@/components/posts/pl.json";

export default function PostContent({ id }) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const guidepostData =
    currentLanguage === "pl" ? guidepostDataPl : guidepostDataEn;
  const guideposts = guidepostData.guideposts;

  const post = guideposts.find((item) => item.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <h1 className="pt-12 pb-5">{post.title}</h1>
      <div className="editor flex">
        <div className="avatar mr-3"></div>
        <div className="flex flex-col">
          <div>{post.author}</div>
          <div className="date">{post.date}</div>
        </div>
      </div>
      <Image
        className="pt-4"
        src={`/${post.image}`}
        alt={post.title}
        width={600}
        height={300}
        loading="lazy"
      />
      <div className="page-post">
        {post.content.map((item, index) => {
          if (item.tag === "h1") {
            return <h1 key={index}>{item.fullContent || ""}</h1>;
          } else if (item.tag === "h2") {
            return <h2 key={index}>{item.fullContent || ""}</h2>;
          } else if (item.tag === "h3") {
            return <h3 key={index}>{item.fullContent || ""}</h3>;
          } else if (item.tag === "h4") {
            return <h4 key={index}>{item.fullContent || ""}</h4>;
          } else if (item.tag === "p") {
            return <p key={index}>{item.fullContent || ""}</p>;
          } else if (item.tag === "img") {
            return (
              <div key={index}>
                <Image
                  src={`/${item.src}`}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
              </div>
            );
          } else if (item.tag === "li") {
            return <li key={index}>{item.fullContent || ""}</li>;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}
