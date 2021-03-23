import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import * as actions from "../../../redux/actions/registerAction";

import "./styles.scss";
const Register = (props) => {
  // State
  const [userData, setData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const [error, setError] = useState(null);

  const inputHandler = (e) => {
    setData({ ...userData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleRegister = () => {
    if (userData.password === "" || userData.password === "") {
      setError("Нууц үгээ оруулна уу");
    } else if (userData.password === userData.passwordConfirm) {
      delete userData.passwordConfirm;
      console.log(userData);
      props.registerUser(userData);
    } else {
      setError("Нууц үгнүүд хоорондоо таарахгүй байна");
    }
  };
  const keyPressed = (key) => {
    if (key.keyCode == "13") {
      console.log(userData);
      handleRegister();
    }
  };
  //   useEffect
  useEffect(() => {
    const inputs = document.querySelectorAll(".registerHandler");
    if (inputs) {
      inputs.forEach((input) => {
        input.addEventListener("keydown", keyPressed);
      });
    }

    return function cleanUp() {
      inputs.forEach((input) => {
        input.removeEventListener("keydown", (key) => {});
      });
    };
  }, []);
  return (
    <section className="register">
      {props.userId && <Redirect to="/" />}
      <div className="register__info"></div>

      <div className="register__form">
        <span className="register__form__title">Бүртгүүлэх</span>
        {error && <p className="register__error">{error}</p>}
        {props.backendError && (
          <p className="register__error">{props.backendError}</p>
        )}
        <div className="register__form__names">
          <input
            autoFocus={true}
            className="registerHandler"
            onChange={inputHandler}
            type="text"
            name="lastname"
            placeholder="Овог"
          />
          <input
            className="registerHandler"
            onChange={inputHandler}
            type="text"
            name="firstname"
            placeholder="Нэр"
          />
        </div>
        <div className="register__form__other-data">
          <input
            className="registerHandler"
            onChange={inputHandler}
            type="text"
            name="username"
            placeholder="Хэрэглэгчийн нэр"
          />
          <input
            className="registerHandler"
            onChange={inputHandler}
            type="text"
            name="email"
            placeholder="Имэйл"
          />
          <input
            className="registerHandler"
            onChange={inputHandler}
            type="password"
            name="password"
            placeholder="Нууц үгээ оруулна уу..."
          />
          <input
            className="registerHandler"
            onChange={inputHandler}
            type="password"
            name="passwordConfirm"
            placeholder="Дахин нууц үгээ оруулна уу..."
          />
        </div>

        <div className="register__form__button">
          {props.saving ? (
            <Spinner />
          ) : (
            <Button text="Бүртгүүлэх" onClick={handleRegister} />
          )}
        </div>
        <p style={{ marginTop: "1rem" }}>
          Хэрвээ та хаягтай бол <Link to="/login">энд дарж </Link>
          нэвтэрнэ үү.
        </p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.registerReducer.saving,
    backendError: state.registerReducer.backendError,
    userId: state.registerReducer.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (userData) => dispatch(actions.registerUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
