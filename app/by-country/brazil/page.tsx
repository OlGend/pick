import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";

import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Brazil from "@/components/country/Brazil";

export const metadata: Metadata = {
  title: "Brazilian Casino | XXLCasinoList",
  description: "Immerse yourself in the exhilarating world of Brazilian online casinos with our specialized guide at XXLCasinoList. Crafted for Brazilian players, our comprehensive guide evaluates the best online casinos available in Brazil, focusing on important factors like game variety, language support, BRL payment options, and localized customer service. We also explore the legal nuances of online gambling in Brazil, equipping you with the knowledge to play responsibly and lawfully. Navigate our curated list of reliable casinos to find platforms that offer a truly Brazilian gaming experience. Whether you're a resident of Brazil or just interested in the Brazilian casino scene, our guide serves as your indispensable resource.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Brazil />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      <GuideSlotsPage />
    </div>
  );
}
