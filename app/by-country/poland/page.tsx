import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Poland from "@/components/country/Poland";

export const metadata: Metadata = {
  title: "Polish Casino | XXLCasinoList",
  description: "Experience the vibrant Polish casino scene with our specialized guide at XXLCasinoList. Catering specifically to Polish players, our comprehensive guide reviews the top online casinos available in Poland, focusing on game variety, language support, payment options like PLN, and local customer service. We also explore the unique regulations affecting the Polish casino market to help you play responsibly and legally. Browse our curated list of reputable casinos that offer a rich and culturally nuanced gaming experience for Polish players. Whether you're based in Poland or simply wish to enjoy a Polish casino atmosphere, our guide is your indispensable resource.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Poland />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      {/* <GuideSlotsPage /> */}
    </div>
  );
}
