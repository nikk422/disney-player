import { useContext, createContext, useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';



const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyVideos, setHistoryVideos] = useState([]);

  const getHistoryVideo = async (videoRequest) => {
    try {
      const res = await axios.post(
        "/api/user/history",
        { video: videoRequest },
        {
          headers: { authorization: localStorage.getItem("authToken") },
        }
      );
      setHistoryVideos(res.data.history);
    } catch (error) {
      toast.error("Please Logged in ..")
    }
  };


  const removeHistory=async(historyVideo)=>{
      try {
          const res=  await axios.delete(`/api/user/history/${historyVideo}`,{
              headers: { authorization: localStorage.getItem("authToken") }
          })
          setHistoryVideos(res.data.history)
          toast.info("Remove From History ..")
          
      } catch (error) {
          console.log(error);
          
      }
  }



  const clearAllHistory=async () =>{
    try {
      const res= await axios.delete("/api/user/history/all",{
        headers:{ authorization: localStorage.getItem("authToken")}
      })
      setHistoryVideos(res.data.history,"clear")
      toast.error("Clear All History ..")

      
    } catch (error) {
      console.log(error) 
    }
  }

 

  return (
    <HistoryContext.Provider value={{ historyVideos, getHistoryVideo,removeHistory,clearAllHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);
export { HistoryProvider, useHistory };
