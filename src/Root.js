import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import toggleReducer from "./reducers/mainReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default props => {
  const store = createStore(toggleReducer, composeEnhancers());
  return <Provider store={store}>{props.children}</Provider>;
};
