import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Maestro from "@/components/payments/Maestro";

export const metadata: Metadata = {
  title: "Maestro payments | XXLCasinoList",
  description: "Embrace the efficiency and reliability of Maestro payments with our in-depth guide at XXLCasinoList. A popular debit card service, Maestro offers instant deposits and robust security measures, making it a top choice for many casino players. Our comprehensive guide will walk you through setting up your Maestro account, making transactions, and understanding any associated fees. Plus, we list high-quality casinos that accept Maestro, so you can game with confidence. Get started on your seamless gaming journey by mastering Maestro payments with our expert guidance!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Maestro />
      {/* <TopBrands /> */}
      <FilteredPayments />
      <GuideSlotsPage />
    </div>
  );
}
