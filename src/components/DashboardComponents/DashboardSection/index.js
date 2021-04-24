import React, { useEffect, useState } from "react";
import DashboardUser from "../DashboardUser";
import ServiceCard from "../../ServicePageComponents/ServiceCard";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../../redux/actions/servicesAction";

const DashboardSection = (props) => {
  useEffect(() => {
    console.log("aaa", props.user.id);

    setTimeout(() => {
      props.getUserServices(props.user.id);
      console.log("timeout===>", props.user.id);
    }, 3000);
  }, []);
  return (
    <section className="dashboard-section">
      <div className="dashboard-section__user">
        <DashboardUser />
      </div>
      <div className="dashboard-section__right-side">
        <div className="dashboard-section__right-side__title">
          <h2>Таний үйлчилгээнүүд</h2>
          <span>
            {props.userId}
            <AddCircleIcon
              onClick={() => props.history.push("/dashboard/services/add")}
            />
          </span>
        </div>
        <div className="dashboard-section__right-side__services">
          {props.services.map((el) => (
            <ServiceCard key={el.id} serviceInfo={el} authorInfo={props.user} />
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    services: state.servicesReducer.services,
    user: state.registerReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserServices: (userId) => dispatch(actions.getUserServices(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashboardSection));
