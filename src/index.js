import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./assets/styling/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
// import Heading from "./components/common/Heading";
import store from "./redux/store";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
