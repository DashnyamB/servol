import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.scss";
const DashboardOrderItem = (props) => {
  return (
    <tr>
      <td>Дашням</td>
      <td>Дашням</td>
      <td>Дашням</td>
      <td className="dashboard-order-item__icon">
        <span className="dashboard-order-item__icon__check">
          <CheckCircleOutlineIcon />
        </span>
        <span className="dashboard-order-item__icon__delete">
          <DeleteIcon />
        </span>
      </td>
    </tr>
  );
};

export default DashboardOrderItem;
