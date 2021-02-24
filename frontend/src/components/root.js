import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { DndProvider } from "react-dnd-multi-backend"
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch"

import App from "./app";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <DndProvider options={HTML5toTouch}>
        <App />
      </DndProvider>
    </HashRouter>
  </Provider>
);

export default Root;
