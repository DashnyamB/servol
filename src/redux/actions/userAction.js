import { instance } from "../../axios";

export const getUsers = () => {
  return function (dispatch) {
    dispatch(getUsersStart());

    instance
      .get("users")
      .then((res) => {
        console.log(res.data.data);
        dispatch(getUsersSuccess(res.data.data));
      })
      .catch((err) => dispatch(getUsersError(err.response.data.error.message)));
  };
};

export const getUsersStart = () => {
  return {
    type: "GET_USERS_START",
  };
};
export const getUsersSuccess = (usersData) => {
  return {
    type: "GET_USERS_SUCCESS",
    usersData,
  };
};
export const getUsersError = (error) => {
  return {
    type: "GET_USERS_ERROR",
    error,
  };
};

// Нэг хэрэглэгчийн мэдээллийг авах
export const getUser = (id) => {
  return function (dispatch) {
    dispatch(getUserStart());
    instance
      .get(`/users/${id}`)
      .then((user) => {
        console.log(user.data.data);
        dispatch(getUserSuccess(user.data.data));
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch(getUserError(err.response.data.message));
      });
  };
};

export const getUserStart = () => {
  return {
    type: "GET_USER_START",
  };
};
export const getUserSuccess = (userData) => {
  return {
    type: "GET_USER_SUCCESS",
    userData,
  };
};
export const getUserError = (error) => {
  return {
    type: "GET_USER_ERROR",
    error,
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    console.log(id);
    dispatch(deleteUserStart());
    instance
      .delete("/users/" + id)
      .then((res) => {
        dispatch(deleteUserSuccess());
      })
      .catch((err) => {
        dispatch(deleteUserError(err.response.data.error.message));
      });
  };
};

export const deleteUserStart = () => {
  return {
    type: "DELETE_USER_START",
  };
};
export const deleteUserSuccess = () => {
  return {
    type: "DELETE_USER_SUCCESS",
  };
};
export const deleteUserError = () => {
  return {
    type: "DELETE_USER_ERROR",
  };
};
