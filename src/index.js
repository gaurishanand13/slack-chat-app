import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { App } from "./components/index";
/**
 * Note if we want to pass some information from the parent component to child component like this
 * parent -> child -> further child --> further further child.
 * We can do it using props which can pass information from parent to just next child. But this is not the best method as it gets complicated
 * when the chain of children is long. So instead create static data (using context api) in "providers" which can be accessed by all the components directly easily.
 */

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
