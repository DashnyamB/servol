const initialState = {
  category: {},
  loading: false,
  saving: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_CATEGORY_SUCCESS":
      return {
        ...state,
        category: { ...state.category, ...action.categoryData },
        loading: false,
      };
    case "GET_CATEGORY_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case "ADD_CATEGORY_START":
      return {
        ...state,
        saving: true,
      };
    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        category: { ...action.categoryData },
        saving: false,
        error: null,
      };
    case "ADD_CATEGORY_ERROR":
      return {
        ...state,
        error: action.error,
        saving: false,
      };
    case "UPDATE_CATEGORY_START":
      return {
        ...state,
        saving: true,
      };
    case "UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        category: { ...action.categoryData },
        saving: false,
      };
    case "UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        error: action.error,
        saving: false,
      };
    case "DELETE_CATEGORY_START":
      return {
        ...state,
        saving: true,
      };
    case "DELETE_CATEGORY_SUCCESS":
      return {
        ...state,
        category: { ...state.category },
        saving: false,
      };
    case "DELETE_CATEGORY_ERROR":
      return {
        ...state,
        saving: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
