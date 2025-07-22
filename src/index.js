import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter></BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
