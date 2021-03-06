import React, { useState } from 'react';
import './SearchBar.styles.css';

function Searchbar({ handleFormSubmit }) {
  const [query, setQuery] = useState('');

  /* istanbul ignore next */
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    /* istanbul ignore next */
    event.preventDefault();
    handleFormSubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <input
            htmlFor="searchBar"
            className="main-search"
            onChange={handleChange}
            name="video-search"
            type="text"
            value={query}
            placeholder="Tell me what you need"
          />
        </div>
      </form>
    </div>
  );
}
export default Searchbar;
