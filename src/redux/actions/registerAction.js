import { instance } from "../../axios";

export const registerUser = (userData) => {
  return function (dispatch) {
    dispatch(registerStart());
    instance
      .post("/users/register", userData)
      .then((result) => {
        delete result.data.data.password;
        delete result.data.data.updatedAt;
        delete result.data.data.createdAt;
        localStorage.setItem("userId", result.data.data.id);
        dispatch(registerSuccess(result.data));
      })
      .catch((err) => {
        // console.log(err.response.data.error.errors[0].message);
        dispatch(registerError(err.response.data.error.errors[0].message));
      });
  };
};
export const registerStart = () => {
  return {
    type: "REGISTER_START",
  };
};
export const registerSuccess = (registerResponseData) => {
  return {
    type: "REGISTER_SUCCESS",
    registerResponseData,
  };
};
export const registerError = (error) => {
  return {
    type: "REGISTER_ERROR",
    error,
  };
};

export const AddUser = (userData, photo) => {
  return function (dispatch) {
    dispatch(addUserStart());
    instance
      .post("/users", userData)
      .then((res) => {
        dispatch(addPhoto(res.data.data.id, photo));
        dispatch(addUserSuccess());
      })
      .catch((err) => {
        dispatch(addUserError(err.response.data.error.message));
      });
  };
};

const addUserStart = () => {
  return {
    type: "ADD_USER_START",
  };
};
const addUserSuccess = () => {
  return {
    type: "ADD_USER_SUCCESS",
  };
};
const addUserError = (error) => {
  return {
    type: "ADD_USER_ERROR",
    error,
  };
};

const addPhoto = (userId, photo) => {
  return function (dispatch) {
    const formData = new FormData();
    formData.set("file", photo);
    instance
      .put(`/users/${userId}/photos`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
