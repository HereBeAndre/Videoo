import React, { useState } from "react";

const Searchbar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const onInputChange = (e) => setSearchValue(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(searchValue);
  };
  return (
    <form className="search-bar ui action input" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchValue}
        onChange={onInputChange}
      ></input>
      <button className="ui button">Search</button>
    </form>
  );
};

export default Searchbar;
