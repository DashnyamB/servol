const initialState = {
  categories: [],
  loading: false,
  error: null,
  mongolCatNames: {
    users: "Хэрэглэгчид",
    services: "Үйлчилгээнүүд",
    categories: "Категориуд",
    subcategories: "Дэд категориуд",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_START":
      return {
        ...state,
        loading: true,
      };

    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        categories: [...action.categoriesData],
      };
    case "GET_CATEGORIES_ERROR":
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
