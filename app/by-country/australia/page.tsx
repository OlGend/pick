import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Australia from "@/components/country/Australia";

export const metadata: Metadata = {
  title: "Australian casino | XXLCasinoList",
  description: "Embark on an unforgettable journey through the world of Australian online casinos with our comprehensive guide at XXLCasinoList. Specially curated for Australian players, our guide meticulously reviews the finest online casinos available in Australia. We focus on crucial elements such as game variety, AUD payment methods, language preferences, and dedicated customer support. Additionally, our guide provides valuable insights into the legal landscape governing online gambling in Australia, ensuring you can enjoy your gaming responsibly and within the confines of the law. Peruse our curated list of trusted casinos that cater to Australian players, delivering an authentic and enriching gaming experience. Whether you're located in Australia or intrigued by the Australian casino scene, our guide is your ultimate source of information and entertainment.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Australia />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />

      <GuideSlotsPage />
    </div>
  );
}
