import React from "react";
import { Consumer } from "./context";
import PureHello from "./PureHello";
//to use context action and state in lifecycles
//we take context as a prop
export default (...props) => (
  <Consumer>{context => <PureHello {...props} context={context} />}</Consumer>
);
