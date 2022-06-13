import { useContext, createContext, useState } from "react";
import axios from "axios";

const WatchLaterContext = createContext();

const WatchlaterProvider = ({ children }) => {
  const [WatchLaterVideos, setWatchLaterVideos] = useState([]);

  const getWatchLaterVideo = async (videoRequest) => {
    try {
      const res = await axios.post(
        "/api/user/watchlater",
        { video: videoRequest },
        {
          headers: { authorization: localStorage.getItem("authToken") },
        }
      );
      setWatchLaterVideos(res.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  const removeWatchVideo=async(watchVideo)=>{
      try {
          const res=await axios.delete(`/api/user/watchlater/${watchVideo}`,{
              headers: {authorization: localStorage.getItem("authToken")}
          })
          setWatchLaterVideos(res.data.watchlater);
      } catch (error) {
          console.log(error)
      }
     
  }
  return (
    <WatchLaterContext.Provider value={{ WatchLaterVideos, getWatchLaterVideo,removeWatchVideo }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchlater = () => useContext(WatchLaterContext);
export { WatchlaterProvider, useWatchlater };
