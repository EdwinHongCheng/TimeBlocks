import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { DndProvider } from "react-dnd-multi-backend"
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import MultiBackend, { TouchTransition } from "react-dnd-multi-backend";

import App from "./app";

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend,
      preview: true,
      transition: TouchTransition
    }
  ]
}

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <App />
      </DndProvider>
    </HashRouter>
  </Provider>
);

export default Root;
