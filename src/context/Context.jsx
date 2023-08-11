import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const API_URL = "http://localhost:5000/db";
  const CATEGORIES_URL = "http://localhost:5000/expenses";
  const EXPENSES_URL = "http://localhost:5000/expenses";
  const expensesFormID = "expenses-form";
  const defaultCategory = "uncategorized";
  const [dataFromAPI, setDataFromAPI] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { setURL, setOptions, data, isLoading, fetchError } = useFetch(API_URL);

  useEffect(() => {
    setDataFromAPI((prevDataFromAPI) => {
      return { ...prevDataFromAPI, ...data };
    });
  }, [data]);

  useEffect(() => {
    isSubmitted && console.log("submitted");

    // isSubmitted &&
    //   addItem(EXPENSES_URL, {
    //     id: 24,
    //     description: "Avadakedavra",
    //     category: "home",
    //     date: "2023-08-10",
    //     cost: 999.99,
    //   });

    // isSubmitted &&
    //   updateItem(EXPENSES_URL, 24, {
    //     id: 24,
    //     description: "updatedCedavra",
    //     category: "travel",
    //     date: "2023-07-10",
    //     cost: 222.22,
    //   });

    // isSubmitted && deleteItem(EXPENSES_URL, 24);

    isSubmitted && setIsSubmitted(false);
  }, [isSubmitted]);

  const postRequest = (url, body) => {
    setURL(url);
    setOptions({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  const putRequest = (url, id, body) => {
    setURL(`${url}/${id}`);
    setOptions({
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  const deleteRequest = (url, id) => {
    setURL(`${url}/${id}`);
    setOptions({
      method: "DELETE",
    });
  };

  const addItem = (url, body) => {
    setDataFromAPI((prevDataFromAPI) => {
      if (url === EXPENSES_URL) {
        return {
          ...prevDataFromAPI,
          expenses: [...prevDataFromAPI["expenses"], body],
        };
      } else if (url === CATEGORIES_URL) {
        // placeholder for the page with categories
        // return;
      }
    });

    postRequest(url, body);
  };

  const updateItem = (url, id, body) => {
    setDataFromAPI((prevDataFromAPI) => {
      if (url === EXPENSES_URL) {
        return {
          ...prevDataFromAPI,
          expenses: [
            ...prevDataFromAPI["expenses"].map((item) =>
              item.id === id ? { ...item, ...body } : item
            ),
          ],
        };
      } else if (url === CATEGORIES_URL) {
        // placeholder for the page with categories
        // return;
      }
    });

    putRequest(url, id, body);
  };

  const deleteItem = (url, id) => {
    setDataFromAPI((prevDataFromAPI) => {
      if (url === EXPENSES_URL) {
        return {
          ...prevDataFromAPI,
          expenses: [
            ...prevDataFromAPI["expenses"].filter((item) => item.id !== id),
          ],
        };
      } else if (url === CATEGORIES_URL) {
        // placeholder for the page with categories
        // return;
      }
    });
    deleteRequest(url, id);
  };

  return (
    <Context.Provider
      value={{ expensesFormID, defaultCategory, dataFromAPI, setIsSubmitted }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
