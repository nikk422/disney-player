import { useContext, createContext, useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';



const LikesContext = createContext();

const LikesProvider = ({ children }) => {
  const [LikeVideos, setLikeVideos] = useState([]);

  const getLikedVideo = async (videoRequest) => {
    try {
      const res = await axios.post(
        "/api/user/likes",
        { video: videoRequest },
        {
          headers: { authorization: localStorage.getItem("authToken") },
        }
      );
      setLikeVideos(res.data.likes);
      toast.success("Like The Video..")
    } catch (error) {
      console.log(error);

    }
  };



  const removeLikeVideo = async (likeVideo) => {
    try {
      const res = await axios.delete(
        `/api/user/likes/${likeVideo}`,
       
        {
          headers: { authorization: localStorage.getItem("authToken") },
        }
      );
      setLikeVideos(res.data.likes);
      toast.info("DisLike The video")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <LikesContext.Provider value={{ LikeVideos,setLikeVideos, getLikedVideo,removeLikeVideo }}>
      {children}
    </LikesContext.Provider>
  );
};

const useLikes = () => useContext(LikesContext);
export { LikesProvider, useLikes };
