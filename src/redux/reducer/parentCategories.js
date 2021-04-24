const initialState = {
  parentCategories: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PARENT_CATEGORIES_START": {
      return {
        ...state,
        loading: true,
      };
    }
    case "GET_PARENT_CATEGORIES_SUCCESS": {
      return {
        ...state,
        parentCategories: [...action.parentCategories],
        loading: false,
      };
    }
    case "GET_PARENT_CATEGORIES_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
