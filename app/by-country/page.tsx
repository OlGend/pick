import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import AllCasinos from "@/components/country/AllCasinos";

export const metadata: Metadata = {
  title: "All Casinos by Country | XXLCasinoList",
  description: "Welcome to XXLCasinoList, your ultimate guide to the world of casinos, organized by country! Whether you’re a seasoned high-roller or a beginner, our comprehensive list gives you a panoramic view of the casino landscape in countries around the globe. From the vibrant casinos in Las Vegas to the classic venues in Monte Carlo, we cover it all. Dive into our reviews, ratings, and exclusive tips to make the most of your gaming experience!",
};

export default async function Bonuses() {
  return (
    <div className="page-bonuses">
      <AllCasinos />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      <GuideSlotsPage />
    </div>
  );
}
