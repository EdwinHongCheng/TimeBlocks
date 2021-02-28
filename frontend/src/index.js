import React from "react";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";

import Root from "./components/root";
import configureStore from "./store/store";

import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions"; 
import {newTask, updateTaskTitle, destroyTask} from "./actions/task_actions"
import {newCategory} from "./actions/category_actions"
// [TEST]
import { getFriends, createFriend, deleteFriend } from "./util/friend_api_util";
import { fetchFriends, newFriend, destroyFriend } from "./actions/friend_actions";

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

  // friend_api_utils
  window.getFriends = getFriends;
  window.createFriend = createFriend;
  window.deleteFriend = deleteFriend;
  // friend_actions - thunk action creators [
  // [TEST RESULTS SO FAR] fetchFriends works. fetchFriend = works but weird
  window.fetchFriends = fetchFriends;
  window.newFriend = newFriend;
  window.destroyFriend = destroyFriend;
  window.store = store;
  // window.newTask = newTask
  // window.editTaskTitle = editTaskTitle
  // window.editTaskCategory = editTaskCategory
  // window.deleteTask = deleteTask
  // window.destroyTask = destroyTask;
  // window.updateTaskTitle = updateTaskTitle;

  ReactDOM.render(<Root store={store} />, root);
});

