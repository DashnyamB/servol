import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import "./index.scss";
import App from "./pages/AppPage/App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import registerReducer from "./redux/reducer/registerReducer";
import categoriesReducer from "./redux/reducer/categoriesReducer";
import categoryReducer from "./redux/reducer/categoryReducer";
import usersReducer from "./redux/reducer/usersReducer";
import userReducer from "./redux/reducer/userReducer";
import servicesReducer from "./redux/reducer/servicesReducer";
import serviceReducer from "./redux/reducer/serviceReducer";
import parentCategoriesReducer from "./redux/reducer/parentCategories";
import childCategoriesReducer from "./redux/reducer/childCategories";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  registerReducer,
  categoriesReducer,
  categoryReducer,
  usersReducer,
  userReducer,
  servicesReducer,
  serviceReducer,
  parentCategoriesReducer,
  childCategoriesReducer,
});

const middlewares = [thunk];
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
