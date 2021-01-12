import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import rootReducer from "./reducers/mainReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (props) => {
   const store = createStore(rootReducer, composeEnhancers());
   return <Provider store={store}>{props.children}</Provider>;
};
