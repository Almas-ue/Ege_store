import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./style/var.scss";
import "./style/index.scss";
import FirstPage from "./block-element/first_page/first_page.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <FirstPage />
  </React.StrictMode>
);
