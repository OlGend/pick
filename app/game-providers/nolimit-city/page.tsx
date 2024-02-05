import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredProviders from "@/components/providers/FilteredProviders";
import PreviewBonuses from "@/components/PreviewBonuses";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Nolimitcity from "@/components/providers/Nolimitcity";

export const metadata: Metadata = {
  title: "No Limit City | XXLCasinoList",
  description: "Step into the daring world of No Limit City games with our detailed guide at XXLCasinoList. Renowned for their inventive slots and high volatility games, No Limit City has quickly gained a reputation for providing adrenaline-pumping excitement. Our comprehensive guide explores the developer's most iconic titles, ground-breaking features, and what sets their games apart in a crowded market. In addition, find an exclusive list of top-notch casinos where you can safely enjoy No Limit City games. Elevate your gaming adventure to new heights by tapping into the raw excitement that only No Limit City can offer.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Nolimitcity />
      {/* <TopBrands /> */}
      <FilteredProviders />
      {/* <GuideSlotsPage /> */}
    </div>
  );
}
