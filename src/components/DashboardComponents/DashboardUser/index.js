import { Avatar } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import "./style.scss";
const DashboardUser = (props) => {
  return (
    <div className="dashboard-user">
      <div className="dashboard-user__user-data">
        <div className="dashboard-user__user-data__avatar">
          <Avatar
            style={{ width: "5rem", height: "5rem" }}
            alt={props.user.username}
          />
        </div>
        <div className="dashboard-user__user-data__content">
          <p className="dashboard-user__user-data__content__name">
            {props.user.lastname} {props.user.firstname}
          </p>
          <p className="dashboard-user__user-data__content__level">
            Түвшин : {props.user.level}
          </p>
          <p className="dashboard-user__user-data__content__rate">
            Үнэлгээ :
            <span>
              <StarIcon style={{ fontSize: "1.2rem" }} />
            </span>
            {props.user.rating}
          </p>
        </div>
      </div>
      <div className="dashboard-user__rate">
        <div className="dashboard-user__rate__response-rate">
          <p>Хариу үзүүлж буй хурд</p>
          <div>
            <div className="dashboard-user__rate__progress"></div>
          </div>
          <p>80%</p>
        </div>
        {/* Order complete rate*/}
        <div className="dashboard-user__rate__order-complete-rate">
          <p>Хариу үзүүлж буй хурд</p>
          <div>
            <div className="dashboard-user__rate__order-complete-rate__progress"></div>
          </div>
          <p>80%</p>
        </div>
      </div>
      <div className="dashboard-user__revenue">
        <div className="dashboard-user__revenue__content">
          <p>Орлого: </p>
          <p>{props.user.balance}₮</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.registerReducer.user,
  };
};

export default connect(mapStateToProps)(DashboardUser);
