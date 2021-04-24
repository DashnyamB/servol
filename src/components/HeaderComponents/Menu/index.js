import React from "react";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/LoginAction";
import "./style.scss";
const Menu = (props) => {
  return (
    <ul className="servol_nav">
      <MenuItem text="Нүүр" />
      <MenuItem text="Мэдээлэл" />
      {props.userId ? (
        <>
          {props.role === "admin" ? (
            <>
              <MenuItem text="Профайл" url="/bigadmin" />
              <MenuItem text="Dashboard" url="/dashboard" />
            </>
          ) : (
            <MenuItem text="Dashboard" url="/dashboard" />
          )}
          <MenuItem text="Гарах" onClick={props.logout} />
        </>
      ) : (
        <>
          <MenuItem text="Нэвтрэх" url="/login" />
          <MenuItem text="Бүртгүүлэх" url="/register" />
        </>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.registerReducer.user.id,
    role: state.registerReducer.user.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
