import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../Shadow";
import "./style.scss";
const MobileMenu = (props) => {
  let classes = ["mobile-menu", "mobile-menu--close"];
  if (props.MobileMenuOpen) classes = ["mobile-menu", "mobile-menu--open"];
  return (
    <div>
      <Shadow show={props.MobileMenuOpen} onClick={props.toggleMobileMenu} />
      <div className={classes.join(" ")} onClick={props.toggleMobileMenu}>
        <Logo />
        <Menu />
      </div>
    </div>
  );
};

export default MobileMenu;
