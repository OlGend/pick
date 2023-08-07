import { Metadata } from "next";
import BrandById from "@/components/BrandById";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: "Bonuses | New Brand | ",
  };
}

export default async function Brand({ params: { id } }: Props) {
  return (
    <>
      <div className="main__container">
        <BrandById brand={id} />
      </div>
    </>
  );
}
