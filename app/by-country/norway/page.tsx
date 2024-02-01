import { Metadata } from "next";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Norway from "@/components/country/Norway";

export const metadata: Metadata = {
  title: "Norwegian Casino | XXLCasinoList",
  description: "Explore the world of Norwegian casinos with our in-depth guide at XXLCasinoList. Designed with Norwegian players in mind, our guide reviews the best online casinos available in Norway, highlighting key factors like game selection, language support, payment methods, and localized customer service. We also delve into the specific regulations and guidelines governing the Norwegian casino landscape to ensure you gamble responsibly and within legal limits. Navigate our curated list of trustworthy casinos providing an authentic Norwegian gaming experience. Whether you're a resident of Norway or someone intrigued by the Norwegian casino scene, our guide is your go-to resource.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Norway />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      {/* <GuideSlotsPage /> */}
    </div>
  );
}
