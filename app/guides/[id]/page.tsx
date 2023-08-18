import { Metadata } from "next";
import jsonContent from "@/components/guidePosts.json";
import Image from "next/image";
import PostContent from "@/components/posts/PostContent";

type Props = {
  params: {
    id: string;
  };
};

interface GuidePost {
  id: number;
  title: string;
  image: string;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const postId = Array.isArray(id) ? id[0] : id;
  const post = jsonContent.find((item) => item.id === Number(postId));
  if (post) {
    return {
      title: `New Brand | ${post.title}`,
    };
  }
  return {
    title: "New Brand | Not Found",
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
     
        <PostContent id={postId} />
      </div>
    </>
  );
}
