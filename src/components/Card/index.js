import React from "react";
import "./style.scss";

import img from "../../assets/images/1.jpg";

const Card = (props) => {
  return (
    <li className={`card item-${props.orderLetter}`}>
      <figure className="card__figure">
        <img src={img} />
      </figure>
      <div className="darken darken--round"></div>
      <h1 className="card__title">Title goes here...</h1>
    </li>
  );
};

export default Card;
