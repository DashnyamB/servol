import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const DashboardHeaderItem = (props) => {
  return (
    <Link className="dashboard-header-item" to={props.url}>
      <div>{props.menu}</div>
    </Link>
  );
};

export default DashboardHeaderItem;
