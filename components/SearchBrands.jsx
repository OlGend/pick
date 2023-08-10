import React, { useState, useEffect } from "react";
import { useTopBrands } from "./useBrands";
import BrandSearchPage from "./BrandSearchPage";
import { Play, Eye, MagnifyingGlass } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "./brandUtils";


const SearchBrands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showBrands, setShowBrands] = useState([]);
  const [overlayActive, setOverlayActive] = useState(false);
  const allBrands = useTopBrands(33);




  const handleOverlayClick = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowBrands([]);
    setOverlayActive(false);
  };

  const handleSearch = () => {
    const filteredBrands = allBrands.filter((brand) =>
      extractReviewBonus(brand.content.rendered)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredBrands);
    setShowBrands(filteredBrands);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults([]);
      setShowBrands([]);
    }
  }, [searchQuery]);



  return (
    <div className="search">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search brands..."
          onClick={() => setOverlayActive(true)}
          style={{ zIndex: overlayActive ? 1000 : "auto" }}
        />
        <Link
          className="absolute right-2 top-2 button-search"
          href={`/bonuses`}
        >
          <MagnifyingGlass />
        </Link>
      </div>
      {overlayActive && (
        <div className="overlay" onClick={handleOverlayClick}></div>
      )}
      <div className="search-header-results ">
        <BrandSearchPage showBrands={showBrands} />
        {searchQuery.length > 0 && showBrands.length === 0 && (
          <div className="size-lg text-slate-200 p-4">No results found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchBrands;
