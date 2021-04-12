import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const {
    title,
    channelTitle,
    thumbnails: {
      medium: { url },
    },
  } = video.snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" alt={title} src={url}></img>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
