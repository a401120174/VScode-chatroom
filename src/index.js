import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import toggleReducer from "./reducers/mainReducer";
import App from "./containers/App/App";
import Root from "./Root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(toggleReducer, composeEnhancers());

ReactDOM.render(
  <Root>
    <Router>
      <Switch>
        <Route path="/" exact children={<App />} />
        <Route path="/:roomParam" children={<App />} />
      </Switch>
    </Router>
  </Root>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
