import React from "react";
import ReactDOM from "react-dom";
import "./assets/styling/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
// import Heading from "./components/common/Heading";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
