import React from "react";
import "./style.scss";

const Shadow = (props) => {
  return props.show ? (
    <div className="shadow" onClick={props.onClick}></div>
  ) : null;
};

export default Shadow;
