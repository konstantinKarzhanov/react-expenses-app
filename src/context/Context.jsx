import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const API_URL = "http://localhost:5000/categories";
  const expensesFormID = "expenses-form";
  const defaultCategory = "uncategorized";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dataFromAPI, setDataFromAPI] = useState([]);

  const { setURL, setOptions, data, isLoading, fetchError } = useFetch(API_URL);

  useEffect(() => {
    setDataFromAPI(data);
  }, [data]);

  // const postRequest = (url, options) => {
  //   setURL(API_URL);
  //   setOptions({
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   });
  // };

  return (
    <Context.Provider value={{ expensesFormID, defaultCategory, dataFromAPI }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
