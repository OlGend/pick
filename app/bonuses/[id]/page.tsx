import { Metadata } from "next";
import BrandById from "@/components/BrandById";
import CarouselSlider from "@/components/CarouselSlider";
import NewBrands from "@/components/NewBrands";
import GuideSlotsPage from "@/components/GuideSlotsPage";

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
      <div className="main__container brandUtils">
        <BrandById brand={id} />
        <CarouselSlider slides={[]} />
        <div className="wrapper-container background-block">
          <NewBrands />
        </div>
        <div className="wrapper-container mt-6 mb-6">
          <GuideSlotsPage />
          </div>
      </div>
    </>
  );
}
