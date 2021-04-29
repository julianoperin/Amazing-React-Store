import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/index.scss";
import "./scss/navbar.scss";
import "./scss/footer.scss";

import store from "./store";

import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
