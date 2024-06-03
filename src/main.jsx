import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";
import "./style/var.scss";
import "./style/index.scss";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
