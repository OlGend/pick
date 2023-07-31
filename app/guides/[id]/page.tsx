import { Metadata } from "next";
import jsonContent from "@/components/guidePosts.json";
import Image from "next/image";
import Img from "@/public/how-to-beat-wagering-requirements.jpg";

type Props = {
  params: {
    id: string;
  };
};
interface ContentItem {
  tag: string;
  fullContent?: string;
  divContent?: {
    [key: string]: {
      tag: string;
      fullContent: string;
    };
  };
}

interface GuidePost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  content: {
    [key: string]: ContentItem;
  };
}



export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const postId = Array.isArray(id) ? id[0] : id;
  const post = jsonContent.find((item) => item.id === Number(postId));
  if (post) {
    return {
      title: `post | New Brand | ${post.title}`,
    };
  }
  return {
    title: "post | New Brand | Not Found",
  };
}

export default function GuidePost({ params: { id } }: Props) {
  const postId = Array.isArray(id) ? id[0] : id;
  const post = jsonContent.find((item) => item.id === Number(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="main__container page-post">
        <h1 className="pt-12 pb-5">{post.title}</h1>
        <div className="editor flex">
          <div className="avatar mr-3"></div>
          <div className="flex flex-col">
            <div>Gamblinator editorial</div>
            <div className="date">
              Updated on July 31, 2023
            </div>
          </div>
        </div>
        <Image className="pt-4" src={`/${post.image}`} alt={post.title} width={600} height={300} loading="lazy" />
        <div>
          {post.content &&
            Object.values(post.content).map((item, index) => {
              if (item.tag === "p") {
                return <p key={index}>{item.fullContent}</p>;
              } else if (item.tag === "h3") {
                return <h3 key={index}>{item.fullContent}</h3>;
              } else if (item.tag === "div" && item.divContent) {
                return (
                  <div className="example-block" key={index}>
                    {Object.values(item.divContent).map((subItem, subIndex) => (
                      <div  key={subIndex}>
                        {subItem.tag === "h3" && <h3>{subItem.fullContent}</h3>}
                        {subItem.tag === "p" && <p>{subItem.fullContent}</p>}
                      </div>
                    ))}
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </>
  );
}