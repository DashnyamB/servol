const initialState = {
  user: {},
  loading: false,
  error: null,
  deleting: false,
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        user: { ...action.userData },
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "DELETE_USER_START":
      return {
        ...state,
        deleting: true,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        deleting: false,
      };
    case "DELETE_USER_ERROR":
      return {
        ...state,
        deleting: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
