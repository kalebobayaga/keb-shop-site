// components/SearchBar.js
import { useState } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      // Redirect or handle search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}
