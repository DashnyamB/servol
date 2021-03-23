import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "../AdminPage";
import FrontPage from "../FrontPage";
import Login from "../LoginRegisterPage/Login";
import Register from "../LoginRegisterPage/Register";
import ServiceOrderPage from "../ServiceOrderPage";
import ServicePage from "../ServicePage";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/LoginAction";

import "./style.scss";
import Dashboard from "../Dashboard";

const App = (props) => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevMobileMenuOpen) => !prevMobileMenuOpen);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      props.autoLogin(userId);
    }
  }, []);
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/services/order">
            <ServiceOrderPage
              MobileMenuOpen={MobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </Route>
          <Route path="/services">
            <ServicePage
              MobileMenuOpen={MobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/bigadmin">
            <AdminPage
              MobileMenuOpen={MobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <FrontPage
              MobileMenuOpen={MobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (userId) => dispatch(actions.autoLoginUser(userId)),
  };
};

export default connect(null, mapDispatchToProps)(App);
