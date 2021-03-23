const initialState = {
  service: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "GET_SERVICE_START":
      return {
        ...state,
        loading: true,
      };
    case "GET_SERVICE_SUCCESS":
      return {
        ...state,
        loading: false,
        service: { ...action.serviceData },
      };
    case "GET_SERVICE_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
