import React, { Component } from "react";
import { Consumer } from "./context";
export default class Person extends Component {
  render() {
    return (
      <div className="person">
        <Consumer>
          {context => (
            <div>
              <h1 style={{ height: "30px", lineHeight: "30px" }}>
                {context.state.words ? context.state.words : "Welcome to React"}
              </h1>
              name: {context.state.name} / age:{context.state.age}
              <br />
              <br />
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
