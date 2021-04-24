import React from "react";
import { Link } from "react-router-dom";
import Button from "../../GlobalComponents/Button";
import "./style.scss";
const MenuItem = (props) => {
  // props - оор route path орж ирнэ, гаргах текст орж ирнэ.
  return (
    <li className="menu-item">
      {props.onClick ? (
        <button onClick={props.onClick}>{props.text} </button>
      ) : (
        <Link to={props.url || "/"}>{props.text}</Link>
      )}
    </li>
  );
};
export default MenuItem;
