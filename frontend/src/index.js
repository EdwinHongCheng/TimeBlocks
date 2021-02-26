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
import {newTask, destroyTask, updateTaskTitle, updateTaskCategory} from "./actions/task_actions"
import {editTaskTitle} from "./util/task_api_util"

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
//TEST//
  window.store = store
window.axios = axios
  window.newTask = newTask
  window.destroyTask = destroyTask
  window.updateTaskTitle = updateTaskTitle
  window.updateTaskCategory = updateTaskCategory
  window.editTaskTitle = editTaskTitle

  ReactDOM.render(<Root store={store} />, root);
});

