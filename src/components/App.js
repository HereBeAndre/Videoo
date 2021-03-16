import React, { useEffect, useState } from "react";
import youtube from "../api/youtube";
import Searchbar from "./Searchbar/Searchbar";
import VideoDetail from "./VideoDetail/VideoDetail";
import VideoList from "./VideoList/VideoList";

import "./App.css";

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
    setSelectedVideo(response.data.items[0]); // Show default video on user search
  };

  useEffect(() => {
    onSearchSubmit("national geographic"); // Show some videos on component mount
  }, []);

  const onVideoSelect = (video) => {
    console.log("From APP", video);
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <Searchbar onSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
