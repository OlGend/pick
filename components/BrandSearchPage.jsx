// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import SearchBrands from './SearchBrands';
// import SearchResult from './SearchResult';
// import { useTopBrands } from './useBrands';

// export default function BrandSearchPage() {
//   const [searchResults, setSearchResults] = useState([]);
//   const router = useRouter();

//   const handleSearch = async (query) => {
//     const filteredBrands = await useTopBrands(query); // Используйте вашу функцию для фильтрации брендов
//     setSearchResults(filteredBrands);
//   };

//   const handleBrandClick = (brandId) => {
//     router.push(`/bonuses/${brandId}`);
//   };

//   return (
//     <div>
//       <h1>Brand Search Page</h1>
//       <SearchBrands onSearch={handleSearch} />
//       {searchResults.length > 0 && <SearchResult brands={searchResults} />}
//     </div>
//   );
// }
