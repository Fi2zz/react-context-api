import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Fitz Wen",
    age: 28,
    cool: true,
    words: "",
    stateFromContext: "State from context",
    stateOfContext: "State of context "
  };

  updateContextState(state, payload) {
    this.setState({
      ...this.state,
      [state]: payload
    });
    this.test();
  }
  test(payload) {
    console.log("test");
  }

  render() {
    const provides = {
      state: this.state,
      update: this.updateContextState.bind(this)
    };
    return <Provider value={provides}>{this.props.children}</Provider>;
  }
}
export { Consumer, MyProvider };
