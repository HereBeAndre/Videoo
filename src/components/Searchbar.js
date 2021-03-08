import React, { useState } from "react";

const Searchbar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const onInputChange = (e) => setSearchValue(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(searchValue);
  };
  return (
    <form className="ui action input" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={onInputChange}
      ></input>
      <button className="ui button">Search</button>
    </form>
  );
};

export default Searchbar;
