import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import Button from "../../../components/GlobalComponents/Button";
import Spinner from "../../../components/GlobalComponents/Spinner";
import * as actions from "../../../redux/actions/LoginAction";
import "./styles.scss";
const Login = (props) => {
  // State
  const [userData, setData] = useState({
    username: "",
    password: "",
  });

  //   useRef
  const loginRef = useRef();
  //   useEffect
  useEffect(() => {
    const inputs = document.querySelectorAll(".loginHandler");
    if (inputs) {
      inputs.forEach((input) => {
        input.addEventListener("keydown", (key) => {
          if (key.keyCode === 13) {
            handleLogin();
          }
        });
      });
    }

    return function cleanUp() {
      inputs.forEach((input) => {
        input.removeEventListener("keydown", (key) => {});
      });
    };
  }, []);
  const inputHandler = (e) => {
    setData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    props.loginUser(userData);
  };

  console.log(document.cookie.split(";"));
  return (
    <section className="login">
      {props.userId && <Redirect to="/" />}
      <div className="login__info">{userData.username}</div>
      <div className="login__form">
        <span className="login__form__title">нэвтрэх</span>
        {props.backendError && (
          <div style={{ color: "red" }}>{props.backendError}</div>
        )}
        <input
          autoFocus={true}
          className="loginHandler"
          onChange={inputHandler}
          type="text"
          name="username"
          placeholder="Хэрэглэгчийн нэрээ оруулна уу..."
        />
        <input
          className="loginHandler"
          onChange={inputHandler}
          type="password"
          name="password"
          placeholder="Нууц үгээ оруулна уу..."
        />
        <div className="login__form__button">
          {props.saving ? (
            <Spinner />
          ) : (
            <Button text="Нэвтрэх" onClick={handleLogin} />
          )}
        </div>
        <p style={{ marginTop: "1rem" }}>
          Хэрвээ та хаягтай бол <Link to="/register">энд дарж </Link>
          бүртгүүлнэ үү.
        </p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.registerReducer.saving,
    userId: state.registerReducer.user.id,
    backendError: state.registerReducer.backendError,
    token: state.registerReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userData) => dispatch(actions.loginUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
