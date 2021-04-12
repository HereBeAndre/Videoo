import React, { useState } from "react";

import "./Searchbar.css";

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <form
      className="search-bar ui action input fluid category search"
      onSubmit={onFormSubmit}
    >
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button className="ui blue button">
          <i className="search icon"></i>Search
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
