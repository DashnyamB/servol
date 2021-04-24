import React from "react";
import "./style.scss";
const TextArea = (props) => {
  return (
    <div className="service-textarea">
      <textarea
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextArea;
