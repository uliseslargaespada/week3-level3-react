import { useState } from "react";

/**
 * SearchBar is a controlled input for city search.
 *
 * @param {object} props - Component props.
 * @param {(query: string) => void} props.onSearch - Called when form is submitted.
 */
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmed = query.trim();
    
    if(!trimmed) {
      return;
    }

    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <label htmlFor="search-input" className="sr-only">
        Search city
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
