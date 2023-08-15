import React from "react";
import MainTitle from "./MainTitle";

const Header = ({ mainTitleHandle }) => {
  return (
    <header>
      <MainTitle children={mainTitleHandle} />
    </header>
  );
};

export default Header;
