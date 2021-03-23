const initialState = {
  users: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: [...action.usersData],
        loading: false,
      };
    case "GET_USERS_ERROR":
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
