import React from "react";

import "./index.css";

const NavBar = ({ current_page }) => {
  const info_array = [
    "Personal Information",
    "Skills and location",
    "Portfolio"
  ];
  const NavList = info_array.map((data, index) => {
    return index + 1 === current_page ? (
      <li className="selected" key={index}>
        {data}
      </li>
    ) : (
      <li key={index}>{data}</li>
    );
  });
  return <div className="navBar">{NavList}</div>;
};

export default NavBar;
