"use client";
import React from "react";
import ReduxProvider from "@/components/redux/ReduxProvider";
import BrandSearchPage from "@/components/BrandSearchPage";

export default function Search() {
  return (
    <div className="page-bonuses">
      <ReduxProvider>
        <BrandSearchPage />
      </ReduxProvider>
    </div>
  );
}
