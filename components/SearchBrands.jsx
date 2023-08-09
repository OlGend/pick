import React, { useState, useEffect } from "react";
import { useTopBrands } from "./useBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "./brandUtils";

const SearchBrands = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showBrands, setShowBrands] = useState([]); // Добавляем состояние для хранения объектов брендов

  const handleSearch = () => {
    const filteredBrands = allBrands.filter((brand) =>
      brand.title.rendered.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredBrands);
    setShowBrands(filteredBrands); // Сохраняем совпадающие бренды в showBrands
  };

  const allBrands = useTopBrands(33);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults([]);
      setShowBrands([]); // Сбрасываем состояние showBrands при пустом поисковом запросе
    }
  }, [searchQuery]);

  return (
    <div className="">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search brands..."
      />
      <div className="search-header-results">
        {showBrands.length > 0 && (
          <ul>
            {showBrands.map((brand) => (
              <li key={brand.id}>
                {brand.title.rendered}
                <div
                  dangerouslySetInnerHTML={{
                    __html: extractReviewBonus(brand.content.rendered),
                  }}
                />
              </li>
            ))}
          </ul>
        )}

        {searchQuery.length > 0 && showBrands.length === 0 && (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBrands;
