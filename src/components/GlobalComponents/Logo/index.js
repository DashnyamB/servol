import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">servol</NavLink>
    </div>
  );
};
export default Logo;
