import React from "react";
import ReactDOM from "react-dom";
import "./assets/styling/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Heading from "./components/common/Heading";

ReactDOM.render(
  <BrowserRouter>
    <Heading />
  </BrowserRouter>,
  document.getElementById("root")
);
