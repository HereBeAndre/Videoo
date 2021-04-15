import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import VideoDetail from "./VideoDetail/VideoDetail";
import VideoList from "./VideoList/VideoList";
import useVideos from "../hooks/useVideos";

import "./App.css";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("colnago"); // Default value is 'colnago' => videos will be related to a 'colnago' search by default

  useEffect(() => {
    setSelectedVideo(videos[0]); // Show default video on videos update
  }, [videos]);
  return (
    <div className="ui container">
      <Searchbar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {/* Same as callback: () => setSelectedVideo(video)} _ valid syntax when a parameter is passed directly as an argument*/}
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
