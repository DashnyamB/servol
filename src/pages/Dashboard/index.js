import React from "react";
import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import "./style.scss";
import { Route, Switch } from "react-router-dom";
import DashboardOrder from "../../components/DashboardComponents/DashboardOrder";
import DashboardSection from "../../components/DashboardComponents/DashboardSection";
import DashboardAddService from "../../components/DashboardComponents/DashboardAddService";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <DashboardHeader />
      {/* components */}
      <section className="dashboard__content wrapper">
        {/* components */}
        <Switch>
          <Route path="/dashboard/orders" component={DashboardOrder} />
          <Route
            path="/dashboard/services/add"
            component={DashboardAddService}
          />
          <Route path="/dashboard" component={DashboardSection} />
        </Switch>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
