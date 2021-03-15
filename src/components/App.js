import React, { useState } from "react";
import youtube from "../youtube";
import Searchbar from "./Searchbar/Searchbar";
import VideoDetail from "./VideoDetail/VideoDetail";
import VideoList from "./VideoList/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  const onVideoSelect = (video) => {
    console.log("From APP", video);
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <Searchbar onSubmit={onSearchSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};

export default App;
