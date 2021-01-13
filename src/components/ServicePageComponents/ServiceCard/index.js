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
            src={props.serviceInfo.serviceImg}
            alt={props.serviceInfo.serviceDesc}
          />
        </figure>
      </div>
      <div className="service-card__content">
        <div className="service-card__content__author">
          <figure className="service-card__content__author__image">
            <img
              src={props.serviceInfo.authorImg}
              alt={props.serviceInfo.authorName}
            />
          </figure>
          <div className="service-card__content__author__info">
            <h2>{props.serviceInfo.authorName}</h2>
            <p>Түвшин : {props.serviceInfo.authorLevel}</p>
          </div>
        </div>
        <div className="service-card__content__service-title">
          <h2>{props.serviceInfo.serviceDesc}</h2>
        </div>
        <div className="service-card__content__rating">
          <div className="service-card__content__rating__star">
            {props.serviceInfo.starRating}
          </div>
          <div className="service-card__content__rating__price">
            Үнэ : {props.serviceInfo.servicePrice}
          </div>
        </div>
      </div>
    </article>
  );
};

export default withRouter(ServiceCard);
