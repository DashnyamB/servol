import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeaderItem from "../DashboardHeaderItem";
import Logo from "../Logo";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./style.scss";
import DashboardMobileMenu from "../DashboardMobileMenu";
const DashboardHeader = () => {
  const [menus, setMenus] = useState([
    { name: "Хяналтын самбар", url: "/dashboard" },
    { name: "Захиалгууд", url: "/dashboard/orders" },
    { name: "Аналитик", url: "/dashboard/analytics" },
    { name: "Мессеж", url: "/dashboard/message" },
  ]);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const show = () => {
    setShowMobileMenu((menu) => !showMobileMenu);
    console.log(showMobileMenu);
  };
  return (
    <header className="dashboard-header wrapper">
      {/* Logo */}
      <div className="dashboard-header__logo">
        <Logo />
        {showMobileMenu && (
          <DashboardMobileMenu
            menus={menus}
            show={showMobileMenu}
            showMobileMenu={show}
          />
        )}
        <div className="dashboard-header__logo__nav">
          {menus.map((menu) => (
            <DashboardHeaderItem
              key={menu.name}
              url={menu.url}
              menu={menu.name}
            />
          ))}
        </div>
      </div>
      {/* Header items */}
      <div className="dashboard-header__mobile-menu">
        {!showMobileMenu ? <MenuIcon onClick={show} /> : <CloseIcon />}
      </div>
    </header>
  );
};

export default DashboardHeader;
