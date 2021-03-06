import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./Hello";
import Person from "./Person";
import { MyProvider, Consumer } from "./context";

const value = {
  state: "your states",
  action: "your actions"
};

export default class App extends Component {
  render() {
    return (
      <MyProvider a={{ value }}>
        <div className="App">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Person />
            <Hello />
            <Consumer>
              {context => <h3>{context.state.stateOfContext}</h3>}
            </Consumer>
            <div style={{ textAlign: "left", width: "360px", lineHeight: 1.8 }}>
              <p>1. Create a context</p>
              <p>
                2. Pass state and action to &lt;Provider&gt; value prop,like
                &lt;Provider value={JSON.stringify(value)}/&gt;
              </p>
              <p>2. Wrap a Consumer any component's render function </p>
              <p>
                3. Use context state,like{" "}
                <code>context.state.stateFromContext</code>
              </p>
              <p>
                4.Update context state,{" "}
                <code>context.action["your context action"](state,value)</code>
              </p>
            </div>
            <small>context api demo</small>
          </div>
        </div>
      </MyProvider>
    );
  }
}
