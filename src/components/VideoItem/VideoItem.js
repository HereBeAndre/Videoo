import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  // DESTRUCTURING => Same as - const {video} = props; -
  const {
    description,
    title,
    channelTitle,
    thumbnails: {
      medium: { url },
    },
  } = video.snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" alt={description} src={url}></img>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
