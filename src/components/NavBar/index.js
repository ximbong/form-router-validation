import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <li>
        <Link to="/">Personal Information</Link>
      </li>
      <li>
        <Link to="/part2">Skills and location</Link>
      </li>
      <li>
        <Link to="/part3">Portfolio</Link>
      </li>
    </div>
  );
};

export default NavBar;
