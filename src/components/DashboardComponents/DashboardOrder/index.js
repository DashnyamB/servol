import React from "react";
import "./style.scss";

import DashboardOrderItem from "../DashboardOrderItem";
const DashboardOrder = (props) => {
  return (
    <div className="dashboard-order">
      <div className="dashboard-order__title">Таньд ирсэн захиалгууд</div>
      <div className="dashboard-order__content">
        {/* order */}
        <table
          className={
            "adashboard-order__content__orders table is-narrow is-hoverable is-fullwidth"
          }
        >
          <thead>
            <tr>
              <th>Захиалагч</th>
              <th>Үйлчилгээний нэр</th>
              <th>Ирсэн хугацаа</th>
              <th style={{ width: "10rem" }}>Зөвшөөрөх эсэх</th>
            </tr>
          </thead>
          <tbody>
            {/* orders */}
            <DashboardOrderItem />
            <DashboardOrderItem />
            <DashboardOrderItem />
            <DashboardOrderItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardOrder;
