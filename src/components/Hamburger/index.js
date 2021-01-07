import React from "react";
import "./style.scss";
const Hamburger = (props) => {
  return (
    <div className="hamburger-menu" onClick={props.toggleMenu}>
      <div className="hamburger-menu--top"></div>
      <div className="hamburger-menu--middle"></div>
      <div className="hamburger-menu--bottom"></div>
    </div>
  );
};

export default Hamburger;
