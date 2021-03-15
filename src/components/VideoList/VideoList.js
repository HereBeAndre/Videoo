import React from "react";
import VideoItem from "../VideoItem/VideoItem.js";

const VideoList = ({ videos, onVideoSelect }) => {
  // DESTRUCTURING => Same as - const {videos} = props; -
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
