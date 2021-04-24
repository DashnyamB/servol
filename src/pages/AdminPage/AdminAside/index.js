import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../../../components/GlobalComponents/Button";
import * as actions from "../../../redux/actions/LoginAction";

import "./style.scss";

const baseUrl = "/bigadmin";
const AdminAside = ({
  username,
  lastname,
  firstname,
  role,
  logout,
  menuHandler,
}) => {
  return (
    <aside className="aside-menu">
      <h1 className="aside-menu__title">Удирдлагийн самбар</h1>
      <div className="aside-menu__user">
        <p>
          Нэр : <span>{username}</span>
        </p>
        <p>
          Эрх :<span>{role}</span>
        </p>
      </div>
      <ul>
        <li onClick={() => menuHandler("categories")}>
          <Link to={`${baseUrl}/categories`}>Категориуд</Link>
        </li>
        <li onClick={() => menuHandler("subcategories")}>
          <Link to={`${baseUrl}/subcategories`}>Дэд категориуд</Link>
        </li>
        <li onClick={() => menuHandler("services")}>
          <Link to={`${baseUrl}/services`}>Үйлчилгээ</Link>
        </li>
        <li onClick={() => menuHandler("users")}>
          <Link to={`${baseUrl}/users`}>Хэрэглэгчид</Link>
        </li>
      </ul>

      <div className="aside-menu__button-exit">
        <Button text="Гарах" onClick={logout} />
      </div>
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.registerReducer.user.username,
    role: state.registerReducer.user.role,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminAside);
