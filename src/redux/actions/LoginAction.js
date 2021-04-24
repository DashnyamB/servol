import { instance } from "../../axios";

export const loginUser = (userData) => {
  return function (dispatch) {
    dispatch(loginStart());
    instance
      .post("/users/login", userData)
      .then((result) => {
        delete result.data.data.password;
        delete result.data.data.updatedAt;
        delete result.data.data.createdAt;
        localStorage.setItem("userId", result.data.data.id);
        dispatch(loginSuccess(result.data));
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        dispatch(loginError(err.response.data.error.message));
      });
  };
};

export const autoLoginUser = (userId) => {
  return function (dispatch) {
    instance
      .post("/users/autologin")
      .then((result) => {
        // delete result.data.data.password;
        delete result.data.data.updatedAt;
        delete result.data.data.createdAt;
        dispatch(loginSuccess(result.data));
      })
      .catch((err) => {
        console.log(err.data);
        // dispatch(loginError(err.response.data.error.message));
      });
  };
};
export const loginStart = () => {
  return {
    type: "LOGIN_START",
  };
};
export const loginSuccess = (loginResponseData) => {
  return {
    type: "LOGIN_SUCCESS",
    loginResponseData,
  };
};
export const loginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    error,
  };
};

export const logout = () => {
  return function (dispatch) {
    instance.get("/users/logout").then((result) => {
      document.cookie =
        "Servol-token=; expires=" +
        new Date(Date.now() - 360 * 24 * 60 * 60 * 1000);

      localStorage.removeItem("userId");

      dispatch({ type: "LOGOUT" });
    });
  };
};
