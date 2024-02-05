import { Metadata } from "next";
import FilteredCountriesCasino from "@/components/country/FilteredCountriesCasino";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Newzealand from "@/components/country/Newzealand";

export const metadata: Metadata = {
  title: "New Zealand Casinos | XXLCasinoList",
  description: "Discover the best of New Zealand's online casino scene with our comprehensive guide at XXLCasinoList. Created specifically for Kiwi players, our guide thoroughly reviews the top casinos in New Zealand, taking into account key factors like game variety, language options, NZD payment methods, and dedicated customer support. We also clarify the legal landscape around online gambling in New Zealand, enabling you to play with confidence and peace of mind. Browse our handpicked list of reputable casinos that offer a truly Kiwi gaming experience. Whether you're a New Zealander or an international player interested in the NZ casino market, our guide serves as your ultimate resource.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Newzealand />
      {/* <TopBrands /> */}
      <FilteredCountriesCasino />
      <GuideSlotsPage />
    </div>
  );
}
