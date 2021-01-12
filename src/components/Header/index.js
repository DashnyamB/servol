import React, { useEffect, useRef } from "react";
import Hamburger from "../Hamburger";
import Logo from "../Logo";
import Menu from "../Menu";

import "./style.scss";
const Header = (props) => {
  let classes = ["header", "wrapper"];
  if (props.transparent)
    classes = ["header", "wrapper", "header--transparent", "fixed-header"];
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("sticky-header", window.scrollY > 0);
      }
    });
  }, []);

  return (
    <header ref={headerRef} className={classes.join(" ")}>
      <Hamburger toggleMenu={props.toggleMobileMenu} />
      <Logo />
      <nav className="hide-on-mobile">
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
