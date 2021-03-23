import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import "./style.scss";
import Footer from "../../components/Footer";
import { Route, Switch } from "react-router-dom";
import DashboardOrder from "../../components/DashboardOrder";
import DashboardSection from "../../components/DashboardSection";
import DashboardAddService from "../../components/DashboardAddService";
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
