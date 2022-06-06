import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const VideoContext = createContext();

const VideosProvider = ({ children }) => {
  const [video, setVideo] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      const res = await axios.get("api/videos");
      setLoader(false);
      setVideo(res.data.videos);
    })()
  }, []);

  return (
    <VideoContext.Provider value={{ video, loader, setVideo, setLoader }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideos = () => useContext(VideoContext);

export { useVideos, VideosProvider };
