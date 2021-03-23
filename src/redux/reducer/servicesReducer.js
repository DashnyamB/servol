const initialState = {
  services: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SERVICES_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_SERVICES_SUCCESS":
      return {
        ...state,
        loading: false,
        services: [...action.servicesData],
      };
    case "GET_SERVICES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "GET_USER_SERVICES_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SERVICES_SUCCESS":
      return {
        ...state,
        loading: false,
        services: [...action.servicesData],
      };
    case "GET_USER_SERVICES_ERROR":
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
