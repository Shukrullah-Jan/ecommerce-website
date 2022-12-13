import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import allReducers from "./reducer/index";

const store = createStore(allReducers);

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
