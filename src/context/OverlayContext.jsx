import React, { useState } from "react";

const OverlayContext = React.createContext();

const OverlayContextProvider = ({ children }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [isExpensesEdit, setIsExpensesEdit] = useState(false);

  return (
    <OverlayContext.Provider
      value={{ isOverlay, setIsOverlay, isExpensesEdit, setIsExpensesEdit }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayContextProvider };
export default OverlayContext;
