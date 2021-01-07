import React from "react";
import MenuItem from "../MenuItem";
import "./style.scss";
const Menu = (props) => {
  return (
    <ul className="servol_nav">
      <MenuItem text="Нүүр" />
      <MenuItem text="Нэвтрэх" />
      <MenuItem text="Бүртгүүлэх" />
      <MenuItem text="Мэдээлэл" />
    </ul>
  );
};

export default Menu;
