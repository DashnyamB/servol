import React from "react";
import "./style.scss";

const Shadow = (props) => {
  return props.show ? (
    <div
      className="shadow"
      style={{ opacity: `${props.opacity ? props.opacity : "0.5"}` }}
      onClick={props.onClick}
    ></div>
  ) : null;
};

export default Shadow;
