import axios from "axios";

// Need key to make successful request
const KEY = "AIzaSyAsPMOFT9pjmWex6GkdZuMYZXVYjaR9QQA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video", // Avoid fetching playlists
    maxResults: 5,
    key: KEY,
  },
});
