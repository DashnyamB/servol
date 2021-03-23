import { instance } from "../../axios";

export const getCategories = () => {
  return function (dispatch) {
    dispatch(getCategoriesStart());
    instance
      .get("/categories")
      .then((res) => {
        dispatch(getCategoriesSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getCategoriesError(err.response.data.error.message));
      });
  };
};

export const getCategoriesStart = () => {
  return {
    type: "GET_CATEGORIES_START",
  };
};
export const getCategoriesSuccess = (categoriesData) => {
  return {
    type: "GET_CATEGORIES_SUCCESS",
    categoriesData,
  };
};
export const getCategoriesError = (error) => {
  return {
    type: "GET_CATEGORIES_ERROR",
    error,
  };
};

export const getCategory = (catId) => {
  return function (dispatch) {
    dispatch(getCategoryStart());
    instance
      .get(`/categories/${catId}`)
      .then((res) => {
        dispatch(getCategorySuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getCategoryError(err.response.data.error.message));
      });
  };
};

export const getCategoryStart = () => {
  return {
    type: "GET_CATEGORY_START",
  };
};
export const getCategorySuccess = (categoryData) => {
  return {
    type: "GET_CATEGORY_SUCCESS",
    categoryData,
  };
};
export const getCategoryError = (error) => {
  return {
    type: "GET_CATEGORY_ERROR",
    error,
  };
};

export const addCategory = (catData) => {
  return function (dispatch) {
    dispatch(addCategoryStart());
    instance
      .post(`/categories`, catData)
      .then((res) => {
        console.log(res.data.data);
        dispatch(addCategorySuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(addCategoryError(err.response.data.error.message));
      });
  };
};

export const addCategoryStart = () => {
  return {
    type: "ADD_CATEGORY_START",
  };
};
export const addCategorySuccess = (categoryData) => {
  return {
    type: "ADD_CATEGORY_SUCCESS",
    categoryData,
  };
};
export const addCategoryError = (error) => {
  return {
    type: "ADD_CATEGORY_ERROR",
    error,
  };
};

export const updateCategory = (catId, catData) => {
  return function (dispatch) {
    dispatch(updateCategoryStart());
    instance
      .put(`/categories/${catId}`, catData)
      .then((res) => {
        console.log(res.data.data);
        dispatch(updateCategorySuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(updateCategoryError(err.response.data.error.message));
      });
  };
};

export const updateCategoryStart = () => {
  return {
    type: "UPDATE_CATEGORY_START",
  };
};
export const updateCategorySuccess = (categoryData) => {
  return {
    type: "UPDATE_CATEGORY_SUCCESS",
    categoryData,
  };
};
export const updateCategoryError = (error) => {
  return {
    type: "UPDATE_CATEGORY_ERROR",
    error,
  };
};

export const deleteCategory = (catId) => {
  return function (dispatch) {
    dispatch(deleteCategoryStart());
    instance
      .delete(`/categories/${catId}`)
      .then((res) => {
        console.log(res.data.data);
        dispatch(deleteCategorySuccess());
      })
      .catch((err) => {
        dispatch(updateCategoryError(err.response.data.error.message));
      });
  };
};

export const deleteCategoryStart = () => {
  return {
    type: "DELETE_CATEGORY_START",
  };
};
export const deleteCategorySuccess = (categoryData) => {
  return {
    type: "DELETE_CATEGORY_SUCCESS",
    categoryData,
  };
};
export const deleteCategoryError = (error) => {
  return {
    type: "DELETE_CATEGORY_ERROR",
    error,
  };
};
