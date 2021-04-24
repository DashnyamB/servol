const initialState = {
  childCategories: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHILD_CATEGORIES_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_CHILD_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        childCategories: [...action.childCategories],
      };
    case "GET_CHILD_CATEGORIES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
