import React, { useState } from "react";
import youtube from "../youtube";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return (
    <div className="ui container">
      <Searchbar onSubmit={onSearchSubmit} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
