const initialState = {
  user: {
    username: null,
    firstname: null,
    lastname: null,
    photo: null,
    id: null,
    role: null,
    rating: null,
    level: null,
    birthday: null,
    description: null,
  },
  token: null,
  saving: false,
  backendError: null,
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        ...state,
        saving: true,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        saving: false,
        backendError: action.error,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        saving: false,
        backendError: null,
        token: action.registerResponseData.token,
        user: { ...state.user, ...action.registerResponseData.data },
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        saving: false,
        backendError: action.error,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        saving: false,
        backendError: null,
        token: action.loginResponseData.token,
        user: { ...state.user, ...action.loginResponseData.data },
      };
    case "LOGIN_START":
      return {
        ...state,
        saving: true,
      };
    case "LOGOUT":
      return {
        ...state,
        ...initialState,
      };
    case "ADD_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        success: true,
      };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
