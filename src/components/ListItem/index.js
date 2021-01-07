import React from "react";
import "./style.scss";

const ListItem = (props) => {
  return (
    <li className="list-item">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </li>
  );
};

export default ListItem;
