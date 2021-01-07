import React, { useState } from "react";
import Hamburger from "../Hamburger";
import Logo from "../Logo";
import Menu from "../Menu";

import "./style.scss";
const Header = (props) => {
  let classes = ["header", "wrapper"];
  if (props.transparent) classes = ["header", "wrapper", "header--transparent"];
  return (
    <header className={classes.join(" ")}>
      <Hamburger toggleMenu={props.toggleMobileMenu} />
      <Logo />
      <nav className="hide-on-mobile">
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
