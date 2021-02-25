import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "./sliding_pane.css";
import CategoryContainer from "../task_categories/task_categories_container"

const Menu = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <div>
      <button onClick={() => setState({ isPaneOpen: true })}>
        Categories
      </button>
      <div style={{ marginTop: "32px" }}>
        <button onClick={() => setState({ isPaneOpenLeft: true })}>
          Tasks for the day
        </button>
      </div>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Categories"
        subtitle="Optional subtitle."
        width="50%"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div><CategoryContainer/></div>
      </SlidingPane>
      <SlidingPane
        closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={state.isPaneOpenLeft}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="50%"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div>And I am pane content on left.</div>
      </SlidingPane>
    </div>
  );
};

// render(<App />, document.getElementById("app"));
export default Menu