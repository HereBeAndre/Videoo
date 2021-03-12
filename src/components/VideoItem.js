import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
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
    <div className="video-item item">
      <img className="ui image" alt={description} src={url}></img>
      <div class="content">
        <div class="header">{title}</div>
        <div class="description">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
