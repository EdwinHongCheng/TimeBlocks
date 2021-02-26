import React from "react";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";

import Root from "./components/root";
import configureStore from "./store/store";

import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions"; 
////TEST////
import axios from 'axios'
// import {fetchCategories, newCategory, destroyCategory } from "./actions/category_actions"

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById("root");
  ///////TEST////
  // window.axios = axios
  // window.fetchCategories = fetchCategories
  // window.newCategory = newCategory
  // window.destroyCategory = destroyCategory
  // window.store = store
  // window.createTask = createTask
  // window.editTaskTitle = editTaskTitle
  // window.editTaskCategory = editTaskCategory
  // window.deleteTask = deleteTask

  ReactDOM.render(<Root store={store} />, root);
});
