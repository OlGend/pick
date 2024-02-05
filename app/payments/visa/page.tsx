import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
// import GuideSlotsPage from "@/components/GuideSlotsPage";
import Visa from "@/components/payments/Visa";

export const metadata: Metadata = {
  title: "Visa payments | XXLCasinoList",
  description: "Master the world of Visa payments in online casinos with XXLCasinoList's detailed guide. Trusted worldwide, Visa offers speedy transactions, top-notch security, and wide acceptance. Our in-depth analysis covers everything you need to know, from setting up your account to withdrawal speeds. Plus, discover which top-rated casinos accept Visa, so you can play with peace of mind. Get ready to make your casino experience even more convenient with our expert insights on Visa payments!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Visa />
      {/* <TopBrands /> */}
      <FilteredPayments />
      {/* <GuideSlotsPage /> */}
    </div>
  );
}
