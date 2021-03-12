import React from "react";

const VideoItem = ({ video }) => {
  // DESTRUCTURING => Same as - const {video} = props; -
  const {
    description,
    title,
    thumbnails: {
      medium: { url },
    },
  } = video.snippet;
  return (
    <div className="item">
      <img alt={description} src={url}></img>
      {title}
    </div>
  );
};

export default VideoItem;
