import React, { Component } from "react";
export default class Hello extends Component {
  state = {
    localState: "Local state value"
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div>{this.state.localState}</div>
        <br />
        <div>{this.props.context.state.stateOfContext}</div>
        <br />

        <br />
        <button
          onClick={() =>
            this.props.context.update(
              "stateOfContext",
              "State of context chanaged"
            )
          }
        >
          Click me to change context state
        </button>
        <br />
        <br />
        <button
          onClick={() => this.setState({ localState: "Local state changed" })}
        >
          Click me to change local state
        </button>
        <br />
        <br />
        <button
          onClick={() => this.props.context.update("words", "Hello World")}
        >
          Click me to say hello
        </button>
      </div>
    );
  }
}
