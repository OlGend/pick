import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Ecopayz from "@/components/payments/Ecopayz";

export const metadata: Metadata = {
  title: "Ecopayz payments | XXLCasinoList",
  description: "Navigate the versatile world of EcoPayz payments with our comprehensive guide at XXLCasinoList. EcoPayz is a secure, flexible, and international e-wallet solution, perfect for online casino enthusiasts. Our guide covers every aspect of using EcoPayz, from account setup to deposit and withdrawal processes, as well as associated fees. We also showcase top-tier casinos that accept EcoPayz, allowing you to start your gaming adventure with ultimate peace of mind. Uncover the advantages of using EcoPayz payments and elevate your online casino experience with our expert insights!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Ecopayz />
      {/* <TopBrands /> */}
      <FilteredPayments />
      {/* <GuideSlotsPage /> */}
    </div>
  );
}
