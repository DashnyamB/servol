import React from "react";
import "./styles.scss";

function Spinner() {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
