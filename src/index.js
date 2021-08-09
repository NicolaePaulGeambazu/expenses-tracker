import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Wrapper } from "./components/style/layout";

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
