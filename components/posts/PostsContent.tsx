"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface ContentItem {
  tag: string;
  translationKey: string; // Ключ для перевода
}

interface GuidePost {
  title: string;
  image: string;
  content: ContentItem[];
}

interface PostContentProps {
  post: GuidePost;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  const { t } = useTranslation();

  return (
    <div className="main__container page-post">
      <h1 className="pt-12 pb-5">{t(`postContent.title`)}</h1>
      {/* ... (other parts of the component) */}
      <div>
        {post.content &&
          post.content.map((item, index) => {
            if (item.tag === "p") {
              return <p key={index}>{t(`postContent.content.${index}.fullContent`)}</p>;
            } else if (item.tag === "h3") {
              return <h3 key={index}>{t(`postContent.content.${index}.fullContent`)}</h3>;
            } else {
              return null;
            }
            

          })}
      </div>
    </div>
  );
};

export default PostContent;
