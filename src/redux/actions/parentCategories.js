import { instance } from "../../axios";

export const getParentCategories = () => {
  return function (dispatch) {
    dispatch(getParentCategoriesSuccess);
    instance
      .get("/categories/parent")
      .then((res) => {
        dispatch(getParentCategoriesSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getParentCategoriesError(err.response.data.error.message));
      });
  };
};

export const getParentCategoriesStart = () => {
  return {
    type: "GET_PARENT_CATEGORIES_START",
  };
};
export const getParentCategoriesSuccess = (parentCategories) => {
  return {
    type: "GET_PARENT_CATEGORIES_SUCCESS",
    parentCategories,
  };
};
export const getParentCategoriesError = (error) => {
  return {
    type: "GET_PARENT_CATEGORIES_ERROR",
    error,
  };
};
