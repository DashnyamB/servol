import React from "react";
import "./style.scss";
import OrderMoreInfo from "../OrderMoreInfo";
import OrderSummary from "../OrderSummary";
const OrderInfo = (props) => {
  return (
    // BEM
    <section className="order-info wrapper">
      <article className="order-info__order-description">
        <OrderMoreInfo />
      </article>
      <article className="order-info__order-summary">
        <OrderSummary />
      </article>
    </section>
  );
};

export default OrderInfo;
