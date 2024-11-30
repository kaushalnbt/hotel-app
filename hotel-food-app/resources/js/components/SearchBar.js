import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;