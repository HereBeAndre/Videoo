import axios from "axios";

// Need key to make successful request

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video", // Avoid fetching playlists
    maxResults: 5,
  },
});
