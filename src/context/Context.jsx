import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const API_URL = "http://localhost:5000/expenses";
  const [dataFromAPI, setDataFromAPI] = useState([]);

  const { data, isLoading, fetchError } = useFetch(API_URL);

  useEffect(() => {
    setDataFromAPI(data);
  }, [data]);

  return <Context.Provider value={dataFromAPI}>{children}</Context.Provider>;
};

export { ContextProvider };
export default Context;
