import React from "react";

const InsightContext = React.createContext();

const InsightContextProvider = ({ children }) => {
  return (
    <InsightContext.Provider value={{}}>{children}</InsightContext.Provider>
  );
};

export { InsightContextProvider };
export default InsightContext;
