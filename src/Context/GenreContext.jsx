import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const GenreContext = createContext();

const GenreProvider = ({ children }) => {

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("api/categories");
      setGenre(res.data.categories);
    })();
  }, []);

  return (
    
    <GenreContext.Provider value={{ genre, setGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

const useGenre = () => useContext(GenreContext);

export { useGenre, GenreProvider };
