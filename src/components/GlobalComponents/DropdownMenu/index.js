import React, { useEffect, useState } from "react";
import "./style.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Shadow from "../Shadow";

const DropdownMenu = (props) => {
  //
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.initialValue);

  const show = () => {
    setShowDropdown(!showDropdown);
  };
  const listClicked = (e) => {
    setSelectedValue(e.target.innerText);
    props.onListClick(e.target.id);
    show();
  };
  return (
    <div className="servol-dropdown-menu">
      <div className="servol-dropdown-menu__selector" onClick={show}>
        <span>{selectedValue}</span>
        <ArrowDropDownIcon />
      </div>
      <aside
        className={`servol-dropdown-menu__content ${
          showDropdown ? "servol-dropdown-menu__content--show" : ""
        }`}
      >
        <ul className={`servol-dropdown-menu__content__list`}>
          {props.data.map((data) => {
            return (
              <li onClick={listClicked} id={data.id} key={data.id}>
                {data.name}
              </li>
            );
          })}
        </ul>
      </aside>
      <Shadow show={showDropdown} opacity="0" onClick={show} />
    </div>
  );
};

export default DropdownMenu;
