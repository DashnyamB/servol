import { instance } from "../../axios";

export const getChildCategories = (id) => {
  return function (dispatch) {
    dispatch(getChildCategoriesStart);
    instance
      .get("/categories/parent/" + id + "/categories")
      .then((res) => {
        dispatch(getChildCategoriesSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getChildCategoriesError(err.response.data.error.message));
      });
  };
};

export const getChildCategoriesStart = () => {
  return {
    type: "GET_CHILD_CATEGORIES_START",
  };
};
export const getChildCategoriesSuccess = (childCategories) => {
  return {
    type: "GET_CHILD_CATEGORIES_SUCCESS",
    childCategories,
  };
};
export const getChildCategoriesError = (error) => {
  return {
    type: "GET_CHILD_CATEGORIES_ERROR",
    error,
  };
};
