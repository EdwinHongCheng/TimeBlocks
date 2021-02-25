import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { DndProvider } from "react-dnd-multi-backend"
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import MultiBackend, { TouchTransition, Preview } from "react-dnd-multi-backend";

import App from "./app";

import Task from "./task/task"

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

const generatePreview = ({ itemType, item, style }) => {
  const newStyle = {
    ...style,
    background: item.color,
    width: "3em",
    height: "3em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px"
  };
  return <div style={newStyle}></div>;
};

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <Preview>{generatePreview}</Preview>
        <App />
      </DndProvider>
    </HashRouter>
  </Provider>
);

export default Root;
