import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import FrontPage from "../FrontPage";
import ServiceOrderPage from "../ServiceOrderPage";
import ServicePage from "../ServicePage";

import "./style.scss";

const App = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevMobileMenuOpen) => !prevMobileMenuOpen);
  };
  return (
    <BrowserRouter>
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
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
