import React from "react";
import MainTitle from "./MainTitle";

const Header = ({ idHandle, mainTitleHandle }) => {
  return (
    <header>
      <MainTitle idHandle={idHandle} children={mainTitleHandle} />
    </header>
  );
};

export default Header;
