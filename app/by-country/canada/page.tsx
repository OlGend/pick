import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Canada from "@/components/country/Canada";

export const metadata: Metadata = {
  title: "Canada Casino | XXLCasinoList",
  description: "Unlock the excitement of Canadian online gaming with our specialized guide at XXLCasinoList. Specifically designed for Canadian players, our comprehensive guide reviews the best online casinos available in Canada. We focus on essential elements like game selection, CAD payment options, language preferences, and localized customer service. In addition, our guide offers valuable insights into the legal landscape governing the Canadian casino industry, enabling you to play responsibly and within the law. Browse our handpicked list of trusted casinos that cater to Canadian players for a seamless and authentic gaming experience. Whether you're in Canada or intrigued by the Canadian casino scene, our guide is your ultimate resource.",
};

export default async function Bonuses() {
  return (
    <div className="page-bonuses">
      <Canada />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />

      <GuideSlotsPage />
    </div>
  );
}
