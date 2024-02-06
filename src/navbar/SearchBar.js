// SearchBar.js
import React from 'react';
import { IoIosSearch } from 'react-icons/io'; // Make sure to install react-icons

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search a song of your choice" />
      <button>
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBar;
