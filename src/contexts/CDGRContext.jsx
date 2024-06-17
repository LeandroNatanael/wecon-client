import { createContext, useState } from "react";
import fetchCDGR from "../services/CDGR/fetchCdgr.js";

const CDGRContext = createContext();

const CDGRProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    try {
      const response = await fetchCDGR();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <CDGRContext.Provider value={{refreshData, data, error, loading  }}>
      {children}
    </CDGRContext.Provider>
  );
};

export { CDGRContext, CDGRProvider };
