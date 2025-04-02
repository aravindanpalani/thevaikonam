import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for services or providers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
