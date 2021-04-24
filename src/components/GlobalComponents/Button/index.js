import React from "react";
import css from "./style.module.scss";
const Button = ({ text, onClick }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
