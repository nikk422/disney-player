import { useContext, createContext, useReducer } from "react";
import {ReducerFunc} from "../Reducer/Reducer";

const filterContext = createContext();

const FilterProvider = ({ children }) => {

  const [VideoState, VideoDispatch] = useReducer(ReducerFunc, {
    videosFilter: "ALL",
  });

  return (
    
    <filterContext.Provider value={{ VideoState, VideoDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider };
