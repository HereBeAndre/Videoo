import React, { useState } from "react";
import youtube from "../youtube";
import Searchbar from "./Searchbar";

const App = () => {
  const [videos, setVideos] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response);
    setVideos(response); // FIXME: Take only necessary part of response
  };

  console.log(videos);

  return (
    <div>
      <Searchbar onSubmit={onSearchSubmit} />
      {/* TODO: Add number of videos here */}
    </div>
  );
};

export default App;
