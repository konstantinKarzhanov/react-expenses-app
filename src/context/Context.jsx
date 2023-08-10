import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const API_URL = "http://localhost:5000/categories";
  const expensesFormID = "expenses-form";
  const [dataFromAPI, setDataFromAPI] = useState([]);

  const { data, isLoading, fetchError } = useFetch(API_URL);

  useEffect(() => {
    setDataFromAPI(data);
  }, [data]);

  return (
    <Context.Provider value={{ expensesFormID, dataFromAPI }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
