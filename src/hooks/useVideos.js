import { useEffect, useState } from "react";
import youtube from "../api/youtube";

// Custom hook that manages videos fetching only
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]); // Output 1

  useEffect(() => {
    search(defaultSearchTerm); // defaultSearchTerm is the only input
  }, []); // Show some videos on component mount

  // Output 2
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  // A custom hook always returns some outputs
  return [videos, search]; // Think of it like useState => "videos" is updated by "search"
};

export default useVideos;
