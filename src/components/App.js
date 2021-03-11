import React from "react";
import youtube from "../youtube";
import Searchbar from "./Searchbar";

const App = () => {
  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
  };

  return (
    <div>
      <Searchbar onSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
