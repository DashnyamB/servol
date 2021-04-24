import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./styles.scss";

const ServiceCard = (props) => {
  const jumpToOrder = () => {
    props.history.push("/services/order");
  };

  return (
    <article onClick={jumpToOrder} className="service-card">
      <div className="service-card__image">
        <figure>
          <img
            src={props.serviceInfo.photo}
            alt={props.serviceInfo.shortDesc}
          />
        </figure>
      </div>
      <div className="service-card__content">
        <div className="service-card__content__author">
          <figure className="service-card__content__author__image">
            <img src={props.authorInfo.photo} alt={props.authorInfo.name} />
          </figure>
          <div className="service-card__content__author__info">
            <h2>{props.authorInfo.name}</h2>
            <p>Түвшин : {props.authorInfo.level}</p>
          </div>
        </div>
        <div className="service-card__content__service-title">
          <h2>{props.serviceInfo.shortDesc}</h2>
        </div>
        <div className="service-card__content__rating">
          <div className="service-card__content__rating__star">
            {props.serviceInfo.rating}
          </div>
          <div className="service-card__content__rating__price">
            Үнэ : {props.serviceInfo.price}
          </div>
        </div>
      </div>
    </article>
  );
};

export default withRouter(ServiceCard);
