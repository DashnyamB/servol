import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AdminAside from "./AdminAside";
import AdminPanel from "./AdminPanel";

import "./styles.scss";
import Footer from "../../components/Footer";
const AdminPage = ({ userId, role }) => {
  const [menu, setMenu] = useState("categories");

  const menuHandler = (menuName) => {
    setMenu(menuName);
  };
  return (
    <section className="admin-page wrapper">
      {!userId || role !== "admin" ? <Redirect to="/" /> : null}
      <div className="admin-page__panel">
        <AdminAside menuHandler={menuHandler} />
      </div>
      <div className="admin-page__edit">
        <AdminPanel menu={menu} />
      </div>
      <Footer />
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.registerReducer.user.id,
    role: state.registerReducer.user.role,
  };
};
export default connect(mapStateToProps)(AdminPage);
