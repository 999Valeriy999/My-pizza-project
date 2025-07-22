import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
<link rel="stylesheet" href="./css/app.css" />;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App} />
      <Route path="/" component={header} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
