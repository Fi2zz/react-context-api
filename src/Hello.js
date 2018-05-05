import React, { Component } from "react";
import { Consumer } from "./context";

export default class Hello extends Component {
  state = {
    localState: "Local state value"
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <div>{this.state.localState}</div>
            <br />
            <div>{context.state.stateOfContext}</div>
            <br />

            <br />
            <button
              onClick={() =>
                context.update("stateOfContext", "State of context chanaged")
              }
            >
              Click me to change context state
            </button>
            <br />
            <br />

            <button
              onClick={() =>
                this.setState({ localState: "Local state changed" })
              }
            >
              Click me to change local state
            </button>
            <br />
            <br />
            <button onClick={() => context.update("words", "Hello World")}>
              Click me to say hello
            </button>
          </div>
        )}
      </Consumer>
    );
  }
}
