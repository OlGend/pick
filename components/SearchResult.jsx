import React from 'react';

const SearchResult = ({ brands }) => {
  return (
    <div>
      <h3>Search Results:</h3>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
