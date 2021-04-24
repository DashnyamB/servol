import React, { Fragment } from "react";
import "./style.scss";
import Shadow from "../../GlobalComponents/Shadow";
import Logo from "../../GlobalComponents/Logo";
import DashboardHeaderItem from "../DashboardHeaderItem";

const DashboardMobileMenu = (props) => {
  return (
    <Fragment>
      <div
        className={`dashboard-mobile-menu ${
          props.show && "dashboard-mobile-menu--show"
        }`}
      >
        <div className="dashboard-mobile-menu__logo">
          <Logo />
        </div>
        <div className="dashboard-mobile-menu__nav">
          {props.menus.map((menu) => (
            <DashboardHeaderItem
              key={menu.name}
              url={menu.url}
              menu={menu.name}
            />
          ))}
        </div>
      </div>
      <Shadow show={props.show} onClick={props.showMobileMenu} />
    </Fragment>
  );
};

export default DashboardMobileMenu;
