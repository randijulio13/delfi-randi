import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss"

import "./index.scss";
import "bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
