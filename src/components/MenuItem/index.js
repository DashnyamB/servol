import React from "react";
import "./style.scss";
const MenuItem = (props) => {
  // props - оор route path орж ирнэ, гаргах текст орж ирнэ.
  return (
    <li className="menu-item">
      <a href="/">{props.text}</a>
    </li>
  );
};
export default MenuItem;
