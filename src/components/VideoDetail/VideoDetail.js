import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <p>Waiting for your search...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="videoplayer"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
