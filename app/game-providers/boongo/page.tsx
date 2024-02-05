import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredProviders from "@/components/providers/FilteredProviders";
import PreviewBonuses from "@/components/PreviewBonuses";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Boongo from "@/components/providers/Boongo";

export const metadata: Metadata = {
  title: "Boongo | XXLCasinoList",
  description: "Explore the captivating realm of Boongo games with our comprehensive guide at XXLCasinoList. Boongo is making waves in the online casino industry with its visually stunning slots, innovative features, and smooth gameplay. Our in-depth guide delves into the developer's standout titles, unique features, and the thematic elements that make Boongo a rising star. Plus, find a curated selection of top casinos where you can fully experience Boongo's offerings. Whether you're new to Boongo or a dedicated fan, our guide equips you with the essential knowledge to elevate your gaming experience.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Boongo />
      {/* <TopBrands /> */}
      <FilteredProviders />
      {/* <GuideSlotsPage /> */}
    </div>
  );
}
