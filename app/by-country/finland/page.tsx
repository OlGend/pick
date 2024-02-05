import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Finland from "@/components/country/Finland";

export const metadata: Metadata = {
  title: "Finnish Casinos | XXLCasinoList",
  description: "Dive into the rich world of Finnish online gaming with our expert guide at XXLCasinoList. Created with Finnish players in mind, our guide thoroughly reviews the leading online casinos in Finland, focusing on aspects such as game variety, language options, payment methods that include the Euro, and localized customer support. We also clarify the regulatory environment specific to Finland, allowing you to gamble both responsibly and legally. Explore our curated list of reliable casinos that deliver a truly Finnish gaming experience. Whether you're a resident of Finland or simply interested in the Finnish casino market, our guide is your essential resource.",
};

export default async function Bonuses() {
  return (
    <div className="page-bonuses">
      <Finland />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />

      {/* <GuideSlotsPage /> */}
    </div>
  );
}
