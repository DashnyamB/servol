import React from "react";
import "./style.scss";
const Input = (props) => {
  return (
    <div className="service-input">
      <input
        autoComplete={`${props.autoComplete ? props.autoComplete : "off"}`}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
