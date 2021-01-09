import React from "react";
import css from "./style.module.scss";

const Column = (props) => {
  return (
    <article className={css.Column}>
      <ul className={css.ColumnList}>
        {props.lists.map((el) => (
          <li>
            <a href="/">{el}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Column;
