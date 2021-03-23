import { instance } from "../../axios";

export const getServices = () => {
  return function (dispatch) {
    dispatch(getServicesStart());
    instance
      .get("/services")
      .then((res) => {
        dispatch(getServicesSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getServicesError(err.response.data.error.message));
      });
  };
};

export const getServicesStart = () => {
  return {
    type: "GET_SERVICES_START",
  };
};

export const getServicesSuccess = (servicesData) => {
  return {
    type: "GET_SERVICES_SUCCESS",
    servicesData,
  };
};

export const getServicesError = (error) => {
  return {
    type: "GET_SERVICES_ERROR",
    error,
  };
};

export const addService = (data, photo) => {
  return function (dispatch) {
    dispatch(addServiceStart());
    instance
      .post("/services", data)
      .then((res) => {
        dispatch(addServiceSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(addServiceError(err.response.data.error.message));
      });
  };
};

export const addServicePhoto = (id, photo) => {
  return function (dispatch) {
    //  dispatch(addServiceStart());
    const formData = new FormData();
    formData.set("file", photo);
    instance
      .put(`/services/${id}/photos`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Uploaded");
        // dispatch(addServicePhoto(res.data.data.id));
      })
      .catch((err) => {
        console.log("Error occured");
        // dispatch(addServiceError(err.response.data.error.message));
      });
  };
};

export const addServiceStart = () => {
  return {
    type: "ADD_SERVICE_START",
  };
};
export const addServiceSuccess = () => {
  return {
    type: "ADD_SERVICE_SUCCESS",
  };
};
export const addServiceError = (error) => {
  return {
    type: "ADD_SERVICE_ERROR",
    error,
  };
};

export const getService = (id) => {
  return function (dispatch) {
    dispatch(getServiceStart());
    instance
      .get("services/" + id)
      .then((res) => {
        console.log(res.data.data);
        dispatch(getServiceSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getServiceError(err.response.data.error.message));
      });
  };
};

export const getServiceStart = () => {
  return {
    type: "GET_SERVICE_START",
  };
};
export const getServiceSuccess = (serviceData) => {
  return {
    type: "GET_SERVICE_SUCCESS",
    serviceData,
  };
};
export const getServiceError = (error) => {
  return {
    type: "GET_SERVICE_ERROR",
    error,
  };
};

export const getUserServices = (userId) => {
  return function (dispatch) {
    dispatch(getUserServicesStart());
    instance
      .get("/users/" + userId + "/services")
      .then((res) => {
        dispatch(getUserServicesSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getUserServicesError(err.response.data.error.message));
      });
  };
};

export const getUserServicesStart = () => {
  return {
    type: "GET_USER_SERVICES_START",
  };
};
export const getUserServicesSuccess = (servicesData) => {
  return {
    type: "GET_USER_SERVICES_SUCCESS",
    servicesData,
  };
};
export const getUserServicesError = (error) => {
  return {
    type: "GET_USER_SERVICES_ERROR",
    error,
  };
};
