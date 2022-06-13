import { useContext, createContext, useState } from "react";
import axios from "axios";
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
      console.log("post...");
      setLikeVideos(res.data.likes);
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
      console.log(res.data);
      setLikeVideos(res.data.likes);
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
