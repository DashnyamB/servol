import React from "react";
import "./styles.scss";

const OrderSummary = (props) => {
  return (
    <section className="order-summary">
      <div className="order-summary__price">
        <span>Үнэ : 200,000</span>
      </div>
      <div className="order-summary__brief-info">
        <h2>Үйлчилгээний тухай товч</h2>
        <p>
          1-2 PAGES WEBSITE WITH EXTRAORDINARY DESIGN AND ALL DEVICE RESPONSIVE.
          BEST FOR PERSONAL USE.
        </p>
      </div>
      <div className="order-summary__btn search__btn">
        <button>Үргэлжлүүлэх</button>
      </div>
    </section>
  );
};

export default OrderSummary;
