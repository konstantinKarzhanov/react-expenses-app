import React from "react";

const MainTitle = ({ idHandle, children }) => {
  return <h1 id={idHandle}>{children}</h1>;
};

export default MainTitle;
