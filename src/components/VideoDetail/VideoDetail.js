import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <p>Waiting for your search...</p>
      </div>
    );
  }

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
