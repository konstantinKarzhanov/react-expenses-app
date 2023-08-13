import React, { useState } from "react";

const OverlayContext = React.createContext();

const OverlayContextProvider = ({ children }) => {
  const [isOverlay, setIsOverlay] = useState(true);
  return (
    <OverlayContext.Provider value={{ isOverlay, setIsOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayContextProvider };
export default OverlayContext;
