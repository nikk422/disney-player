import { useContext, createContext, useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"



const WatchLaterContext = createContext();

const WatchlaterProvider = ({ children }) => {
  const navigate = useNavigate();
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
      toast.success("Video Added in WatchLater..")
    } catch (error) {
      navigate("/login")
      toast.error("Please Logged in ..")

    }
  };

  const removeWatchVideo=async(watchVideo)=>{
      try {
          const res=await axios.delete(`/api/user/watchlater/${watchVideo}`,{
              headers: {authorization: localStorage.getItem("authToken")}
          })
          setWatchLaterVideos(res.data.watchlater);
          toast.info("Remove From WatchLater ..")

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
