import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Germany from "@/components/country/Germany";

export const metadata: Metadata = {
  title: "Germany Casino | XXLCasinoList",
  description: "Experience the thrill of German online gaming with our specialized guide at XXLCasinoList. Tailored for German players, our comprehensive guide highlights the top online casinos in Germany, focusing on aspects like game diversity, language support, Euro-friendly payment options, and dedicated customer service. We also provide essential insights into the legal frameworks and regulations that govern the German casino industry, enabling you to gamble responsibly and lawfully. Browse our carefully curated list of reputable casinos to find the ideal platform for a genuine German gaming experience. Whether you're based in Germany or simply have an interest in the German casino scene, our guide is your ultimate resource.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Germany />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      {/* <GuideSlotsPage /> */}
    </div>
  );
}
