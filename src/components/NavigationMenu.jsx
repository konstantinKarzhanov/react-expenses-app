import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const NavigationMenu = () => {
  const navMenuArr = ["expenses", "categories", "insights", "about"];
  const navList = navMenuArr.map((item, index) => (
    <li key={index} className="pad">
      <NavLink to={item} className="d-block">
        {item}
      </NavLink>
    </li>
  ));
  return (
    <ul className="navigation-list container--px fs--m text-capital fancy--text">
      {navList}
    </ul>
  );
};

export default NavigationMenu;
