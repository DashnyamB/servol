import React, { useState } from "react";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import FrontPage from "../FrontPage";

import "./style.scss";

const App = () => {
  return (
    <div className="App">
      <main>
        <FrontPage />
      </main>
    </div>
  );
};

export default App;
