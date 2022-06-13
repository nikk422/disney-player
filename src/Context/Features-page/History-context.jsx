import { useContext, createContext, useState } from "react";
import axios from "axios";

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
    console.log(res.data.history,"histoy")
    } catch (error) {
      console.log(error);
    }
  };


  const removeHistory=async(historyVideo)=>{
      try {
          const res=  await axios.delete(`/api/user/history/${historyVideo}`,{
              headers: { authorization: localStorage.getItem("authToken") }
          })
          console.log(res.data.history);
          setHistoryVideos(res.data.history)
          
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
