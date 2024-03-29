import { useContext, createContext, useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";


const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const navigate=useNavigate();
  const [playlist, setPlaylist] = useState([]);
  const [playlistVideo, setPlaylistVideo] = useState();
  const [showModel, setShowModel] = useState(false);
  const [modelInput, setModelInput] = useState("");
 const [ showShare, setShowShare]=useState(false);


  const createPlaylist = async (videoRequest) => {
    try {
      const res = await axios.post(
        "/api/user/playlists",
        { playlist: videoRequest },
        {
          headers: { authorization: localStorage.getItem("authToken") },
        }
      );
      setPlaylist(res.data.playlists);
      toast.success("Create New Playlist...")
    } catch (error) {
      navigate("/login")
      toast.error("Please Logged in ...")
    }
  };

  const AddPlaylistVideo = async (playlistId, videoRequest) => {
    try {
      const { data } = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video: videoRequest },
        {
          headers: { authorization: localStorage.getItem("authToken") },
        }
      );
      toast.success("Added video in playlist...")
    } catch (error) {
    }
  };

    const getPlaylistVideo = async () => {
      try {
        const res  = await axios.get("/api/user/playlists", {
          headers: { authorization: localStorage.getItem("authToken") },
        });
        setPlaylistVideo(res.data.playlists);
      } catch (error) {
        console.log(error,);
      }
    };

    const removePlaylist= async(playlistId)=>{
      try {
        const res= await axios.delete(`/api/user/playlists/${playlistId}`,{
          headers: { authorization: localStorage.getItem("authToken")}
        })
        setPlaylist(res.data.playlists)
        toast.success("Remove playlist...")
      } catch (error) {
        console.log(error)
        
      }
    }

    const removePlaylistVideo=async(playlistId,videoId)=>{
      try {
        const res= await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,{
          headers: { authorization: localStorage.getItem("authToken")}
        })
        setPlaylistVideo(res.data.playlists)
        toast.success("Remove video From Playlist...")
        
      } catch (error) {
        
      }
    }






  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        playlistVideo,
        setPlaylist,
        createPlaylist,
        AddPlaylistVideo,
        getPlaylistVideo,
        removePlaylistVideo,
        showModel, 
        setShowModel,
        removePlaylist,
        modelInput,
         setModelInput,
         showShare,
          setShowShare
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
